import {
  ClipboardList,
  Diamond,
  Headphones,
  MonitorPlay,
  Palette,
  Rocket,
  Scale,
} from "lucide-react";

import React from "react";

const TheProcess = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            <span className="text-indigo-900">How We </span>
            <span className="text-orange-400 transition-colors duration-300 hover:text-emerald-400 hover:cursor-all-scroll  navlink">
              Work?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <ClipboardList className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Fill Up Form
            </h3>
            <p className="text-gray-600">
              Simply fill the form & opt for probable service you are thinking
              to have to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Headphones className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Call to Discuss
            </h3>
            <p className="text-gray-600">
              Our expert will connect with you & prepare documents, after you
              choose any service.
            </p>
          </div>

          {/* Step 3 */}

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Diamond className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Enjoy the Process
            </h3>
            <p className="text-gray-600">
              Track your services at the dashboard and stay updated with the
              progress.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-indigo-900">Services for both </span>
            <span className="relative">
              Start-Ups & Individuals
              <div className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-1"></div>
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We have specialized packages to lessen your business's burdens in
            the legal and technical areas. Have Rest!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              Legal/CA Services
            </h3>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              Start-Ups Funding
            </h3>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <MonitorPlay className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              Website Development
            </h3>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              Graphic Designing
            </h3>
          </div>
        </div>

        {/* Contact Expert Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors">
            Contact Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
