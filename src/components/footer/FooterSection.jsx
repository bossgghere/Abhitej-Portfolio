import React from 'react';
import { footerData } from '@/data';

/**
 * FooterSection Component
 * Uses UI/UX Theme Specifications & Real Contact Details:
 * - Background: Primary (#222222)
 * - Navigation: Active pill in #333333, inactive in Secondary (#7B7B7B)
 * - Email: White (#FFFFFF) with phone and location metadata
 */
export const FooterSection = () => {
  const { links, email, phone, location } = footerData;

  return (
    <footer id="footer" className="relative bg-[#222222] text-white py-14 sm:py-16 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-[#333333]">
      
      {/* Subtle architectural wireframe background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="w-[500px] h-[300px] rounded-[40px] border border-white/20 absolute -top-20 -left-20" />
        <div className="w-[600px] h-[350px] rounded-[50px] border border-white/20 absolute -bottom-32 right-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        
        {/* Left Navigation Pills */}
        <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target || "_self"}
              rel={link.target ? "noreferrer" : undefined}
              className={`text-xs sm:text-sm font-normal px-5 py-2 rounded-full transition-colors duration-200 ${
                link.active
                  ? 'bg-[#333333] text-white'
                  : 'text-[#7B7B7B] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Contact Info */}
        <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-2">
          <a
            href={`mailto:${email}`}
            className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#FFFFFF] hover:text-[#7B7B7B] transition-colors"
          >
            {email}
          </a>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#7B7B7B] mt-1">
            {phone && (
              <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                {phone}
              </a>
            )}
            {phone && location && <span>•</span>}
            {location && <span>{location}</span>}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
