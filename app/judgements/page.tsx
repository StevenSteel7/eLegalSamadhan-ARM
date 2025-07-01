'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, BookOpen, ArrowRight, Scale, FolderSearch, FileText, Building, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Pagination } from '@/app/components/Pagination'; // Assuming the component is at this path

// Interface for the judgement data
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary?: string | null;
  category: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 9;

// Helper to format the category ENUM for display
const formatCategoryTitle = (category: string | null) => {
  if (!category) return "All Judgements";
  return category
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Helper for styling category badges on cards
const getCategoryStyle = (category: string) => {
    const styles: { [key: string]: string } = {
        ARBITRATION_MATTER: 'bg-blue-100 text-blue-800',
        CONSUMER_DISPUTES: 'bg-emerald-100 text-emerald-800',
        REAL_ESTATE_DISPUTES: 'bg-amber-100 text-amber-800',
        CYBER_DISPUTES: 'bg-indigo-100 text-indigo-800',
        OTHER_MATTER: 'bg-slate-100 text-slate-800',
    };
    return styles[category] || styles['OTHER_MATTER'];
};

// The core logic component
const JudgementsPageContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const [allJudgements, setAllJudgements] = useState<Judgement[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJudgements = async () => {
      setIsLoading(true);
      setError(null);
      const url = category ? `/api/judgements?category=${category}` : '/api/judgements';
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data: Judgement[] = await response.json();
        setAllJudgements(data);
      } catch (e: any) {
        setError(`Failed to load judgements. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJudgements();
  }, [category]);

  const filteredJudgements = useMemo(() => {
    if (!searchQuery) return allJudgements;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return allJudgements.filter(j =>
      j.title.toLowerCase().includes(lowerCaseQuery) ||
      j.caseNumber.toLowerCase().includes(lowerCaseQuery) ||
      j.court.toLowerCase().includes(lowerCaseQuery) ||
      (j.summary?.toLowerCase().includes(lowerCaseQuery))
    );
  }, [allJudgements, searchQuery]);

  const totalPages = useMemo(() => Math.ceil(filteredJudgements.length / ITEMS_PER_PAGE), [filteredJudgements]);

  const paginatedJudgements = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJudgements.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJudgements, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      document.getElementById('judgements-list')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, category]);

  const pageTitle = formatCategoryTitle(category);

  return (
    <div className="relative bg-slate-50 py-10 md:py-24 min-h-screen">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-12 md:mb-16">
        <div className="flex justify-center items-center gap-4 mb-4">
            <Scale className="w-12 h-12 text-blue-500" strokeWidth={1.5} />
        </div>
        <p className="text-lg font-semibold text-blue-600 mb-2">Legal Judgements Database</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight">
          {pageTitle}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
          Explore our database of legal cases. Use the search below to filter results within this category.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-12 max-w-2xl">
        <div className="relative">
          <label htmlFor="search-judgements" className="sr-only">Search judgements</label>
          <input
            id="search-judgements"
            type="text"
            placeholder="Search by case number, title, court, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-lg px-6 py-4 pl-14 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 shadow-lg text-slate-800 transition"
          />
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400" size={24} />
        </div>
      </div>

      {/* Content Area */}
      {error && <div className="text-center text-red-600 py-20 text-xl">{error}</div>}

      {isLoading && (
        <div className="flex justify-center items-center py-20">
            <div className="text-slate-600 text-xl flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Loading Judgements...
            </div>
        </div>
      )}

      {!isLoading && !error && (
        <>
            {filteredJudgements.length === 0 ? (
                <div className="container mx-auto px-4 text-center py-20">
                    <FolderSearch className="mx-auto h-24 w-24 text-slate-400" strokeWidth={1} />
                    <h2 className="mt-6 text-2xl font-semibold text-slate-700">No Judgements Found</h2>
                    <p className="mt-2 text-slate-500">There are no judgements matching your search in this category.</p>
                </div>
            ) : (
                <>
                   {/* Judgements List Grid */}
                   <div id="judgements-list" className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                      {paginatedJudgements.map((judgement) => (
                        <Link
                            key={judgement.id}
                            href={`/judgements/${judgement.id}`}
                            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group no-underline border border-slate-200 hover:-translate-y-1"
                        >
                           <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <BookOpen className="h-10 w-10 text-orange-500 flex-shrink-0" strokeWidth={1.5} />
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${getCategoryStyle(judgement.category)}`}>
                                        {formatCategoryTitle(judgement.category)}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 leading-snug mb-3 group-hover:text-blue-700">
                                    {judgement.title}
                                </h3>
                                <div className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-3 my-3">
                                    <p className="flex items-center gap-2"><FileText size={14} /> <strong>Case:</strong> {judgement.caseNumber}</p>
                                    <p className="flex items-center gap-2"><Building size={14} /> <strong>Court:</strong> {judgement.court}</p>
                                    <p className="flex items-center gap-2"><Calendar size={14} /> <strong>Date:</strong> {new Date(judgement.date).toLocaleDateString()}</p>
                                </div>
                               <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-4">
                                    {judgement.summary}
                               </p>
                               <div className="mt-auto border-t border-slate-100 pt-4">
                                   <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                                        Read Full Judgement <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                   </span>
                               </div>
                           </div>
                        </Link>
                      ))}
                    </div>

                    {/* --- NEW, BEAUTIFUL PAGINATION --- */}
                    {totalPages > 1 && (
                      <div className="container mx-auto px-4 mt-12 flex justify-center">
                          <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                          />
                      </div>
                    )}
                </>
            )}
          </>
      )}

      {/* --- STYLES FOR THE NEW PAGINATION --- */}
      <style jsx global>{`
        .pagination-arrow-btn {
            @apply flex items-center justify-center h-10 w-10 rounded-full bg-white border border-slate-300 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white;
        }
        .pagination-number-btn {
            @apply flex items-center justify-center h-10 w-10 rounded-full bg-white border border-slate-300 text-slate-600 font-semibold transition-colors hover:bg-slate-100 disabled:bg-blue-600 disabled:text-white disabled:border-blue-600 disabled:cursor-default disabled:hover:bg-blue-600;
        }
        .pagination-active-btn {
            @apply bg-blue-600 text-white border-blue-600 cursor-default;
        }
      `}</style>
    </div>
  );
};

// The main export wrapper for Suspense
const JudgementsPage = () => {
  return (
    <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen bg-slate-50 text-xl text-slate-600">
            Loading Page...
        </div>
    }>
      <JudgementsPageContent />
    </Suspense>
  );
};

export default JudgementsPage;