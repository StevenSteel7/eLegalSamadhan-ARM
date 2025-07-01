// app/judgements/[id]/page.tsx
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { ChevronLeft, FileText, Calendar, Building2, BookOpen, Tag } from 'lucide-react';
import { JSX } from 'react';
import { JudgementCategory } from '@prisma/client';

// --- Type definition for data from Prisma ---
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: Date;
  summary?: string | null;
  fullContent?: string | null;
  category: JudgementCategory; // The category field is now included
}

// --- Content processing types ---
type ContentType = 'heading' | 'citation' | 'indented' | 'list-item' | 'reference' | 'paragraph';
interface ContentItem {
  id: string;
  content: string;
  type: ContentType;
  parent?: string | null;
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
        
        <Link 
          href="/judgements" 
          className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors duration-300 mb-6 lg:mb-10"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to Judgements List
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-700 p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            {judgement.title}
          </h1>

          {/* Metadata Section with Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-blue-50 p-5 rounded-lg">
            <MetadataItem icon={<FileText size={24} />} label="Case Number" value={judgement.caseNumber} />
            <MetadataItem icon={<Building2 size={24} />} label="Court" value={judgement.court} />
            <MetadataItem icon={<Calendar size={24} />} label="Date" value={judgement.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
            <MetadataItem icon={<Tag size={24} />} label="Category" value={formatCategory(judgement.category)} />
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
                      dangerouslySetInnerHTML={{ __html: `${index + 1}. ${heading.content.replace(/:$/, '')}` }}
                    />
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


// --- DATABASE & DATA FETCHING ---

async function getJudgement(id: number): Promise<Judgement | null> {
  try {
    const judgement = await prisma.judgement.findUnique({
      where: { id },
    });
    // Return null if not found, let the main component handle it.
    if (!judgement) return null;
    
    return {
      ...judgement,
      date: new Date(judgement.date), // Ensure date is a Date object
    };
  } catch (error) {
    console.error(`Error fetching judgement with ID ${id}:`, error);
    return null; // Return null on error to prevent crashes
  }
}


// --- UTILITY COMPONENTS & FUNCTIONS ---

function MetadataItem({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-blue-600 shrink-0">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        <p className="text-base font-semibold text-blue-900">{value}</p>
      </div>
    </div>
  );
}

function formatCategory(category: JudgementCategory): string {
  return category
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function RenderContentItem({ item }: { item: ContentItem }) {
  const htmlProps = { dangerouslySetInnerHTML: { __html: item.content } };
  
  switch (item.type) {
    case 'heading':
      return <h2 id={item.id} className="text-xl font-bold text-blue-900 mt-8 mb-4 pb-2 border-b border-blue-200" {...htmlProps} />;
    case 'citation':
      return <blockquote className="border-l-4 border-blue-300 pl-4 py-1 my-4 italic text-gray-700" {...htmlProps} />;
    case 'indented':
      return <div className="pl-6 border-l-2 border-gray-200 my-4 text-gray-700" {...htmlProps} />;
    case 'list-item':
      return <div className="flex ml-4 my-2"><div className="mr-2 font-semibold text-blue-700">•</div><div {...htmlProps} /></div>;
    case 'reference':
      return <div className="bg-blue-50 p-3 my-4 rounded text-gray-800 border-l-4 border-blue-200" {...htmlProps} />;
    default:
      return <p className="leading-relaxed text-gray-800 my-4" {...htmlProps} />;
  }
}

function processTextFormatting(text: string): string {
  text = text.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
  text = text.replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>');
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');
  text = text.replace(/`(.*?)`/g, '<code>$1</code>');
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
  return text;
}

function processJudgementContent(content: string | null | undefined): ContentItem[] {
  if (!content) return [];
  const paragraphs = content.split(/\n\s*\n/);
  return paragraphs.map((para, index) => {
    const trimmedPara = para.trim();
    let type: ContentType = 'paragraph';
    if (/^[A-Z][A-Z\s\d.:;,()[\]{}'"&-]+$/.test(trimmedPara) && trimmedPara.length < 100) type = 'heading';
    else if (trimmedPara.startsWith('•') || /^\d+\./.test(trimmedPara) || /^\([a-z]\)/.test(trimmedPara)) type = 'list-item';
    else if (trimmedPara.startsWith('>')) type = 'citation';
    return {
      id: `content-${index}`,
      content: processTextFormatting(trimmedPara.replace(/^>\s*/, '')),
      type,
    };
  });
}