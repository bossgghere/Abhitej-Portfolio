import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';

/**
 * HomePage Component
 * Landing page containing the Hero section, structured to seamlessly
 * integrate subsequent sections (About, Portfolio, Services, Contact, etc.)
 * as new reference designs are provided.
 */
export const HomePage = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Placeholder anchors for smooth-scrolling and future sections */}
      <section id="about" className="py-20 px-6 sm:px-10 lg:px-14 border-t border-[#f0f0f2]">
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-xs uppercase tracking-widest text-[#999999]">Section 2</p>
          <h2 className="text-2xl sm:text-3xl font-light text-[#333333] mt-2">
            Ready for your next reference screenshot
          </h2>
          <p className="text-sm text-[#777777] mt-2 max-w-md mx-auto">
            Add your next section screenshot to <code className="bg-[#eeeeee] px-1.5 py-0.5 rounded text-black text-xs">reference images/</code>, and we'll implement it right here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
