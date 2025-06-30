import { div } from "framer-motion/client";
import {
  Banknote,
  BarChart,
  BookOpen,
  ClipboardList,
  Clock,
  CreditCard,
  FileBarChart,
  FileCheck,
  FileText,
  Handshake,
  IdCard,
  Leaf,
  ListOrdered,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import CallbackForm from "../components/callBackForm";

const Page = () => {
  return (
  <div>
      <div
        className="relative min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Msme-Registration.jpg')" }}
      >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50 ">
          <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                MSME Registration | Never Been Easier!
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
                Streamline your MSME registration process with our professional
                legal assistance
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headline & Subheading */}
          <div id = 'Headline & Subheading' className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              MSME Registration in India | Transparent & Lowest Pricing
            </h1>
            <p className="text-gray-600 mt-2">
              Start focusing on your business growth while our trusted experts
              handle your MSME registration with seamless assistance in
              documentation, filing, and compliance.
            </p>
          </div>

          {/* Content Section */}
          <div className=" grid md:grid-cols-2 gap-8  justify-items-center "> 
            
            
            {/* Left Side - Form Section */}
            <CallbackForm
              title="Need Help with MSME Registration?"
              formSource="MSME Registration Services"
              buttonText="Request Callback "
            />

            <div id="msme-benefits" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
              {/* Header Section */}
              <div className="flex items-center space-x-3">
                {/* Icon Container */}
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-yellow-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-700">
                  Benefits of MSME Registration
                </h3>
              </div>

              {/* Benefits List */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Collateral-Free Loans</strong> – Access priority
                    financing under government-backed schemes without the need
                    for collateral.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Subsidized Interest Rates</strong> – Avail lower
                    interest rates through exclusive MSME financing programs.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Tax Benefits</strong> – Enjoy exemptions from select
                    direct taxes as per MSME eligibility criteria.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Government Tenders</strong> – Gain priority in
                    public procurement and exemption from Earnest Money Deposit
                    (EMD).
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Protection Against Delayed Payments</strong> – MSMEs
                    can charge compound interest on late payments from buyers.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Subsidies & Incentives</strong> – Avail various
                    state and central government subsidies and incentives.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 font-semibold">✔</span>
                  <p>
                    <strong>Credit Guarantee Scheme</strong> – Get access to
                    government-backed credit guarantees for small businesses.
                  </p>
                </div>
              </div>
            </div>  
                                                     {/* // its value is of 2 cols */}
            <div id="Documents Required" className=" p-8  mx-auto  bg-slate-50 rounded-2xl  md:col-span-2 sm:col-span-1">
              {/* Title Section */}
             
              <div className="flex justify-center group cursor-pointer ">
                <span className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Documents  
                </span>
                <span className="text-2xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300  group-hover:text-emerald-500">
                    Required 
                </span>
              </div>


              <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

              {/* Documents Grid */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                {/* Aadhaar Card */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <IdCard className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Aadhaar Card
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Aadhaar Card of the business owner.
                  </p>
                </div>

                {/* PAN Card */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    PAN Card
                  </h3>
                  <p className="text-gray-600 mt-2">
                    PAN Card of the business entity.
                  </p>
                </div>

                {/* Business Registration */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Business Registration
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Partnership Deed, Certificate of Incorporation, or GST
                    registration.
                  </p>
                </div>

                {/* Bank Details */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <Banknote className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bank Details
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Bank account details and IFSC code.
                  </p>
                </div>

                {/* Investment & Turnover */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <BarChart className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Investment & Turnover
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Based on latest ITR and GST return.
                  </p>
                </div>

                {/* NIC Code */}
                <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                    <ListOrdered className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    NIC Code
                  </h3>
                  <p className="text-gray-600 mt-2">
                    National Industrial Classification code for business
                    activity.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="py-2"></div>

       

          <div id='Compliances Required After Registration' className="container mx-auto p-8">
        
            {/* Title Section */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Compliances Required After Registration
            </h2>
            
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

            {/* Compliance Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
              
              {/* Business Turnover Submission */}
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                  <FileBarChart className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Annual Submission</h3>
                <p className="text-gray-600 mt-2">Report turnover & investment details on the Udyam portal.</p>
              </div>

            {/* ITR & GST Filing */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Tax Compliance</h3>
              <p className="text-gray-600 mt-2">Timely filing of Income Tax Returns (ITR) and GST returns.</p>
            </div>

            {/* MSME-1 Form Filing */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Delayed Payment Reporting</h3>
              <p className="text-gray-600 mt-2">File MSME-1 form with MCA to report delayed payments.</p>
            </div>

            {/* Updating Udyam Details */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <RefreshCw className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Update Business Info</h3>
              <p className="text-gray-600 mt-2">Modify Udyam registration details for structural changes.</p>
            </div>

            {/* Proper Accounting Records */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Financial Records</h3>
              <p className="text-gray-600 mt-2">Maintain proper accounting records & financial statements.</p>
            </div>

            {/* Environmental & Labor Compliance */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Regulatory Compliance</h3>
              <p className="text-gray-600 mt-2">Ensure compliance with environmental & labor laws.</p>
            </div>

            {/* MSME Subsidy & Loan Participation - Positioned to start from middle column */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center sm:col-start-2 md:col-start-2">
              <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Subsidy & Loans</h3>
              <p className="text-gray-600 mt-2">Participate in MSME subsidy & loan schemes as per eligibility.</p>
            </div>

            </div>
          </div>
    </div>
      </div>
  </div>
  );
};

export default Page;
