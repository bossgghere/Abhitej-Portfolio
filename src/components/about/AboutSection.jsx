import React from 'react';
import { ArrowUpRight, Award, Globe, Sparkle } from 'lucide-react';
import { aboutData } from '@/data';

/**
 * AboutSection Component
 * Rebuilt with UI/UX Theme Specifications & Real Career Data:
 * - Background: Tertiary (#F8F8F8)
 * - Text: Primary (#222222) & Secondary (#7B7B7B)
 * - Card: White (#FFFFFF) with #E8E8E8 border
 */
export const AboutSection = () => {
  const { title, description, statCard, avatarCard, highlights } = aboutData;

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1 (Left): Headline, Bio description, Curved directional arrow */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                {title}
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            {/* Directional curved arrow pointing up-right toward the stat card */}
            <div className="hidden lg:block mt-20 pl-4 select-none pointer-events-none opacity-40">
              <svg
                width="200"
                height="140"
                viewBox="0 0 200 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 120 C 30 70, 90 25, 175 35"
                  stroke="#7B7B7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M150 15 L 180 35 L 160 65"
                  stroke="#7B7B7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Column 2 (Center): White Stat Card with Rising Star and Portrait */}
          <div className="lg:col-span-4">
            <div className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-9 shadow-sm border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] mb-6">
                  <Award className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#222222] leading-tight">
                  {statCard.stat}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-[280px]">
                  {statCard.label}
                </p>
              </div>

              {/* Inset Portrait Photo */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-[#F8F8F8] aspect-[4/4]">
                <img
                  src={statCard.image}
                  alt="Abhitej Kumar Portrait"
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.05]"
                />
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Quick Avatar Card & Sparkle Bullet Points */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12 lg:space-y-16">
            
            {/* Top Avatar Card with Action Button */}
            <div className="flex justify-start lg:justify-end">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-[#E8E8E8] shadow-sm group">
                <img
                  src={avatarCard.image}
                  alt="Abhitej Kumar"
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale"
                />
                <a
                  href={avatarCard.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="Connect with Abhitej Kumar"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#222222] shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </a>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:hidden">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#222222] shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Two Feature Highlights with Sparkle/Star Icons */}
            <div className="space-y-8">
              {highlights.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5">
                    <Sparkle className="w-4 h-4 fill-white" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
