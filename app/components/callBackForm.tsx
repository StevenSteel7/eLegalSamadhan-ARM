// app/components/CallbackForm.jsx
'use client';

import React, { useState } from 'react';

// Keep state options readily available or import from a shared constants file
const stateOptions = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

// Define props interface (using TypeScript for clarity, adjust if using plain JS)
interface CallbackFormProps {
  title: string; // Prop for the form title
  formSource: string; // Prop for the source identifier sent to backend
  buttonText?: string; // Optional prop for button text
  successMessage?: string; // Optional prop for custom success message
}

const CallbackForm: React.FC<CallbackFormProps> = ({
  title, // Destructure the props
  formSource,
  buttonText = 'Request for Call Back', // Default button text
  successMessage = 'Request submitted successfully! We will contact you shortly.', // Default success message
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // Using 'mobile' in form state, maps to 'phone' for API
    state: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submissionStatus !== 'idle' && submissionStatus !== 'submitting') {
      setSubmissionStatus('idle');
      setStatusMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setStatusMessage('Submitting your request...');

    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.state) {
        setStatusMessage('Please fill in all required fields.');
        setSubmissionStatus('error');
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setStatusMessage('Please enter a valid email address.');
        setSubmissionStatus('error');
        return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
        setStatusMessage('Please enter a valid 10-digit Indian mobile number.');
        setSubmissionStatus('error');
        return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile, // Map 'mobile' to 'phone' as expected by the backend
        state: formData.state,
        formSource: formSource // Use the formSource prop here!
      };

      const response = await fetch('/api/request-callback', { // Use the generalized API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        // Use the successMessage prop or the default from the API/component
        setStatusMessage(result.message || successMessage);
        setFormData({ name: '', email: '', mobile: '', state: '' }); // Clear form
      } else {
        setSubmissionStatus('error');
        setStatusMessage(result.error || 'An unexpected error occurred. Please try again.');
        console.error("Submission Error:", result);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setSubmissionStatus('error');
      setStatusMessage('Could not connect to the server. Please check your connection.');
    }
  };

  const isLoading = submissionStatus === 'submitting';

  return (
    // You might want to adjust outer div styling based on where you use it
    <div className="bg-white p-6 md:p-8 shadow-lg rounded-2xl max-w-2xl w-full mx-auto h-full">
      {/* Use the title prop for the heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h2>
      <p className="text-gray-600 mb-6 text-center">Fill up the form below and we'll call you back.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input fields remain the same */}
        <div>
          <label htmlFor={`${formSource}-name`} className="block text-gray-700 font-medium mb-1">Name *</label>
          <input
            type="text"
            id={`${formSource}-name`} // Make ID unique if multiple forms on one page
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor={`${formSource}-email`} className="block text-gray-700 font-medium mb-1">Email *</label>
          <input
            type="email"
            id={`${formSource}-email`} // Make ID unique
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor={`${formSource}-mobile`} className="block text-gray-700 font-medium mb-1">Mobile *</label>
          <input
            type="tel"
            id={`${formSource}-mobile`} // Make ID unique
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your 10-digit Phone Number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
            required
            pattern="^[6-9]\d{9}$"
            title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9."
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor={`${formSource}-state`} className="block text-gray-700 font-medium mb-1">State *</label>
          <select
            id={`${formSource}-state`} // Make ID unique
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
            required
            disabled={isLoading}
          >
            <option value="">Select State</option>
            {stateOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className={`w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            buttonText // Use the buttonText prop
          )}
        </button>

        {/* Submission Status Feedback */}
        {submissionStatus === 'success' && (
          <p className="text-center text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-md">
            {statusMessage}
          </p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-center text-sm text-red-600 font-medium bg-red-50 p-3 rounded-md">
            {statusMessage}
          </p>
        )}
        {/* Optional: Show submitting message - removed the extra check from previous code */}
        {submissionStatus === 'submitting' && statusMessage && (
           <p className="text-center text-sm text-blue-600 font-medium bg-blue-50 p-3 rounded-md">
             {statusMessage}
           </p>
        )}
      </form>
    </div>
  );
};

export default CallbackForm;