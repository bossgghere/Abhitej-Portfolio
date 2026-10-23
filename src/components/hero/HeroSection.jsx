import React from 'react';
import { HeroStats } from './HeroStats';
import { HeroHeading } from './HeroHeading';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';

/**
 * HeroSection Component
 * Recreates the exact layout from reference image with theme tokens:
 * - Background: Tertiary (#F8F8F8)
 * - Text: Primary (#222222) & Secondary (#7B7B7B)
 * - Hero portrait seamlessly integrated with smooth bottom fade
 */
export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-between pt-4 sm:pt-6 pb-6 lg:pb-0">
        
        {/* Main Grid: Left Content Column & Right Portrait Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end flex-1 min-h-[calc(100vh-120px)]">
          
          {/* Left Column (5 to 6 cols): Stats, Headline, Subtitle, Scroll */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full z-10 pt-4 pb-8 lg:pb-12">
            
            {/* Top Metric Stats */}
            <div className="mb-10 sm:mb-14 lg:mb-16">
              <HeroStats />
            </div>

            {/* Middle Main Headline */}
            <div className="my-auto py-4">
              <HeroHeading />
            </div>

            {/* Bottom Scroll Prompt (Desktop) */}
            <div className="hidden lg:block pt-12">
              <HeroScrollIndicator />
            </div>
          </div>

          {/* Right Column (7 cols): Hero Portrait Image */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-end h-full relative">
            <HeroPortrait />
          </div>

          {/* Bottom Scroll Prompt (Mobile/Tablet) */}
          <div className="lg:hidden col-span-1 pt-4 pb-2">
            <HeroScrollIndicator />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
