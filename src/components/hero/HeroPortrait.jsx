import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Renders the designer's portrait image with high fetch priority for LCP optimization.
 * Can be swapped easily by changing heroData.portrait.src or dropping in a new image file.
 */
export const HeroPortrait = () => {
  const { portrait } = heroData;

  return (
    <div className="relative w-full flex justify-center lg:justify-end items-end select-none pointer-events-none">
      <div className="relative max-w-[500px] sm:max-w-[580px] lg:max-w-[700px] xl:max-w-[800px] w-full">
        <img
          src={portrait.src}
          alt={portrait.alt}
          fetchpriority={portrait.fetchPriority || "high"}
          className="w-full h-auto object-cover object-top grayscale contrast-[1.05] brightness-[1.02]"
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
