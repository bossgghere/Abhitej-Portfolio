import React from 'react';
import { HeroStats } from './HeroStats';
import { HeroHeading } from './HeroHeading';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';

/**
 * HeroSection Component
 * Recreates the exact layout from the reference image:
 * - Stats at the top-left
 * - Prominent "Hello" heading and subtitle in the center-left
 * - "Scroll down" prompt at the bottom-left
 * - Clean portrait of the creator occupying the right side
 */
export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-between pt-6 sm:pt-10 pb-8">
        
        {/* Main Grid: Left Content Column & Right Portrait Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-1">
          
          {/* Left Column (5 to 6 cols): Stats, Headline, Subtitle */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between h-full z-10 pt-4 pb-4">
            
            {/* Top Metric Stats */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <HeroStats />
            </div>

            {/* Middle Main Headline */}
            <div className="my-auto py-4">
              <HeroHeading />
            </div>

            {/* Bottom Scroll Prompt (Desktop) */}
            <div className="hidden lg:block pt-16">
              <HeroScrollIndicator />
            </div>
          </div>

          {/* Right Column (6 to 7 cols): Portrait Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-end items-end h-full">
            <HeroPortrait />
          </div>

          {/* Bottom Scroll Prompt (Mobile/Tablet) */}
          <div className="lg:hidden col-span-1 pt-6 pb-2">
            <HeroScrollIndicator />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
