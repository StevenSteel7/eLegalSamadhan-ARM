// app/admin/judgements/edit/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { JudgementCategory } from '@prisma/client'; // --- ADDED ---

// --- ADDED --- Re-using the constant for the category options
const categoryOptions = Object.values(JudgementCategory).map(category => ({
  value: category,
  label: category.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
}));

// --- MODIFIED --- Interface to include category
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  category: JudgementCategory; // Added category
  summary: string | null;
  fullContent: string;
}

// --- MODIFIED --- Interface to include category
interface JudgementFormData {
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  category: JudgementCategory; // Added category
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
    // --- MODIFIED --- Set a temporary default
    category: '' as JudgementCategory,
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
        // --- MODIFIED --- Populate form with fetched data, including category
        setFormData({
            title: data.title,
            caseNumber: data.caseNumber,
            court: data.court,
            date: new Date(data.date).toISOString().split('T')[0], // Format date for input
            category: data.category, // Set the category
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

    // --- MODIFIED --- Validation includes category
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
      router.push('/admin/judgements');
    } catch (e: any) {
      setSubmitError(`Error updating judgement: ${e.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center mb-8">
        <Link href="/admin/judgements" className="inline-flex items-center text-blue-900 hover:underline mr-4">
            <ArrowLeft size={20} className="mr-1" /> Back
        </Link>
        <h1 className="text-3xl font-bold text-blue-900">Edit Judgement #{judgementId}</h1>
      </div>

      {fetchError && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{fetchError}</div>}
      {isLoading && <div className="text-center p-10">Loading judgement data...</div>}
      
      {!isLoading && !fetchError && (
        <>
          {submitError && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{submitError}</div>}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-700">
              <form onSubmit={handleSubmit} noValidate>
                {/* --- THIS PART IS IDENTICAL TO THE CREATE FORM --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div><label htmlFor="title" className="form-label">Title</label><input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="form-input" required /></div>
                    <div><label htmlFor="caseNumber" className="form-label">Case Number</label><input type="text" name="caseNumber" id="caseNumber" value={formData.caseNumber} onChange={handleChange} className="form-input" required /></div>
                    <div><label htmlFor="court" className="form-label">Court</label><input type="text" name="court" id="court" value={formData.court} onChange={handleChange} className="form-input" required /></div>
                    <div><label htmlFor="date" className="form-label">Date</label><input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="form-input" required /></div>
                </div>
                <div className="mb-6">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select name="category" id="category" value={formData.category} onChange={handleChange} className="form-input" required>
                    {categoryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="summary" className="form-label">Summary (Optional)</label>
                    <textarea name="summary" id="summary" rows={4} value={formData.summary} onChange={handleChange} className="form-input"></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="fullContent" className="form-label">Full Content</label>
                    <textarea name="fullContent" id="fullContent" rows={12} value={formData.fullContent} onChange={handleChange} className="form-input" required></textarea>
                </div>
                <div className="flex justify-end gap-4">
                    <Link href="/admin/judgements" className="btn-secondary">Cancel</Link>
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                        {isSubmitting && <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>}
                        <Save size={20} className={isSubmitting ? 'hidden' : 'inline-block mr-2'} />
                        {isSubmitting ? 'Updating...' : 'Update Judgement'}
                    </button>
                </div>
              </form>
          </div>
        </>
      )}
      <style jsx>{`
        .form-label { @apply block text-sm font-medium text-gray-700 mb-1; }
        .form-input { @apply w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500; }
        .btn-primary { @apply inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed; }
        .btn-secondary { @apply inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500; }
      `}</style>
    </div>
  );
};

export default AdminEditJudgementPage;