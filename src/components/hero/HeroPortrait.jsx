import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Prominently sized portrait on the right half with a gentle, extended bottom fade
 * that seamlessly dissolves into the #F8F8F8 background.
 */
export const HeroPortrait = () => {
  const { portrait } = heroData;

  return (
    <div className="relative w-full flex justify-center lg:justify-end items-end select-none pointer-events-none">
      <div className="relative w-full max-w-[580px] sm:max-w-[680px] md:max-w-[780px] lg:max-w-[920px] xl:max-w-[1080px] 2xl:max-w-[1220px] flex items-end justify-center lg:justify-end">
        <img
          src={portrait.src}
          alt={portrait.alt}
          fetchpriority={portrait.fetchPriority || "high"}
          className="w-full h-auto max-h-[82vh] sm:max-h-[88vh] lg:max-h-[94vh] xl:max-h-[98vh] object-contain object-bottom grayscale contrast-[1.06] brightness-[1.02] transition-all duration-300"
          style={{
            maskImage: 'linear-gradient(to bottom, black 72%, transparent 96%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 96%)',
          }}
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
