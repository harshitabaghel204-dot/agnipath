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
      name: 'SHOP', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Wafer', href: '/about' },
        { name: 'Namkeen ', href: '/about' },
        { name: 'Western Snaks ', href: '/about' },
      ]
    },
    
    { 
      name: 'World of Agnipath', 
      href: '/media',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Brand Campaigns', href: '/BrandCampaigns' },
        { name: 'Insights', href: '/Insights' },
        { name: 'News', href: '/News' },
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

  const topBarLinks = [
    { name: 'Careers', href: '/careers' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Store Locator', href: '/store-locator' },
  ];

  return (
    <>
      {/* ============ ANNOUNCEMENT BANNER ============ */}
      {showBanner && (
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
      )}

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
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white hover:text-[#c8a357]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart Button */}
              <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white hover:text-[#c8a357]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c8a357] text-black text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              {/* CTA Button - Desktop */}
              <a 
                href="/shop"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#c8a357] to-[#a88a3d] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#c8a357]/30 transition-all duration-300 hover:scale-105"
              >
                <span>Shop Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

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
            <div className="p-4 border-b border-gray-800">
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
            </div>

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
            <div className="p-4 bg-gray-900 border-t border-gray-800">
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
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-gray-800">
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
            </div>

            {/* Mobile Contact */}
            <div className="p-4 bg-white text-black">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Contact Us</p>
              <div className="space-y-3">
                <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#c8a357] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 123 456 7890</span>
                </a>
                <a href="mailto:info@agnipath.com" className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#c8a357] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@agnipath.com</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="text-gray-500 hover:text-[#c8a357] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c8a357] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c8a357] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c8a357] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}