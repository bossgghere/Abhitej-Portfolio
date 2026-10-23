import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Displays the hero portrait with an increased, smooth bottom fade (starting around 80%),
 * gently dissolving the lower suit into the background while keeping the face,
 * hair, and upper body completely sharp and solid.
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
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 98%)',
          }}
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
