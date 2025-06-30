'use client';

import React from 'react';
import { BookOpen, Briefcase, Lightbulb, Navigation, Zap, Building, User, Rocket, FileText } from 'lucide-react'; // Added relevant icons
import Link from 'next/link';
import Image from 'next/image'; // If you want to add images

const AboutUsPage = () => {
  // No complex state needed for a static About Us page like LandingPage animations
  // You could add scroll animations similarly if desired, but keeping it simpler for now.

  return (
    <div className="relative">

      {/* Hero Section - Adapted from LandingPage */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Subtle background pattern */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-repeat opacity-100"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center"> {/* Centered text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            About <span className="text-orange-500">E-Legal</span> <span className="text-emerald-400">Samadhan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your Trusted Partner in Navigating the Legal Landscape. Simplifying legal processes for individuals and businesses across India.
          </p>
        </div>
      </div>

       {/* Core Introduction & MSME Status Section */}
       <section className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                 Simplifying Legal Matters Across India
               </h2>
               <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                 eLegal Samadhan is a dedicated legal service platform committed to simplifying complex legal processes for individuals and businesses alike. We strive to make legal assistance accessible and understandable for everyone.
               </p>
               <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                 We are proud to be a registered Micro, Small, and Medium Enterprise (MSME) under the Government of India, holding MSME Registration Number:
                 <strong className="block text-emerald-600 font-semibold mt-1">UDYAM-RJ-50-0019958</strong>
               </p>
               <p className="text-lg text-gray-700 leading-relaxed">
                 This recognition underscores our commitment to contributing to the nation's economic growth while adhering to the highest standards of service and compliance.
               </p>
             </div>
             <div className="text-center">
               {/* Optional: Add an illustrative image here */}
               {/* Example using a placeholder icon */}
                <FileText className="h-48 w-48 text-blue-200 mx-auto" />
                <p className="mt-4 text-gray-500 italic">Registered & Recognized</p>
               {/* Or use an Image component: */}
               {/* <Image
                 src="/images/about-illustration.svg" // Replace with your image path
                 alt="eLegal Samadhan Illustration"
                 width={400}
                 height={400}
                 className="mx-auto rounded-lg shadow-md"
               /> */}
             </div>
           </div>
         </div>
       </section>

      {/* Our Expertise Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Driven by Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strength lies in our highly skilled team of professionals dedicated to providing top-tier legal support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
             <div className="text-center md:text-left">
                <Briefcase className="h-16 w-16 text-orange-500 mb-6 inline-block" />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Professional Team</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Backed by a diverse team including experienced lawyers, chartered accountants, company secretaries, and compliance experts, we bring a wealth of knowledge to every case.
                </p>
              </div>
             <div className="text-center md:text-left">
                <BookOpen className="h-16 w-16 text-emerald-500 mb-6 inline-block" />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Comprehensive Services</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                   We offer a broad range of legal and compliance services covering legal registration, essential advisory, and effective dispute resolution mechanisms tailored to your specific needs.
                </p>
             </div>
          </div>
        </div>
      </section>

       {/* Our Commitment/Values Section - Similar to LandingPage Features */}
       <section className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Commitment to You</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               We are dedicated to providing solutions that address everyday legal challenges effectively.
             </p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500 text-center">
               <Lightbulb className="h-12 w-12 text-orange-500 mb-5 mx-auto" />
               <h3 className="text-2xl font-semibold mb-3 text-blue-900">Practical Solutions</h3>
               <p className="text-gray-700 text-lg">
                 We focus on delivering actionable and realistic legal strategies that work in the real world.
               </p>
             </div>
             <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-700 text-center">
               <Navigation className="h-12 w-12 text-blue-700 mb-5 mx-auto" />
               <h3 className="text-2xl font-semibold mb-3 text-blue-900">Accessible Services</h3>
               <p className="text-gray-700 text-lg">
                 Our platform makes it easy for anyone to access professional legal help when they need it.
               </p>
             </div>
             <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-500 text-center">
               <Zap className="h-12 w-12 text-emerald-500 mb-5 mx-auto" />
               <h3 className="text-2xl font-semibold mb-3 text-blue-900">Efficient Processes</h3>
               <p className="text-gray-700 text-lg">
                 We leverage technology and streamlined workflows to resolve your legal matters promptly.
               </p>
             </div>
           </div>
         </div>
       </section>

      {/* Who We Serve Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Serving a Diverse Clientele</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise caters to a wide range of clients facing unique legal challenges.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <User className="h-12 w-12 text-blue-900 mb-3" />
              <span className="text-lg font-medium text-gray-800">Individuals</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Rocket className="h-12 w-12 text-orange-500 mb-3" />
              <span className="text-lg font-medium text-gray-800">Startups</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Briefcase className="h-12 w-12 text-emerald-500 mb-3" />
              <span className="text-lg font-medium text-gray-800">Business Owners</span>
            </div>
             <div className="flex flex-col items-center p-4">
              <Building className="h-12 w-12 text-blue-700 mb-3" />
              <span className="text-lg font-medium text-gray-800">Companies & Corporates</span>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Reused from LandingPage */}
      <section id="cta-about" className="py-16 px-4 bg-gradient-to-r from-orange-500 to-emerald-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Legal Needs?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're starting a business, need legal advice, or require compliance support, eLegal Samadhan is here to help.
            </p>
            <Link href="/contact">
              <span className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg inline-block"> {/* Added inline-block */}
                Get Expert Assistance
              </span>
            </Link>
          </div>
      </section>

      
    </div>
  );
};

export default AboutUsPage;