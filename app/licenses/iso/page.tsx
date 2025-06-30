'use client';
import React, { useState } from 'react';
import { Building2, ClipboardList, DollarSign, Gavel, ShieldCheck, UserCheck, Video } from 'lucide-react';
import fssaiLogo from '../../../public/images/fssai-logo.png'
import CallbackForm from '@/app/components/callBackForm';

const page = () => {
  
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
    <div>


    <div id="banner" className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        // 2. Changed height from fixed vh units to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          // 4. Assuming you might want a different background for ISO? Updated path just in case.
          backgroundImage: 'url("/images/fssai.jpg")', // Or keep '/images/fssai.jpg' if intended
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 3. Added no-repeat for robustness
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Container for content, positioned above the background */}
      <div className="container mx-auto px-4 py-7 relative z-10 cursor-default">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center text-sm text-blue-800 font-semibold">
              <Building2 className="w-4 h-4 mr-2" />
              ENHANCE YOUR BUSINESS WITH ISO CERTIFICATION
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight flex items-center gap-3 flex-wrap">
              ISO Certification Services
            </h1>

            <p className="text-lg text-gray-700">
              Get internationally recognized ISO certification for your business with our professional and efficient certification services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Benefits of ISO Certification
            </h2>

            <ul className="space-y-3">
              {[
                'Enhanced Business Credibility',
                'Improved Process Efficiency',
                'Global Recognition',
                'Continuous Expert Support'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  {/* 5. Added flex-shrink-0 to the bullet point span */}
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
            title="Need Help with ISO Registration?"
            formSource="For ISO Registration Services"
            buttonText="Request Callback for ISO Registration"
            />
              
        </div>
      </div>
    </div>

      {/* Headline */}
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            ISO Registration | International Quality Standards & Certification
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            The International Organization for Standardization (ISO) is a globally recognized body that develops and publishes international standards for businesses. ISO certification validates that an organization follows standardized processes, ensuring quality, efficiency, and safety in their operations. This certification enhances business credibility, improves customer trust, and demonstrates compliance with international best practices.
          </p>
        </div>
      </div>
      
      <div id='Who Needs ISO' className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div id="Who Needs ISO Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
              {/* Title Section */}
              <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                  <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Who Needs an
                  </span>
                  <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                    ISO Registration?
                  </span>
                </div>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
              </div>

              {/* Business Types Grid */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mb-12">
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-blue-600">Manufacturers & Exporters</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Companies involved in manufacturing and export operations</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-purple-600">Service Providers</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">IT, Healthcare, Education sectors</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-red-600">Construction & Engineering</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Construction and engineering companies</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-yellow-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-yellow-600">Food & Pharma</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Food processing and pharmaceutical industries</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-pink-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-pink-600">SMEs</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Small and Medium Enterprises</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-teal-600">Government Contractors</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Companies working with government projects</p>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why is ISO Registration Required?</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">Quality Improvement</div>
                    <div className="text-gray-600 text-center transition-colors duration-300 group-hover/resolution:text-gray-700">Ensures that the business meets global standards</div>
                  </div>

                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">Enhanced Credibility</div>
                    <div className="text-gray-600 text-center transition-colors duration-300 group-hover/resolution:text-gray-700">Increases trust among customers and stakeholders</div>
                  </div>

                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">Market Access</div>
                    <div className="text-gray-600 text-center transition-colors duration-300 group-hover/resolution:text-gray-700">Required for government tenders and international markets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-slate-100'>
          <div className='max-w-7xl mx-auto px-4 py-12'>
              <div className="grid  gap-8">
                  
                

                  {/* Consequences of Not Registering Under iSO */}
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg md:w-7xl mx-auto max-w-full">
        {/* Title Section */}
        <div className="flex justify-center pb-4">
            {/* Smaller text on mobile (text-xl), larger on medium+ (md:text-2xl) */}
            <h1 className="text-xl md:text-2xl font-bold text-red-800 text-center">
                Consequences of Not Having ISO Certification
            </h1>
        </div>

        {/* Slightly reduced bottom margin on mobile */}
        <p className="text-gray-700 mb-4 md:mb-6 text-center">
            While ISO certification is not mandatory, businesses in certain sectors may face penalties under specific laws if they fail to meet industry quality and safety standards.
        </p>

        {/* Industry Sectors Grid */}
        {/* grid-cols-1 is default (mobile), sm:grid-cols-2 activates on small screens and up */}
        {/* Slightly reduced gap on mobile (gap-4), larger gap on small screens+ (sm:gap-6) */}
        {/* Adjusted bottom margin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-700 mb-6 md:mb-8">
            {/* Using p-4 for slightly less padding inside cards on mobile, sm:p-5 for larger */}
            <div className="p-4 sm:p-5 bg-red-50 shadow-md rounded-lg joom">
                <div className="flex items-center mb-2">
                    {/* Icon size w-8 h-8 on mobile, w-10 h-10 on sm+ */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-red-500 shrink-0"> {/* Added shrink-0 */}
                        <ClipboardList className="w-full h-full" />
                    </div>
                    {/* Text size lg is probably okay for both, keeping it */}
                    <h2 className="text-lg font-bold text-red-900">Food & Beverage Industry</h2>
                </div>
                {/* Text size sm is okay */}
                <p className="text-gray-700 text-sm">Fines up to ₹5 lakh for quality violations under FSSAI regulations.</p>
            </div>

            <div className="p-4 sm:p-5 bg-red-50 shadow-md rounded-lg joom">
                <div className="flex items-center mb-2">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-red-500 shrink-0">
                        <ShieldCheck className="w-full h-full" />
                    </div>
                    <h2 className="text-lg font-bold text-red-900">Pharmaceuticals & Healthcare</h2>
                </div>
                <p className="text-gray-700 text-sm">Cancellation of manufacturing license if standards are not met.</p>
            </div>

            <div className="p-4 sm:p-5 bg-red-50 shadow-md rounded-lg joom">
                <div className="flex items-center mb-2">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-red-500 shrink-0">
                        <Gavel className="w-full h-full" />
                    </div>
                    <h2 className="text-lg font-bold text-red-900">Government Contracts</h2>
                </div>
                <p className="text-gray-700 text-sm">Disqualification from tenders and contracts.</p>
            </div>

            <div className="p-4 sm:p-5 bg-red-50 shadow-md rounded-lg joom">
                <div className="flex items-center mb-2">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-red-500 shrink-0">
                        <DollarSign className="w-full h-full" />
                    </div>
                    <h2 className="text-lg font-bold text-red-900">Export-Oriented Businesses</h2>
                </div>
                <p className="text-gray-700 text-sm">Restrictions on exports due to non-compliance with global standards.</p>
            </div>

            {/* col-span-1 is default (mobile), sm:col-span-2 makes it span full width on sm+ */}
            <div className="p-4 sm:p-5 bg-red-50 shadow-md rounded-lg sm:col-span-2 hover:shadow-lg joom">
                <div className="flex items-center mb-2">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 text-red-500 shrink-0">
                        <Building2 className="w-full h-full" />
                    </div>
                    <h2 className="text-lg font-bold text-red-900">Construction & Engineering</h2>
                </div>
                <p className="text-gray-700 text-sm">Heavy penalties for non-compliance with safety and quality standards.</p>
            </div>
        </div>

        {/* Additional Information */}
        {/* Responsive padding */}
        <div className="mt-6 p-4 sm:p-6 bg-red-50 rounded-lg">
            {/* Responsive text size */}
            <h3 className="text-lg md:text-xl font-bold text-red-900 mb-3 md:mb-4">Important Note</h3>
            <p className="text-gray-700 cursor-default">
                While ISO certification itself is voluntary, many industry-specific regulations require businesses to maintain quality and safety standards that align with ISO guidelines. Failure to meet these standards can result in serious legal and financial consequences.
            </p>
        </div>
    </div>













                  
              </div>
          </div>
      </div>


    </div>
  )
}

export default page