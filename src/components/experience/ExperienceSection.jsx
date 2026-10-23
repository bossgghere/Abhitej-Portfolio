import React from 'react';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ExperienceSection Component
 * Completely redesigned for an ultra-clean, modern editorial aesthetic:
 * - Clean 2-column layout (sticky header + timeline cards)
 * - Clear visual hierarchy without clumsy accordions or distracting image crops
 * - Real career highlights, awards, and domain skills
 */
export const ExperienceSection = () => {
  const { badge, title, description, ctaText, ctaLink, experiences } = experienceData;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column: Sticky Section Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
                <span>{badge}</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                {title}
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#7B7B7B] leading-relaxed">
                {description}
              </p>
            </div>

            {/* LinkedIn CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={ctaLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between px-6 py-3.5 rounded-full bg-[#222222] text-white text-sm font-medium hover:bg-black transition-all shadow-sm hover:shadow-md"
              >
                <span>{ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Award Highlight Badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#222222]">Rising Star Award</h4>
                  <p className="text-[11px] text-[#7B7B7B]">Principal Financial Group • 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Timeline Cards */}
          <div className="lg:col-span-7 space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-[#E8E8E8] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-[#F0F0F2]">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-medium text-[#222222]">
                        {exp.company}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#222222] text-white text-[10px] font-semibold tracking-wide">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#7B7B7B] mt-1 font-normal">
                      {exp.role}
                    </p>
                  </div>

                  {/* Period badge */}
                  <span className="self-start sm:self-auto text-xs font-medium text-[#7B7B7B] bg-[#F8F8F8] px-3 py-1 rounded-full border border-[#E8E8E8] whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Key accomplishment bullets */}
                <div className="py-5 space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#222222] shrink-0 mt-0.5 stroke-[1.5]" />
                      <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags row */}
                <div className="pt-4 border-t border-[#F0F0F2] flex flex-wrap items-center gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#F8F8F8] border border-[#E8E8E8] text-[11px] font-normal text-[#666666] group-hover:border-[#d0d0d2] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
