'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Edit, Trash2, PlusCircle, LogOut, Search } from 'lucide-react';
import { useAdminProtected } from '@/app/hooks/useAdminProtected';
import { signOut } from "next-auth/react";

interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary?: string | null;
}

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
      const endpoint = query ? `/api/judgements/search?query=${encodeURIComponent(query)}` : '/api/judgements';
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
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
    if (!isAuthorized) return;

    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/judgements/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      setJudgements(judgements.filter(j => j.id !== id));
    } catch (e: any) {
      console.error(`Failed to delete judgement ${id}:`, e);
      alert(`Error deleting judgement: ${e.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/admin-login');
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchJudgements(searchQuery);
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-gray-600">
          <svg className="animate-spin mx-auto h-8 w-8 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2">Checking authorization...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 min-h-screen">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Manage Judgements</h1>

        <div className="flex gap-3 items-center">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search by title, case no., court..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white text-gray-800 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
          </form>

          <Link
            href="/admin/judgements/create"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition-colors"
          >
            <PlusCircle size={20} className="mr-2" /> Add New
          </Link>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors"
          >
            <LogOut size={20} className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Loading/Error States */}
      {error ? (
        <div className="text-red-600 text-center py-8">{error}</div>
      ) : isLoading ? (
        <div className="text-center text-gray-600 py-8 flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading judgements...
        </div>
      ) : judgements.length === 0 ? (
        <div className="text-center text-gray-600 py-8">No judgements found.</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Case No.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Court</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {judgements.map((judgement) => (
                <tr key={judgement.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{judgement.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                    {judgement.caseNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {judgement.court}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {judgement.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/judgements/edit/${judgement.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4 inline-flex items-center">
                      <Edit size={16} className="mr-1" /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(judgement.id, judgement.title)}
                      className="text-red-600 hover:text-red-900 inline-flex items-center"
                      aria-label={`Delete ${judgement.title}`}
                    >
                      <Trash2 size={16} className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminJudgementsPage;
