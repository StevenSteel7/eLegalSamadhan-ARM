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
          backgroundImage: 'url("/images/fssai.jpg")',
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
              BEGIN WITH LEGAL REGISTRATION OF YOUR FSSAI LICENSE
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight flex items-center gap-3 flex-wrap">
              <img
                src={fssaiLogo.src} // Use your imported logo variable
                alt="FSSAI"
                className="h-14 md:h-16 rounded-2xl bg-white p-1 shadow-md"
              />
              License Registration
            </h1>

            <p className="text-lg text-gray-700">
              Get your FSSAI license with seamless, trusted & hassle-free services at competitive rates.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Get your FSSAI License!
            </h2>

            <ul className="space-y-3">
              {[
                'Quick and Hassle-Free Process',
                'Get License Certificate',
                'No Hidden Fee',
                'Expert Assistance for Lifetime'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
                                title="Need Help with FSSAI Registration?"
                                formSource="For FSSAI Registration Services"
                                buttonText="Request Callback for FSSAI Registration"
                                />
            
        </div>
      </div>
    </div>

      {/* Headline */}
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            FSSAI Registration | Food Safety License & Certification
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            The Food Safety and Standards Authority of India (FSSAI) is the regulatory body responsible for ensuring food safety and hygiene in India. Every food business operator (FBO), whether a manufacturer, processor, distributor, or seller, must obtain FSSAI registration or license to legally operate.
          </p>
        </div>
      </div>
    
      <div id='Who Needs FSSAI' className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div id="Who Needs FSSAI Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
              {/* Title Section */}
              <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                  <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Who Needs an
                  </span>
                  <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                    FSSAI Registration?
                  </span>
                </div>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
              </div>

              {/* Business Types Grid */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mb-12">
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">Food Manufacturers & Processors</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Companies involved in food production and processing operations</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">Restaurants & Hospitality</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Restaurants, cafes, hotels, and catering services</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">Food Retailers & Distributors</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Businesses involved in food retail and distribution</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">E-commerce Food Sellers</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Online platforms selling food products</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">Street Food Vendors</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Small food businesses and street food operations</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                  <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-emerald-600">Specialized Processing Units</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Dairy, meat processing, and packaging facilities</p>
                </div>
              </div>

              {/* License Types */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Types of FSSAI Registration</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">Basic Registration</div>
                    <div className="text-gray-700 font-medium mb-2 transition-colors duration-300 group-hover/resolution:text-gray-800">For small businesses</div>
                    <div className="text-gray-600 transition-colors duration-300 group-hover/resolution:text-gray-700">Annual turnover ≤ ₹12 lakh</div>
                  </div>

                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">State License</div>
                    <div className="text-gray-700 font-medium mb-2 transition-colors duration-300 group-hover/resolution:text-gray-800">For mid-size businesses</div>
                    <div className="text-gray-600 transition-colors duration-300 group-hover/resolution:text-gray-700">Turnover ₹12 lakh – ₹20 crore</div>
                  </div>

                  <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/resolution">
                    <div className="w-16 h-16 border-2 border-emerald-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/resolution:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 mb-3 transition-colors duration-300 group-hover/resolution:text-emerald-700">Central License</div>
                    <div className="text-gray-700 font-medium mb-2 transition-colors duration-300 group-hover/resolution:text-gray-800">For large businesses</div>
                    <div className="text-gray-600 transition-colors duration-300 group-hover/resolution:text-gray-700">Turnover {'>'} ₹20 crore</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    <div className='bg-slate-100'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* why its important */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    {/* Title Section */}
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Why is FSSAI Registration Required?
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        FSSAI registration is mandatory for all food businesses under the Food Safety and Standards Act, 2006. The registration ensures that food products meet the required quality standards and are safe for consumption.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {/* Legal Compliance */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <Gavel className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Legal Compliance</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Mandatory as per Food Safety and Standards Act, 2006.</p>
                        </div>

                        {/* Consumer Trust */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <UserCheck className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Consumer Trust</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Enhances brand credibility by assuring quality and safety.</p>
                        </div>

                        {/* Business Growth */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <DollarSign className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Business Growth</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Required for expansion, entering new markets, and exporting.</p>
                        </div>

                        {/* Avoid Legal Troubles */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <ShieldCheck className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Avoid Legal Troubles</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Helps in compliance with food safety norms and prevents penalties.</p>
                        </div>

                        {/* Better Hygiene Standards */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <ClipboardList className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Better Hygiene Standards</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Ensures food is prepared, stored, and transported safely.</p>
                        </div>

                        {/* Mandatory for Online Selling */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <Video className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Mandatory for Online Selling</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Platforms like Swiggy, Zomato, and Amazon require FSSAI approval.</p>
                        </div>
                    </div>
                </div>

                {/* Consequences of Not Registering Under FSSAI */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    {/* Title Section */}
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-red-800 text-center">
                            Consequences of Not Registering Under FSSAI
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        Operating a food business without FSSAI registration is a punishable offense under the Food Safety and Standards Act, 2006. If caught, the business may face severe legal and financial penalties.
                    </p>

                    {/* Consequences Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700 mb-8">
                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">❌</div>
                                <h2 className="text-lg font-bold text-red-900">Heavy Fines & Penalties</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Substantial monetary penalties that can severely impact business finances.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">❌</div>
                                <h2 className="text-lg font-bold text-red-900">Business Closure</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Immediate closure of business operations and license suspension.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">❌</div>
                                <h2 className="text-lg font-bold text-red-900">Product Seizure & Recall</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Authorities can seize products and force immediate market recalls.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">❌</div>
                                <h2 className="text-lg font-bold text-red-900">Legal Action & Imprisonment</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Possibility of imprisonment for severe violations of food safety norms.</p>
                        </div>
                    </div>

                    {/* Penalties Table */}
                    <div className="overflow-x-auto">
                        <h2 className="text-xl font-bold text-red-800 mb-4">Penalties for Non-Compliance</h2>
                        <table className="min-w-full bg-white border border-red-200">
                            <thead>
                                <tr className="bg-red-50">
                                    <th className="py-3 px-4 border-b text-left text-red-900">Violation</th>
                                    <th className="py-3 px-4 border-b text-left text-red-900">Penalty/Fine</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-red-50">
                                    <td className="py-2 px-4 border-b">Operating without FSSAI registration</td>
                                    <td className="py-2 px-4 border-b">Up to ₹5 lakh fine</td>
                                </tr>
                                <tr className="hover:bg-red-50">
                                    <td className="py-2 px-4 border-b">Selling unsafe food (injury to consumer)</td>
                                    <td className="py-2 px-4 border-b">₹1 lakh – ₹3 lakh fine</td>
                                </tr>
                                <tr className="hover:bg-red-50">
                                    <td className="py-2 px-4 border-b">Selling unsafe food (death of consumer)</td>
                                    <td className="py-2 px-4 border-b">₹5 lakh fine + possible imprisonment</td>
                                </tr>
                                <tr className="hover:bg-red-50">
                                    <td className="py-2 px-4 border-b">False or misleading advertisements</td>
                                    <td className="py-2 px-4 border-b">Up to ₹10 lakh fine</td>
                                </tr>
                                <tr className="hover:bg-red-50">
                                    <td className="py-2 px-4 border-b">Substandard or misbranded food</td>
                                    <td className="py-2 px-4 border-b">₹1 lakh – ₹3 lakh fine</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default page