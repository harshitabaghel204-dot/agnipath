import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Navigation menu data
  const menuItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { 
      name: 'About', 
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Agnipath Journey ', href: '/Test' },
        { name: 'About us', href: '/aboutus' },
        
      ]
    },
    { 
      name: 'Products', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Wafer', href: '/about' },
        { name: 'Namkeen ', href: '/namkeen' },
        { name: 'Western Snaks ', href: '/westernsnacks' },
            { name: 'Noodles ', href: '/noodles' },
              { name: 'Masala ', href: '/masala' },
      ]
    },
    
    { 
      name: 'Pan Masala', 
      href: '/media',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Pan Masala', href: '/panmasala' },
       
      ]
    },
     
      
    {
      name: 'Contact', 
      href: '/media',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contant us ', href: '/Contact' },
        { name: 'Become our distributor', href: '/Contactdistributor' },
      
      ]
    },
    
  ];

  // const topBarLinks = [
  //   { name: 'Careers', href: '/careers' },
  //   { name: 'FAQs', href: '/faqs' },
  //   { name: 'Store Locator', href: '/store-locator' },
  // ];

  return (
    <>
      {/* ============ ANNOUNCEMENT BANNER ============ */}
      {/* {showBanner && (
        <div className="bg-[#1a1d3a] border-b border-[#2a2d4a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2.5">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-[#d4af37] text-xs sm:text-sm text-center px-8">
                  If you're experiencing issues with the 'Earn Point' tab, please update your PIN Code. To do this, go to the 'Buy' tab, select any product, and enter your city's PIN Code.
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* ============ TOP BAR - WHITE Background, BLACK Text ============ */}
    

      {/* ============ MAIN NAV - BLACK Background, WHITE Text ============ */}
      <nav 
        className={`bg-[#010317] sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-xl shadow-black/20' : ''
        }`}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              {/* Logo Icon */}
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a357] to-[#a88a3d] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg md:text-xl" style={{ fontFamily: 'serif' }}>A</span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 border-2 border-[#c8a357]/50 rounded-full scale-125"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'serif' }}>
                  AGNIPATH
                </span>
                <span className="text-[8px] md:text-[10px] text-[#c8a357] tracking-[0.3em] uppercase -mt-1">
                  Premium Quality
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                          activeDropdown === item.name
                            ? 'text-[#c8a357] bg-white/10'
                            : 'text-white hover:text-[#c8a357] hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-56 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-[#c8a357]/10 hover:text-[#c8a357] transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a357]/50"></span>
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-white hover:text-[#c8a357] hover:bg-white/5 rounded-lg transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search Button - Desktop */}
              {/* <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white hover:text-[#c8a357]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button> */}

              {/* Cart Button */}
              {/* <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white hover:text-[#c8a357]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c8a357] text-black text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button> */}

              {/* CTA Button - Desktop */}
              {/* <a 
                href="/shop"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#c8a357] to-[#a88a3d] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#c8a357]/30 transition-all duration-300 hover:scale-105"
              >
                <span>Shop Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a> */}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                  <span 
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                    }`}
                  />
                  <span 
                    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0 translate-x-3' : ''
                    }`}
                  />
                  <span 
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ============ MOBILE MENU ============ */}
        <div 
          className={`lg:hidden fixed inset-0 top-16 md:top-20 z-50 transition-all duration-300 ${
            isMobileMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div 
            className={`absolute top-0 right-0 w-full sm:w-96 h-full bg-gray-950 shadow-xl transition-transform duration-300 overflow-y-auto ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Mobile Search */}
            {/* <div className="p-4 border-b border-gray-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c8a357] focus:ring-1 focus:ring-[#c8a357]"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div> */}

            {/* Mobile Menu Items */}
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-800 last:border-b-0">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full py-4 text-left text-white font-medium"
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180 text-[#c8a357]' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Dropdown */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                      >
                        <div className="pl-4 border-l-2 border-[#c8a357]/40 ml-2 space-y-1">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block py-2.5 text-sm text-gray-400 hover:text-[#c8a357] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-4 text-white font-medium hover:text-[#c8a357] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Quick Links */}
            {/* <div className="p-4 bg-gray-900 border-t border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {topBarLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 text-sm text-gray-400 bg-gray-800 border border-gray-700 rounded-full hover:border-[#c8a357] hover:text-[#c8a357] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div> */}

            {/* Mobile CTA */}
            {/* <div className="p-4 border-t border-gray-800">
              <a 
                href="/shop"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#c8a357] to-[#a88a3d] text-black py-3.5 rounded-xl text-base font-bold hover:shadow-lg hover:shadow-[#c8a357]/30 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Shop Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div> */}

            {/* Mobile Contact */}
          
          </div>
        </div>
      </nav>
    </>
  );
}