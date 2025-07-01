'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { JudgementCategory } from '@prisma/client';

// A constant for the category options, making them reusable and easy to manage
const categoryOptions = Object.values(JudgementCategory).map(category => ({
  value: category,
  label: category.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
}));

// A constant for reusable input field styling
const formInputStyle = "block w-full text-base bg-slate-50 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out px-4 py-3";

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

const AdminCreateJudgementPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<JudgementFormData>({
    title: '',
    caseNumber: '',
    court: '',
    date: '',
    category: JudgementCategory.OTHER_MATTER, // Sensible default
    summary: '',
    fullContent: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    if (!formData.title || !formData.caseNumber || !formData.court || !formData.date || !formData.fullContent || !formData.category) {
        setError('Please fill in all required fields, including category.');
        setIsSubmitting(false);
        return;
    }

    try {
      const response = await fetch('/api/judgements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const newJudgement = await response.json();
      setSuccessMessage(`Judgement "${newJudgement.title}" created successfully!`);
      setFormData({
        title: '',
        caseNumber: '',
        court: '',
        date: '',
        category: JudgementCategory.OTHER_MATTER,
        summary: '',
        fullContent: '',
      });
      window.scrollTo(0, 0);

    } catch (e: any) {
      setError(`Error creating judgement: ${e.message}`);
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
              <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
              Create New Judgement
            </h1>
            <Link href="/admin/judgements" className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900">
                <ArrowLeft size={16} className="mr-1" /> Back to List
            </Link>
        </div>

        {/* Status Messages */}
        {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md">{error}</div>}
        {successMessage && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md">{successMessage}</div>}

        {/* Form Container */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
              
              {/* --- Section 1: Core Details --- */}
              <div className="border-b border-gray-200 pb-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-gray-400" />
                    Case Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                      {/* Title */}
                      <div>
                          <label htmlFor="title" className="block text-base font-semibold text-gray-700 mb-2">Title</label>
                          <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="e.g., State vs. John Doe" className={formInputStyle} required />
                      </div>
                      {/* Case Number */}
                      <div>
                          <label htmlFor="caseNumber" className="block text-base font-semibold text-gray-700 mb-2">Case Number</label>
                          <input type="text" name="caseNumber" id="caseNumber" value={formData.caseNumber} onChange={handleChange} placeholder="e.g., C.A. No. 1234 of 2023" className={formInputStyle} required />
                      </div>
                      {/* Court */}
                      <div>
                          <label htmlFor="court" className="block text-base font-semibold text-gray-700 mb-2">Court</label>
                          <input type="text" name="court" id="court" value={formData.court} onChange={handleChange} placeholder="e.g., Supreme Court of India" className={formInputStyle} required />
                      </div>
                      {/* Date */}
                      <div>
                          <label htmlFor="date" className="block text-base font-semibold text-gray-700 mb-2">Date of Judgement</label>
                          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className={formInputStyle} required />
                      </div>
                  </div>
              </div>

              {/* --- Section 2: Content & Categorization --- */}
              <div className="space-y-8">
                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-base font-semibold text-gray-700 mb-2">Category</label>
                  <select name="category" id="category" value={formData.category} onChange={handleChange} className={formInputStyle} required>
                    {categoryOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Summary */}
                <div>
                  <label htmlFor="summary" className="block text-base font-semibold text-gray-700 mb-2">Summary (Optional)</label>
                  <textarea name="summary" id="summary" rows={5} value={formData.summary} onChange={handleChange} placeholder="A brief, one-paragraph summary of the judgement's outcome." className={formInputStyle}></textarea>
                </div>
                {/* Full Content */}
                <div>
                  <label htmlFor="fullContent" className="block text-base font-semibold text-gray-700 mb-2">Full Judgement Content</label>
                  <textarea name="fullContent" id="fullContent" rows={15} value={formData.fullContent} onChange={handleChange} placeholder="Paste the complete text of the judgement here." className={`${formInputStyle} font-mono text-sm`} required></textarea>
                  <p className="text-sm text-gray-500 mt-2">The full text of the legal document. Basic formatting will be applied on the public page.</p>
                </div>
              </div>

              {/* --- Form Actions --- */}
              <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-200">
                  <Link href="/admin/judgements" className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors">Cancel</Link>
                  <button type="submit" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent shadow-sm text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                          Saving...
                        </>
                       ) : (
                        <>
                          <Save size={18} className="mr-2" />
                          Save Judgement
                        </>
                       )}
                   </button>
              </div>
          </form>
      </div>
    </div>
    </div>
  );
};

export default AdminCreateJudgementPage;