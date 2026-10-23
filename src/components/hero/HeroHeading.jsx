import React from 'react';
import { heroData } from '@/data';

/**
 * HeroHeading Component
 * Renders the primary greeting ("Hello") and introductory subtitle
 */
export const HeroHeading = () => {
  const { heading, subheading } = heroData;

  return (
    <div className="flex flex-col">
      <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[145px] xl:text-[165px] font-normal tracking-[-0.03em] text-[#111111] leading-[0.95]">
        {heading}
      </h1>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#333333] font-normal tracking-wide">
        {subheading}
      </p>
    </div>
  );
};

export default HeroHeading;
