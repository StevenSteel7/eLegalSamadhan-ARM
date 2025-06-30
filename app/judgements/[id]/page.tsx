// app/judgements/[id]/page.tsx

import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { ChevronLeft, FileText, Calendar, Building2, BookOpen } from 'lucide-react';
import { JSX } from 'react';

// --- Strongly define the expected data structure from Prisma ---
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: Date;
  summary?: string | null;
  fullContent?: string | null;
}


function processTextFormatting(text: string): string {
  // This function will be called for each content item to process markdown-style formatting
  
  // Process bold - **text** or __text__
  text = text.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
  
  // Process italic - *text* or _text_
  text = text.replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>');
  
  // Process strikethrough - ~~text~~
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');
  
  // Process inline code - `code`
  text = text.replace(/`(.*?)`/g, '<code>$1</code>');
  
  // Process superscript - ^text^
  text = text.replace(/\^(.*?)\^/g, '<sup>$1</sup>');
  
  // Process subscript - ~text~
  text = text.replace(/~(.*?)~/g, '<sub>$1</sub>');
  
  // Process highlight - ==text==
  text = text.replace(/==(.*?)==/g, '<mark>$1</mark>');
  
  // Process links - [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
  
  return text;
}

function RenderContentItem({ item }: { item: ContentItem }) {
  // Common props for all content items that might contain HTML
  const htmlProps = { dangerouslySetInnerHTML: { __html: item.content } };
  
  switch (item.type) {
    case 'heading':
      return <h2 id={item.id} className="text-xl font-bold text-blue-900 mt-8 mb-4 pb-2 border-b border-blue-200" {...htmlProps} />;
    case 'citation':
      return <blockquote className="border-l-4 border-blue-300 pl-4 py-1 my-4 italic text-gray-700" {...htmlProps} />;
    case 'indented':
      return <div className="pl-6 border-l-2 border-gray-200 my-4 text-gray-700" {...htmlProps} />;
    case 'list-item':
      return (
        <div className="flex ml-4 my-2">
          <div className="mr-2 font-semibold text-blue-700">•</div>
          <div {...htmlProps} />
        </div>
      );
    case 'reference':
      return <div className="bg-blue-50 p-3 my-4 rounded text-gray-800 border-l-4 border-blue-200" {...htmlProps} />;
    default:
      return <p className="leading-relaxed text-gray-800 my-4" {...htmlProps} />;
  }
}






// --- Define a generic ContentItem for processed paragraphs ---
type ContentType = 'heading' | 'citation' | 'indented' | 'list-item' | 'reference' | 'paragraph';

interface ContentItem {
  id: string;
  content: string;
  type: ContentType;
  parent?: string | null;
}

// --- Fetch Function with Error Isolation ---
async function getJudgement(id: number): Promise<Judgement | null> {
  try {
    const judgement = await prisma.judgement.findUnique({
      where: { id },
    });
    if (judgement) {
      return {
        ...judgement,
        date: new Date(judgement.date),
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching judgement ${id}:`, error);
    return null;
  }
}

// --- Main Server Component ---
export default async function JudgementDetailPage({ params }: { params: { id: string } }) {
  const judgementId = Number(params.id);

  if (isNaN(judgementId)) {
    notFound();
  }

  const judgement = await getJudgement(judgementId);

  if (!judgement) {
    notFound();
  }

  const formattedContent = processJudgementContent(judgement.fullContent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 lg:py-16 max-w-7xl">
        
        {/* Navigation */}
        <Link 
          href="/judgements" 
          className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors duration-300 mb-6 lg:mb-10"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Judgements List
        </Link>

        {/* Main Judgement Card */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-700 p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            {judgement.title}
          </h1>

          {/* Metadata Section */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 bg-blue-50 p-5 rounded-lg">
            <MetadataItem icon={<FileText size={24} />} label="Case Number" value={judgement.caseNumber} />
            <MetadataItem icon={<Building2 size={24} />} label="Court" value={judgement.court} />
            <MetadataItem icon={<Calendar size={24} />} label="Date of Judgement" value={new Date(judgement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
          </div>

          {/* Summary */}
          {judgement.summary && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3 mb-3">
                <BookOpen className="text-blue-600 shrink-0 mt-1" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Summary</h2>
              </div>
              <div 
                className="text-gray-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: processTextFormatting(judgement.summary) }}
              />
            </div>
          )}
          
          {/* Table of Contents */}
          {formattedContent.some(item => item.type === 'heading') && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8 hidden lg:block">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-1">
                {formattedContent
                  .filter(item => item.type === 'heading')
                  .map((heading, index) => (
                    <a 
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-blue-700 hover:text-blue-900 transition-colors py-1"
                    >
                      {index + 1}. {heading.content.replace(/:$/, '')}
                    </a>
                  ))}
              </nav>
            </div>
          )}

          {/* Full Judgement Content */}
          <div className="judgement-content prose prose-lg max-w-none text-gray-800 mt-8">
            {formattedContent.map(item => (
              <RenderContentItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- UTILITIES ---

// Metadata Display Component
function MetadataItem({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-blue-600 shrink-0">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        <p className="text-lg font-semibold text-blue-900">{value}</p>
      </div>
    </div>
  );
}



function processJudgementContent(content: string | null | undefined): ContentItem[] {
  if (!content) return [];

  const paragraphs = content.split(/\n\n+/);
  const processedContent: ContentItem[] = [];
  let currentSection: string | null = null;

  paragraphs.forEach((paragraph, index) => {
    const trimmedPara = paragraph.trim();
    if (!trimmedPara) return;

    const isHeading = /^[A-Z][A-Z\s\d.:;,()[\]{}'"&-]+$/.test(trimmedPara) || /^[A-Z][^.!?]*:$/.test(trimmedPara);
    const isCitation = /\[\d+\]|\(\d+\)/.test(trimmedPara) && /v\.|\bv\b|versus/.test(trimmedPara);
    const isNumberedPoint = /^\(\d+\)|\([a-z]\)|\d+\.|\([ivx]+\)/i.test(trimmedPara);
    const isIndented = paragraph.startsWith('    ') || paragraph.startsWith('\t') || isNumberedPoint;
    const isLegalReference = /Section \d+|Article \d+|pursuant to|referred to in|in accordance with/.test(trimmedPara);

    let type: ContentType = 'paragraph';
    if (isHeading) {
      type = 'heading';
      currentSection = `section-${index}`;
    } else if (isCitation) {
      type = 'citation';
    } else if (isIndented) {
      type = 'indented';
    } else if (isLegalReference) {
      type = 'reference';
    }

    if (paragraph.includes('\n') && type === 'paragraph') {
      const lines = paragraph.split('\n');
      if (lines.some(line => /^\d+\.|\([a-z]\)|\([0-9]\)/i.test(line.trim()))) {
        lines.forEach((line, lineIndex) => {
          const trimmedLine = line.trim();
          if (!trimmedLine) return;

          const isListItem = /^\d+\.|\([a-z]\)|\([0-9]\)/i.test(trimmedLine);
          processedContent.push({
            id: `${currentSection || 'para'}-${index}-${lineIndex}`,
            content: processTextFormatting(trimmedLine),
            type: isListItem ? 'list-item' : 'paragraph',
            parent: currentSection,
          });
        });
        return;
      }
    }

    processedContent.push({
      id: `${currentSection || 'para'}-${index}`,
      content: processTextFormatting(trimmedPara),
      type,
      parent: type !== 'heading' ? currentSection : null,
    });
  });

  return processedContent;
}











