'use client';
import React, { useState } from 'react';
import { Star, Building2, FileBarChart, FileCheck, RefreshCw, BookOpen, Leaf, Handshake } from 'lucide-react';
import {
    ClipboardList,
    Clock,
    DollarSign,
    Gavel,
    UserCheck,
    ShieldCheck,
    Video,
  } from "lucide-react";
import { h3 } from 'framer-motion/client';
import CallbackForm from '@/app/components/callBackForm';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    
  <div className=" bg-gradient-to-br from-blue-50 to-blue-100 ">
    
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100  overflow-hidden"> {/* Added gradient here if needed, or keep it simple */}
      {/* Background Image */}
      <div
        // 2. Changed height from vh units to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          backgroundImage: 'url("/images/company.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 3. Added no-repeat
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10 cursor-default">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center text-sm text-blue-800 font-semibold">
              <Building2 className="w-4 h-4 mr-2" />
              BEGIN WITH LEGAL REGISTRATION OF YOUR LLP COMPANY
            </div>

            {/* 6. Fixed typo in heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight">
              Limited Liability Partnership Registration
            </h1>

            <p className="text-lg text-gray-700">
              Every Start-Up deserves seamless, trusted & hassle-free Legal Services along with StartUp
              mentorship, in a very cost-effective manner.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Get your Company registered!
            </h2>

            <ul className="space-y-3">
              {[
                'Lowest Price Guarantee',
                'Quick and Hassle-Free Process',
                'Get Registration Certificate', // 7. Fixed typo
                'No Hidden Fee',
                'Expert Assistance for Lifetime'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                   {/* 4. Added flex-shrink-0 */}
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
            title="Need Help with LLP Registration?"
            formSource="LLP Registration"
            buttonText="Request Callback  "/>
              
        </div>
      </div>
    </div>



    

  <div id="Docs Req" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-14 cursor-default ">
    <div className="max-w-7xl mx-auto px-4  ">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-3 group">
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300">Documents</h2>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:tracking-wider">Required?</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full  group-hover:w-32 transition-all duration-500"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Everything you need to successfully incorporate your company</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* For the Director & Nominee */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-2xs text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">For Partners</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🆔</span> PAN Card
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🆔</span> Aadhaar Card
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🪪</span> Passport/Driver's License/Voter ID
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🏠</span> Bank Statement/Utility Bill/Rent Agreement
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🖼️</span> Passport-size photographs
            </p>
          
          </div>
        </div>
        
        {/* For the Registered Office */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">For Registered Office</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">📃</span> Rent Agreement (if rented)
            </p>
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">📄</span> No Objection Certificate (NOC)
            </p>
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">💡</span> Utility Bill (not older than 2 months)
            </p>
          </div>
        </div>
        
        {/* Company Incorporation Documents */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">LLP Incorporation Documents</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">📘</span> LLP Aggrement
            </p>
        
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🤵</span> Consent of designated partners
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🎤</span>Statement of Partners' Contribution and Profit Sharing Ratio
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🧾</span> - Application for name approval (RUN-LLP Form)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="bg-gray-100  py-20">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-16">

      {/* Compliances Component */}
            <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
            <div className="flex items-center mb-6">
                <div className="md:w-16 md:h-16  bg-teal-100 rounded-full flex items-center justify-center mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Compliances Required After Registration</h3>
            </div>
            <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
            
            {/* Grid for Box Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-default">
                                {[
                {
                    title: "Filing of LLP Agreement (Form LLP-3)",
                    desc: "The LLP Agreement must be filed with the MCA within 30 days of incorporation."
                },
                {
                    title: "Maintain Books of Accounts",
                    desc: "Proper books of accounts and financial records must be maintained as per prescribed norms."
                },
                {
                    title: "Statement of Accounts & Solvency (Form LLP-8)",
                    desc: "To be filed within 6 months from the end of the financial year, declaring the financial status of the LLP."
                },
                {
                    title: "Annual Return Filing (Form LLP-11)",
                    desc: "To be filed within 60 days from the end of the financial year, capturing basic details of the LLP."
                },
                {
                    title: "Income Tax Return Filing",
                    desc: "Every LLP must file its income tax return annually with the Income Tax Department."
                },
                {
                    title: "Filing of Changes in Partners or Agreement (Form LLP-4)",
                    desc: "Any changes in partners or the LLP Agreement must be filed with MCA using Form LLP-4."
                },
                {
                    title: "GST Compliance (if applicable)",
                    desc: "If the LLP is registered under GST, it must adhere to GST return filing and related compliances."
                },
                {
                    title: "DIR-3 KYC Filing",
                    desc: "Designated partners must file their KYC details annually using DIR-3 KYC."
                }
                ]
                .map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
                    <h4 className="text-teal-700 font-medium">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
                ))}
            </div>
        </div>


        {/* Benefits of an LLP Component */}
        <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
          <div className="flex items-center mb-6">
            <div className="md:w-16 md:h-16  bg-teal-100 rounded-full flex items-center justify-center mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Benefits of an LLP</h3>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
          <div className="grid grid-cols-1 gap-6 ">
            {[
                {
                    title: "Limited Liability Protection",
                    desc: "Partners are not personally liable for business debts and obligations."
                },
                {
                    title: "Separate Legal Entity",
                    desc: "An LLP has its own legal identity, separate from its partners."
                },
                {
                    title: "No Minimum Capital Requirement",
                    desc: "There is no mandatory minimum capital contribution."
                },
                {
                    title: "Flexibility in Management",
                    desc: "Partners have the freedom to decide their roles and responsibilities."
                },
                {
                    title: "Lesser Compliance Burden",
                    desc: "Compared to a Private or Public Limited Company, LLPs have fewer regulatory requirements."
                },
                {
                    title: "Perpetual Succession",
                    desc: "An LLP continues to exist even if partners change."
                }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
              <h4 className="text-teal-700 font-medium">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>

  


    </div>
  );
};

export default App;
