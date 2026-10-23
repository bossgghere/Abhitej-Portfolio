import React from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import { skillsData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * SkillsSection Component
 * Compact, minimalist 2-column layout with equal size and height:
 * - Left: Core Competencies (categorized pill tags)
 * - Right: Certifications & Honors (clean divided rows)
 * - Snug padding & refined Aeonik typography
 */
export const SkillsSection = () => {
  const { badge, title, description, skillsCategories, certifications } = skillsData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
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

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-md lg:text-left">
              {description}
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Exact equal dimensions and height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Core Skills Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E8E8E8] shadow-xs flex flex-col justify-between h-full">
            <div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8] mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-[#222222]">
                    Core Competencies
                  </h3>
                  <p className="text-xs text-[#7B7B7B] mt-0.5">
                    Data analytics, financial operations & tools
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222]">
                  <Layers className="w-4 h-4 stroke-[1.5]" />
                </div>
              </div>

              {/* Categorized Skills Pills */}
              <div className="space-y-4">
                {skillsCategories.map((cat) => (
                  <div key={cat.category}>
                    <div className="text-[11px] font-semibold tracking-wider text-[#7B7B7B] uppercase mb-2">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-normal text-[#222222] bg-[#F8F8F8] border border-[#E8E8E8] hover:bg-[#222222] hover:text-white hover:border-[#222222] transition-colors duration-150 cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
              <span>17 Core Technical & Operational Skills</span>
              <span className="font-medium text-[#222222]">End-to-End Analytics</span>
            </div>
          </div>

          {/* Right Column: Certifications & Credentials Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E8E8E8] shadow-xs flex flex-col justify-between h-full">
            <div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8] mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-[#222222]">
                    Certifications & Honors
                  </h3>
                  <p className="text-xs text-[#7B7B7B] mt-0.5">
                    Verified coursework and institutional honors
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 stroke-[1.5]" />
                </div>
              </div>

              {/* Certifications Divided List */}
              <div className="divide-y divide-[#E8E8E8]">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="py-3 flex items-center justify-between gap-3 group hover:bg-[#F8F8F8]/60 -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-normal text-[#222222] group-hover:text-black truncate">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-[#7B7B7B] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#F8F8F8] border border-[#E8E8E8] text-[#222222] group-hover:bg-[#222222] group-hover:text-white transition-colors">
                      {cert.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
              <span>Verified Industry Credentials</span>
              <span className="font-medium text-[#222222]">Coursera • LinkedIn • Principal</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
