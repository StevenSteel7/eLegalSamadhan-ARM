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
  category: JudgementCategory;
}

// --- NEW: Refined types for processed content ---
// Using a discriminated union for type safety and clarity
type ProcessedContent =
  | { type: 'heading'; id: string; content: string }
  | { type: 'paragraph'; id: string; content: string }
  | { type: 'list'; id: string; items: string[] }
  | { type: 'blockquote'; id: string; content: string }
  | { type: 'reference'; id: string; content: string };


// --- Main Server Component (No changes needed here) ---
export default async function JudgementDetailPage({ params }: { params: { id: string } }) {
  const judgementId = Number(params.id);

  if (isNaN(judgementId)) {
    notFound();
  }

  const judgement = await getJudgement(judgementId);

  if (!judgement) {
    notFound();
  }

  // The new processing function will handle everything
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

          {/* Metadata Section */}
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
                  .filter((item): item is Extract<ProcessedContent, { type: 'heading' }> => item.type === 'heading')
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


// --- DATABASE & DATA FETCHING (No changes needed here) ---

async function getJudgement(id: number): Promise<Judgement | null> {
  try {
    const judgement = await prisma.judgement.findUnique({ where: { id } });
    if (!judgement) return null;
    return { ...judgement, date: new Date(judgement.date) };
  } catch (error) {
    console.error(`Error fetching judgement with ID ${id}:`, error);
    return null;
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
  return category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// --- NEW: Updated Renderer to handle lists properly ---
function RenderContentItem({ item }: { item: ProcessedContent }) {
  switch (item.type) {
    case 'heading':
      return <h2 id={item.id} className="text-xl font-bold text-blue-900 mt-8 mb-4 pb-2 border-b border-blue-200" dangerouslySetInnerHTML={{ __html: item.content }} />;
    
    case 'blockquote':
      return <blockquote className="border-l-4 border-blue-300 pl-4 py-1 my-4 italic text-gray-700" dangerouslySetInnerHTML={{ __html: item.content }} />;

    case 'list':
      return (
        <ul className="list-disc pl-5 my-4 space-y-2">
          {item.items.map((li, index) => (
            <li key={index} className="text-gray-800" dangerouslySetInnerHTML={{ __html: li }} />
          ))}
        </ul>
      );
      
    case 'reference':
      return <div className="bg-blue-50 p-3 my-4 rounded text-gray-800 border-l-4 border-blue-200" dangerouslySetInnerHTML={{ __html: item.content }} />;
      
    case 'paragraph':
    default:
      return <p className="leading-relaxed text-gray-800 my-4" dangerouslySetInnerHTML={{ __html: item.content }} />;
  }
}

// --- REUSED: This function is perfect for inline formatting ---
function processTextFormatting(text: string): string {
  // Bold: **text** or __text__
  text = text.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
  // Italic: *text* or _text_
  text = text.replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>');
  // Strikethrough: ~~text~~
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');
  // Inline code: `code`
  text = text.replace(/`(.*?)`/g, '<code>$1</code>');
  // Links: [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
  return text;
}

// --- MAJOR REFACTOR: This is the new, more intelligent content parser ---
function processJudgementContent(content: string | null | undefined): ProcessedContent[] {
  if (!content) return [];
  
  // Split content into blocks separated by one or more blank lines.
  const blocks = content.split(/\n\s*\n/);

  return blocks.map((block, index) => {
    const trimmedBlock = block.trim();
    const id = `content-${index}`;
    
    // 1. Check for a heading (All caps, short length)
    // This regex is good, we can keep it.
    if (/^[A-Z][A-Z\s\d.:;,()[\]{}'"&-]+$/.test(trimmedBlock) && trimmedBlock.length < 150) {
      return { id, type: 'heading', content: processTextFormatting(trimmedBlock) };
    }
    
    // 2. Check if the block is a list
    // A block is a list if its first line starts with a list marker.
    const lines = trimmedBlock.split('\n');
    const firstLine = lines[0].trim();
    const isList = /^((\*|-|•)\s|[0-9]+\.\s|\([a-zA-Z0-9]+\)\s)/.test(firstLine);

    if (isList) {
      const listItems = lines.map(line => {
        // Strip the marker (e.g., '1. ', '* ') from the start of the line for clean content
        const cleanLine = line.trim().replace(/^((\*|-|•)\s|[0-9]+\.\s|\([a-zA-Z0-9]+\)\s)/, '');
        // Apply inline formatting to each list item
        return processTextFormatting(cleanLine);
      });
      return { id, type: 'list', items: listItems };
    }

    // 3. Check for blockquotes (lines starting with '>')
    if (trimmedBlock.startsWith('>')) {
      // Remove the '>' character from the beginning of each line
      const blockquoteContent = lines.map(line => line.replace(/^>\s?/, '')).join('\n');
      return { id, type: 'blockquote', content: processTextFormatting(blockquoteContent) };
    }

    // 4. Default to a paragraph
    // Apply inline formatting to the whole paragraph block
    return { id, type: 'paragraph', content: processTextFormatting(trimmedBlock) };
  });
}