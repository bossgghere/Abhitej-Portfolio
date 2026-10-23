import React from 'react';
import { HeroStats } from './HeroStats';
import { HeroHeading } from './HeroHeading';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';

/**
 * HeroSection Component
 * Enhanced with staggered smooth entrance reveals:
 * - Stats at 100ms
 * - Headline & Subtitle at 200ms
 * - Portrait fade-in at 200ms
 * - Scroll indicator with gentle floating bounce
 */
export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-between pt-2 sm:pt-4 pb-4 lg:pb-0">
        
        {/* Main Grid: Left Content Column & Right Portrait Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end flex-1 min-h-[calc(100vh-90px)]">
          
          {/* Left Column (5 cols): Stats, Headline, Subtitle, Scroll */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full z-10 pt-4 pb-8 lg:pb-12">
            
            {/* Top Metric Stats */}
            <div className="mb-8 sm:mb-12 lg:mb-16 opacity-0 animate-fade-in-up delay-100">
              <HeroStats />
            </div>

            {/* Middle Main Headline */}
            <div className="my-auto py-2 opacity-0 animate-fade-in-up delay-200">
              <HeroHeading />
            </div>

            {/* Bottom Scroll Prompt (Desktop) */}
            <div className="hidden lg:block pt-10 opacity-0 animate-fade-in-up delay-300">
              <HeroScrollIndicator />
            </div>
          </div>

          {/* Right Column (7 cols): Hero Portrait Image */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-end h-full relative opacity-0 animate-fade-in delay-200">
            <HeroPortrait />
          </div>

          {/* Bottom Scroll Prompt (Mobile/Tablet) */}
          <div className="lg:hidden col-span-1 pt-4 pb-2 opacity-0 animate-fade-in-up delay-300">
            <HeroScrollIndicator />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
