import React from "react";
import {
  ClipboardList,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  Globe,
  UserCheck,
  Banknote,
  BarChart,
  BookOpen,
  CreditCard,
  Currency,
  FileBarChart,
  FileCheck,
  Handshake,
  IdCard,
  Leaf,
  ListOrdered,
  RefreshCw,
  ShieldCheck,
  Frown,
  TrendingDown,
  AlertCircle,
  Mail,
  Clipboard,
  Camera,
  Hourglass,
  Building2,
  ScrollText,
  CheckCircle,
} from "lucide-react";
import CallbackForm from "../components/callBackForm";

const page = () => {
  return (
    <div>
      
        <div
        className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/disputes.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50 ">
            <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                    RERA Matters | Protect Your Rights!
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mt-4 drop-shadow-md">
                    Secure Your Investment & Hold Builders Accountable with Expert Legal Assistance!
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
                        Consumer Complaints | Hassle-Free Legal Assistance
                    </h1>
                    
                    <p className=" text-gray-600 mt-2">
                        Get provide legal assistance to consumers who have been victims of unfair trade practices, defective goods, or deficient services. We assist in filing consumer complaints, choosing the right advocate, and monitoring the progress of your case in consumer courts across India. Our goal is to provide hassle-free and cost-effective solutions for consumer grievances.
                    </p>

                </div>

                <div id='Docs Req and form container' className="flex flex-wrap " > 
                    <div  className="max-w-7xl mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Form Section */}
                            <CallbackForm
                                title="Need Help with RERA Matters?"
                                formSource="For RERA Matters"   
                                buttonText="Request Callback for RERA Matters" 
                                />

                            {/* Documents Required for Filing a Consumer Case */}
                            <div id="Documents Required" className="p-4 sm:p-6 mx-auto bg-slate-50 group rounded-2xl shadow-lg max-w-4xl w-full">
                                {/* Title Section */}
                                <div className="p-6 sm:p-8 mx-3xl rounded-2xl text-center">
                                    <div className="flex justify-center group cursor-pointer">
                                        <span className="text-2xl sm:text-3xl font-bold text-gray-800">Documents</span>
                                        <span className="text-2xl sm:text-3xl font-bold text-gray-800 px-2 sm:px-3 transition-all duration-300 group-hover:text-emerald-500">
                                            Required
                                        </span>
                                    </div>
                                    <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto mb-6 group-hover:w-2xs transition-all duration-200"></div>
                                </div>

                                {/* Documents Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Builder-Buyer Agreement</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">A copy of the signed agreement with the builder.</p>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <Clipboard className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Allotment Letter</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Proof of the builder’s commitment to deliver the property.</p>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <CreditCard className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Payment Receipts</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Receipts of payments made to the builder.</p>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <Banknote className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Loan Approval Documents</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">If the property is purchased through a home loan.</p>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Possession Delay Notices</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Any communication regarding possession delays.</p>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                        <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-blue-300 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                                            <Camera className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Photos & Videos of Defects</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">If the complaint is related to construction quality issues.</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div id='Costumer case and Docs req container' className="grid md:grid-cols-2 gap-8 justify-items-center w-full p-4">
                        
                    {/* Types of Rera Cases we see */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                        {/* Title Section */}
                        <div className="flex justify-center pb-4">
                            <h1 className="text-2xl font-bold text-gray-800 text-center">
                                Real Estate Legal Solutions we Offer
                            </h1>
                        </div>

                        {/* Cases Grid */}
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            {/* Delayed Possession */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🏗</span>
                                    <h2 className="text-lg font-bold text-blue-900">Delayed Possession</h2>
                                </div>
                                <p className="text-gray-700 text-sm">When a builder fails to hand over possession within the promised time.</p>
                            </div>

                            {/* Refund & Compensation Claims */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">💰</span>
                                    <h2 className="text-md font-bold text-blue-900">Refund & Compensation Claims</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Buyers can claim a refund along with interest and compensation for delays.</p>
                            </div>

                            {/* Incomplete or Poor Construction Quality */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📜</span>
                                    <h2 className="text-md font-bold text-blue-900">Incomplete or Poor Construction Quality</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Cases related to bad construction quality or deviation from promised designs.</p>
                            </div>

                            {/* Hidden Charges & Extra Costs */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📄</span>
                                    <h2 className="text-lg font-bold text-blue-900">Hidden Charges & Extra Costs</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Unfair extra charges added by the builder not mentioned in the agreement.</p>
                            </div>

                            {/* Cancellation of Projects */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🏘</span>
                                    <h2 className="text-lg font-bold text-blue-900">Cancellation of Projects</h2>
                                </div>
                                <p className="text-gray-700 text-sm">If a builder cancels the project after collecting money from buyers.</p>
                            </div>

                            {/* Loan & EMI Disputes */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">🏦</span>
                                    <h2 className="text-lg font-bold text-blue-900">Loan & EMI Disputes</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Issues related to bank approvals and fraudulent loan schemes.</p>
                            </div>

                            {/* Illegal Real Estate Projects */}
                            <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <span className="text-2xl mr-3">📑</span>
                                    <h2 className="text-lg font-bold text-blue-900">Illegal Real Estate Projects</h2>
                                </div>
                                <p className="text-gray-700 text-sm">Complaints against builders selling properties without RERA registration.</p>
                            </div>
                        </div>
                    </div>
                    {/* Dispute Resolution Process */}

                  


                    
                    <div id="Rera Dispute & Consequences container"  className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">

                    <div id="Rera Dispute container" className="p-4 sm:p-6 mx-auto group rounded-2xl shadow-lg max-w-4xl w-full">
                  
                            {/* Title Section */}
                            <div className="flex justify-center pb-4">
                                <h1 className="text-2xl font-bold text-gray-800 text-center">
                                    RERA Dispute Resolution Process
                                </h1>
                            </div>

                            {/* Cases Grid */}
                            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                                {/* Free Case Evaluation */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">📋</span>
                                        <h2 className="text-lg font-bold text-blue-900">Free Case Evaluation</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">Share your issue and get a legal assessment.</p>
                                </div>

                                {/* Documentation & Drafting */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">📑</span>
                                        <h2 className="text-lg font-bold text-blue-900">Documentation & Drafting</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">We help in preparing a strong complaint with necessary evidence.</p>
                                </div>

                                {/* Filing the Complaint */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">📄</span>
                                        <h2 className="text-lg font-bold text-blue-900">Filing the Complaint</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">Your case is filed before the RERA Authority in your state.</p>
                                </div>

                                {/* Legal Representation */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">⚖</span>
                                        <h2 className="text-lg font-bold text-blue-900">Legal Representation</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">Get the best advocate suited to your case.</p>
                                </div>

                                {/* Regular Case Monitoring */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">⏳</span>
                                        <h2 className="text-lg font-bold text-blue-900">Regular Case Monitoring</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">We keep track of hearings and provide timely updates.</p>
                                </div>

                                {/* Case Resolution */}
                                <div className="p-5 bg-blue-50 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-3">✅</span>
                                        <h2 className="text-lg font-bold text-blue-900">Case Resolution</h2>
                                    </div>
                                    <p className="text-gray-700 text-sm">Seek compensation, refunds, or possession through legal proceedings.</p>
                                </div>
                            </div>
                        </div>
                            
                        {/* Consequences of Not Filing a RERA Complaint */}
                        <div className="mt-10 p-4 sm:p-6 bg-red-50 rounded-xl shadow-md">
                        <h2 className="text-lg sm:text-xl font-bold text-red-600 text-center mb-3 sm:mb-4">Consequences of Not Filing a RERA Complaint</h2>
                        <div className="mt-5 space-y-4">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                <p>
                                    <strong>Loss of Money:</strong> Buyers may lose the amount paid if the builder goes bankrupt.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                <p>
                                    <strong>Unfinished Projects:</strong> Delayed possession without any legal remedy.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                <p>
                                    <strong>No Compensation:</strong> No interest or refund from the builder for delays.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                <p>
                                    <strong>Builder Fraud Continues:</strong> Builders keep exploiting buyers if not held accountable.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500" />
                                <p>
                                    <strong>Legal Deadlines Passed:</strong> RERA cases must be filed within specific time limits.
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    </div>

                    </div>

                    </div>
                </div>

            </div>
                        
            {/* Why Choose US ... using the odering property*/}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                        {/* // its value is of 2 cols */}
                        <div id="Why Choose US" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                            {/* Title Section */}
                            <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1">
                                <div className="flex flex-col sm:flex-row justify-center group cursor-pointer">
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                                        Why Choose
                                    </span>
                                    <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                                        US?
                                    </span>
                                </div>
                                <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-xs transform duration-200"></div>
                            </div>

                            {/* Features Grid - Modified for center-out arrangement */}
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                                {/* Using CSS order to arrange items from center out */}
                                
                                {/* Center item - will show last or as the center element */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-4 md:col-start-2 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Globe className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Pan-India Services
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        File consumer complaints in district, state, or national
                                        consumer courts.
                                    </p>
                                </div>
                                
                                {/* Items arranged around center */}
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-1 md:col-start-1 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Gavel className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Expert Legal Assistance
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Get professional help in filing your case before the
                                        consumer court.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-2 md:col-start-2 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <FileText className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Hassle-Free Documentation
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        We assist in preparing and submitting all necessary
                                        documents.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-3 md:col-start-3 md:row-start-1">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <UserCheck className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Top Advocate Selection
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Choose from a panel of experienced consumer lawyers.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-5 md:col-start-1 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <ClipboardList className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Case Monitoring & Updates
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Stay informed about every stage of your case.
                                    </p>
                                </div>

                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-6 md:col-start-3 md:row-start-2">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <Clock className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Fast & Effective Resolution
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        We ensure timely filing and tracking to speed up the legal
                                        process.
                                    </p>
                                </div>
                                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center order-7 md:col-start-2 md:row-start-3">
                                    <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                                        <DollarSign className="w-10 h-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Compensation & Refunds
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        Seek monetary compensation for loss, mental agony, or
                                        damages.
                                    </p>
                                </div>

                            
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
  );
};

export default page;
