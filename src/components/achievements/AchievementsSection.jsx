import React from 'react';
import { Award, Medal } from 'lucide-react';
import { achievementsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * AchievementsSection Component
 * Placed after Research & Analytics and before Footer:
 * - 3-column editorial layout matching About Me and Projects
 * - Left Column: Headline ("Honors & Achievements"), narrative, and directional curved arrow
 * - Center Column: Card 1 - Rising Star Award (Principal Financial Group) with performance scope box
 * - Right Column: Card 2 - Represented GITAM at AIU 2023 & 2024 with delegation scope box
 */
export const AchievementsSection = () => {
  const { title, description, achievements } = achievementsData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const risingStar = achievements[0];
  const aiuDelegate = achievements[1];

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Column 1 (Left - lg:col-span-4): Narrative, Headline, Curved Arrow */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                {title}
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            {/* Directional curved arrow pointing right */}
            <div className="hidden lg:block mt-10 pl-4 select-none pointer-events-none opacity-40 hover:opacity-70 transition-opacity">
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

          {/* Column 2 (Center - lg:col-span-4): Card 1 - Rising Star Award */}
          <div className="lg:col-span-4">
            <div className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8E8E8] flex flex-col justify-between cursor-default">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:scale-110 group-hover:bg-[#F8F8F8] transition-all duration-300">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7B7B7B] px-2.5 py-1 rounded-full bg-[#F8F8F8] border border-[#E8E8E8]">
                    {risingStar.tag}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-normal tracking-tight text-[#222222] leading-tight">
                  {risingStar.title}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#222222] mt-1.5">
                  {risingStar.organization}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                  {risingStar.description}
                </p>
              </div>

              {/* Inset Scope Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                  <span className="text-xs font-medium text-[#222222]">{risingStar.scopeTitle}</span>
                  <span className="text-[10px] text-[#222222] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#E8E8E8]">
                    {risingStar.scopeBadge}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[#7B7B7B]">
                  {risingStar.bullets.map((bullet, idx) => (
                    <div key={idx} className="text-[#222222] font-normal">
                      • {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
                  <span>{risingStar.footerCategory}</span>
                  <span className="font-medium text-[#222222]">{risingStar.timeline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 (Right - lg:col-span-4): Card 2 - Represented GITAM at AIU */}
          <div className="lg:col-span-4">
            <div className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8E8E8] flex flex-col justify-between cursor-default">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:scale-110 group-hover:bg-[#F8F8F8] transition-all duration-300">
                    <Medal className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#222222] px-2.5 py-1 rounded-full bg-[#F8F8F8] border border-[#E8E8E8]">
                    {aiuDelegate.tag}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-normal tracking-tight text-[#222222] leading-tight">
                  {aiuDelegate.title}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#222222] mt-1.5">
                  {aiuDelegate.organization}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                  {aiuDelegate.description}
                </p>
              </div>

              {/* Inset Scope Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                  <span className="text-xs font-medium text-[#222222]">{aiuDelegate.scopeTitle}</span>
                  <span className="text-[10px] text-[#222222] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#E8E8E8]">
                    {aiuDelegate.scopeBadge}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[#7B7B7B]">
                  {aiuDelegate.bullets.map((bullet, idx) => (
                    <div key={idx} className="text-[#222222] font-normal">
                      • {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
                  <span>{aiuDelegate.footerCategory}</span>
                  <span className="font-medium text-[#222222]">{aiuDelegate.timeline}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;