
'use client';
import React, { useState } from 'react';
        import { Building2, Camera, CheckSquare, ClipboardList, DollarSign, FileText, Gavel, Home, IdCard, MapPin, ShieldCheck, UserCheck, Users, Video } from 'lucide-react';
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
      <div
        // 2. Changed height from fixed vh units to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          backgroundImage: 'url("/images/trust.jpg")',
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
              ESTABLISH YOUR TRUST WITH LEGAL COMPLIANCE
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight flex items-center gap-3 flex-wrap">
              Trust Registration Services
            </h1>

            <p className="text-lg text-gray-700">
              Get professional assistance for registering your trust in compliance with the Indian Trusts Act and Rajasthan Public Trusts Act.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Benefits of Trust Registration
            </h2>

            <ul className="space-y-3">
              {[
                'Legal Recognition & Protection',
                'Tax Benefits under Section 12A & 80G',
                'Enhanced Credibility',
                'Access to Government Grants'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  {/* 4. Added flex-shrink-0 to the bullet point span */}
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
                                title="Need Help with Trust Registration?"
                                formSource="Trust Registration Services"
                                buttonText="Request Callback for Trust Registration"
                                />
              
        </div>
      </div>
    </div>
      {/* Headline */}
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trust Registration | Requirements, Eligibility & Legal Framework
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A trust is a legal entity created to manage property or funds for charitable or religious purposes. Trust registration provides legal recognition, tax benefits, and operational transparency while ensuring compliance with Indian Trusts Act and Rajasthan Public Trusts Act.
          </p>
        </div>
      </div>

      {/* Trust Types Section */}
      <div className="bg-slate-100  py-12 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Types of Trusts in India</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Public Trusts',
                description: 'Established for charitable or religious purposes benefiting the general public',
                icon: <UserCheck className="w-12 h-12 text-blue-500" />
              },
              {
                title: 'Private Trusts',
                description: 'Created for specific individuals or family members',
                icon: <ShieldCheck className="w-12 h-12 text-green-500" />
              },
              {
                title: 'Religious Trusts',
                description: 'Formed for promoting religious activities and institutions',
                icon: <Building2 className="w-12 h-12 text-purple-500" />
              },
              {
                title: 'Charitable Trusts',
                description: 'Focused on social causes like education and healthcare',
                icon: <DollarSign className="w-12 h-12 text-red-500" />
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 joom">
                <div className="flex flex-col items-center text-center  ">
                  <div className='border-2 text-blue-300 rounded-full p-3'>
                  {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 ">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    {/* Trust Registration Documents */}
      <div className=' mx-auto bg-slate-100 p-2 flex justify-center'>
        <div id="Trust Registration Documents" className="group col-span-2 max-w-7xl bg-slate-50  rounded-2xl p-8">
                {/* Title Section */}
                <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1">
                    <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                        <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Documents 
                        </span>
                        <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                            Required 
                        </span>
                        <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                            for Trust Registration
                        </span>
                    </div>
                    <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-md transform duration-200"></div>
                </div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                    
                    {/* Trust Deed */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-1 md:col-start-1 md:row-start-1 group/deed">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/deed:rotate-12 group-hover/deed:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/deed:opacity-100 transition-opacity duration-300"></div>
                            <FileText className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/deed:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/deed:text-blue-600">Trust Deed</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/deed:text-gray-800">Stamped and notarized document establishing the trust</p>
                    </div>

                    {/* Identity Proof */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-2 md:col-start-2 md:row-start-1 group/identity">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/identity:rotate-12 group-hover/identity:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/identity:opacity-100 transition-opacity duration-300"></div>
                            <IdCard className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/identity:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/identity:text-blue-600">Identity Proof</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/identity:text-gray-800">Aadhar, PAN, Passport, or other government-issued ID</p>
                    </div>

                    {/* Address Proof */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-3 md:col-start-3 md:row-start-1 group/address">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/address:rotate-12 group-hover/address:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/address:opacity-100 transition-opacity duration-300"></div>
                            <MapPin  className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/address:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/address:text-blue-600">Address Proof</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/address:text-gray-800">Utility bills, rent agreement, or similar documents</p>
                    </div>

                    {/* Registered Office Proof */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-4 md:col-start-1 md:row-start-2 group/office">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/office:rotate-12 group-hover/office:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/office:opacity-100 transition-opacity duration-300"></div>
                            <Home className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/office:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/office:text-blue-600">Registered Office Proof</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/office:text-gray-800">Electricity bill, NOC, or rent agreement</p>
                    </div>

                    {/* Beneficiary Details */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-5 md:col-start-2 md:row-start-2 group/beneficiary">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/beneficiary:rotate-12 group-hover/beneficiary:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/beneficiary:opacity-100 transition-opacity duration-300"></div>
                            <Users className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/beneficiary:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/beneficiary:text-blue-600">Beneficiary Details</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/beneficiary:text-gray-800">Information about trust beneficiaries and objectives</p>
                    </div>

                    {/* Photographs */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-6 md:col-start-3 md:row-start-2 group/photos">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/photos:rotate-12 group-hover/photos:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/photos:opacity-100 transition-opacity duration-300"></div>
                            <Camera className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/photos:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/photos:text-blue-600">Trustee Photographs</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/photos:text-gray-800">Passport-size photographs of all trustees</p>
                    </div>

                    {/* Declarations */}
                    <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-7 md:col-start-2 md:row-start-3 group/declarations">
                        <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/declarations:rotate-12 group-hover/declarations:shadow-lg relative overflow-hidden bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/declarations:opacity-100 transition-opacity duration-300"></div>
                            <CheckSquare className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/declarations:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/declarations:text-blue-600">Trustee Declarations</h3>
                        <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/declarations:text-gray-800">Trustee affidavits and declaration documents</p>
                    </div>
                </div>
        </div>
      </div>

      <div className='bg-slate-100'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Applicable Laws for Trust Registration */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    {/* Title Section */}
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Applicable Laws for Trust Registration
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        Trusts in India are governed by specific legal frameworks that vary based on the trust type and location. In Rajasthan, both national and state-specific laws apply to trust registration and operation.
                    </p>

                    {/* Laws Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {/* Indian Trusts Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <Gavel className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Indian Trusts Act, 1882</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Primary legislation applicable to private trusts across India.</p>
                        </div>

                        {/* Rajasthan Public Trusts Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <FileText className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Rajasthan Public Trusts Act</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Governs public charitable and religious trusts specifically in Rajasthan.</p>
                        </div>

                        {/* Income Tax Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <DollarSign className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Income Tax Act, 1961</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Provides tax exemptions under Sections 12A & 80G for registered trusts.</p>
                        </div>

                        {/* FCRA */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <ShieldCheck className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">FCRA, 2010</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Regulates the receipt and utilization of foreign contributions by trusts.</p>
                        </div>

                        {/* Registration Process */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <ClipboardList className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Registration Process</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Involves filing trust deed, submitting required documents to relevant authorities.</p>
                        </div>

                        {/* Compliance Requirements */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <CheckSquare className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Ongoing Compliance</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Annual filing requirements, maintaining proper records, and audit obligations.</p>
                        </div>
                    </div>
                </div>

                {/* Consequences of Not Registering a Trust */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    {/* Title Section */}
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-red-800 text-center">
                            Consequences of Not Registering a Trust
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        Operating an unregistered trust can lead to significant legal, financial, and operational challenges that may severely impact the trust's ability to function effectively.
                    </p>

                    {/* Consequences Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700 mb-8">
                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Gavel className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">No Legal Recognition</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Unregistered trusts lack legal identity and cannot file cases in court.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <DollarSign className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">No Tax Benefits</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Ineligibility for tax exemptions under Sections 12A & 80G of Income Tax Act.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Users className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Restricted Fundraising</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Cannot receive government grants or foreign contributions legally.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Building2 className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Operational Challenges</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Limited access to banking services and inability to open accounts in trust's name.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <FileText className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Asset Ownership Issues</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Unclear ownership of assets can lead to disputes among trustees and beneficiaries.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <IdCard className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Credibility Issues</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Lack of official status reduces trust from donors, partners, and beneficiaries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default page;
