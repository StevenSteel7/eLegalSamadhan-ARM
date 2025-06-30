'use client';
import React, { useState } from 'react';

const stateOptions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];
  


import {
  ClipboardList,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  Globe,
  UserCheck,
  Banknote,
  BarChart,
  BookOpen,
  CreditCard,
  Currency,
  FileBarChart,
  FileCheck,
  Handshake,
  IdCard,
  Leaf,
  ListOrdered,
  RefreshCw,
  ShieldCheck,
  Frown,
  TrendingDown,
  AlertCircle,
  Mail,
  Clipboard,
} from "lucide-react";
import CallbackForm from '../components/callBackForm';













const page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // Using 'mobile' in form state, will map to 'phone' for API
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setStatusMessage('Submitting your request...');

    // Simple frontend validation (add more as needed)
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
        formSource: 'Public Limited Company Registration'
      };

      const response = await fetch('/api/request-callback', { // Use the new API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage(result.message || 'Request submitted successfully!');
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
    <div>
      
        <div
        className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/consumer.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50 ">
            <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                eLegal Samadhan | Justice is Served!
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                Resolve Consumer Disputes effortlessly with our Expert Legal
                Assistance!
                </p>
                
            </div>
            </section>
        </div>
        </div>
        
        {/* Content Section */}
        <div className="bg-gray-100 py-12">
            
            <div className="max-w-7xl mx-auto px-4 flex flex-col">
                {/* Headline */}
                <div className="text-center mb-10 max-w-7xl ">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Consumer Complaints | Hassle-Free Legal Assistance
                    </h1>
                    
                    <p className=" text-gray-600 mt-2">
                        Get provide legal assistance to consumers who have been victims of unfair trade practices, defective goods, or deficient services. We assist in filing consumer complaints, choosing the right advocate, and monitoring the progress of your case in consumer courts across India. Our goal is to provide hassle-free and cost-effective solutions for consumer grievances.
                    </p>

                </div>

                <div id='Dispute resolution and form container' className="flex flex-wrap " > 
                    <div  className="max-w-7xl mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Form Section */}
                            <CallbackForm
                                title="Need Help with a Consumer Complaint?"
                                formSource="Consumer Complaint Callback"
                                buttonText="Request Callback for Complaint"
                            />
    
           
                            {/* Dispute Resolution Process */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                                {/* Card Header */}
                                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">Our Dispute Resolution Process</h1>

                                {/* Steps Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📝</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Free Case Evaluation</h2>
                                            <p className="text-gray-700 text-sm">Share your issue and get a legal assessment.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📄</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Documentation & Drafting</h2>
                                            <p className="text-gray-700 text-sm">Prepare a strong complaint with evidence.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">⚖</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Filing the Complaint</h2>
                                            <p className="text-gray-700 text-sm">Submit your case to the relevant forum.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">👨‍⚖️</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Legal Representation</h2>
                                            <p className="text-gray-700 text-sm">Get the best advocate for your case.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🔍</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Regular Case Monitoring</h2>
                                            <p className="text-gray-700 text-sm">Track hearings and receive timely updates.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">✅</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Case Resolution</h2>
                                            <p className="text-gray-700 text-sm">Seek compensation or legal remedies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                    
                    
                    <div id='Costumer case and Docs req container' className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 mt-8">
                        
                    {/* Types of Consumer Cases */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full ">
                        {/* Title Section */}
                        <div className="flex justify-center pb-4">
                            <h1 className="text-2xl font-bold text-gray-800 text-center">
                                Types of Consumer Cases
                            </h1>
                        </div>


                        {/* Cases Grid */}
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            {/* Defective Goods */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📦</span>
                                    <h2 className="text-lg font-bold text-blue-900">Defective Goods</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Faulty, damaged, or substandard products sold without proper quality assurance.</p>
                            </div>

                            {/* Deficient Services */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📄</span>
                                    <h2 className="text-lg font-bold text-blue-900">Deficient Services</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Poor service by banks, telecom, hospitality, real estate, or any service provider failing to meet expectations.</p>
                            </div>

                            {/* Online Fraud */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">💳</span>
                                    <h2 className="text-lg font-bold text-blue-900">Online Fraud</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Payment failures, unauthorized transactions, fake e-commerce deals, or digital fraud cases.</p>
                            </div>

                            {/* Real Estate Issues */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🏠</span>
                                    <h2 className="text-lg font-bold text-blue-900">Real Estate Issues</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Delayed possession, poor construction quality, or misrepresentation of real estate agreements.</p>
                            </div>

                            {/* Medical Negligence */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">💉</span>
                                    <h2 className="text-lg font-bold text-blue-900">Medical Negligence</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Cases involving malpractice, misdiagnosis, overcharging, or substandard medical treatment.</p>
                            </div>

                            {/* Automobile Complaints */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🚗</span>
                                    <h2 className="text-lg font-bold text-blue-900">Automobile Complaints</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Defective vehicles, unfair service charges, or failure in warranty claims.</p>
                            </div>
                        </div>
                    </div>

                        
                        {/* Documents Required for Filing a Consumer Case */}
                        <div id="Documents Required" className="p-6 mx-auto bg-slate-50 group rounded-2xl shadow-lg max-w-4xl ">
                            {/* Title Section */}
                            <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1">
                                <div className="flex justify-center group cursor-pointer">
                                    <span className="text-2xl font-bold text-center text-gray-800 mb-4">
                                        Documents
                                    </span>
                                    <span className="text-2xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                                        Required
                                    </span>
                                </div>
                            <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
                        </div>

                        
                        {/* Documents Grid */}
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 text-center">
                            {/* Purchase Receipt/Bill */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <FileText className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Purchase Receipt/Bill</h3>
                                <p className="text-gray-600 text-sm">Proof of transaction with the seller.</p>
                            </div>

                            {/* Warranty Card */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <CreditCard className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Warranty Card</h3>
                                <p className="text-gray-600 text-sm">For disputes related to product defects.</p>
                            </div>

                            {/* Communication Records */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <Mail className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Communication Records</h3>
                                <p className="text-gray-600 text-sm">Emails, SMS, or chat records of complaints.</p>
                            </div>

                            {/* Agreement/Contract Copy */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <FileText className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Agreement Copy</h3>
                                <p className="text-gray-600 text-sm">For disputes in services like real estate or telecom.</p>
                            </div>

                            {/* Bank Statements */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <Banknote className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Bank Statements</h3>
                                <p className="text-gray-600 text-sm">Proof of payment for goods or services.</p>
                            </div>

                            {/* Affidavit & Complaint Draft */}
                            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-3">
                                    <Clipboard className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Affidavit & Complaint Draft</h3>
                                <p className="text-gray-600 text-sm">A formal legal document stating the grievance.</p>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>

            </div>
                        
            {/* Why Choose US ... using the odering property*/}
            <div className="bg-gray-100 py-12 ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                        {/* // its value is of 2 cols */}
                        <div id="Why Choose US" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                            {/* Title Section */}
                            <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1">
                                <div className="flex justify-center group cursor-pointer flex-col">
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                                        Why Choose
                                    </span>
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                                        US?
                                    </span>
                                </div>
                                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-xs transform duration-200"></div>
                            </div>

                            {/* Features Grid - Modified for center-out arrangement */}
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                                {/* Using CSS order to arrange items from center out */}
                                
                                {/* Center item - will show last or as the center element */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-4 md:col-start-2 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Globe className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Pan-India Services
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        File consumer complaints in district, state, or national
                                        consumer courts.
                                    </p>
                                </div>
                                
                                {/* Items arranged around center */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-1 md:col-start-1 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Gavel className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Expert Legal Assistance
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Get professional help in filing your case before the
                                        consumer court.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-2 md:col-start-2 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <FileText className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Hassle-Free Documentation
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        We assist in preparing and submitting all necessary
                                        documents.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-3 md:col-start-3 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <UserCheck className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Top Advocate Selection
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Choose from a panel of experienced consumer lawyers.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-5 md:col-start-1 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <ClipboardList className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Case Monitoring & Updates
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Stay informed about every stage of your case.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-6 md:col-start-3 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Clock className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Fast & Effective Resolution
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        We ensure timely filing and tracking to speed up the legal
                                        process.
                                    </p>
                                </div>
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-7 md:col-start-2 md:row-start-3">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <DollarSign className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Compensation & Refunds
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Seek monetary compensation for loss, mental agony, or
                                        damages.
                                    </p>
                                </div>

                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
            <h2 className="text-2xl font-bold text-gray-800">
                Get Legal Help Today!
            </h2>
            <p className="text-gray-600 mt-2">
                Register your complaint with eLegal Samadhan and seek justice.
            </p>
          
            </div>
        
        </div>
      
    </div>
  );
};

export default page;
