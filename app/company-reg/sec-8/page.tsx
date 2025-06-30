'use client';
import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

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
    
  <div className=" bg-gradient-to-br from-blue-50 to-blue-100">

<div className="relative bg-gradient-to-br from-blue-50 to-blue-100  overflow-hidden">
      {/* Background Image */}
      <div
        // 2. Changed height from vh units to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          backgroundImage: 'url("/images/ngo.png")',
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
              BEGIN WITH LEGAL REGISTRATION OF YOUR COMPANY
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight">
              Section 8 Company Registration {/* Added Registration for clarity */}
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
                'Get Registration Certificate', // 6. Fixed typo
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
            title="Need Help with Section 8 Company Registration?"
            formSource="Section 8 Company Registration"
            buttonText="Request Callback "/>
        </div>
      </div>
    </div>

    <div id="Docs Req" className="bg-gray-100 py-16 cursor-default p-24">
      <div className=" mx-auto px-8 ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3 group">
            <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300">Documents</h2>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:tracking-wider">Required?</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full  group-hover:w-32 transition-all duration-500"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Everything you need to successfully incorporate your company</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">

          {/* For the Director & Nominee */}
          <div className="bg-white p-10 rounded-2xl  shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-2xs text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">For the Director & Nominee</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
                <span className="mr-2">🆔</span> PAN Card
              </p>
              <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
                <span className="mr-2">🆔</span> Aadhaar Card
              </p>
              <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
                <span className="mr-2">🪪</span> Passport/Driver's License/Voter ID (as identity proof)
              </p>
              <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
                <span className="mr-2">🏠</span> Bank Statement/Electricity Bill/Rent Agreement (as address proof)
              </p>
              <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
                <span className="mr-2">🖼️</span> Passport-size photographs
              </p>
            </div>
          </div>
          
          {/* For the Registered Office */}
          <div className="bg-white p-10 rounded-2xl  shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">For the Registered Office</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
                <span className="mr-2">📃</span> Rent Agreement (if rented)
              </p>
              <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
                <span className="mr-2">📄</span> No Objection Certificate (NOC) from the landlord
              </p>
              <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
                <span className="mr-2">💡</span> Utility Bill (not older than 2 months)
              </p>
            </div>
          </div>
          
          {/* Company Incorporation Documents */}
          <div className="bg-white p-10 rounded-2xl  shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Company Incorporation Documents</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📘</span> Memorandum of Association (MoA) with objectives for charitable purposes
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📗</span> Articles of Association (AoA)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🤵</span> Declaration by Directors (Form INC-15)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🔢</span> Board Resolution for Incorporation
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🧾</span> Application for name approval (RUN Form)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📊</span> Projected income and expenditure statement for three years
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">✅</span> Declaration confirming compliance with Section 8 requirements
              </p>
            </div>
          </div>


        </div>
        
      </div>
    </div>


    <div id='Compliances'className="bg-gray-100 py-20 p-24">
      <div className="max-w-max mx-auto px-8">
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
                      title: "Annual Returns & Financials",
                      desc: "Filing of Annual Returns (MGT-7) and Financial Statements (AOC-4) with the Registrar of Companies."
                  },
                  {
                      title: "Books & Records",
                      desc: "Maintain proper books of accounts and statutory records as per Companies Act."
                  },
                  {
                      title: "Income Tax Return",
                      desc: "File Income Tax Return annually, even if there is no income."
                  },
                  {
                      title: "Tax Exemption Renewal",
                      desc: "Obtaining renewal of 12A and 80G certificates (if applicable)."
                  },
                  {
                      title: "Profit Distribution",
                      desc: "No distribution of profits among members as per Section 8 regulations."
                  },
                  {
                      title: "Meetings",
                      desc: "Conducting Annual General Meetings (AGM) and Board Meetings regularly."
                  },
                  {
                      title: "Business Commencement",
                      desc: "Filing Form INC-20A (Declaration for Commencement of Business)."
                  },
                  {
                      title: "Activity Reports",
                      desc: "Regular submission of activity reports to the Registrar of Companies."
                  },
                  {
                      title: "FCRA Compliance",
                      desc: "Compliance with Foreign Contribution Regulation Act (if receiving foreign donations)."
                  }
                  ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
                      <h4 className="text-teal-700 font-medium">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  ))}
              </div>
          </div>


          {/* Benefits of Section 8 Company Component */}
          <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
            <div className="flex items-center mb-6">
              <div className="md:w-16 md:h-16  bg-teal-100 rounded-full flex items-center justify-center mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Benefits of Section 8 Company</h3>
            </div>
            <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
            <div className="grid grid-cols-1 gap-6 ">
              {[
                {
                  title: "Non-Profit Status",
                  desc: "The company is legally recognized as a charitable organization."
                },
                {
                  title: "Tax Exemptions",
                  desc: "Eligible for 12A and 80G exemptions under the Income Tax Act."
                },
                {
                  title: "Limited Liability",
                  desc: "Members' liability is limited to their shareholding."
                },
                {
                  title: "Separate Legal Entity",
                  desc: "The company has its own legal identity."
                },
                {
                  title: "Credibility and Trust",
                  desc: "Recognized as a formal structure for social work, increasing credibility."
                },
                {
                  title: "Perpetual Succession",
                  desc: "Continues to exist even if members change."
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
