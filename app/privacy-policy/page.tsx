// src/app/privacy-policy/page.jsx (or wherever you place this page)

'use client';

import React from 'react';
import Link from 'next/link'; // Keep if you need links within the policy, e.g., to contact page
import { ShieldAlert, Info } from 'lucide-react'; // Icons for disclaimer/info

const PrivacyPolicyPage = () => {


  return (
    <div className="relative">

      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
         <div className="absolute inset-0 opacity-10">
      
         </div>
        <div className="container mx-auto px-4 py-20 md:py-10 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl"> {/* Constrained width for readability */}

          {/* Disclaimer Section */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-lg mb-12 shadow-sm">
            <div className="flex items-start space-x-3">
              <ShieldAlert className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-orange-800 mb-3">Disclaimer</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This website is privately owned and operated by eLegal Samadhan, and is <strong className="font-semibold">not affiliated with, endorsed by, or connected to any government agency or department.</strong> We do not claim to represent any government authority.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The forms available on this website are not intended for official government registration but are solely used to collect information from clients to better understand their requirements and business needs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using this website, you acknowledge that we are a registered Micro, Small, and Medium Enterprise (MSME), Government of India (UDYAM-RJ-50-0019958). Any fees charged through this platform are for consultancy and support services provided upon client request. We also reserve the right to delegate or outsource matters for further processing, as deemed appropriate.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            {/* 1. Introduction */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">1. Introduction</h3>
              <p>
                This Privacy Policy explains how eLegal Samadhan collects, uses, and shares personal information when you visit and interact with our website. By using this website, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            {/* 2. Not a Government Entity */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">2. Not a Government Entity</h3>
              <p>
                As stated in our disclaimer, this website is privately operated and is not affiliated with any government agency or department. We do not represent, are not endorsed by, and are not connected to any governmental body. Any forms provided are solely for internal client intake purposes and do not constitute official government documentation or registration.
              </p>
            </section>

            {/* 3. Information We Collect */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">3. Information We Collect</h3>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Personal details (e.g., name, email address, phone number) submitted via contact or intake forms.</li>
                <li>Business information submitted by clients seeking consultancy services.</li>
                <li>Technical information such as IP address, browser type, and cookies when you interact with our site.</li>
              </ul>
            </section>

            {/* 4. How We Use Information */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">4. How We Use Information</h3>
              <p className="mb-2">The information collected is used to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide consultancy services requested by you.</li>
                <li>Improve the quality and functionality of our website.</li>
                <li>Communicate with you regarding your inquiries or services.</li>
              </ul>
            </section>

            {/* 5. Fees and Services */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">5. Fees and Services</h3>
              <p>
                Fees collected through this website are for consultancy services only. We offer services as a registered Micro, Small, and Medium Enterprise (MSME). You acknowledge that any assistance provided is upon your specific request.
              </p>
            </section>

            {/* 6. Use of Third Parties */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">6. Use of Third Parties</h3>
              <p>
                We reserve the right to outsource or refer cases to qualified third-party service providers (such as lawyers, chartered accountants, etc.) when necessary to fulfill your service request, always ensuring appropriate confidentiality and privacy safeguards are in place.
              </p>
            </section>

            {/* 7. Cookies */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">7. Cookies</h3>
              <p>
                This site may use cookies or similar technologies (like web beacons or local storage) to enhance user experience, analyze site usage, and assist in our marketing efforts. You can typically disable cookies via your browser settings, though doing so may affect site functionality and your experience.
              </p>
            </section>

            {/* 8. Data Security */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">8. Data Security</h3>
              <p>
                We implement reasonable administrative, technical, and physical security measures designed to protect your personal data from unauthorized access, use, alteration, or destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 9. Your Rights */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">9. Your Rights</h3>
              <p>
                Depending on your jurisdiction and applicable law, you may have certain rights regarding your personal data, such as the right to access, correct, update, or request deletion of your personal information. To inquire about or exercise these rights, please contact us at <strong className="text-emerald-600 whitespace-nowrap">+91 99834 44493</strong> or via our contact form. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            {/* 10. Changes to This Policy */}
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">10. Changes to This Policy</h3>
              <p>
                We reserve the right to modify, alter, or update this Privacy Policy at any time, without prior notice. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically to stay informed about how we are protecting the personal information we collect. Your continued use of the website after any changes constitutes your acceptance of the new Privacy Policy.
              </p>
            </section>

        

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;