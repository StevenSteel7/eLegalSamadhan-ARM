'use client';
// NavBar.jsx
import React, { useState } from 'react'; // Removed 'use' import as it wasn't used
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu, MessageSquare, Scale, X } from 'lucide-react'; // Removed unused 'Scale' icon

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState<string[]>([]);

  const toggleSubmenu = (menuName: string) => {
    setActiveMenus(prev => {
      if (prev.includes(menuName)) {
        return prev.filter(item => item !== menuName);
      } else {

         return [...prev, menuName];
      }
    });
  };

  const isMenuActive = (menuName: string) => {
    return activeMenus.includes(menuName);
  };

  const getSubmenuHeight = (menuName: string) => {
    // Approximate heights for different menus - adjust these values as needed
    const heights: { [key: string]: string } = {
      legalSamadhan: 'max-h-[150px]', // Adjusted height
      registration: 'max-h-[800px]', // Larger height for nested menus
      companyReg: 'max-h-[300px]',
      businessReg: 'max-h-[150px]', // Adjusted height
      ipRights: 'max-h-[150px]',   // Adjusted height
      licenses: 'max-h-[250px]',
      more: 'max-h-[100px]' // Adjusted height
    };
    // Calculate height dynamically based on content? Could be complex.
    // Using fixed max-heights for simplicity.
    return heights[menuName] || 'max-h-[200px]'; // Default fallback
  };

  // Function to close mobile menu on link click (optional but good UX)
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    // Optionally reset active menus when closing main menu
    // setActiveMenus([]);
  }

  return (
    <div>
      {/* Desktop Navbar */}                                     {/* hidden on all screens accept lg and xl */}
      <nav id="Desktop Navbar" className="bg-blue-900 text-white hidden lg:block xl:block z-[500] fixed top-0 left-0 w-full"> {/* Use fixed positioning */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <Link href="/" >
              <span className="font-bold text-xl text-orange-500">e</span>
              <span className="font-bold text-xl text-emerald-400">Legal Samadhan</span>
              </Link>

            </div>

            {/* Navigation Items */}
            <div className="flex space-x-1 items-center"> {/* Added items-center */}

              {/* Legal Samadhan Dropdown */}
              <div className="relative group" id='Legal Samadhan'>
                  <button className="px-3 py-2 flex items-center nav-link hover:text-orange-500 transition-colors"> {/* Added hover effect */}
                    Legal Samadhan
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" /> {/* Added icon and animation */}
                  </button>
                  <div id='Legal Samadhan dropdown' // Corrected ID
                        className="absolute left-0 mt-2 w-64 {/* Adjusted width */}
                                bg-white shadow-xl rounded-md z-50 text-black opacity-0 invisible group-hover:opacity-100
                                  group-hover:visible duration-300 ease-in-out transform group-hover:translate-y-1"> {/* Added transform for subtle animation */}
                    {/* Removed grid as only one column */}
                    <div className="p-4 rounded-md"> {/* Removed hover effect on the whole box */}
                        <h3 className="font-bold text-lg mb-2 uppercase text-blue-800">Legal Samadhan for:</h3> {/* Added color */}
                        <ul className="space-y-2">
                          <li><Link href="/comsumer-Samadhan" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">Consumer Samadhan</Link></li> {/* Added block/padding/hover */}
                          <li><Link href="/arbitration" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">Arbitration Samadhan</Link></li>
                          <li><Link href="/rera" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">RERA Samadhan</Link></li>
                        </ul>
                      </div>
                  </div>
              </div>

              <Link href="/judgements" className="px-3 py-2 nav-link dropdown-higlight hover:text-orange-500 transition-colors">
                Judgements
              </Link>

              {/* Registration & Rights Dropdown */}
              <div className="relative group" id='Company Registration'>
                <button className="px-3 py-2 flex items-center nav-link hover:text-orange-500 transition-colors"> {/* Added hover effect */}
                   Registration & Rights
                   <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" /> {/* Added icon and animation */}
                </button>
                <div id='Company Registration dropdown'
                      className="absolute left-[-180px] mt-2 w-[750px] max-w-4xl {/* Adjusted positioning and width */}
                              bg-white shadow-xl rounded-md z-50 text-black opacity-0 invisible group-hover:opacity-100
                                group-hover:visible duration-300 ease-in-out transform group-hover:translate-y-1"> {/* Added transform */}
                  <div className="grid grid-cols-3 gap-1 p-2"> {/* Reduced gap */}
                    {/* Company Registration Column */}
                    <div className="p-4 rounded-md hover:bg-gray-100"> {/* Hover effect per column */}
                      <h3 className="font-bold text-base mb-2 uppercase text-blue-800">Company REGISTRATION</h3> {/* Adjusted size/color */}
                      <ul className="space-y-1 text-sm"> {/* Adjusted spacing/size */}
                        <li><Link href="/company-reg/one-person" className="dropdown-higlight block p-1 rounded">One Person Company</Link></li>
                        <li><Link href="/company-reg/pvt-ltd" className="dropdown-higlight block p-1 rounded">Pvt. Ltd. Company</Link></li>
                        <li><Link href="/company-reg/pub-ltd" className="dropdown-higlight block p-1 rounded">Public Ltd. Company</Link></li>
                        <li><Link href="/company-reg/llp-reg" className="dropdown-higlight block p-1 rounded">LLP Registration</Link></li>
                        <li><Link href="/company-reg/nidhi-reg" className="dropdown-higlight block p-1 rounded">Nidhi Company Registration</Link></li>
                        <li><Link href="/company-reg/sec-8" className="dropdown-higlight block p-1 rounded">Section 8 Company (NGO)</Link></li>
                      </ul>
                    </div>

                    {/* Business Registrations Column */}
                    <div className="p-4 border-l border-gray-200 rounded-md hover:bg-gray-100"> {/* Lighter border */}
                      <h3 className="font-bold text-base mb-2 uppercase text-blue-800">BUSINESS REGISTRATIONS</h3> {/* Shortened title */}
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/startup" className="dropdown-higlight block p-1 rounded">Startup India Registration</Link></li> {/* Clarified text */}
                        <li><Link href="/msme-reg" className="dropdown-higlight block p-1 rounded">MSME Registration</Link></li>
                        <li><Link href="/rera-reg" className="dropdown-higlight block p-1 rounded">RERA Registration</Link></li>
                      </ul>
                    </div>

                    {/* IP Rights Column */}
                    <div className="p-4 border-l border-gray-200 rounded-md hover:bg-gray-100">
                      <h3 className="font-bold text-base mb-2 uppercase text-blue-800">IP Rights</h3>
                      <ul className="space-y-1 text-sm">
                        <li><Link href="/trademark" className="dropdown-higlight block p-1 rounded">Trademark Registration</Link></li>
                        <li><Link href="/trademark" className="dropdown-higlight block p-1 rounded">Copyright Registration</Link></li>
                        <li><Link href="/trademark" className="dropdown-higlight block p-1 rounded">Patent Registration</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              {/* Licenses Dropdown */}
              <div className="relative group" id='Licenses'>
                <button className="px-3 py-2 flex items-center nav-link gap-1 hover:text-orange-500 transition-colors">
                  Licenses
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" /> {/* Added icon and animation */}
                </button>
                <div id='Licenses dropdown' // Corrected ID
                      className="absolute left-0 mt-2 w-64 {/* Adjusted width */}
                              bg-white shadow-xl rounded-md z-50 text-black opacity-0 invisible group-hover:opacity-100
                                group-hover:visible duration-300 ease-in-out transform group-hover:translate-y-1"> {/* Added transform */}
                    <div className="p-4 rounded-md"> {/* Removed grid */}
                      <h3 className="font-bold text-lg mb-2 uppercase text-blue-800">Licenses</h3> {/* Added color */}
                      <ul className="space-y-2">
                        <li><Link href="/licenses/fssai" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">FSSAI Registration</Link></li> {/* Added block/padding/hover */}
                        <li><Link href="/licenses/iso" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">ISO Registration</Link></li>
                        <li><Link href="/licenses/trust" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">Trust Registration</Link></li>
                        <li><Link href="/licenses/society" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">Society Registration</Link></li>
                        <li><Link href="/licenses/import-export" className="dropdown-higlight block p-1 rounded hover:bg-gray-100">Import Export Code (IEC)</Link></li> {/* Clarified text */}
                      </ul>
                    </div>
                </div>
              </div>

              {/* About Us Link */}
              <Link href="/about-us" className="px-3 py-2 nav-link dropdown-higlight hover:text-orange-500 transition-colors">
                About Us
              </Link>

              {/* Contact Us Link */}
              <Link href="/contact" className="px-3 py-2 nav-link dropdown-higlight flex items-center gap-1 hover:text-orange-500 transition-colors">
                <MessageSquare className="w-4 h-4 text-green-500" /> {/* Adjusted size */}
                Contact US
              </Link>

            </div>

          </div>
        </div>
      </nav>
       {/* Add a spacer div to prevent content from hiding behind fixed navbar */}
       <div className="h-16 hidden lg:block"></div>


      {/* Mobile Navbar */}
      <div id="Mobile Navbar" className="bg-blue-900 text-white py-3 lg:hidden fixed top-0 left-0 w-full z-40"> {/* Use fixed positioning */}
        <div className="container mx-auto px-4">
          {/* Top bar with logo and menu button */}
          <div className="flex justify-between items-center h-12"> {/* Consistent height */}
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 mr-1 text-orange-500" viewBox="0 0 24 24" fill="currentColor"> {/* Adjusted margin */}
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <Link href="/" onClick={handleMobileLinkClick}> {/* Close menu on logo click */}
                <span className="font-bold text-lg text-orange-500">e</span> {/* Adjusted size */}
                <span className="font-bold text-lg text-emerald-400">Legal Samadhan</span> {/* Adjusted size and text */}
              </Link>
            </div>
            <button
              className="text-white p-1 relative z-50" // Ensure button is clickable above menu
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu" // Added aria-label
              aria-expanded={mobileMenuOpen} // Added aria-expanded
            >
              <Menu className={`h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`h-6 w-6 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} /> {/* Adjusted rotation */}
            </button>
          </div>

          {/* Mobile dropdown menu with animation */}
          <div
            className={`absolute top-full left-0 w-full bg-blue-900 overflow-hidden transition-all duration-500 ease-in-out shadow-lg ${ // Position below header, add shadow
              mobileMenuOpen ? 'max-h-[calc(100vh-48px)] opacity-100' : 'max-h-0 opacity-0' // Use vh for height, adjust for header height (h-12 = 48px)
            }`}
            style={{ maxHeight: mobileMenuOpen ? 'calc(100vh - 48px)' : '0' }} // Inline style for better compatibility
          >
             <div className="pt-2 pb-3 space-y-1 px-4 max-h-[calc(100vh-60px)] overflow-y-auto"> {/* Added padding, scroll */}
              {/* Legal Samadhan */}
              <div className="border-b border-blue-800 pb-1"> {/* Reduced padding */}
                <button
                  className="flex items-center justify-between w-full py-2 text-left" // Added text-left
                  onClick={() => toggleSubmenu('legalSamadhan')}
                  aria-expanded={isMenuActive('legalSamadhan')} // Accessibility
                >
                  <span>Legal Samadhan</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('legalSamadhan') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('legalSamadhan')
                    ? `${getSubmenuHeight('legalSamadhan')} opacity-100`
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-1 space-y-1 text-sm"> {/* Reduced margin/spacing */}
                    <Link href="/comsumer-Samadhan" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r"> {/* Added hover/rounding */}
                      Consumer Samadhan
                    </Link>
                    <Link href="/arbitration" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">
                      Arbitration Samadhan
                    </Link>
                    <Link href="/rera" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">
                      RERA Samadhan
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-b border-blue-800 pb-1">
                   <Link href="/judgements" onClick={handleMobileLinkClick} className="block py-2 w-full text-left hover:bg-blue-800 rounded"> 
                     Judgements
                   </Link>
               </div>

              {/* Registration & Rights */}
              <div className="border-b border-blue-800 pb-1">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubmenu('registration')}
                   aria-expanded={isMenuActive('registration')}
                >
                  <span>Registration & Rights</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('registration') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('registration')
                    ? `${getSubmenuHeight('registration')} opacity-100`
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-1 space-y-2 text-sm"> {/* Adjusted spacing */}
                    {/* Company Registration submenu */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-1 text-left"
                        onClick={(e) => { e.stopPropagation(); toggleSubmenu('companyReg'); }}
                        aria-expanded={isMenuActive('companyReg')}
                      >
                        <span className="font-semibold text-emerald-400">COMPANY REGISTRATION</span> {/* Added color */}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('companyReg') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('companyReg')
                          ? `${getSubmenuHeight('companyReg')} opacity-100`
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                          <Link href="/company-reg/one-person" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">One Person Company</Link>
                          <Link href="/company-reg/pvt-ltd" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Pvt. Ltd. Company</Link>
                          <Link href="/company-reg/pub-ltd" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Public Ltd. Company</Link>
                          <Link href="/company-reg/llp-reg" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">LLP Registration</Link>
                          <Link href="/company-reg/nidhi-reg" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Nidhi Company</Link> {/* Shortened */}
                          <Link href="/company-reg/sec-8" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Section 8 Company (NGO)</Link>
                        </div>
                      </div>
                    </div>

                    {/* Business Registrations submenu */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-1 text-left"
                        onClick={(e) => { e.stopPropagation(); toggleSubmenu('businessReg'); }}
                         aria-expanded={isMenuActive('businessReg')}
                      >
                        <span className="font-semibold text-emerald-400">BUSINESS REGISTRATIONS</span> {/* Added color */}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('businessReg') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('businessReg')
                          ? `${getSubmenuHeight('businessReg')} opacity-100`
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                           <Link href="/startup" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Startup India Registration</Link> {/* Corrected href */}
                           <Link href="/msme-reg" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">MSME Registration</Link>
                           <Link href="/rera-reg" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">RERA Registration</Link> {/* Added missing RERA Link */}
                        </div>
                      </div>
                    </div>

                    {/* IP Rights submenu */}
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-1 text-left"
                        onClick={(e) => { e.stopPropagation(); toggleSubmenu('ipRights'); }}
                         aria-expanded={isMenuActive('ipRights')}
                      >
                        <span className="font-semibold text-emerald-400">IP RIGHTS</span> {/* Added color */}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('ipRights') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('ipRights')
                          ? `${getSubmenuHeight('ipRights')} opacity-100`
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                          <Link href="/trademark" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Trademark Registration</Link>
                          <Link href="/trademark" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Copyright Registration</Link> {/* Corrected href */}
                          <Link href="/trademark" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Patent Registration</Link> {/* Corrected href */}
                        </div>
                      </div>
                    </div>
                     {/* RERA Registration was incorrectly placed here, moved to Business Reg */}
                  </div>
                </div>
              </div>

              {/* Licenses */}
              <div className="border-b border-blue-800 pb-1">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubmenu('licenses')}
                   aria-expanded={isMenuActive('licenses')}
                >
                  <span>Licenses</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('licenses') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('licenses')
                    ? `${getSubmenuHeight('licenses')} opacity-100`
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-1 space-y-1 text-sm">
                    <Link href="/licenses/fssai" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">FSSAI Registration</Link>
                    <Link href="/licenses/iso" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">ISO Registration</Link>
                    <Link href="/licenses/trust" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Trust Registration</Link>
                    <Link href="/licenses/society" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Society Registration</Link>
                    <Link href="/licenses/import-export" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Import Export Code (IEC)</Link>
                  </div>
                </div>
              </div>

              {/* More (Example - can be removed or populated) */}
              {/* <div className="border-b border-blue-800 pb-1">
                <button
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubmenu('more')}
                   aria-expanded={isMenuActive('more')}
                >
                  <span>More</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('more') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('more')
                    ? `${getSubmenuHeight('more')} opacity-100`
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-1 space-y-1 text-sm">
                    <Link href="/blog" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">Blog</Link>
                    <Link href="/faq" onClick={handleMobileLinkClick} className="block py-1 pl-2 border-l-2 border-orange-500 hover:bg-blue-800 rounded-r">FAQ</Link>
                  </div>
                </div>
              </div> */}

               {/* About Us Link */}
               <div className="border-b border-blue-800 pb-1">
                   <Link href="/about-us" onClick={handleMobileLinkClick} className="block py-2 w-full text-left hover:bg-blue-800 rounded"> {/* Simple link style */}
                     About Us
                   </Link>
               </div>

              {/* Contact US */}
              <div className="pt-1"> {/* Reduced top padding */}
                 <Link href="/contact" onClick={handleMobileLinkClick} className="flex items-center gap-2 w-full py-2 dropdown-higlight text-left hover:bg-blue-800 rounded"> {/* Changed button to Link, added hover/rounding */}
                   <MessageSquare className="w-5 h-5 text-green-500" />
                   <span>Contact US</span>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Add a spacer div to prevent content from hiding behind fixed mobile navbar */}
       <div className="h-12 lg:hidden"></div>
    </div>
  );
};

export default NavBar;
