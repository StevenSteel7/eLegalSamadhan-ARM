'use client';

import React, { useState } from 'react';
import {
  ClipboardList,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  Globe,
  UserCheck,
  Banknote,
  CreditCard,
  Mail,
  Clipboard,
} from "lucide-react";

const stateOptions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submissionStatus !== 'idle') {
      setSubmissionStatus('idle');
      setStatusMessage(null);
    }
  };

  // This is the exact handleSubmit logic you provided
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setStatusMessage('Submitting your request...');

    // Frontend validation
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
        phone: formData.mobile, // Map 'mobile' to 'phone'
        state: formData.state,
        formSource: 'Consumer Complaint Page' // Hardcoded form source
      };

      const response = await fetch('/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage(result.message || 'Request submitted successfully!');
        setFormData({ name: '', email: '', mobile: '', state: '' }); // Clear form
      } else {
        setSubmissionStatus('error');
        setStatusMessage(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setSubmissionStatus('error');
      setStatusMessage('Could not connect to the server. Please check your connection.');
    }
  };

  const isLoading = submissionStatus === 'submitting';

  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="relative min-h-[50vh] bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: "url('/images/consumer.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            eLegal Samadhan | Justice is Served!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
            Resolve Consumer Disputes effortlessly with our Expert Legal Assistance!
          </p>
        </div>
      </div>
      
      {/* MAIN CONTENT SECTION */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Consumer Complaints | Hassle-Free Legal Assistance
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              We provide legal assistance to consumers who have been victims of unfair trade practices, defective goods, or deficient services. We assist in filing consumer complaints, choosing the right advocate, and monitoring the progress of your case in consumer courts across India.
            </p>
          </div>
          
        {/* Submit form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help with a Consumer Complaint?</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <select name="state" value={formData.state} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select Your State</option>
                    {stateOptions.map((state) => ( <option key={state} value={state}>{state}</option> ))}
                  </select>
                </div>
                <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  {isLoading ? 'Submitting...' : 'Request Legal Consultation'}
                </button>
                {statusMessage && (
                  <div className={`mt-4 p-3 rounded-lg ${ submissionStatus === 'success' ? 'bg-green-100 text-green-700' :  submissionStatus === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700' }`}>
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
           
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Dispute Resolution Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">📝</span><div><h3 className="font-bold text-lg text-blue-900">Free Case Evaluation</h3><p className="text-gray-700 text-sm">Share your issue and get a legal assessment.</p></div></div>
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">📄</span><div><h3 className="font-bold text-lg text-blue-900">Documentation & Drafting</h3><p className="text-gray-700 text-sm">Prepare a strong complaint with evidence.</p></div></div>
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">⚖️</span><div><h3 className="font-bold text-lg text-blue-900">Filing the Complaint</h3><p className="text-gray-700 text-sm">Submit your case to the relevant forum.</p></div></div>
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">👨‍⚖️</span><div><h3 className="font-bold text-lg text-blue-900">Legal Representation</h3><p className="text-gray-700 text-sm">Get the best advocate for your case.</p></div></div>
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">🔍</span><div><h3 className="font-bold text-lg text-blue-900">Regular Case Monitoring</h3><p className="text-gray-700 text-sm">Track hearings and receive timely updates.</p></div></div>
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">✅</span><div><h3 className="font-bold text-lg text-blue-900">Case Resolution</h3><p className="text-gray-700 text-sm">Seek compensation or legal remedies.</p></div></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg"><h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Types of Consumer Cases We Handle</h2><div className="grid md:grid-cols-2 gap-6"><div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"><div className="flex items-center mb-2"><span className="text-2xl mr-3">📦</span><h3 className="text-lg font-bold text-blue-900">Defective Goods</h3></div><p className="text-gray-700 text-sm">Faulty, damaged, or substandard products sold without proper quality assurance.</p></div><div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"><div className="flex items-center mb-2"><span className="text-2xl mr-3">📄</span><h3 className="text-lg font-bold text-blue-900">Deficient Services</h3></div><p className="text-gray-700 text-sm">Poor service by banks, telecom, real estate, or any provider failing to meet expectations.</p></div><div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"><div className="flex items-center mb-2"><span className="text-2xl mr-3">💳</span><h3 className="text-lg font-bold text-blue-900">Online Fraud</h3></div><p className="text-gray-700 text-sm">Payment failures, unauthorized transactions, fake e-commerce deals, or digital fraud.</p></div><div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300"><div className="flex items-center mb-2"><span className="text-2xl mr-3">🏠</span><h3 className="text-lg font-bold text-blue-900">Real Estate Issues</h3></div><p className="text-gray-700 text-sm">Delayed possession, poor construction quality, or misrepresentation of agreements.</p></div></div></div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg"><h2 className="text-2xl font-bold text-center text-gray-800">Documents Required</h2><div className="w-16 h-1 bg-green-500 mx-auto my-4"></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><FileText className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Purchase Bill</h3><p className="text-gray-600 text-sm">Proof of transaction.</p></div><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><CreditCard className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Warranty Card</h3><p className="text-gray-600 text-sm">For defect disputes.</p></div><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><Mail className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Communications</h3><p className="text-gray-600 text-sm">Emails, SMS, etc.</p></div><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><FileText className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Agreement Copy</h3><p className="text-gray-600 text-sm">For service disputes.</p></div><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><Banknote className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Bank Statements</h3><p className="text-gray-600 text-sm">Proof of payment.</p></div><div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg flex flex-col items-center"><Clipboard className="w-8 h-8 text-yellow-500 mb-3" /><h3 className="font-semibold text-gray-800">Complaint Draft</h3><p className="text-gray-600 text-sm">Formal grievance.</p></div></div></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;