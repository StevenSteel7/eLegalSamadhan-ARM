// app/admin/judgements/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Edit, Trash2, PlusCircle, LogOut, Search } from 'lucide-react';
import { useAdminProtected } from '@/app/hooks/useAdminProtected';
import { signOut } from "next-auth/react";
import { JudgementCategory } from '@prisma/client'; // --- ADDED ---

// --- MODIFIED --- Interface to include category
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  category: JudgementCategory; // Added category
  summary?: string | null;
}

// --- ADDED --- Helper function to format the category for display
const formatCategory = (category: JudgementCategory | string) => {
  if (!category) return "N/A";
  return category
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const AdminJudgementsPage = () => {
  const [judgements, setJudgements] = useState<Judgement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const { isAuthorized, isLoading: authLoading } = useAdminProtected();

  const fetchJudgements = async (query = '') => {
    if (!isAuthorized) return;

    setIsLoading(true);
    setError(null);
    try {
      // Assuming your search API also returns all judgements when query is empty
      const endpoint = query ? `/api/judgements/search?query=${encodeURIComponent(query)}` : '/api/judgements';
      const response = await fetch(endpoint);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data: Judgement[] = await response.json();
      setJudgements(data);
    } catch (e: any) {
      console.error("Failed to fetch judgements:", e);
      setError(`Failed to load judgements. ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchJudgements();
    }
  }, [isAuthorized]);

  const handleDelete = async (id: number, title: string) => {
    if (!isAuthorized || !confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const response = await fetch(`/api/judgements/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      setJudgements(judgements.filter(j => j.id !== id));
    } catch (e: any) {
      alert(`Error deleting judgement: ${e.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/admin-login');
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchJudgements(searchQuery);
  };

  if (authLoading) {
    // Return loading spinner
    return <div className="text-center p-10">Checking authorization...</div>;
  }
  if (!isAuthorized) return null; // Or a redirect component

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Manage Judgements</h1>
        <div className="flex gap-3 items-center">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white text-gray-800 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
          </form>
          <Link href="/admin/judgements/create" className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700">
            <PlusCircle size={20} className="mr-2" /> Add New
          </Link>
          <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700">
            <LogOut size={20} className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {isLoading && <div className="text-center py-8">Loading judgements...</div>}
      {error && <div className="text-red-600 text-center py-8">{error}</div>}
      
      {!isLoading && !error && (
        judgements.length === 0 ? (
          <div className="text-center text-gray-600 py-8">No judgements found.</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Case No.</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Category</th> {/* --- ADDED --- */}
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {judgements.map((judgement) => (
                  <tr key={judgement.id}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{judgement.title}</div>
                      <div className="text-sm text-gray-500 md:hidden">{formatCategory(judgement.category)}</div> {/* Show category on mobile */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{judgement.caseNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{formatCategory(judgement.category)}</td> {/* --- ADDED --- */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/judgements/edit/${judgement.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4 inline-flex items-center">
                        <Edit size={16} className="mr-1" /> Edit
                      </Link>
                      <button onClick={() => handleDelete(judgement.id, judgement.title)} className="text-red-600 hover:text-red-900 inline-flex items-center">
                        <Trash2 size={16} className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default AdminJudgementsPage;