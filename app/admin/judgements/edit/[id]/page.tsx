// app/admin/judgements/edit/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Save, ArrowLeft, BookOpen, FileText, PencilLine, Loader2 } from 'lucide-react';
import { JudgementCategory } from '@prisma/client';

// Reusable constant for category options (from create page)
const categoryOptions = Object.values(JudgementCategory).map(category => ({
  value: category,
  label: category.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
}));

// Reusable constant for input field styling (from create page)
const formInputStyle = "block w-full text-base bg-slate-50 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out px-4 py-3";

// Interface for the fetched judgement data
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  category: JudgementCategory;
  summary: string | null;
  fullContent: string;
}

// Interface for the form data
interface JudgementFormData {
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  category: JudgementCategory;
  summary: string;
  fullContent: string;
}

const AdminEditJudgementPage = () => {
  const router = useRouter();
  const params = useParams();
  const judgementId = params.id as string;

  const [formData, setFormData] = useState<JudgementFormData>({
    title: '',
    caseNumber: '',
    court: '',
    date: '',
    category: JudgementCategory.OTHER_MATTER, // Default until data loads
    summary: '',
    fullContent: '',
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!judgementId) return;

    const fetchJudgement = async () => {
      setIsLoading(true);
      setFetchError(null);
      try {
        const response = await fetch(`/api/judgements/${judgementId}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: Judgement = await response.json();
        setFormData({
            title: data.title,
            caseNumber: data.caseNumber,
            court: data.court,
            date: new Date(data.date).toISOString().split('T')[0], // Format date for input
            category: data.category,
            summary: data.summary || '',
            fullContent: data.fullContent,
        });
      } catch (e: any) {
        setFetchError(`Failed to load judgement data: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJudgement();
  }, [judgementId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    if (!formData.title || !formData.caseNumber || !formData.court || !formData.date || !formData.fullContent || !formData.category) {
        setSubmitError('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
    }

    try {
      const response = await fetch(`/api/judgements/${judgementId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      // On success, redirect back to the main list
      router.push('/admin/judgements?status=updated');
    } catch (e: any) {
      setSubmitError(`Error updating judgement: ${e.message}`);
      window.scrollTo(0, 0);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 flex items-center">
              <PencilLine className="w-8 h-8 mr-3 text-blue-600" />
              Edit Judgement
            </h1>
            <Link href="/admin/judgements" className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900">
                <ArrowLeft size={16} className="mr-1" /> Back to List
            </Link>
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center bg-white p-10 rounded-xl shadow-lg">
            <Loader2 className="w-8 h-8 mr-3 text-blue-600 animate-spin" />
            <span className="text-xl text-gray-600">Loading Judgement Data...</span>
          </div>
        )}

        {/* Error State */}
        {fetchError && !isLoading && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 mb-6 rounded-md shadow-md">
            <h3 className="font-bold">Failed to Load</h3>
            <p>{fetchError}</p>
          </div>
        )}

        {/* Form Display */}
        {!isLoading && !fetchError && (
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
              {submitError && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md">{submitError}</div>}
              
              <form onSubmit={handleSubmit} noValidate>
                {/* Section 1: Core Details */}
                <div className="border-b border-gray-200 pb-8 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-gray-400" />
                      Case Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        <div><label htmlFor="title" className="block text-base font-semibold text-gray-700 mb-2">Title</label><input type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="e.g., State vs. John Doe" className={formInputStyle} required /></div>
                        <div><label htmlFor="caseNumber" className="block text-base font-semibold text-gray-700 mb-2">Case Number</label><input type="text" name="caseNumber" id="caseNumber" value={formData.caseNumber} onChange={handleChange} placeholder="e.g., C.A. No. 1234 of 2023" className={formInputStyle} required /></div>
                        <div><label htmlFor="court" className="block text-base font-semibold text-gray-700 mb-2">Court</label><input type="text" name="court" id="court" value={formData.court} onChange={handleChange} placeholder="e.g., Supreme Court of India" className={formInputStyle} required /></div>
                        <div><label htmlFor="date" className="block text-base font-semibold text-gray-700 mb-2">Date of Judgement</label><input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className={formInputStyle} required /></div>
                    </div>
                </div>

                {/* Section 2: Content & Categorization */}
                <div className="space-y-8">
                  <div><label htmlFor="category" className="block text-base font-semibold text-gray-700 mb-2">Category</label><select name="category" id="category" value={formData.category} onChange={handleChange} className={formInputStyle} required>{categoryOptions.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}</select></div>
                  <div><label htmlFor="summary" className="block text-base font-semibold text-gray-700 mb-2">Summary (Optional)</label><textarea name="summary" id="summary" rows={5} value={formData.summary} onChange={handleChange} placeholder="A brief, one-paragraph summary of the judgement's outcome." className={formInputStyle}></textarea></div>
                  <div><label htmlFor="fullContent" className="block text-base font-semibold text-gray-700 mb-2">Full Judgement Content</label><textarea name="fullContent" id="fullContent" rows={15} value={formData.fullContent} onChange={handleChange} placeholder="Paste the complete text of the judgement here." className={`${formInputStyle} font-mono text-sm`} required></textarea><p className="text-sm text-gray-500 mt-2">The full text of the legal document. Basic formatting will be applied on the public page.</p></div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-200">
                    <Link href="/admin/judgements" className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors">Cancel</Link>
                    <button type="submit" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent shadow-sm text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Updating...
                          </>
                         ) : (
                          <>
                            <Save size={18} className="mr-2" />
                            Update Judgement
                          </>
                         )}
                     </button>
                </div>
              </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEditJudgementPage;