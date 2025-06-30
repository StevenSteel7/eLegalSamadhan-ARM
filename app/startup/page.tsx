import React from 'react'
import {
    ClipboardList,
    Clock,
    DollarSign,
    Gavel,
    UserCheck,
    ShieldCheck,
  } from "lucide-react";
import CallbackForm from '../components/callBackForm';
  

const page = () => {
  return (
    <div>
      
        <div className="relative min-h-[50vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/startup.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-70 ">
            <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                    Startup India Registration
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                    Your Gateway to Government Recognition and Benefits!
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
                    Startup India Registration | Boost Your Business with Government Benefits
                    </h1>
                    
                    <p className=" text-gray-600 mt-2">
                    Register your startup with the Government of India to access tax benefits, funding opportunities, and easier compliance. Our experts guide you through the entire process from documentation to approval, ensuring you maximize all available benefits under the Startup India initiative.
                    </p>

                </div>


                {/* Why Choose US ... using the odering property*/}
                <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 justify-items-center  ">
                        {/* Why Choose Us Section */}
                        <div id="Why Choose Us" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                            {/* Title Section */}
                            <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1">
                                <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                                        Why Choose
                                    </span>
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                                        Us 
                                    </span>
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                                        for Startup Registration?
                                    </span>
                                </div>
                                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-md transform duration-200"></div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                                
                                {/* Faster Processing */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-1 md:col-start-1 md:row-start-1 group/resolution">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                                        <Clock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/resolution:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-blue-600">Faster Processing</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Quick registration with DPIIT approval in 2-3 working days.</p>
                                </div>


                                {/* Tax Benefits */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-2 md:col-start-2 md:row-start-1 group/cost">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/cost:rotate-12 group-hover/cost:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/cost:opacity-100 transition-opacity duration-300"></div>
                                        <DollarSign className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/cost:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/cost:text-blue-600">Tax Benefits</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/cost:text-gray-800">Help you avail 3-year tax holiday under Section 80-IAC.</p>
                                </div>

                                {/* Expert Guidance */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-3 md:col-start-3 md:row-start-1 group/expert">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/expert:rotate-12 group-hover/expert:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/expert:opacity-100 transition-opacity duration-300"></div>
                                        <UserCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/expert:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/expert:text-blue-600">Expert Guidance</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/expert:text-gray-800">End-to-end assistance from incorporation to registration.</p>
                                </div>

                                {/* Compliance Support */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-4 md:col-start-2 md:row-start-2 group/confidential">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/confidential:rotate-12 group-hover/confidential:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover/confidential:opacity-100 transition-opacity duration-300"></div>
                                        <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/confidential:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/confidential:text-blue-600">Compliance Support</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/confidential:text-gray-800">Ongoing help with annual filings and regulatory requirements.</p>
                                </div>

                                {/* Funding Access */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-5 md:col-start-1 md:row-start-2 group/flexible">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/flexible:rotate-12 group-hover/flexible:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/flexible:opacity-100 transition-opacity duration-300"></div>
                                        <ClipboardList className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/flexible:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/flexible:text-blue-600">Funding Access</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/flexible:text-gray-800">Connect with government funds and angel investors.</p>
                                </div>

                                {/* IPR Support */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-6 md:col-start-3 md:row-start-2 group/legal">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/legal:opacity-100 transition-opacity duration-300"></div>
                                        <Gavel className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">IPR Support</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Assistance with patent filing and trademark registration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            
                
                    <div id='Content container' className="flex flex-wrap " > 
                        <div  className="max-w-7xl mx-auto p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                {/* Form Section */}
                                <CallbackForm
                                title="Need Help with Startup Registration?"
                                formSource="Startup India Registration Services"
                                buttonText="Request Callback"
                                />

                            {/* Registration Process */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                                {/* Card Header */}
                                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">Startup India Registration Process</h1>

                                {/* Steps Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🏢</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Business Incorporation</h2>
                                            <p className="text-gray-700 text-sm">Register as Private Limited, LLP, or Partnership Firm.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🌐</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Portal Registration</h2>
                                            <p className="text-gray-700 text-sm">Create account on Startup India Portal.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📝</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Details Submission</h2>
                                            <p className="text-gray-700 text-sm">Provide business, founder, and funding information.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📄</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Document Upload</h2>
                                            <p className="text-gray-700 text-sm">Submit required documents and innovation details.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">✅</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Self-Certification</h2>
                                            <p className="text-gray-700 text-sm">Comply with Startup India eligibility criteria.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🎯</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">DPIIT Recognition</h2>
                                            <p className="text-gray-700 text-sm">Obtain official recognition certificate.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">💰</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Tax Benefits</h2>
                                            <p className="text-gray-700 text-sm">Apply for 80-IAC and Angel Tax Exemption.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🚀</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Access Benefits</h2>
                                            <p className="text-gray-700 text-sm">Utilize government schemes and funding opportunities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div id='Costumer case and Docs req container' className="grid md:grid-cols-2 gap-8 justify-items-center w-full p-4">
                        
                        {/* Documents Required */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                            {/* Card Header */}
                            <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                                Documents Required for Startup India Registration
                            </h1>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                                    <h2 className="font-bold text-lg text-blue-900 mb-2">For Startup Recognition:</h2>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Certificate of Incorporation (Private Limited Company) or Registration Certificate (LLP/Partnership)</li>
                                        <li>PAN Card of the business entity</li>
                                        <li>Founder's details and identification documents (Aadhaar/PAN)</li>
                                        <li>Startup pitch deck or brief description of innovation</li>
                                        <li>Website link, product details, and funding proof (if applicable)</li>
                                        <li>Letter of Recommendation from an incubator or industry association (optional)</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                                    <h2 className="font-bold text-lg text-green-900 mb-2">For Tax Exemption (80-IAC):</h2>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>DPIIT recognition certificate</li>
                                        <li>Audited financial statements of the startup</li>
                                        <li>Business plan and projected financials</li>
                                        <li>Declaration that the startup is not formed by splitting an existing business</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Table */}
                        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 w-full">
                            <h2 className="text-2xl font-bold text-center mb-6">Benefits of Startup India Registration</h2>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-3 text-left">Benefit</th>
                                    <th className="border border-gray-300 p-3 text-left">Explanation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Tax Exemptions</td>
                                    <td className="border border-gray-300 p-3">Eligible startups can avail a 3-year income tax exemption under Section 80-IAC.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Self-Certification Compliance</td>
                                    <td className="border border-gray-300 p-3">Startups can self-certify compliance with labor and environmental laws.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Easier Public Procurement</td>
                                    <td className="border border-gray-300 p-3">Startups get an exemption from prior experience requirements in government tenders.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Fast-Track Patent Processing</td>
                                    <td className="border border-gray-300 p-3">50% rebate on patent filing fees and expedited processing.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Access to Funding</td>
                                    <td className="border border-gray-300 p-3">Eligible for government seed funds, venture capital, and angel investment schemes.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Networking & Mentorship</td>
                                    <td className="border border-gray-300 p-3">Opportunity to connect with investors, incubators, and industry leaders.</td>
                                    </tr>
                                    <tr>
                                    <td className="border border-gray-300 p-3 font-bold">Easier Winding Up</td>
                                    <td className="border border-gray-300 p-3">Simplified exit process under the Insolvency and Bankruptcy Code within 90 days.</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Compliances Section */}
                    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 w-full mt-6">
                        <h2 className="text-2xl font-bold text-center mb-6">Compliances Required After Registration</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Annual filing of financial statements with the Ministry of Corporate Affairs (MCA)</li>
                                <li>Income tax return filing annually</li>
                                <li>Compliance with GST laws (if applicable)</li>
                                <li>Updating DPIIT with any significant business changes</li>
                            </ul>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Filing of Form MSME-1 (if applicable for delayed payments)</li>
                                <li>Maintaining proper accounting records and company books</li>
                                <li>Intellectual Property Rights (IPR) compliance if availing patent benefits</li>
                                <li>Regular filings with SEBI and investors (if funded)</li>
                            </ul>
                        </div>
                    </div>
                </div>

        </div>
                    
       

        {/* Call to Action */}
        <div className="text-center mt-10 py-10 bg-gradient-to-r from-blue-50 to-green-50">
            <h2 className="text-2xl font-bold text-gray-800">
                Ready to Register Your Startup?
            </h2>
            <p className="text-gray-600 mt-2 mb-6 max-w-2xl mx-auto">
                Get expert assistance with your Startup India registration and unlock all government benefits for your business.
            </p>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700">
                Begin Your Registration
            </button>
        </div>
    
    </div>
  
    </div>
</div>
)}

export default page