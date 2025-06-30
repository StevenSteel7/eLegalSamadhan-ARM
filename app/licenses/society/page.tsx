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
      {/* Background Image */}
      <div
        // 2. Changed height from fixed vh units to `h-full`
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none cursor-default"
        style={{
          backgroundImage: 'url("/images/society.png")',
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
              ESTABLISH YOUR SOCIETY WITH LEGAL COMPLIANCE
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight flex items-center gap-3 flex-wrap">
              Society Registration Services
            </h1>

            <p className="text-lg text-gray-700">
              Get professional assistance for registering your society in compliance with the Societies Registration Act, 1860 and Rajasthan Societies Registration Act, 1958.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">
              Benefits of Society Registration
            </h2>

            <ul className="space-y-3">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-green-600" />, text: "Legal Recognition as a separate entity" },
                { icon: <DollarSign className="w-5 h-5 text-green-600" />, text: "Tax Exemptions under Income Tax Act" },
                { icon: <UserCheck className="w-5 h-5 text-green-600" />, text: "Enhanced Public Trust and Credibility" },
                { icon: <Building2 className="w-5 h-5 text-green-600" />, text: "Access to Government Grants and Funding" },
                { icon: <Home className="w-5 h-5 text-green-600" />, text: "Ability to own property in society's name" },
                { icon: <ClipboardList className="w-5 h-5 text-green-600" />, text: "Perpetual Existence regardless of member changes" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* 4. Added flex-shrink-0 to the icon span */}
                  <span className="mr-2 mt-1 flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <CallbackForm
                                title="Need Help with Society Registration?"
                                formSource="Society Registration Services"
                                buttonText="Request Callback for Society Registration"
                                />
              
        </div>
      </div>
    </div>

      <div className="bg-gray-50 py-16">

            {/* Society Registration Section */}
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="mx-auto text-center mb-12 max-w-6xl">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Society Registration?</h2>
                        <p className="text-lg text-gray-700">
                            A society is a group of individuals who come together to promote charitable, literary, scientific, or social causes. Society registration in India is governed by the Societies Registration Act, 1860, and in Rajasthan, it is regulated under the Rajasthan Societies Registration Act, 1958. Registering a society provides it with legal recognition and facilitates better governance and accountability.
                        </p>
                    </div>

                    {/* Types of Societies */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Types of Societies</h2>
                        
                        <div className="mb-16">
                       
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Users,
                                        title: "Charitable Societies",
                                        description: "Engaged in activities related to education, healthcare, or social welfare."
                                    },
                                    {
                                        icon: Building2,
                                        title: "Religious Societies",
                                        description: "Established for promoting religious beliefs and practices."
                                    },
                                    {
                                        icon: Video,
                                        title: "Cultural Societies",
                                        description: "Focused on promoting arts, music, and cultural heritage."
                                    },
                                    {
                                        icon: UserCheck,
                                        title: "Sports Societies",
                                        description: "Created to support and develop sports and physical activities."
                                    },
                                    {
                                        icon: FileText,
                                        title: "Scientific Societies",
                                        description: "Involved in research and development in various fields of science and technology."
                                    },
                                    {
                                        icon: ClipboardList,
                                        title: "Educational Societies",
                                        description: "Focused on promoting education and academic excellence."
                                    }
                                ].map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="hover:bg-slate-50 p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md flex flex-col items-center text-center"
                                    >
                                        <div className="mb-4">
                                            <item.icon className="w-12 h-12 text-blue-500 mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Eligibility Criteria */}
                        <div className="bg-slate-50 p-8 rounded-xl shadow-md">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Eligibility Criteria</h2>
                            <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 ">
                                {[
                                    "A minimum of seven individuals is required to form a society.",
                                    "Companies, firms, and associations can also register as members.",
                                    "Foreign nationals or non-resident Indians (NRIs) can be members but with specific permissions.",
                                    "Government and non-government organizations can register societies for specific purposes."
                                ].map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 joom"
                                    >
                                        <span className="text-green-500 mr-3 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Documents Required */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 justify-center flex">
      
            {/* Documents Required */}
            <div>
              <div className="p-8 mx-auto rounded-2xl md:col-span-3 sm:col-span-1 group">
                <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Documents 
                    </span>
                    <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                        Required 
                    </span>
                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                        for Society Registration
                    </span>
                </div>
                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-md transform duration-200"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Document Cards */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/moa">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/moa:rotate-12 group-hover/moa:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/moa:opacity-100 transition-opacity duration-300"></div>
                    <FileText className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/moa:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/moa:text-blue-600">Memorandum of Association</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/moa:text-gray-800 text-center">Outlining objectives and activities</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/rules">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/rules:rotate-12 group-hover/rules:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/rules:opacity-100 transition-opacity duration-300"></div>
                    <Gavel className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/rules:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/rules:text-blue-600">Rules & Regulations</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/rules:text-gray-800 text-center">Governing the society</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/members">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/members:rotate-12 group-hover/members:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/members:opacity-100 transition-opacity duration-300"></div>
                    <Users className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/members:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/members:text-blue-600">Member Details</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/members:text-gray-800 text-center">Names, addresses, occupations</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/id">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/id:rotate-12 group-hover/id:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/id:opacity-100 transition-opacity duration-300"></div>
                    <IdCard className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/id:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/id:text-blue-600">Identity Proof</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/id:text-gray-800 text-center">Aadhar, PAN, Passport, etc.</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/address">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/address:rotate-12 group-hover/address:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/address:opacity-100 transition-opacity duration-300"></div>
                    <MapPin className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/address:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/address:text-blue-600">Address Proof</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/address:text-gray-800 text-center">Utility bills or rent agreement</p>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/photos">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/photos:rotate-12 group-hover/photos:shadow-lg relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/photos:opacity-100 transition-opacity duration-300"></div>
                    <Camera className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/photos:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/photos:text-blue-600">Photographs</h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/photos:text-gray-800 text-center">Passport-size photos of members</p>
                </div>
              </div>
            </div>
       
        </div>
      </div>

      <div className='bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Applicable Laws for Society Registration */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    {/* Title Section */}
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Applicable Laws for Society Registration
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        Societies in India are governed by specific legal frameworks that vary based on the society type and location. In Rajasthan, both national and state-specific laws apply to society registration and operation.
                    </p>

                    {/* Laws Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {/* Societies Registration Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <Gavel className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Societies Registration Act, 1860</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Primary legislation applicable to societies across India.</p>
                        </div>

                        {/* Rajasthan Societies Registration Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <FileText className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Rajasthan Societies Registration Act, 1958</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Governs societies specifically in Rajasthan state.</p>
                        </div>

                        {/* Income Tax Act */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <DollarSign className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Income Tax Act, 1961</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Provides tax exemptions under Sections 12A & 80G for registered societies.</p>
                        </div>

                        {/* FCRA */}
                        <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-blue-500">
                                    <ShieldCheck className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-blue-900">Foreign Contribution (Regulation) Act</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Regulates foreign contributions to societies in India.</p>
                        </div>
                    </div>
                </div>

                {/* Consequences of Not Registering */}
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                    <div className="flex justify-center pb-4">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Consequences of Not Registering a Society
                        </h1>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">
                        Failure to register a society can lead to several legal and operational challenges that may hinder your organization's growth and impact.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Gavel className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">No Legal Standing</h2>
                            </div>
                            <p className="text-gray-700 text-sm">An unregistered society has no separate legal identity and cannot sue or be sued.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <DollarSign className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Ineligibility for Grants</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Cannot apply for government financial assistance or tax exemptions.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Users className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Limited Fundraising</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Banks and donors prefer dealing with registered societies for transparency.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <Building2 className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Operational Challenges</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Cannot enter into contracts, own property, or carry out formal transactions.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <FileText className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Internal Disputes</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Lack of formal structure may lead to conflicts among members.</p>
                        </div>

                        <div className="p-5 bg-red-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 mr-3 text-red-500">
                                    <IdCard className="w-full h-full" />
                                </div>
                                <h2 className="text-lg font-bold text-red-900">Credibility Issues</h2>
                            </div>
                            <p className="text-gray-700 text-sm">Lack of official status reduces trust from stakeholders and beneficiaries.</p>
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
              Society registration is crucial for organizations involved in social, cultural, religious, or scientific activities. In Rajasthan, compliance with the Rajasthan Societies Registration Act, 1958, is necessary for legal recognition and effective functioning. A registered society enjoys legal protection, financial benefits, and public trust, making it easier to achieve its objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
