'use client';

import { AlertCircle, Briefcase, DollarSign, FileText, Globe, Lightbulb, Lock, Scale, ShieldCheck, Star } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link'; // Keep if you plan to use Link elsewhere, otherwise remove if unused.
import CallbackForm from '../components/callBackForm'; // Ensure this path is correct

const Page = () => { // Changed component name to start with uppercase 'Page' for convention

  const [activeTab, setActiveTab] = useState<'trademark' | 'patent' | 'copyright'>('trademark');

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-[50vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/trademark.jpg')" }} // Ensure this image path is correct
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <section className="relative z-10 flex flex-col justify-center items-center text-white min-h-[50vh] px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Secure Your Brand | Trademark Registration Made Easy
            </h1>
            {/* Removed empty paragraph, adjust if needed */}
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className='py-5 bg-slate-100'></div>

      {/* Headline Section */}
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Intellectual Property Services | Trademark, Patent & Copyright Protection
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Safeguard your brand, inventions, and creative works with our end-to-end Intellectual Property (IP) services. Whether you're registering a trademark, filing a patent, or protecting your original content with copyright, our team ensures a smooth, compliant, and cost-effective experience. From documentation to filing and legal guidance — we've got your IP needs covered under one roof.
          </p>
        </div>
      </div>

      {/* Tab Switching Component Container */}
      <div className='flex flex-col'>

        {/* Tab Buttons Section */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto pt-8 pb-1 px-4 rounded-2xl items-center bg-slate-50">
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-4">
              <button
                onClick={() => setActiveTab('trademark')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'trademark'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Trademark Registration
              </button>

              <button
                onClick={() => setActiveTab('patent')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'patent'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Patent Registration
              </button>

              <button
                onClick={() => setActiveTab('copyright')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'copyright'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Copyright Registration
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          {/* Content Sections Wrapper - Added overflow-x-hidden here */}
          <div className="relative overflow-x-hidden"> {/* <<<--- FIX APPLIED HERE */}

            {/* Trademark Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'trademark' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none' // Added pointer-events-none to inactive
              }`}
            >
              <div id='Why Trademark' className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-1 gap-8 justify-items-center"> {/* Changed to grid-cols-1 for full width sections */}
                    {/* Why Choose Trademark Registration Section */}
                    <div id="Why Choose Trademark Registration" className="group w-full bg-slate-50 rounded-2xl p-8 shadow-lg"> {/* Added shadow */}
                      <div className="p-8 mx-auto rounded-2xl flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">Why Register a</span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">Trademark?</span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-24 transform duration-200"></div> {/* Adjusted hover width */}
                      </div>
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Benefit Cards (condensed for brevity, keep your original content) */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                                <ShieldCheck className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/legal:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-emerald-600">Legal Protection</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Prevents unauthorized use and infringement.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                                <Lock className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-emerald-600">Exclusive Rights</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">Owner has exclusive rights for registered goods/services.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/brand">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/brand:rotate-12 group-hover/brand:shadow-lg relative overflow-hidden bg-white">
                                <Star className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/brand:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/brand:text-emerald-600">Brand Recognition</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/brand:text-gray-800">Enhances credibility and builds a strong brand identity.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/asset">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/asset:rotate-12 group-hover/asset:shadow-lg relative overflow-hidden bg-white">
                                <Briefcase className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/asset:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/asset:text-emerald-600">Business Asset</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/asset:text-gray-800">Can be sold, licensed, or franchised to generate revenue.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/global">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/global:rotate-12 group-hover/global:shadow-lg relative overflow-hidden bg-white">
                                <Globe className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/global:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/global:text-emerald-600">Global Expansion</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/global:text-gray-800">Easier international registration via Madrid Protocol.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/symbol">
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/symbol:rotate-12 group-hover/symbol:shadow-lg relative overflow-hidden bg-white">
                                <span className="text-5xl font-bold text-emerald-500 transition-transform duration-300 group-hover/symbol:scale-110">®</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/symbol:text-emerald-600">Trademark Symbol Usage</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/symbol:text-gray-800">Registered marks can use the ® symbol.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/competition md:col-start-2"> {/* Centered last item */}
                            <div className="w-16 h-16 border-2 border-emerald-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/competition:rotate-12 group-hover/competition:shadow-lg relative overflow-hidden bg-white">
                                <Scale className="w-10 h-10 text-emerald-500 transition-transform duration-300 group-hover/competition:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/competition:text-emerald-600">Prevention of Unfair Competition</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/competition:text-gray-800">Prevents misleading use of similar marks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Required and Compliances Section */}
              <div id='Trademark Docs & Compliance' className="bg-gray-100 py-12">
                 <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {/* Documents Required for Individual/Proprietor */}
                       <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Docs: Individual/Proprietor</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📄</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Identity Proof</h3>
                                        <p className="text-gray-700 text-sm">Aadhaar, PAN, Passport, etc.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🖼️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Logo/Brand Name</h3>
                                        <p className="text-gray-700 text-sm">Logo in JPEG format (if applicable).</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">✍️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Signed PoA</h3>
                                        <p className="text-gray-700 text-sm">If filing via attorney.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🏠</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Address Proof</h3>
                                        <p className="text-gray-700 text-sm">Valid proof of applicant's address.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Documents Required for Company/LLP */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Docs: Company/LLP</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🏢</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Incorporation Cert.</h3>
                                        <p className="text-gray-700 text-sm">Or Partnership Deed.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">💳</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Company PAN</h3>
                                        <p className="text-gray-700 text-sm">PAN card of the entity.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📜</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Board Resolution</h3>
                                        <p className="text-gray-700 text-sm">Authorizing registration (if applicable).</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">✍️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Signed PoA</h3>
                                        <p className="text-gray-700 text-sm">If filing via attorney.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3 sm:col-span-2">
                                    <span className="text-xl mt-1">📝</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">GST Certificate</h3>
                                        <p className="text-gray-700 text-sm">If applicable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Callback Form */}
                        <CallbackForm
                            title="Need Help with Trademark Registration?"
                            formSource="Trademark Registration"
                            buttonText="Request Callback for Trademark"
                            />

                        {/* Compliances After Registration */}
                        <div id="Trademark Compliances" className="bg-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Compliances After Registration</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🔄</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Trademark Renewal</h3>
                                        <p className="text-gray-700 text-sm">Renew every 10 years to maintain protection.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">👀</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Trademark Monitoring</h3>
                                        <p className="text-gray-700 text-sm">Regularly check for infringing marks.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">✅</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Usage of Trademark</h3>
                                        <p className="text-gray-700 text-sm">Ensure continuous use to avoid cancellation.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">⚖️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Legal Enforcement</h3>
                                        <p className="text-gray-700 text-sm">Take action against infringement.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📜</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Assignment/Licensing</h3>
                                        <p className="text-gray-700 text-sm">Record changes with the Trademark Office.</p>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📝</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-emerald-900">Filing Opposition</h3>
                                        <p className="text-gray-700 text-sm">Oppose similar new applications if needed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Patent Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'patent' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none' // Added pointer-events-none to inactive
              }`}
            >
              <div id="Why Patent" className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-1 gap-8 justify-items-center"> {/* Changed to grid-cols-1 */}
                    <div id="Why Choose Patent Registration" className="group w-full bg-slate-50 rounded-2xl p-8 shadow-lg"> {/* Added shadow */}
                      <div className="p-8 mx-auto rounded-2xl flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">Why Register a</span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">Patent?</span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-24 transform duration-200"></div>
                      </div>
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Benefit Cards (condensed, use your original content) */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                                <Lock className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-blue-600">Exclusive Rights</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">Exclusive rights to make, use, sell invention.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/money">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/money:rotate-12 group-hover/money:shadow-lg relative overflow-hidden bg-white">
                                <DollarSign className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/money:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/money:text-blue-600">Monetary Gains</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/money:text-gray-800">Can be licensed, sold, or used for revenue.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                                <ShieldCheck className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/legal:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Protection</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Prevents others from copying without permission.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/competition">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/competition:rotate-12 group-hover/competition:shadow-lg relative overflow-hidden bg-white">
                                <Scale className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/competition:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/competition:text-blue-600">Competitive Advantage</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/competition:text-gray-800">Restricts competitors from using similar tech.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/business">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/business:rotate-12 group-hover/business:shadow-lg relative overflow-hidden bg-white">
                                <Briefcase className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/business:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/business:text-blue-600">Enhances Business Value</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/business:text-gray-800">Increases company valuation with IP assets.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/innovation">
                            <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/innovation:rotate-12 group-hover/innovation:shadow-lg relative overflow-hidden bg-white">
                                <Lightbulb className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/innovation:scale-110" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/innovation:text-blue-600">Encourages Innovation</h3>
                            <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/innovation:text-gray-800">Promotes R&D by providing incentives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Patent Docs & Compliance" className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto p-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Documents Required for Patent Filing */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Documents for Patent Filing</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📝</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Application (Form 1)</h3>
                                        <p className="text-gray-700 text-sm">Official application form.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📄</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Specification (Form 2)</h3>
                                        <p className="text-gray-700 text-sm">Complete/provisional details.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📋</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Statement (Form 3)</h3>
                                        <p className="text-gray-700 text-sm">Declaration on foreign filings.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🧑‍🔬</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Inventor Decl. (Form 5)</h3>
                                        <p className="text-gray-700 text-sm">Confirms inventor identity.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📠</span> {/* Using Fax icon as placeholder */}
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Proof of Right</h3>
                                        <p className="text-gray-700 text-sm">If applicant isn't the inventor.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">✍️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Power of Attorney</h3>
                                        <p className="text-gray-700 text-sm">If filed via patent attorney.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🌐</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Priority Documents</h3>
                                        <p className="text-gray-700 text-sm">If claiming foreign priority.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">💰</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Payment Receipt</h3>
                                        <p className="text-gray-700 text-sm">Proof of government fee payment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Callback Form */}
                       <CallbackForm
                           title="Need Help with Patent Registration?"
                           formSource="Patent Registration"
                           buttonText="Request Callback for Patent"
                       />


                       
                   </div>
                   {/* Compliances After Registration */}
                   <div className='w-full py-4'></div>
                   <div id="Patent Compliances" className="bg-white p-6 rounded-2xl shadow-lg md:col-start-2 "> {/* Adjust grid positioning */}
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Compliances After Registration</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🔁</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Renewal & Maintenance</h3>
                                        <p className="text-gray-700 text-sm">Renew annually from 3rd year.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📄</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Working Report (Form 27)</h3>
                                        <p className="text-gray-700 text-sm">Annual statement on commercial use.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">👁️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Monitor Infringement</h3>
                                        <p className="text-gray-700 text-sm">Check for unauthorized use.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🌍</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Intl. Protection (PCT)</h3>
                                        <p className="text-gray-700 text-sm">Apply if commercializing globally.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3 sm:col-span-2">
                                    <span className="text-xl mt-1">📑</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-blue-900">Assignment/Licensing</h3>
                                        <p className="text-gray-700 text-sm">Update patent office records.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'copyright' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none' // Changed to translate-x-full, Added pointer-events-none
              }`}
            >
               <div id="Why Copyright" className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-1 gap-8 justify-items-center"> {/* Changed to grid-cols-1 */}
                    <div id="Why Choose Copyright Registration" className="group w-full bg-slate-50 rounded-2xl p-8 shadow-lg"> {/* Added shadow */}
                      <div className="p-8 mx-auto rounded-2xl flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">Why Register a</span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">Copyright?</span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-24 transform duration-200"></div>
                      </div>
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Benefit Cards (condensed, use your original content) */}
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                                 <ShieldCheck className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/legal:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-purple-600">Legal Protection</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Provides legal evidence of ownership.</p>
                         </div>
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                                 <Lock className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-purple-600">Exclusive Rights</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">Right to reproduce, distribute, display work.</p>
                         </div>
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/money">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/money:rotate-12 group-hover/money:shadow-lg relative overflow-hidden bg-white">
                                 <DollarSign className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/money:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/money:text-purple-600">Monetary Benefits</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/money:text-gray-800">Can sell, license, or exploit commercially.</p>
                         </div>
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/record">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/record:rotate-12 group-hover/record:shadow-lg relative overflow-hidden bg-white">
                                 <FileText className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/record:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/record:text-purple-600">Public Record</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/record:text-gray-800">Acts as public record of ownership in disputes.</p>
                         </div>
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/international">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/international:rotate-12 group-hover/international:shadow-lg relative overflow-hidden bg-white">
                                 <Globe className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/international:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/international:text-purple-600">International Protection</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/international:text-gray-800">Facilitates protection via treaties.</p>
                         </div>
                         <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/unauthorized">
                             <div className="w-16 h-16 border-2 border-purple-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/unauthorized:rotate-12 group-hover/unauthorized:shadow-lg relative overflow-hidden bg-white">
                                 <AlertCircle className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover/unauthorized:scale-110" />
                             </div>
                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/unauthorized:text-purple-600">Prevent Unauthorized Use</h3>
                             <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/unauthorized:text-gray-800">Discourages unauthorized copying.</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Copyright Docs & Compliance" className="bg-gray-100 py-12">
                 <div className="max-w-7xl mx-auto p-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Documents Required for Copyright */}
                         <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Documents for Copyright</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📝</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Application (Form XIV)</h3>
                                        <p className="text-gray-700 text-sm">Duly filled official form.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📂</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Copies of the Work</h3>
                                        <p className="text-gray-700 text-sm">Soft/hard copies as applicable.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🪪</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Identity Proof</h3>
                                        <p className="text-gray-700 text-sm">Aadhaar, PAN, Passport, etc.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📜</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Proof of Ownership</h3>
                                        <p className="text-gray-700 text-sm">Documents showing authorship (if needed).</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">✍️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Power of Attorney</h3>
                                        <p className="text-gray-700 text-sm">If applying via representative.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">💵</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Payment Receipt</h3>
                                        <p className="text-gray-700 text-sm">Proof of government fee payment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Callback Form */}
                        <CallbackForm
                           title="Need Help with Copyright Registration?"
                           formSource="Copyright Registration"
                           buttonText="Request Callback for Copyright"
                       />

                       {/* Compliances After Registration */}
                       
                     </div>

                     <div className='w-full py-7'></div>

                     <div id="Copyright Compliances" className="bg-white p-6 rounded-2xl shadow-lg md:col-start-2"> {/* Adjust grid positioning */}
                            <h2 className="text-2xl pb-4 font-bold text-gray-800 text-center mb-4 border-b border-gray-200">Compliances After Registration</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🔍</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Regular Monitoring</h3>
                                        <p className="text-gray-700 text-sm">Ensure no unauthorized use.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">📅</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Term Awareness</h3>
                                        <p className="text-gray-700 text-sm">Lasts life + 60 years (usually).</p> {/* Simplified */}
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">⚖️</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Enforcement of Rights</h3>
                                        <p className="text-gray-700 text-sm">Take legal action against infringement.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3">
                                    <span className="text-xl mt-1">🤝</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">Licensing & Assignment</h3>
                                        <p className="text-gray-700 text-sm">Record agreements properly.</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-start space-x-3 sm:col-span-2">
                                    <span className="text-xl mt-1">🌐</span>
                                    <div>
                                        <h3 className="font-semibold text-md text-purple-900">International Protection</h3>
                                        <p className="text-gray-700 text-sm">Protection via treaties (e.g., Berne).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
              </div>
            </div>

          </div> {/* End of relative overflow-x-hidden wrapper */}
        </div> {/* End of Tab Content Area */}

      </div> {/* End of Tab Switching Component Container */}

    </div>
  );
};

export default Page;