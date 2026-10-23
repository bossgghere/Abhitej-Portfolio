import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experienceData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ExperienceSection Component
 * Minimalist, editorial timeline of Abhitej Kumar's career milestones.
 * Fully aligned with the high-contrast Aeonik theme:
 * - Scannable 3-column layout (Period & Company | Role & Impact | Tags)
 * - Clean divided horizontal rows without jumpy accordions
 * - Subtle hover lift & background highlight
 */
export const ExperienceSection = () => {
  const { badge, title, description, ctaText, ctaLink, experiences } = experienceData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-3 hover:bg-[#dedede] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
              <span>{badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#222222] leading-tight">
              {title}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
            <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-md lg:text-left">
              {description}
            </p>
            <a
              href={ctaLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-xs font-medium text-[#222222] border-b border-[#222222] pb-0.5 mt-4 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Minimalist Divided Timeline Rows */}
        <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-white/60 -mx-4 px-4 rounded-2xl transition-all duration-200"
            >
              {/* Column 1 (3 cols): Period, Company, Location */}
              <div className="lg:col-span-3">
                <span className="text-xs font-mono text-[#7B7B7B] tracking-wide uppercase">
                  {exp.period}
                </span>
                <h4 className="text-xs sm:text-sm font-medium text-[#222222] mt-1">
                  {exp.company}
                </h4>
                <p className="text-[11px] text-[#7B7B7B]">
                  {exp.location}
                </p>
              </div>

              {/* Column 2 (6 cols): Role & Core Impact */}
              <div className="lg:col-span-6">
                <h3 className="text-base sm:text-lg font-normal text-[#222222] group-hover:text-black transition-colors leading-snug">
                  {exp.role}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Column 3 (3 cols): Domain & Skill Tags */}
              <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-1.5 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-normal text-[#222222] bg-white border border-[#E8E8E8] group-hover:border-[#222222]/30 transition-colors shadow-2xs select-none"
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

export default ExperienceSection;
