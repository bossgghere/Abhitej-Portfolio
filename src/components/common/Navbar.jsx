import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { navigationData } from '@/data';

/**
 * Top Navbar component
 * Uses UI/UX Theme tokens:
 * - Text: Primary (#222222), Secondary (#7B7B7B)
 * - Background: Tertiary (#F8F8F8)
 * - Harmonized spacing for the persistent FloatingRightMenu
 */
export const Navbar = () => {
  const { navLinks, ctaButton } = navigationData;

  return (
    <header className="relative z-40 w-full bg-[#F8F8F8]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        
        {/* Left: Logo + Desktop Navigation Links */}
        <div className="flex items-center gap-10 lg:gap-14">
          <a
            href="/"
            className="flex items-center gap-3 text-[#222222] transition-transform duration-200 hover:scale-105"
            aria-label="Home"
          >
            <Logo className="w-7 h-7 text-[#222222]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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

        {/* Right: CTA Button with dedicated breathing room for the persistent Floating Right Menu */}
        <div className="hidden sm:flex items-center mr-24 sm:mr-28">
          <a
            href={ctaButton.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors duration-200"
          >
            <span>{ctaButton.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;