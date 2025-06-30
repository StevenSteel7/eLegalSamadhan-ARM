"use client";

import React, { useState } from 'react';
import { Gavel, FileText, DollarSign, Users, Building2, IdCard, MapPin, Camera, Globe, ShieldCheck, Briefcase, Award, AlertTriangle, FileX, Ban, CreditCard, ClipboardList, UserCheck, Home } from 'lucide-react';
import CallbackForm from '@/app/components/callBackForm';

const page = () => {


      
  return (
    <div>
      <div id="banner" className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-20 overflow-hidden"> {/* Added overflow-hidden potentially useful */}
      {/* Background Image */}
      <div
        // 2. Changed height from fixed vh to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          backgroundImage: 'url("/images/import.png")',
          // 3. Consider using 'cover' for better background handling
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 4. Ensure background doesn't repeat if image is smaller
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Container for content, positioned above the background */}
      <div className="container mx-auto px-4 py-7 relative z-10 cursor-default">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center text-sm text-blue-800 font-semibold">
              <Globe className="w-4 h-4 mr-2" />
              EXPAND YOUR BUSINESS GLOBALLY WITH LEGAL COMPLIANCE
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight flex items-center gap-3 flex-wrap">
              Import Export Code Registration
            </h1>

            <p className="text-lg text-gray-700">
              Get professional assistance for obtaining your Import Export Code (IEC) from the Directorate General of Foreign Trade (DGFT) under the Ministry of Commerce and Industry, Government of India.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Benefits of IEC Registration
            </h2>

            <ul className="space-y-3">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-green-600" />, text: "Mandatory for legal import and export operations" },
                { icon: <Globe className="w-5 h-5 text-green-600" />, text: "Access to global markets and international trade" },
                { icon: <DollarSign className="w-5 h-5 text-green-600" />, text: "Government incentives and export benefits" },
                { icon: <ClipboardList className="w-5 h-5 text-green-600" />, text: "Simplified compliance with no periodic filings" },
                { icon: <Award className="w-5 h-5 text-green-600" />, text: "Enhanced credibility in international transactions" },
                { icon: <Briefcase className="w-5 h-5 text-green-600" />, text: "Easy online registration process" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
              title="Need Help with IEC Registration?"
              formSource="IEC Registration Services"
              buttonText="Request Callback for IEC Registration"
              />
          </div>
        
      </div>
    </div>


      {/* What is IEC Registration */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mx-auto text-center mb-12 max-w-6xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is IEC Registration?</h2>
            <p className="text-lg text-gray-700">
              Import Export Code (IEC) is a mandatory 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT) under the Ministry of Commerce and Industry, Government of India. It is required for businesses engaged in importing or exporting goods and services. IEC registration is essential for carrying out international trade and availing government benefits under foreign trade policies.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
           
          </div>
        </div>
      </div>

      {/* Why is IEC Registration Required */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why is IEC Registration Required?</h2>
              <p className="text-lg text-gray-700">
                IEC registration is necessary for multiple reasons, including legal compliance, business expansion, and tax benefits.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/mandatory">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/mandatory:rotate-12 group-hover/mandatory:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/mandatory:opacity-100 transition-opacity duration-300"></div>
                  <ShieldCheck className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/mandatory:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/mandatory:text-blue-600">Mandatory for Import & Export</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/mandatory:text-gray-800 text-center">Without an IEC, no individual or business can legally import or export goods and services.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/global">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/global:rotate-12 group-hover/global:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/global:opacity-100 transition-opacity duration-300"></div>
                  <Globe className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/global:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/global:text-blue-600">Global Market Access</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/global:text-gray-800 text-center">IEC allows businesses to expand their reach in international markets.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/incentives">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/incentives:rotate-12 group-hover/incentives:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/incentives:opacity-100 transition-opacity duration-300"></div>
                  <Award className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/incentives:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/incentives:text-blue-600">Government Incentives</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/incentives:text-gray-800 text-center">Eligible for subsidies and export benefits under various foreign trade policies.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/compliance">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/compliance:rotate-12 group-hover/compliance:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/compliance:opacity-100 transition-opacity duration-300"></div>
                  <FileText className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/compliance:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/compliance:text-blue-600">Simplified Compliance</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/compliance:text-gray-800 text-center">Unlike GST or other registrations, IEC does not require periodic filings.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/processing">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/processing:rotate-12 group-hover/processing:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/processing:opacity-100 transition-opacity duration-300"></div>
                  <Briefcase className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/processing:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/processing:text-blue-600">Ease of Processing</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/processing:text-gray-800 text-center">The registration process is completely online and requires minimal documentation.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/legal:opacity-100 transition-opacity duration-300"></div>
                  <Gavel className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover/legal:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Recognition</h3>
                <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800 text-center">Helps businesses gain credibility in international trade transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria for IEC Registration</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                The following individuals and businesses are eligible to apply for IEC registration:
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start p-4 bg-white rounded-lg shadow">
                  <div className="text-blue-500 mr-3 mt-1">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700">Proprietorship firms, Partnership firms, LLPs, Private Limited and Public Limited companies.</span>
                </li>
                <li className="flex items-start p-4 bg-white rounded-lg shadow">
                  <div className="text-blue-500 mr-3 mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700">Registered MSMEs, exporters, and importers.</span>
                </li>
                <li className="flex items-start p-4 bg-white rounded-lg shadow">
                  <div className="text-blue-500 mr-3 mt-1">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700">Trusts, NGOs, and other charitable organizations engaged in trade.</span>
                </li>
                <li className="flex items-start p-4 bg-white rounded-lg shadow">
                  <div className="text-blue-500 mr-3 mt-1">
                    <IdCard className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700">Any individual or entity involved in import/export business.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Required */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents Required for IEC Registration</h2>
              <p className="text-lg text-gray-700">
                The following documents are required for registering an Import Export Code in Rajasthan and across India:
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <IdCard className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">PAN Card</h3>
                </div>
                <p className="text-gray-600 text-sm">PAN Card of the applicant (Company/Firm/Individual).</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <IdCard className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Identity Proof</h3>
                </div>
                <p className="text-gray-600 text-sm">Aadhaar Card or Passport/Voter ID for proprietors, partners, or directors.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <FileText className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Business Registration</h3>
                </div>
                <p className="text-gray-600 text-sm">Certificate of Incorporation, Partnership Deed, GST Registration, etc.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <CreditCard className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Bank Details</h3>
                </div>
                <p className="text-gray-600 text-sm">Cancelled cheque or bank certificate with account details.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <MapPin className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Address Proof</h3>
                </div>
                <p className="text-gray-600 text-sm">Electricity Bill, Rent Agreement, or NOC from owner.</p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 text-blue-500">
                    <FileText className="w-full h-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Digital Signature</h3>
                </div>
                <p className="text-gray-600 text-sm">Digital Signature Certificate (DSC) in case of companies and LLPs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl'>

            {/* Applicable Laws Section */}
            {/* Adjust vertical padding for mobile */}
            <div className="py-8 md:py-16 bg-white rounded-2xl shadow-md">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Adjust title size and margin for mobile */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Applicable Laws for IEC Registration</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        {/* Inner Grid: Stacks on small, 2 columns on medium+. Adjust gap/margin. */}
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <Gavel className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Foreign Trade Act</h3>
                                </div>
                                <p className="text-gray-700 text-sm">Foreign Trade (Development & Regulation) Act, 1992.</p>
                            </div>

                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <DollarSign className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">FEMA</h3>
                                </div>
                                <p className="text-gray-700 text-sm">Foreign Exchange Management Act (FEMA), 1999.</p>
                            </div>

                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <FileText className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Customs Act</h3>
                                </div>
                                <p className="text-gray-700 text-sm">Customs Act, 1962 (For import/export duty compliance).</p>
                            </div>

                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <Globe className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">DGFT Guidelines</h3>
                                </div>
                                <p className="text-gray-700 text-sm">Directorate General of Foreign Trade (DGFT) Guidelines.</p>
                            </div>

                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <DollarSign className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">GST Laws</h3>
                                </div>
                                <p className="text-gray-700 text-sm">GST Laws for taxation on imports and exports.</p>
                            </div>

                            {/* Law Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-6 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500 flex-shrink-0">
                                        <Building2 className="w-full h-full" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Rajasthan State Policies</h3>
                                </div>
                                <p className="text-gray-700 text-sm">Rajasthan State Industrial Policies for trade and export promotion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consequences Section */}
            {/* Adjust vertical padding for mobile */}
            <div className="py-8 md:py-16 bg-white rounded-2xl shadow-md">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Adjust title size and margin for mobile */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Consequences of Not Having IEC Registration</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        {/* Inner Grid: Stacks on small, 2 columns on medium+. Adjust gap/margin. */}
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                            {/* Consequence Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-red-500 flex-shrink-0">
                                        <Ban className="w-full h-full" />
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-red-900">Prohibition from Import/Export</h2>
                                </div>
                                <p className="text-gray-700 text-sm">No entity can engage in international trade without IEC.</p>
                            </div>

                            {/* Consequence Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-red-500 flex-shrink-0">
                                        <DollarSign className="w-full h-full" />
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-red-900">Loss of Government Incentives</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Ineligibility for export subsidies and benefits.</p>
                            </div>

                            {/* Consequence Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-red-500 flex-shrink-0">
                                        <AlertTriangle className="w-full h-full" />
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-red-900">Higher Compliance Risk</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Importers/exporters may face customs and tax-related issues.</p>
                            </div>

                            {/* Consequence Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-red-500 flex-shrink-0">
                                        <Globe className="w-full h-full" />
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-red-900">Trade Restrictions</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Difficulty in establishing trade relations with foreign clients.</p>
                            </div>

                            {/* Consequence Item: Adjust padding for mobile */}
                            <div className="p-4 md:p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 mr-3 text-red-500 flex-shrink-0">
                                        <FileX className="w-full h-full" />
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-red-900">Fines and Penalties</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Operating without IEC may result in financial penalties under FEMA regulations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Conclusion */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-lg text-gray-700 mb-8">
              IEC registration is essential for businesses involved in international trade. It provides legal authorization, enhances credibility, and allows access to global markets. In Rajasthan, businesses must comply with the Directorate General of Foreign Trade (DGFT) regulations and state-specific trade policies for smooth operations. Applying for IEC is a simple and beneficial step for any business looking to expand beyond domestic borders.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

