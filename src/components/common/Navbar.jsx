import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navigationData } from '@/data';

/**
 * Top Navbar component
 * Uses UI/UX Theme tokens:
 * - Text: Primary (#222222), Secondary (#7B7B7B)
 * - Background: Tertiary (#F8F8F8)
 */
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navLinks, ctaButton } = navigationData;

  return (
    <header className="relative z-50 w-full bg-[#F8F8F8]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        
        {/* Left: Logo + Navigation Links */}
        <div className="flex items-center gap-10 lg:gap-14">
          <a
            href="/"
            className="flex items-center gap-3 text-[#222222] transition-transform duration-200 hover:scale-105"
            aria-label="Home"
          >
            <Logo className="w-7 h-7 text-[#222222]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-[#7B7B7B] hover:text-[#222222] transition-colors duration-200"
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
            className="group inline-flex items-center gap-1 text-sm font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors duration-200"
          >
            <span>{ctaButton.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#222222] hover:opacity-75 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F8F8] border-b border-[#E8E8E8] px-6 py-5 flex flex-col gap-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-[#7B7B7B] hover:text-[#222222] py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaButton.href}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-between text-base font-medium text-[#222222] pt-2 border-t border-[#E8E8E8]"
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
