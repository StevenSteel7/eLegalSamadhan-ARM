'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'; // Keep social icons if planning to use

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo SVG */}
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              {/* Brand Name */}
              <div>
                <span className="font-bold text-2xl text-orange-500">e</span>
                <span className="font-bold text-2xl text-emerald-400">Legal Samadhan</span>
              </div>
            </div>
            <p className="text-gray-300">Your trusted partner for all legal solutions and business registrations in India.</p>
            {/* Contact Details */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3"> {/* Changed to items-start for long address */}
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>+91 91160 51108</span>
              </div>
              <div className="flex items-start space-x-3"> {/* Changed to items-start */}
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>elegalsamadhan@outlook.com</span>
              </div>
              <div className="flex items-start space-x-3"> {/* Changed to items-start */}
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                {/* Ensure address wraps correctly */}
                <span className="block">196 B first floor, near Ananta Hotel, opposite Motison's Jewellers, Tonk road, Jaipur, Rajasthan, India 302012</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Legal Services) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Legal Services</h3>
            <ul className="space-y-2">
              <li><Link href="/msme-reg" className="hover:text-emerald-400 transition-colors">MSME Registration</Link></li>
              <li><Link href="/comsumer-Samadhan" className="hover:text-emerald-400 transition-colors">Consumer Matters</Link></li>
              <li><Link href="/arbitration" className="hover:text-emerald-400 transition-colors">Arbitration Matters</Link></li>
              <li><Link href="/rera" className="hover:text-emerald-400 transition-colors">RERA Matters</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Company Registration */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Company Registration</h3>
            <ul className="space-y-2">
              <li><Link href="/company-reg/one-person" className="hover:text-emerald-400 transition-colors">One Person Company</Link></li>
              <li><Link href="/company-reg/pvt-ltd" className="hover:text-emerald-400 transition-colors">Private Limited Company</Link></li>
              <li><Link href="/company-reg/llp-reg" className="hover:text-emerald-400 transition-colors">LLP Registration</Link></li>
              <li><Link href="/company-reg/nidhi-reg" className="hover:text-emerald-400 transition-colors">Nidhi Company</Link></li>
              <li><Link href="/company-reg/sec-8" className="hover:text-emerald-400 transition-colors">Section 8 Company</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Licenses & Rights */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Licenses & Rights</h3>
            <ul className="space-y-2">
              <li><Link href="/licenses/fssai" className="hover:text-emerald-400 transition-colors">FSSAI Registration</Link></li>
              <li><Link href="/licenses/iso" className="hover:text-emerald-400 transition-colors">ISO Registration</Link></li>
              <li><Link href="/trademark" className="hover:text-emerald-400 transition-colors">Trademark Registration</Link></li>
              <li><Link href="/trademark" className="hover:text-emerald-400 transition-colors">Copyright Registration</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Legal Links & Social */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          {/* Flex container for alignment */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright Notice */}
            <div className="text-sm text-gray-300 text-center md:text-left"> {/* Added alignment */}
              © {new Date().getFullYear()} eLegal Samadhan. All rights reserved.
            </div>

            {/* Legal & Social Links Section */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"> {/* Adjusted flex direction for stacking */}

                {/* Privacy Policy Link */}
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                </Link>
                {/* You can add other links like Terms of Service here */}
                {/*
                <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                    Terms of Service
                </Link>
                */}

                {/* Social Media Links (Optional - Uncomment if needed) */}
                {/* <div className="flex space-x-4">
                  <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-orange-500 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-orange-500 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-orange-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div> */}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;