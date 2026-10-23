import React from 'react';
import { heroData } from '@/data';

/**
 * HeroPortrait Component
 * Displays the hero portrait with an organic bottom fade gradient mask.
 * This completely eliminates any visible cut lines, flat borders, or vertical sides,
 * melting seamlessly into the tertiary (#F8F8F8) background.
 */
export const HeroPortrait = () => {
  const { portrait } = heroData;

  return (
    <div className="relative w-full flex justify-center lg:justify-end items-end select-none pointer-events-none">
      <div className="relative w-full max-w-[520px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[960px] 2xl:max-w-[1080px] flex items-end justify-center lg:justify-end">
        <img
          src={portrait.src}
          alt={portrait.alt}
          fetchpriority={portrait.fetchPriority || "high"}
          className="w-full h-auto max-h-[72vh] sm:max-h-[80vh] lg:max-h-[86vh] xl:max-h-[90vh] object-contain object-bottom grayscale contrast-[1.06] brightness-[1.02] transition-all duration-300"
          style={{
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
          }}
        />
      </div>
    </div>
  );
};

export default HeroPortrait;
