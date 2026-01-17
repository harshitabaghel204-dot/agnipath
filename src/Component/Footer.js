import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e27] text-white">
      {/* Top Contact Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">WhatsApp Us:</span>
              <a href="tel:+911234567890" className="text-white hover:text-[#d4af37] transition-colors">
                +91 123 456 7890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">Customer Care:</span>
              <a href="tel:+911234567890" className="text-white hover:text-[#d4af37] transition-colors">
                +91 123 456 7890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">Email:</span>
              <a href="mailto:info@agnipath.com" className="text-white hover:text-[#d4af37] transition-colors">
                info@agnipath.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Agnipath Rewards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Agnipath Rewards</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  How it works
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Benefits
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Redeem Points
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Wafer
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Namkeen
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Western Snacks
                </a>
              </li>
              <li>
                <a href="/" className="text-[#d4af37] hover:text-white transition-colors text-sm">
                  Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="/" className="text-white hover:text-[#d4af37] transition-colors" aria-label="Facebook">
                <Facebook size={28} />
              </a>
              <a href="/" className="text-white hover:text-[#d4af37] transition-colors" aria-label="Instagram">
                <Instagram size={28} />
              </a>
              <a href="/" className="text-white hover:text-[#d4af37] transition-colors" aria-label="YouTube">
                <Youtube size={28} />
              </a>
              <a href="/" className="text-white hover:text-[#d4af37] transition-colors" aria-label="Twitter">
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-white">
            <a href="/" className="hover:text-[#d4af37] transition-colors">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <a href="/" className="hover:text-[#d4af37] transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="/" className="hover:text-[#d4af37] transition-colors">
              Cookies Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="/" className="hover:text-[#d4af37] transition-colors">
              Replacement & Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
