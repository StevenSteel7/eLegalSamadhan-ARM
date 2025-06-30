// app/judgements/page.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react'; // useCallBack is not strictly needed here
import { Search, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Define the type based on your Prisma schema (or a subset)
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary?: string | null; // Summary is optional
  fullContent: string; // Keep fullContent for client-side search if needed, but better to search on backend
  createdAt: string; // 👈 Add this (ISO date string)

}

const ITEMS_PER_PAGE = 9;

const JudgementsPage = () => {
  const [allJudgements, setAllJudgements] = useState<Judgement[]>([]); // Store all fetched data
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
 useEffect(() => {
  const fetchJudgements = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/judgements');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Judgement[] = await response.json();

      // 👇 Sort the judgements by createdAt (Newest first)
      const sortedData = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      setAllJudgements(sortedData);
    } catch (e: any) {
      console.error("Failed to fetch judgements:", e);
      setError(`Failed to load judgements. ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  fetchJudgements();
}, []);

  // Filter judgements based on search query (client-side)
  const filteredJudgements = useMemo(() => {
    if (!searchQuery) {
      return allJudgements;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return allJudgements.filter(judgement =>
      judgement.title.toLowerCase().includes(lowerCaseQuery) ||
      judgement.caseNumber.toLowerCase().includes(lowerCaseQuery) ||
      judgement.court.toLowerCase().includes(lowerCaseQuery) ||
      // You might want to remove fullContent from client-side search for performance
      // judgement.fullContent.toLowerCase().includes(lowerCaseQuery) ||
      (judgement.summary?.toLowerCase().includes(lowerCaseQuery)) // Search summary
    );
  }, [allJudgements, searchQuery]); // Depend on allJudgements and searchQuery

  // Calculate total pages based on filtered results
  const totalPages = useMemo(() => {
    return Math.ceil(filteredJudgements.length / ITEMS_PER_PAGE);
  }, [filteredJudgements]);

  // Get judgements for the current page
  const paginatedJudgements = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredJudgements.slice(startIndex, endIndex);
  }, [filteredJudgements, currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to the top of the list
      const listContainer = document.getElementById('judgements-list');
      if (listContainer) {
           listContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Reset page to 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);


  return (
    <div className="relative bg-gray-50 py-16 md:py-20 min-h-screen">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Legal <span className="text-orange-500">Judgements</span> Database
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a comprehensive collection of important legal judgements from various courts.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by case number, title, court, or summary..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Judgements List Container */}
      {error ? (
           <div className="container mx-auto px-4 text-center py-20">
             <p className="text-red-600 text-xl">{error}</p>
           </div>
      ) : isLoading ? (
         <div className="container mx-auto px-4 text-center py-20">
            <p className="text-gray-600 text-xl flex items-center justify-center">
                 <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading Judgements...
            </p>
         </div>
      ) : (
          <>
            {filteredJudgements.length === 0 ? (
                 <div className="container mx-auto px-4 text-center py-20">
                     <p className="text-gray-600 text-xl">No judgements found matching your search query.</p>
                 </div>
            ) : (
                <>
                   {/* Judgements List Grid */}
                   <div id="judgements-list" className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-8">
                      {paginatedJudgements.map((judgement) => (
                        // Use Link to wrap the card content
                        <Link
                            key={judgement.id}
                            href={`/judgements/${judgement.id}`} // Dynamic link to the detail page
                            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-700 hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer joom no-underline" // Add group for hover, remove underline
                        >
                           <div className="flex items-center mb-3">
                                <BookOpen className="h-8 w-8 text-orange-500 mr-3 flex-shrink-0" />
                                <h3 className="text-xl font-semibold text-blue-900 leading-tight group-hover:text-blue-700">{judgement.title}</h3> {/* Add hover effect */}
                           </div>
                           <p className="text-gray-700 text-sm mb-2 flex-shrink-0">
                               <span className="font-medium">Case No:</span> {judgement.caseNumber}
                           </p>
                           <p className="text-gray-700 text-sm mb-4 flex-shrink-0">
                               <span className="font-medium">Court:</span> {judgement.court} <br/>
                               <span className="font-medium">Date of Judgement:</span> {judgement.date}
                           </p>
                           {/* Display summary */}
                           <p className="text-gray-600 mb-4 flex-grow">
                                {judgement.summary}
                           </p>
                           <span className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors mt-auto">
                                Read Full Judgement <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                           </span>
                        </Link>
                      ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="container mx-auto px-4 mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-blue-900 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors flex items-center"
                          aria-label="Go to previous page"
                        >
                          <ChevronLeft size={18} className="mr-1" /> Previous
                        </button>
                        <span className="text-gray-700 font-medium">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-blue-900 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors flex items-center"
                          aria-label="Go to next page"
                        >
                          Next <ChevronRight size={18} className="ml-1" />
                        </button>
                      </div>
                    )}
                </>
            )}
          </>
      )}
    </div>
  );
};

export default JudgementsPage;