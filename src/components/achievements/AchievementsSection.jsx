import React from 'react';
import { Award, Medal, Code2 } from 'lucide-react';
import { achievementsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * AchievementsSection Component
 * Compact, minimalist honors section placed after Research & Analytics:
 * - Reduced card footprint & refined typography
 * - Concise, punchy descriptions with minimal tag metadata
 * - Fully responsive 3-card grid
 */
export const AchievementsSection = () => {
  const { title, description, achievements } = achievementsData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-5 h-5 stroke-[1.5]" />;
      case 'medal':
        return <Medal className="w-5 h-5 stroke-[1.5]" />;
      case 'code':
      default:
        return <Code2 className="w-5 h-5 stroke-[1.5]" />;
    }
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-12 sm:py-14 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Compact Section Header */}
        <div
          className={`mb-8 sm:mb-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E8E8E8]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B7B7B] block mb-1">
                Recognition
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#222222] leading-tight">
                {title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        </div>

        {/* Compact 3-Card Symmetrical Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 card-hover-ambient border border-[#E8E8E8] flex flex-col justify-between cursor-default"
            >
              <div>
                {/* Header: Icon + Year Timeline Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:scale-105 group-hover:bg-[#F8F8F8] transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B7B7B] px-2 py-0.5 rounded-full bg-[#F8F8F8] border border-[#E8E8E8]">
                    {item.timeline}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg sm:text-xl font-normal tracking-tight text-[#222222] leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-[#7B7B7B] mt-1">
                  {item.organization}
                </div>

                {/* Concise Description */}
                <p className="mt-3 text-xs sm:text-[13px] text-[#7B7B7B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Minimal Tags */}
              <div className="mt-5 pt-3 border-t border-[#F0F0F0] flex items-center gap-2 flex-wrap">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] text-[#222222] font-mono font-medium px-2 py-0.5 rounded bg-[#F8F8F8] border border-[#E8E8E8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;