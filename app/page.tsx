'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Users, Lock, CheckCircle, ArrowRight, Star, BookOpen, Award, Shield } from 'lucide-react';
import Link from 'next/link';


const stateOptions = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"
];


// ALL for the testimonials
function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

const isVisible = { testimonials: true };


const testimonials = [
  {
    content: "eLegal Samadhan helped me register my private company with exceptional efficiency. Their team guided me through every step and made the process seamless.",
    name: "Vikram Rao", // Changed Name
    position: "CEO, TechStart India",
    avatarUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" // Example Indian Male Professional
  },
  {
    content: "The trademark registration process was incredibly smooth thanks to eLegal Samadhan. They handled all the paperwork and follow-ups professionally.",
    name: "Ananya Sharma", // Changed Name
    position: "Founder, Design Hub",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" // Example Indian Female Professional
  },
   {
    content: "Navigating the complexities of GST registration was daunting, but eLegal Samadhan made it straightforward and stress-free. Highly recommended!",
    name: "Rohan Mehta", // Changed Name
    position: "Owner, Creative Goods Co.",
    avatarUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" // Example Indian Male
  },
  {
    content: "When I needed legal assistance for my startup, eLegal Samadhan provided comprehensive support that helped me navigate complex regulatory requirements.",
    name: "Sunita Iyer", // Changed Name
    position: "Entrepreneur",
    avatarUrl: "https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2\.svg" // Example Indian Female
  }
  // Add more testimonials if needed
];

const showScrollbar = false;
//--- Testimonials helpers end  ---//



const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    services: false,
    testimonials: false,
  });


  const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '', // Renamed 'mobile' for consistency with input name
      state: ''
    });
    
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (submissionStatus !== 'idle' && submissionStatus !== 'submitting') {
        setSubmissionStatus('idle');
        setStatusMessage(null);
      }
    };


     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        setStatusMessage('Submitting your request...');
    
        // Simple frontend validation
        if (!formData.name || !formData.email || !formData.mobile || !formData.state) {
            setStatusMessage('Please fill in all required fields.');
            setSubmissionStatus('error');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setStatusMessage('Please enter a valid email address.');
            setSubmissionStatus('error');
            return;
        }
        if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            setStatusMessage('Please enter a valid 10-digit Indian mobile number.');
            setSubmissionStatus('error');
            return;
        }
    
        try {
          const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile, // Map 'mobile' state field to 'phone' for backend API
            state: formData.state,
            formSource: 'General Consultation Request' 
          };
    
          const response = await fetch('/api/request-callback', { // Still use the same generalized API route
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            setSubmissionStatus('success');
            setStatusMessage(result.message || 'Request submitted successfully! We will contact you shortly.');
            setFormData({ name: '', email: '', mobile: '', state: '' }); // Clear form
          } else {
            setSubmissionStatus('error');
            setStatusMessage(result.error || 'An unexpected error occurred. Please try again.');
            console.error("Submission Error:", result);
          }
        } catch (error) {
          console.error('Fetch Error:', error);
          setSubmissionStatus('error');
          setStatusMessage('Could not connect to the server. Please check your connection.');
        }
      };

      const isLoading = submissionStatus === 'submitting';


  useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const services = document.getElementById('services');
      const testimonials = document.getElementById('testimonials');
      
      if (features) {
        const rect = features.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, features: rect.top < window.innerHeight * 0.75 }));
      }
      
      if (services) {
        const rect = services.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, services: rect.top < window.innerHeight * 0.75 }));
      }
      
      if (testimonials) {
        const rect = testimonials.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, testimonials: rect.top < window.innerHeight * 0.75 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Enhanced Background */}

      <div className="relative bg-blue-900 overflow-hidden pt-10 md:pt-1">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-repeat opacity-100"></div>
        </div>
        <div className="container mx-auto px-4 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Your Legal Solutions <span className="text-orange-500">Simplified</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional legal assistance for business registration, compliance, and legal matters across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-semibold transition duration-300 text-center">
                  Get Started
                </Link>
                <Link href="#services" className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center gap-2">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
          
            </div>

             {/* Form section */}       
              <div className="md:w-1/2 flex justify-center" id='Contact Form'>
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-blue-800 p-4 text-white">
                    <h3 className="text-xl font-semibold text-center">Get Legal Consultation Now</h3>
                  </div>
                  <div className="p-6">
                    {/* --- Form Tag Added --- */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div>
                        <label htmlFor="general-consult-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="general-consult-name"
                          name="name" // Matches state key
                          value={formData.name} // Bind value
                          onChange={handleChange} // Add handler
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100" // Added disabled style
                          required
                          disabled={isLoading} // Add disabled state
                        />
                      </div>

                      <div>
                        <label htmlFor="general-consult-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="general-consult-email"
                          name="email" // Matches state key
                          value={formData.email} // Bind value
                          onChange={handleChange} // Add handler
                          placeholder="Enter your email address"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          required
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label htmlFor="general-consult-mobile" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="general-consult-mobile"
                          name="mobile" // Matches state key
                          value={formData.mobile} // Bind value
                          onChange={handleChange} // Add handler
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          required
                          pattern="^[6-9]\d{9}$" // Added pattern for basic validation hint
                          title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9."
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label htmlFor="general-consult-state" className="block text-sm font-medium text-gray-700 mb-1">Select State *</label>
                        <select
                          id="general-consult-state"
                          name="state" // Matches state key
                          value={formData.state} // Bind value
                          onChange={handleChange} // Add handler
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          required
                          disabled={isLoading}
                        >
                          <option value="" disabled>Select State</option> {/* Removed selected attribute, value handles it */}
                          {stateOptions.map(s => <option key={s} value={s}>{s}</option>)} {/* Use map */}
                        </select>
                      </div>

                      <button
                        type="submit" // Ensure type is submit
                        className={`w-full bg-orange-500 hover:bg-orange-600 text-white text-md py-3 rounded-md font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                              isLoading ? 'opacity-70 cursor-not-allowed' : '' // Add loading styles
                            }`}
                        disabled={isLoading} // Add disabled state
                      >
                        {/* --- Loading State Copied --- */}
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Request Call Back' // Original button text
                        )}
                      </button>

                      {/* --- Submission Status Feedback Copied --- */}
                      {submissionStatus === 'success' && (
                        <p className="text-center text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-md">
                          {statusMessage}
                        </p>
                      )}
                      {submissionStatus === 'error' && (
                        <p className="text-center text-sm text-red-600 font-medium bg-red-50 p-3 rounded-md">
                          {statusMessage}
                        </p>
                      )}
                      {submissionStatus === 'submitting' && statusMessage && (
                        <p className="text-center text-sm text-blue-600 font-medium bg-blue-50 p-3 rounded-md">
                          {statusMessage}
                        </p>
                      )}

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Terms & Conditions
                      </p>
                    </form> {/* --- Close Form Tag --- */}
                  </div>
                </div>
              </div>


          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center">
              <Shield className="h-7 w-7 text-blue-900 mr-2" />
              <span className="text-sm md:text-base font-medium">100% Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-7 w-7 text-green-500 mr-2" />
              <span className="text-sm md:text-base font-medium">Verified Legal Experts</span>
            </div>
            <div className="flex items-center">
              <Star className="h-7 w-7 text-yellow-500 mr-2" />
              <span className="text-sm md:text-base font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <Award className="h-7 w-7 text-orange-500 mr-2" />
              <span className="text-sm md:text-base font-medium">Certified Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Animation */}
      <section id="features" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-orange-500">eLegal</span> <span className="text-emerald-500">Samadhan</span>?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We provide comprehensive legal solutions tailored to your specific needs with transparency and professionalism.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 joom">
              <Phone className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600 text-lg">Our team of legal experts is available around the clock to assist you with your legal needs and emergencies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-700 joom">
              <Lock className="h-12 w-12 text-blue-700  mb-6" />
              <h3 className="text-2xl font-semibold mb-4">100% Confidentiality</h3>
              <p className="text-gray-600 text-lg">We guarantee the confidentiality of your information and legal matters with strict privacy protocols.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 joom ">
              <Users className="h-12 w-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Experienced Lawyers</h3>
              <p className="text-gray-600 text-lg">Our team consists of highly experienced lawyers with expertise in various domains of business law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple, transparent process to get your legal matters resolved</p>
          </div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10 ">
              <div className="bg-white p-6 rounded-lg text-center joom">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Book a free consultation with our legal experts</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center joom">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">Submit required documents securely online</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center joom">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Processing</h3>
                <p className="text-gray-600">Our team handles your application process</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center joom">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Completion</h3>
                <p className="text-gray-600">Receive your documents and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <section id="services" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Some of our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive legal solutions for businesses and individuals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 ">
            {[
              { title: "LLP Registration", desc: "Seamless registration of Limited Liability Partnerships with all legal requirements.", icon: BookOpen, link: "/company-reg/llp-reg" },
              { title: "Private Limited Company", desc: "Establish your Private Limited Company with our hassle-free registration process.", icon: Shield, link: "/company-reg/pvt-ltd" },
              { title: "One Person Company", desc: "Simplified registration process for One Person Companies with personalized support.", icon: Users, link: "/company-reg/one-person" },
              { title: "Trademark Registration", desc: "Protect your brand identity with our comprehensive trademark registration services.", icon: Award, link: "/trademark" },
              { title: "FSSAI Registration", desc: "Comply with food safety regulations with our expert FSSAI registration service.", icon: Shield, link: "/licenses/fssai" },
              { title: "Copyright Registration", desc: "Secure your creative works with proper copyright registration and protection.", icon: BookOpen, link: "/opc" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group joom">
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-900 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link href={service.link} className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Testimonials Section with Animation */}
      <section
        id="testimonials"
        // Ensure isVisible.testimonials correctly reflects the visibility state
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible && isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses and individuals who have transformed their legal experience with us
            </p>
          </div>

          {/* Horizontally Scrolling Container */}
          <div
            className={classNames(
              "flex overflow-x-auto space-x-8 pb-8", // Flex layout, scroll, spacing, padding
              "scroll-snap-type-x mandatory",        // Optional: scroll snapping
              // Optional: scrollbar hiding (may need plugin/CSS)
              !showScrollbar && 'scrollbar-hide',
              !showScrollbar && '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' // More explicit hiding
            )}
          >
            {/* Map through testimonials data */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={classNames(
                  "bg-gray-50 p-8 rounded-lg shadow-md relative", // Card styling
                  "w-80 md:w-96",      // Fixed card width (adjust as needed)
                  "flex-shrink-0",     // Prevent shrinking
                  "scroll-snap-align-center" // Optional: center align on snap
                )}
              >
               

                {/* Card Content */}
                <div className="mt-4"> {/* Spacing below star */}
                  <p className="text-gray-600 italic mb-6 min-h-[100px]"> {/* Testimonial text with min-height */}
                    “{testimonial.content}”
                  </p>
                  <div className="flex items-center">
                    {/* Avatar Image */}
                    <img
                      src={testimonial.avatarUrl}
                      alt={`Avatar of ${testimonial.name}`}
                      className="mr-4 w-12 h-12 rounded-full object-cover border-2 border-gray-200" // Avatar styling
                    />
                    {/* Name and Position */}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))} {/* End map */}
          </div> {/* End Scrolling Container */}

        </div> {/* End Container */}
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-4 bg-gradient-to-r from-orange-500 to-emerald-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business Future?</h2>
            <p className="text-lg mb-8">Let our experts guide you through every step. Contact us today for personalized support.</p>
            <Link href="/contact"> {/* Link to your contact page */}
              <span className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
                Contact Us
              </span>
            </Link>
          </div>
        </section>

  
    </div>
  );
};

export default LandingPage; 