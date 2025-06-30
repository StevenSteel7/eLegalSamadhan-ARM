'use client';
// ContactPage.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NavBar from '@/app/components/Navbar'; // Assuming NavBar.jsx is in the same directory

// Simple Footer Component (can be extracted to its own file if reused often)
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 px-4">
    <div className="container mx-auto text-center md:flex md:justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} eLegal Samadhan. All Rights Reserved.
      </p>
      {/* <div className="flex justify-center space-x-4">
        <Link href="/privacy-policy" className="text-sm hover:text-orange-400 transition duration-300">Privacy Policy</Link>
        <Link href="/terms-of-service" className="text-sm hover:text-emerald-400 transition duration-300">Terms of Service</Link>
    
      </div> */
      }
    </div>
  </footer>
);


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  // Use specific strings for status for better clarity
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store specific error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
     // Reset status if user starts typing again after an error/success
    if (submissionStatus === 'success' || submissionStatus === 'error') {
        setSubmissionStatus('idle');
        setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage(null); // Clear previous errors

    try {
        const response = await fetch('/api/send-contact-message', { // Use the correct API route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json(); // Try to parse JSON regardless of status code

        if (response.ok) {
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form on success
        } else {
            // Use error message from API if available, otherwise use a generic one
            setErrorMessage(result.error || 'An unexpected error occurred. Please try again.');
            setSubmissionStatus('error');
            console.error("Submission Error:", result);
        }

    } catch (error) {
        console.error('Fetch Error:', error);
        setErrorMessage('Could not connect to the server. Please check your internet connection and try again.');
        setSubmissionStatus('error');
    }

  };

  const isLoading = submissionStatus === 'submitting';

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navigation Bar */}
      <NavBar />

      {/* Main Content Area - Added padding-top */}
      <main className="flex-grow lg:pt-10 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="container mx-auto  px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">Get In Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Whether you have questions about our services or need legal assistance, feel free to reach out.
            </p>
          </div>

          {/* Contact Grid (Form + Info) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* --- Input fields remain the same --- */}
                 <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label> {/* Added asterisk */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required // Keep required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading} // Disable when submitting
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out disabled:bg-gray-100"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label> {/* Added asterisk */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required // Keep required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out disabled:bg-gray-100"
                    placeholder="you@example.com"
                  />
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-xs text-gray-500">(Optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out disabled:bg-gray-100"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label> {/* Added asterisk */}
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required // Keep required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out disabled:bg-gray-100"
                    placeholder="e.g., Company Registration Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label> {/* Added asterisk */}
                  <textarea
                    name="message"
                    id="message"
                    required // Keep required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out disabled:bg-gray-100"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>
                {/* --- End of input fields --- */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading} // Disable button when loading
                    className={`w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                       <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                       </>
                    ) : (
                       <> <Send className="w-5 h-5" /> Send Message </>
                    )}

                  </button>
                </div>
                {/* Submission Status Feedback */}
                {submissionStatus === 'success' && (
                  <p className="text-center text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-md">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {submissionStatus === 'error' && (
                   <p className="text-center text-sm text-red-600 font-medium bg-red-50 p-3 rounded-md">
                    {/* Display specific error message from state */}
                    {errorMessage || 'Something went wrong. Please try again later or contact us directly.'}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information (Remains the same) */}
            <div className="space-y-8 pb-10">
              {/* ... Contact Details card ... */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-emerald-600">
                 <h2 className="text-2xl font-semibold text-blue-900 mb-6">Contact Details</h2>
                 <div className="space-y-5">
                   {/* Email */}
                   <div className="flex items-start gap-4">
                     <Mail className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="text-lg font-medium text-gray-800">Email Us</h3>
                       <a href="mailto:elegalsamadhan@outlook.com" className="text-blue-600 hover:text-orange-500 transition duration-150 ease-in-out">
                          elegalsamadhan@outlook.com
                       </a>
                       <p className="text-sm text-gray-500 mt-1">We aim to reply within 24 hours.</p>
                     </div>
                   </div>
                   {/* Phone */}
                   <div className="flex items-start gap-4">
                     <Phone className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="text-lg font-medium text-gray-800">Call Us</h3>
                       <a href="tel:+91 9116051108" className="text-blue-600 hover:text-orange-500 transition duration-150 ease-in-out">
                         +91 9116051108
                       </a>
                        <p className="text-sm text-gray-500 mt-1">Mon - Fri, 10:00 AM - 6:00 PM IST</p>
                     </div>
                   </div>
                   {/* Address */}
                   <div className="flex items-start gap-4">
                     <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="text-lg font-medium text-gray-800">Our Office</h3>
                       <p className="text-gray-700">
                         196 B first floor, near Ananta Hotel, opposite Motison's Jewellers, Tonk road, Jaipur<br />
                         Rajasthan, India  302012
                       </p>
                        <p className="text-sm text-gray-500 mt-1">Appointments recommended.</p>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Map (Remains the same) */}
               <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4  border-blue-900">
                 {/* Google Maps Embed Code */}
                 <iframe
                 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.4156369736816!2d75.80202477543867!3d26.89030117666057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzI1LjEiTiA3NcKwNDgnMTYuNiJF!5e0!3m2!1sen!2sin!4v1745396893953!5m2!1sen!2sin" // <-- Replace with your ACTUAL map embed src if different
                    width="100%"
                    height="300"
                    style={{ border:0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="eLegal Samadhan Office Location"
                 ></iframe>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;