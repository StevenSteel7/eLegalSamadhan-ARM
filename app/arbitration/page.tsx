import React from 'react'
import {
    ClipboardList,
    Clock,
    DollarSign,
    Gavel,
    UserCheck,
    ShieldCheck,
    Video,
  } from "lucide-react";
import CallbackForm from '../components/callBackForm';
  

const page = () => {
  return (
    <div>
      
        <div className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/disputes.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50 ">
            <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                    Affordable Arbitration Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                    Settle Disputes Efficiently with Our Expert Arbitration Services!
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
                    Arbitration Services | Fair & Efficient Dispute Resolution
                    </h1>
                    
                    <p className=" text-gray-600 mt-2">
                    We provide expert arbitration solutions for individuals and businesses seeking a fast, fair, and legally binding alternative to court litigation. Our platform allows disputing parties to select experienced arbitrators, conduct virtual or in-person hearings, and efficiently manage cases. With a focus on neutrality and transparency, we ensure cost-effective and hassle-free dispute resolution.                    </p>

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
                                        for Arbitration?
                                    </span>
                                </div>
                                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-md transform duration-200"></div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                                
                                {/* Faster Resolution */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-1 md:col-start-1 md:row-start-1 group/resolution">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/resolution:rotate-12 group-hover/resolution:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/resolution:opacity-100 transition-opacity duration-300"></div>
                                        <Clock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/resolution:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/resolution:text-blue-600">Faster Resolution</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/resolution:text-gray-800">Resolve disputes much quicker than court cases.</p>
                                </div>


                                {/* Cost-Effective */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-2 md:col-start-2 md:row-start-1 group/cost">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/cost:rotate-12 group-hover/cost:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/cost:opacity-100 transition-opacity duration-300"></div>
                                        <DollarSign className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/cost:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/cost:text-blue-600">Cost-Effective</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/cost:text-gray-800">Avoid costly litigation with our affordable arbitration services.</p>
                                </div>

                                {/* Expert Arbitrators */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-3 md:col-start-3 md:row-start-1 group/expert">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/expert:rotate-12 group-hover/expert:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/expert:opacity-100 transition-opacity duration-300"></div>
                                        <UserCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/expert:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/expert:text-blue-600">Expert Arbitrators</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/expert:text-gray-800">Choose from a panel of experienced legal experts.</p>
                                </div>

                                {/* Confidential & Private */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-4 md:col-start-2 md:row-start-2 group/confidential">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/confidential:rotate-12 group-hover/confidential:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover/confidential:opacity-100 transition-opacity duration-300"></div>
                                        <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/confidential:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/confidential:text-blue-600">Confidential & Private</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/confidential:text-gray-800">Ensure privacy with non-public arbitration proceedings.</p>
                                </div>

                                {/* Flexible & Convenient */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-5 md:col-start-1 md:row-start-2 group/flexible">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/flexible:rotate-12 group-hover/flexible:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/flexible:opacity-100 transition-opacity duration-300"></div>
                                        <ClipboardList className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/flexible:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/flexible:text-blue-600">Flexible & Convenient</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/flexible:text-gray-800">Set procedural rules, meeting schedules, and venues as needed.</p>
                                </div>

                                {/* Legally Binding Decisions */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-6 md:col-start-3 md:row-start-2 group/legal">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/legal:opacity-100 transition-opacity duration-300"></div>
                                        <Gavel className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legally Binding Decisions</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Arbitration awards are enforceable under the law.</p>
                                </div>

                                {/* Physical & Virtual Hearings */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center order-7 md:col-start-2 md:row-start-3 group/hearings">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/hearings:rotate-12 group-hover/hearings:shadow-lg relative overflow-hidden bg-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100 opacity-0 group-hover/hearings:opacity-100 transition-opacity duration-300"></div>
                                        <Video className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/hearings:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/hearings:text-blue-600">Physical & Virtual Hearings</h3>
                                    <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/hearings:text-gray-800">Access conference rooms or virtual arbitration sessions.</p>
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
                                title="Need Help with Arbitration?"
                                formSource="For Arbitration Services"
                                buttonText="Request Callback for Arbitration"
                                />

                            {/* Dispute Resolution Process */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                                {/* Card Header */}
                                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">Our Dispute Resolution Process</h1>

                                {/* Steps Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📝</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Free Case Evaluation</h2>
                                            <p className="text-gray-700 text-sm">Share your issue and get a legal assessment.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📄</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Documentation & Drafting</h2>
                                            <p className="text-gray-700 text-sm">Prepare a strong complaint with evidence.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">⚖</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Filing the Complaint</h2>
                                            <p className="text-gray-700 text-sm">Submit your case to the relevant forum.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">👨‍⚖️</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Legal Representation</h2>
                                            <p className="text-gray-700 text-sm">Get the best advocate for your case.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🔍</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Regular Case Monitoring</h2>
                                            <p className="text-gray-700 text-sm">Track hearings and receive timely updates.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">✅</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Case Resolution</h2>
                                            <p className="text-gray-700 text-sm">Seek compensation or legal remedies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>



                        </div>

                        <div id='Costumer case and Docs req container' className="grid md:grid-cols-2 gap-8 justify-items-center w-full p-4">
                        
                            {/* Dispute Types Grid */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                                {/* Card Header */}
                                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                                    Types of Disputes Handled by eLegal Samadhan Arbitration
                                </h1>

                            
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">⚖</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Business & Commercial Disputes</h2>
                                            <p className="text-gray-700 text-sm">Contract breaches, partnership disputes, and non-payment issues.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🏗</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Construction & Real Estate Disputes</h2>
                                            <p className="text-gray-700 text-sm">Delayed possession, builder-buyer conflicts, and contractor claims.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">💰</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Financial & Investment Disputes</h2>
                                            <p className="text-gray-700 text-sm">Shareholder disputes, banking issues, and financial fraud.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">💼</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Employment & Labor Disputes</h2>
                                            <p className="text-gray-700 text-sm">Wrongful termination, employee grievances, and contractual employment issues.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">🏭</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Manufacturing & Supply Chain Disputes</h2>
                                            <p className="text-gray-700 text-sm">Defective products, delivery failures, and supplier conflicts.</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                        <span className="text-xl mr-3">📑</span>
                                        <div>
                                            <h2 className="font-bold text-lg text-blue-900">Intellectual Property (IP) & Trademark Disputes</h2>
                                            <p className="text-gray-700 text-sm">Copyright, trademark, and patent-related conflicts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        
                            {/* Cost Comparasion Table */}
                            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300">
                                <h2 className="text-2xl font-bold text-center mb-4">Cost Comparison: Arbitration vs. Litigation</h2>
                                <p className="text-center mb-6">Arbitration is <span className="font-bold">cheaper and more effective</span> than traditional court litigation. Here's why:</p>
                                
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-3 text-left">Factor</th>
                                        <th className="border border-gray-300 p-3 text-left">Arbitration</th>
                                        <th className="border border-gray-300 p-3 text-left">Litigation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td className="border border-gray-300 p-3 font-bold">Resolution Time</td>
                                        <td className="border border-gray-300 p-3 bg-green-50">6 months - 1 year</td>
                                        <td className="border border-gray-300 p-3 bg-red-50">3-5 years or more</td>
                                        </tr>
                                        <tr>
                                        <td className="border border-gray-300 p-3 font-bold">Legal Costs</td>
                                        <td className="border border-gray-300 p-3 bg-green-50">Lower (Fixed Fees)</td>
                                        <td className="border border-gray-300 p-3 bg-red-50">Expensive (Lawyer Fees, Court Costs)</td>
                                        </tr>
                                        <tr>
                                        <td className="border border-gray-300 p-3 font-bold">Confidentiality</td>
                                        <td className="border border-gray-300 p-3 bg-green-50">Private & Confidential</td>
                                        <td className="border border-gray-300 p-3 bg-red-50">Public Legal Proceedings</td>
                                        </tr>
                                        <tr>
                                        <td className="border border-gray-300 p-3 font-bold">Flexibility</td>
                                        <td className="border border-gray-300 p-3 bg-green-50">Parties control the process</td>
                                        <td className="border border-gray-300 p-3 bg-red-50">Court decides the process</td>
                                        </tr>
                                        <tr>
                                        <td className="border border-gray-300 p-3 font-bold">Finality</td>
                                        <td className="border border-gray-300 p-3 bg-green-50">Legally binding with limited appeal</td>
                                        <td className="border border-gray-300 p-3 bg-red-50">Subject to multiple appeals</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>

            </div>
                        
           

            {/* Call to Action */}
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold text-gray-800">
                    Get Legal Help Today!
                </h2>
                <p className="text-gray-600 mt-2">
                    Register your complaint with eLegal Samadhan and seek justice.
                </p>
          
            </div>
        
        </div>
      
    </div>
  )
}

export default page