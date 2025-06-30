  // app/admin/judgements/edit/[id]/page.tsx
  'use client';

  import React, { useState, useEffect } from 'react';
  import Link from 'next/link';
  import { useRouter } from 'next/navigation';
  import { Save, ArrowLeft } from 'lucide-react';
  import { useParams } from 'next/navigation'; // Hook to access route params

  // Define a type for the judgement data fetched from the API
  interface Judgement {
    id: number;
    title: string;
    caseNumber: string;
    court: string;
    date: string;
    summary: string | null; // Summary might be null from DB
    fullContent: string;
    // createdAt, updatedAt might also be returned but not needed for form
  }

  // Define a type for the form data (similar to Judgement but handle potential null/undefined)
  interface JudgementFormData {
    title: string;
    caseNumber: string;
    court: string;
    date: string;
    summary: string; // Treat as string for form input
    fullContent: string;
  }


  const AdminEditJudgementPage = () => {
    const router = useRouter();
    const params = useParams(); // Get route params
    const judgementId = params.id as string; // Get the id from the URL

    const [formData, setFormData] = useState<JudgementFormData>({
      title: '',
      caseNumber: '',
      court: '',
      date: '',
      summary: '',
      fullContent: '',
    });
    const [isLoading, setIsLoading] = useState(true); // Loading for initial fetch
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading for submission
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);


    // Fetch existing judgement data when the component mounts or id changes
    useEffect(() => {
      // *** IMPORTANT: Add authentication check here before fetching! ***
      // Example: const session = await getSession(); if (!session?.user?.isAdmin) { router.push('/login'); return; }

      if (!judgementId) {
          setFetchError("Judgement ID not provided.");
          setIsLoading(false);
          return;
      }

      const fetchJudgement = async () => {
        setIsLoading(true);
        setFetchError(null);
        try {
          const response = await fetch(`/api/judgements/${judgementId}`, {
              // Add headers for authentication if needed
          });
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
          }
          const data: Judgement = await response.json();
          // Populate the form state with fetched data
          setFormData({
              title: data.title,
              caseNumber: data.caseNumber,
              court: data.court,
              date: data.date,
              summary: data.summary || '', // Use empty string if summary is null
              fullContent: data.fullContent,
          });
        } catch (e: any) {
          console.error(`Failed to fetch judgement ${judgementId} for editing:`, e);
          setFetchError(`Failed to load judgement data: ${e.message}`);
        } finally {
          setIsLoading(false);
        }
      };

      fetchJudgement();
    }, [judgementId]); // Re-run effect if judgementId changes


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // *** IMPORTANT: Add authentication check here before submitting! ***

      setIsSubmitting(true);
      setSubmitError(null);

      // Basic validation
      if (!formData.title || !formData.caseNumber || !formData.court || !formData.date || !formData.fullContent) {
          setSubmitError('Please fill in all required fields.');
          setIsSubmitting(false);
          return;
      }

      try {
        const response = await fetch(`/api/judgements/${judgementId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Add headers for authentication if needed
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        // Redirect back to the list page on success
        router.push('/admin/judgements');

      } catch (e: any) {
        console.error(`Failed to update judgement ${judgementId}:`, e);
        setSubmitError(`Error updating judgement: ${e.message}`);
      } finally {
        setIsSubmitting(false);
      }
    };


    return (
      <div className="container mx-auto px-4 py-16 md:py-20 min-h-screen max-w-3xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/admin/judgements" className="inline-flex items-center text-blue-900 hover:underline mr-4">
              <ArrowLeft size={20} className="mr-1" /> Back to List
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Edit Judgement #{judgementId}</h1>
        </div>

        {/* Loading/Error States for Fetch */}
        {fetchError ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{fetchError}</div>
        ) : isLoading ? (
            <div className="text-center text-gray-600 py-8 flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                Loading judgement data...
            </div>
        ) : (
            <>
                {/* Submission Error */}
                {submitError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{submitError}</div>}

                  {/* Form */}
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-blue-700">
                      <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                              <div>
                                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                  <input
                                      type="text"
                                      name="title"
                                      id="title"
                                      value={formData.title}
                                      onChange={handleChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      required
                                  />
                              </div>
                              <div>
                                  <label htmlFor="caseNumber" className="block text-sm font-medium text-gray-700 mb-1">Case Number</label>
                                  <input
                                      type="text"
                                      name="caseNumber"
                                      id="caseNumber"
                                      value={formData.caseNumber}
                                      onChange={handleChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      required
                                  />
                              </div>
                              <div>
                                  <label htmlFor="court" className="block text-sm font-medium text-gray-700 mb-1">Court</label>
                                  <input
                                      type="text"
                                      name="court"
                                      id="court"
                                      value={formData.court}
                                      onChange={handleChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      required
                                  />
                              </div>
                              <div>
                                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date (YYYY-MM-DD)</label>
                                  <input
                                      type="date" // Use date input type
                                      name="date"
                                      id="date"
                                      value={formData.date}
                                      onChange={handleChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      required
                                  />
                              </div>
                          </div>

                          <div className="mb-6">
                              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Summary (Optional)</label>
                              <textarea
                                  name="summary"
                                  id="summary"
                                  rows={3}
                                  value={formData.summary}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              ></textarea>
                          </div>

                          <div className="mb-6">
                              <label htmlFor="fullContent" className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
                              <textarea
                                  name="fullContent"
                                  id="fullContent"
                                  rows={10}
                                  value={formData.fullContent}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  required
                              ></textarea>
                          </div>

                          <div className="flex justify-end gap-4">
                              <Link
                                  href="/admin/judgements"
                                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                  Cancel
                              </Link>
                              <button
                                  type="submit"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={isSubmitting}
                              >
                                  {isSubmitting ? (
                                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                  ) : (
                                      <Save size={20} className="mr-2" />
                                  )}
                                  {isSubmitting ? 'Updating...' : 'Update Judgement'}
                              </button>
                          </div>
                      </form>
                  </div>
            </>
        )}

      </div>
    );
  };

  export default AdminEditJudgementPage;