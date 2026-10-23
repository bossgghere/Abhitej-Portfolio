import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navigationData } from '@/data';

/**
 * Top Navbar component
 * Responsive desktop bar + mobile drawer.
 * Consumes data from the data layer for easy customization.
 */
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navLinks, ctaButton } = navigationData;

  return (
    <header className="relative z-50 w-full bg-[#f9f9fa]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        
        {/* Left: Logo + Navigation Links */}
        <div className="flex items-center gap-10 lg:gap-14">
          <a
            href="/"
            className="flex items-center gap-3 text-black transition-transform duration-200 hover:scale-105"
            aria-label="Home"
          >
            <Logo className="w-7 h-7 text-black" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-[#444444] hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={ctaButton.href}
            className="group inline-flex items-center gap-1 text-sm font-medium text-black border-b border-black pb-0.5 hover:opacity-80 transition-opacity duration-200"
          >
            <span>{ctaButton.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:opacity-75 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9fa] border-b border-[#e5e5e7] px-6 py-5 flex flex-col gap-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-[#333333] hover:text-black py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaButton.href}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-between text-base font-medium text-black pt-2 border-t border-[#e5e5e7]"
          >
            <span>{ctaButton.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
