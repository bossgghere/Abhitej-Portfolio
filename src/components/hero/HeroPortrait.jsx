import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Restored to full height so the portrait stands tall and prominent.
 * Head and hair reach up towards the top navbar matching the reference hero design.
 */
export const HeroPortrait = () => {
  const { portrait } = heroData;

  return (
    <div className="relative w-full flex justify-center lg:justify-end items-end select-none pointer-events-none">
      <div className="relative w-full max-w-[560px] sm:max-w-[660px] md:max-w-[760px] lg:max-w-[880px] xl:max-w-[1020px] 2xl:max-w-[1150px] flex items-end justify-center lg:justify-end">
        <img
          src={portrait.src}
          alt={portrait.alt}
          fetchpriority={portrait.fetchPriority || "high"}
          className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] lg:max-h-[92vh] xl:max-h-[96vh] object-contain object-bottom grayscale contrast-[1.06] brightness-[1.02] transition-all duration-300"
          style={{
            maskImage: 'linear-gradient(to bottom, black 90%, transparent 99.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 99.5%)',
          }}
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
