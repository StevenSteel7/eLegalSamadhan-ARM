'use client';
import React, { useState } from 'react';
import {Building2} from 'lucide-react';
import CallbackForm from '@/app/components/callBackForm';
const App = () => {


 

  return (
    
  <div className=" bg-gradient-to-br from-blue-50 to-blue-100">
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100  overflow-hidden">
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
              BEGIN WITH LEGAL REGISTRATION OF YOUR COMPANY
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight">
             Nidhi Company Registration {/* Added Registration for clarity */}
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
            title="Need Help with Nidhi Company Registration?"
            formSource="Nidhi Company Registration"
            buttonText="Request Callback"/>
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
              <h3 className="text-xl font-semibold text-gray-800">For Directors</h3>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Company Incorporation Documents</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📜</span> Memorandum of Association (MoA)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📄</span> Articles of Association (AoA)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🧾</span> Declaration by Directors (Form INC-9)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">📝</span> Board Resolution for Incorporation
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🔤</span> Application for name approval (RUN Form)
              </p>
              <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
                <span className="mr-2">🧮</span> Affidavit for Nidhi Rules, 2014 compliance
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
            <div className="md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Compliances Required After Registration</h3>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
          
          {/* Grid for Compliance Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-default">
            {[
              {
                title: "Annual Financial Filing",
                desc: "Mandatory filing of financial statements with the Ministry of Corporate Affairs (MCA) every year."
              },
              {
                title: "Income Tax Return Filing",
                desc: "Startups must file income tax returns annually as per applicable provisions."
              },
              {
                title: "GST Compliance (if applicable)",
                desc: "Businesses registered under GST must file periodic returns and adhere to tax rules."
              },
              {
                title: "DPIIT Update",
                desc: "Update DPIIT on any significant changes in business operations or structure."
              },
              {
                title: "Form MSME-1 Filing",
                desc: "Applicable for companies with delayed payments to MSMEs — to be filed bi-annually."
              },
              {
                title: "Maintain Accounting Records",
                desc: "Proper books of accounts and financial records must be maintained at all times."
              },
              {
                title: "IPR Compliance",
                desc: "If availing patent or trademark benefits, ensure proper filing and renewals as per law."
              },
              {
                title: "Investor & SEBI Filings (if funded)",
                desc: "Startups with external funding must ensure regular reporting to investors and regulatory bodies."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
                <h4 className="text-teal-700 font-medium">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Benefits of Startup India Registration */}
        <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
          <div className="flex items-center mb-6">
            <div className="md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Benefits of Startup India Registration</h3>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
          
          {/* Grid for Benefit Items */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Tax Exemptions",
                desc: "Eligible startups can avail a 3-year income tax holiday under Section 80-IAC."
              },
              {
                title: "Self-Certification Compliance",
                desc: "Startups can self-certify under labor and environmental laws, reducing inspections."
              },
              {
                title: "Easier Public Procurement",
                desc: "Exempt from prior experience and turnover requirements in government tenders."
              },
              {
                title: "Fast-Track Patent Processing",
                desc: "Get 50% rebate on patent filing and faster examination through facilitators."
              },
              {
                title: "Access to Funding",
                desc: "Eligible startups can apply for government seed funds and VC/angel investor support."
              },
              {
                title: "Networking & Mentorship",
                desc: "Connect with investors, mentors, and incubators through Startup India programs."
              },
              {
                title: "Easier Winding Up",
                desc: "Startups can shut down operations within 90 days under a simplified exit process."
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
