import React from 'react';
import { heroData } from '@/data';

/**
 * HeroHeading Component
 * Headline in Primary (#222222), Subtitle in Secondary (#7B7B7B)
 */
export const HeroHeading = () => {
  const { heading, subheading } = heroData;

  return (
    <div className="flex flex-col">
      <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[145px] xl:text-[165px] font-normal tracking-[-0.03em] text-[#222222] leading-[0.95]">
        {heading}
      </h1>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#7B7B7B] font-normal tracking-wide">
        {subheading}
      </p>
    </div>
  );
};

export default HeroHeading;
