import React from 'react';
import { ArrowDown } from 'lucide-react';
import { heroData } from '@/data';

/**
 * HeroScrollIndicator Component
 * Smooth scroll link styled with Secondary (#7B7B7B) hovering to Primary (#222222),
 * featuring a subtle floating bounce arrow animation.
 */
export const HeroScrollIndicator = () => {
  const { scrollIndicator } = heroData;

  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(scrollIndicator.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${scrollIndicator.targetId}`}
      onClick={handleScroll}
      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-normal text-[#7B7B7B] hover:text-[#222222] transition-colors duration-200 cursor-pointer"
    >
      <span>{scrollIndicator.text}</span>
      <span className="inline-block animate-subtle-bounce">
        <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1" />
      </span>
    </a>
  );
};

export default HeroScrollIndicator;
