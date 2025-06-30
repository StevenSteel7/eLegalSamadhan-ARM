import {
  Banknote,
  Building, 
  ClipboardList, 
  Clock, 
  FileCheck,
  FileText, 
  Handshake, 
  IdCard, 
  ListOrdered, 
  Map, 
  ShieldCheck, 
  User, 
  AlertTriangle, 
  Ban, 
  Gavel, 
  TrendingDown, 
  SearchCheck, 
  FileUp, 
  BadgeCheck, 
  LandPlot, 
  FileSignature, 
  History, 
  Users, 
  CheckSquare, 
  Globe, 
  BadgeDollarSign, // Added for Fees
} from "lucide-react";
import React from "react";
import CallbackForm from "../components/callBackForm";

// Note: The import from framer-motion/client is not used in the provided MSME code.
// If framer-motion animations are intended, they need to be implemented.
// For now, standard div elements are used.

const ReraRegistrationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-[50vh] bg-cover bg-center"
        // *** Update this path to a relevant RERA/Real Estate image ***
        style={{ backgroundImage: "url('/images/RERA-Registration.png')" }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Slightly increased opacity */}
        <section className="relative z-10 flex flex-col justify-center items-center text-white min-h-[50vh] px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              RERA Registration Services | eLegal Samadhan
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
              Ensure Hassle-Free Compliance for Your Real Estate Projects
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headline & What is RERA Section */}
          <div id="Headline & Subheading" className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              eLegal Samadhan: Hassle-Free RERA Registration Services
            </h1>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
              The Real Estate (Regulation & Development) Act, 2016 (RERA) mandates that all builders, developers, and real estate agents register their projects with the respective State RERA Authority before advertising, selling, or booking any property. At eLegal Samadhan, we offer a seamless RERA registration process, ensuring compliance with all legal requirements and preventing delays in project approvals.
            </p>
          </div>

          {/* Content Section - Form & Benefits */}
          <div className=" grid md:grid-cols-2 gap-8 justify-items-center ">
            {/* Left Side - Form Section */}
            <CallbackForm
                                title="Need Help with RERA Registration?"
                                formSource="For RERA Registration Services"
                                buttonText="Request Callback for RERA Registration"
                                />


            {/* Right Side - Benefits of RERA Registration */}
            <div id="rera-benefits" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"> {/* Changed color */}
                  <ShieldCheck className="w-6 h-6 text-blue-500" /> {/* Changed color */}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Why is RERA Registration Necessary?
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span> {/* Changed color */}
                  <p>
                    <strong>Legal Compliance</strong> – Avoid penalties and legal actions for non-registration. Mandatory for projects {">"} 500 sqm or {">"} 8 units.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span>
                  <p>
                    <strong>Transparency & Trust</strong> – Boosts buyer confidence in registered projects through mandatory disclosures.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span>
                  <p>
                    <strong>Easy Fundraising</strong> – Banks and financial institutions prefer financing RERA-registered projects.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span>
                  <p>
                    <strong>Fair Trade Practices</strong> – Ensures developers follow ethical business norms and standardized agreements.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span>
                  <p>
                    <strong>Dispute Resolution Protection</strong> – Buyers can file complaints against registered projects via RERA authorities/tribunals.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-semibold pt-1">✅</span>
                  <p>
                    <strong>Market Credibility</strong> – Increases project authenticity, enhances reputation, and improves saleability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who Needs RERA Registration Section */}
          <div id="Who Needs RERA" className="mt-12 p-8 mx-auto bg-slate-50 rounded-2xl shadow-md">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Who Needs RERA Registration?
              </h2>
            </div>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-center text-gray-600 mb-6">The following entities must register under RERA:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white shadow rounded-lg">
                <Building className="w-10 h-10 text-green-500 mx-auto mb-2"/>
                <h3 className="font-semibold text-gray-700">Developers & Builders</h3>
                <p className="text-sm text-gray-600">All residential & commercial projects before sale.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <Handshake className="w-10 h-10 text-green-500 mx-auto mb-2"/>
                <h3 className="font-semibold text-gray-700">Agents & Brokers</h3>
                <p className="text-sm text-gray-600">All property dealers need RERA agent registration.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <Clock className="w-10 h-10 text-green-500 mx-auto mb-2"/>
                <h3 className="font-semibold text-gray-700">Ongoing Projects</h3>
                <p className="text-sm text-gray-600">If under construction & meeting RERA criteria.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <Map className="w-10 h-10 text-green-500 mx-auto mb-2"/>
                <h3 className="font-semibold text-gray-700">Large Projects</h3>
                <p className="text-sm text-gray-600">{">"} 500 sqm or {">"} 8 units (Apartments, Villas, Commercial).</p>
              </div>
            </div>
          </div>

          {/* Documents Required Section */}
          <div id="Documents Required" className="mt-12 p-8 mx-auto bg-white rounded-2xl shadow-lg">
            <div className="flex justify-center items-center space-x-3 mb-4 group cursor-pointer">
               <FileText className="w-8 h-8 text-indigo-600 transition-colors duration-300 group-hover:text-emerald-500" />
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Documents Required for RERA Registration
              </h2>
            </div>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div> {/* Changed color */}

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
              {/* Document Items */}
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4"> {/* Changed color */}
                  <Map className="w-10 h-10 text-indigo-500" /> {/* Changed color */}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Project Layout & Site Plan</h3>
                <p className="text-gray-600 mt-2 text-sm">Approved by local development authorities.</p>
              </div>
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Building Plan Approval</h3>
                <p className="text-gray-600 mt-2 text-sm">Certificate issued by municipal bodies.</p>
              </div>
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <LandPlot className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Title Deed & Land Docs</h3>
                <p className="text-gray-600 mt-2 text-sm">Proof of legal ownership of the land.</p>
              </div>
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <Banknote className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Bank Account Details</h3>
                <p className="text-gray-600 mt-2 text-sm">Separate project escrow account as per RERA.</p>
              </div>
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <FileSignature className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Agreements</h3>
                <p className="text-gray-600 mt-2 text-sm">Copies of Agreement of Sale & Builder-Buyer Agreement.</p>
              </div>
              <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <IdCard className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Promoter ID</h3>
                <p className="text-gray-600 mt-2 text-sm">Developer/Builder's PAN & Aadhaar details.</p>
              </div>
               <div className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center md:col-start-2"> {/* Center last item on medium screens */}
                <div className="w-16 h-16 border-2 border-indigo-300 rounded-full flex items-center justify-center mb-4">
                  <History className="w-10 h-10 text-indigo-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Previous Project Details</h3>
                <p className="text-gray-600 mt-2 text-sm">Information on completed projects, if applicable.</p>
              </div>
            </div>
          </div>

          {/* RERA Registration Process Section */}
          <div id='RERA Process' className="mt-12 container mx-auto p-8 bg-slate-50 rounded-2xl shadow-md">
            <div className="flex justify-center items-center space-x-3 mb-4">
                <ListOrdered className="w-8 h-8 text-teal-600"/>
                <h2 className="text-2xl font-bold text-center text-gray-800">
                RERA Registration Process with eLegal Samadhan
                </h2>
            </div>
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-8"></div> {/* Changed color */}
            <p className="text-center text-gray-600 mb-8">We provide end-to-end assistance. Here’s how it works:</p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4"> {/* Changed color */}
                  <ClipboardList className="w-10 h-10 text-teal-500" /> {/* Changed color */}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Step 1: Consultation</h3>
                <p className="text-gray-600 mt-2 text-sm">Guidance on required documents & eligibility.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4">
                  <FileUp className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Step 2: Preparation & Submission</h3>
                <p className="text-gray-600 mt-2 text-sm">Filling forms, compiling docs & submitting to RERA Authority.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4">
                  <SearchCheck className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Step 3: Verification</h3>
                <p className="text-gray-600 mt-2 text-sm">RERA officials review the application & documents.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4">
                  <BadgeCheck className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Step 4: Approval & ID</h3>
                <p className="text-gray-600 mt-2 text-sm">Issuance of unique RERA registration number.</p>
              </div>
               <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center md:col-span-1 sm:col-span-2 md:col-start-2"> {/* Adjust position */}
                <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Step 5: Ongoing Compliance</h3>
                <p className="text-gray-600 mt-2 text-sm">Assistance with periodic updates & compliance needs.</p>
              </div>
            </div>
          </div>

           {/* RERA Registration Fees Section */}
           <div id="RERA Fees" className="mt-12 p-8 mx-auto bg-white rounded-2xl shadow-lg">
              <div className="flex justify-center items-center space-x-3 mb-4">
                 <BadgeDollarSign className="w-8 h-8 text-orange-600"/>
                 <h2 className="text-2xl font-bold text-center text-gray-800">
                   RERA Registration Fees (State-Specific)
                 </h2>
              </div>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
              <p className="text-center text-gray-600 mb-6">
                Fees vary based on project type (Residential/Commercial) and state regulations. Here are examples:
              </p>
              {/* Simple table representation */}
              <div className="overflow-x-auto">
                  <table className="w-full max-w-3xl mx-auto border border-gray-300 text-left">
                      <thead className="bg-gray-100">
                          <tr>
                              <th className="border border-gray-300 p-2">State</th>
                              <th className="border border-gray-300 p-2">Residential Project Fee</th>
                              <th className="border border-gray-300 p-2">Commercial Project Fee</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border border-gray-300 p-2 font-medium">Rajasthan</td>
                              <td className="border border-gray-300 p-2">₹5/sqm (≤1000 sqm), ₹10/sqm ({">"}1000 sqm)</td>
                              <td className="border border-gray-300 p-2">₹10/sqm</td>
                          </tr>
                          <tr>
                              <td className="border border-gray-300 p-2 font-medium">Maharashtra</td>
                              <td className="border border-gray-300 p-2">₹10/sqm</td>
                              <td className="border border-gray-300 p-2">₹20/sqm</td>
                          </tr>
                           <tr>
                              <td className="border border-gray-300 p-2 font-medium">Delhi</td>
                              <td className="border border-gray-300 p-2">₹5/sqm</td>
                              <td className="border border-gray-300 p-2">₹15/sqm</td>
                          </tr>
                          <tr>
                              <td className="border border-gray-300 p-2 font-medium">Uttar Pradesh</td>
                              <td className="border border-gray-300 p-2">₹10/sqm</td>
                              <td className="border border-gray-300 p-2">₹25/sqm</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">*Fees are indicative and subject to change as per state RERA authority guidelines.</p>
           </div>

          {/* Consequences of Non-Registration Section */}
          <div id='Consequences' className="mt-12 container mx-auto p-8 bg-red-50 rounded-2xl shadow-md"> {/* Changed background */}
            <div className="flex justify-center items-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600"/>
                <h2 className="text-2xl font-bold text-center text-gray-800">
                Consequences of Not Registering Under RERA
                </h2>
            </div>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div> {/* Changed color */}
            <p className="text-center text-gray-600 mb-8">Failure to register can lead to serious penalties and legal actions:</p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4"> {/* Changed color */}
                  <AlertTriangle className="w-10 h-10 text-red-500" /> {/* Changed color */}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Heavy Penalties</h3>
                <p className="text-gray-600 mt-2 text-sm">Fines up to 10% of the total project cost.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4">
                  <Ban className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Sale Restrictions</h3>
                <p className="text-gray-600 mt-2 text-sm">Cannot advertise, market, or sell unregistered projects.</p>
              </div>
               <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4">
                  <Gavel className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Legal Complaints</h3>
                <p className="text-gray-600 mt-2 text-sm">Homebuyers can file complaints in RERA tribunals.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4">
                  <TrendingDown className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Loss of Credibility</h3>
                <p className="text-gray-600 mt-2 text-sm">Low buyer trust and difficulty in securing sales/finance.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center md:col-span-1 sm:col-span-2 md:col-start-2"> {/* Adjust position */}
                <div className="w-16 h-16 border-2 border-red-300 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Project Delays</h3>
                <p className="text-gray-600 mt-2 text-sm">Risk of legal proceedings causing significant delays.</p>
              </div>
            </div>
          </div>

           {/* Why Choose eLegal Samadhan Section */}
           <div id="Why Choose Us" className="mt-12 p-8 mx-auto bg-blue-50 rounded-2xl shadow-md"> {/* Changed background */}
            <div className="flex justify-center items-center space-x-3 mb-4">
              <CheckSquare className="w-8 h-8 text-blue-600"/>
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Why Choose eLegal Samadhan?
              </h2>
            </div>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div> {/* Changed color */}
            <p className="text-center text-gray-600 mb-8">Expert assistance for hassle-free RERA compliance:</p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                <FileCheck className="w-10 h-10 text-blue-500 mb-2"/>
                <h3 className="font-semibold text-gray-700">End-to-End Compliance</h3>
                <p className="text-sm text-gray-600">Managing the entire process from documents to registration.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                <User className="w-10 h-10 text-blue-500 mb-2"/> {/* Using User icon for 'Expert' */}
                <h3 className="font-semibold text-gray-700">Expert Legal Assistance</h3>
                <p className="text-sm text-gray-600">Specialized team ensuring proper documentation & submission.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                <Clock className="w-10 h-10 text-blue-500 mb-2"/>
                <h3 className="font-semibold text-gray-700">Time-Saving & Cost-Effective</h3>
                <p className="text-sm text-gray-600">Fast-tracking registration, avoiding unnecessary delays & costs.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                 <Globe className="w-10 h-10 text-blue-500 mb-2"/>
                <h3 className="font-semibold text-gray-700">Pan-India Support</h3>
                <p className="text-sm text-gray-600">Assisting builders and agents across multiple states.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center md:col-span-1 sm:col-span-2 md:col-start-2"> {/* Adjust position */}
                <CheckSquare className="w-10 h-10 text-blue-500 mb-2"/>
                <h3 className="font-semibold text-gray-700">Updates & Compliance</h3>
                <p className="text-sm text-gray-600">Keeping you informed about regulations and compliance needs.</p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div id="Conclusion" className="mt-12 text-center max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
             <p className="text-gray-700 mb-4">
               RERA registration is a legal necessity for real estate developers, builders, and agents. eLegal Samadhan simplifies the process, ensuring a smooth and legally compliant registration experience. With our expertise, you can avoid legal troubles, gain buyer trust, and focus on successful project completion.
             </p>
             <h3 className="text-xl font-semibold text-blue-700">
                ⚖️ Register Your Real Estate Project with eLegal Samadhan Today! 🚀
             </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReraRegistrationPage;