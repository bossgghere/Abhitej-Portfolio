import React from 'react';
import { heroData } from '@/data';

/**
 * HeroStats Component
 * Numbers in Primary (#222222), Labels in Secondary (#7B7B7B)
 */
export const HeroStats = () => {
  const { stats } = heroData;

  return (
    <div className="flex items-start gap-12 sm:gap-16">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col">
          <span className="text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-[#222222] leading-none">
            {stat.value}
          </span>
          <span className="text-xs sm:text-[13px] text-[#7B7B7B] mt-2 font-normal">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
