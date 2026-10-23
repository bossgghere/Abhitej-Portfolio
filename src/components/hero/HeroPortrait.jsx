import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Displays the portrait prominently on the right side of the Hero section,
 * matching the large presence and bottom alignment in the reference design.
 */
export const HeroPortrait = () => {
  const { portrait } = heroData;

  return (
    <div className="relative w-full flex justify-center lg:justify-end items-end select-none pointer-events-none">
      <div className="relative w-full max-w-[550px] sm:max-w-[660px] md:max-w-[740px] lg:max-w-[860px] xl:max-w-[1000px] 2xl:max-w-[1150px] flex items-end justify-center lg:justify-end">
        <img
          src={portrait.src}
          alt={portrait.alt}
          fetchpriority={portrait.fetchPriority || "high"}
          className="w-full h-auto max-h-[75vh] sm:max-h-[82vh] lg:max-h-[88vh] xl:max-h-[92vh] object-contain object-bottom grayscale contrast-[1.06] brightness-[1.02] drop-shadow-sm transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
