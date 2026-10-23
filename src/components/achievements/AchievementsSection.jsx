import React from 'react';
import { Award, Medal, Code2 } from 'lucide-react';
import { achievementsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * AchievementsSection Component
 * Placed after Research & Analytics and before Footer:
 * - 3-Card Symmetrical Grid matching the high-end editorial palette
 * - Card 1: Rising Star Award (Principal Financial Group)
 * - Card 2: Represented GITAM at AIU 2023 & 2024
 * - Card 3: Hackathons & Technical Events (GITAM University)
 * - Fully responsive across mobile, tablet, desktop, and ultra-wide
 */
export const AchievementsSection = () => {
  const { title, description, achievements } = achievementsData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-6 h-6 stroke-[1.5]" />;
      case 'medal':
        return <Medal className="w-6 h-6 stroke-[1.5]" />;
      case 'code':
      default:
        return <Code2 className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-10 sm:mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E8E8]">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7B7B7B] block mb-2">
                Recognition &amp; Leadership
              </span>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                {title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#7B7B7B] leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        </div>

        {/* 3-Card Symmetrical Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8E8E8] flex flex-col justify-between cursor-default"
            >
              <div>
                {/* Header Row: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:scale-110 group-hover:bg-[#F8F8F8] transition-all duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7B7B7B] px-2.5 py-1 rounded-full bg-[#F8F8F8] border border-[#E8E8E8]">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-2xl sm:text-[26px] font-normal tracking-tight text-[#222222] leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-[#222222] mt-1.5">
                  {item.organization}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Inset Scope Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                  <span className="text-xs font-medium text-[#222222]">{item.scopeTitle}</span>
                  <span className="text-[10px] text-[#222222] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#E8E8E8]">
                    {item.scopeBadge}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[#7B7B7B]">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="text-[#222222] font-normal">
                      • {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
                  <span>{item.footerCategory}</span>
                  <span className="font-medium text-[#222222]">{item.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;