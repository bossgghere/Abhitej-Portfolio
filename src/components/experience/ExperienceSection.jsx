import React from 'react';
import { ArrowUpRight, Briefcase, Sparkle } from 'lucide-react';
import { experienceData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ExperienceSection Component
 * Re-structured layout per user request:
 * - Left Column: Principal Financial Group flagship Hero Card
 * - Center Column: Headline ("Career & Experience"), narrative, curved arrow, and LinkedIn CTA
 * - Right Column: Data Visualisation Internship card + Sparkle bullet highlights
 * Enhanced with hand-drawn SVG arrow, card float ambient shadow, and sparkle rotation.
 */
export const ExperienceSection = () => {
  const { ctaLink } = experienceData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      {/* Backward-compatibility anchor for legacy links */}
      <span id="services" className="absolute -top-10" />
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Column 1 (Left Card - lg:col-span-4): Principal Financial Group Hero Card */}
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 card-hover-ambient border border-[#E8E8E8] flex flex-col justify-between cursor-default">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] mb-6 group-hover:scale-110 group-hover:bg-[#F8F8F8] transition-all duration-300">
                  <Briefcase className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#222222] leading-tight">
                  Principal
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-[280px]">
                  Financial Analyst – 401(k) Plan Correction Team (Jul 2026 — Present)
                </p>
              </div>

              {/* Inset Operations Highlight Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                  <span className="text-xs font-medium text-[#222222]">Core Mandate</span>
                  <span className="text-[10px] text-emerald-600 font-mono font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Role
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[#7B7B7B]">
                  <div className="text-[#222222] font-normal">• 401(k) Plan Discrepancy Audits</div>
                  <div className="text-[#222222] font-normal">• Strict ERISA Regulatory Compliance</div>
                  <div className="text-[#222222] font-normal">• Vesting & Transaction Corrections</div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
                  <span>Hyderabad, India</span>
                  <span className="font-medium text-[#222222]">Operations Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (Center Text - lg:col-span-4): Headline, Career Narrative & Hand-Drawn Arrow */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
                <span>Experience</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                Career & Experience
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed">
                Managing high-stakes 401(k) retirement operations and regulatory compliance at Principal Financial Group, with a foundation in business analytics and executive financial modeling.
              </p>

              <div className="mt-6">
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Directional curved arrow pointing outward to connecting cards */}
            <div className="hidden lg:block mt-12 pl-2 select-none pointer-events-none opacity-40 hover:opacity-70 transition-opacity">
              <svg
                width="200"
                height="120"
                viewBox="0 0 200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20 C 50 80, 140 100, 185 50"
                  stroke="#7B7B7B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className={`arrow-shaft ${inView ? 'drawn' : ''}`}
                />
                <path
                  d="M160 45 L 185 50 L 175 75"
                  stroke="#7B7B7B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`arrow-head ${inView ? 'drawn' : ''}`}
                />
              </svg>
            </div>
          </div>

          {/* Column 3 (Right Card & Highlights - lg:col-span-4): Milestone Card & Sparkle Points */}
          <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col space-y-5 sm:space-y-6">
            
            {/* Top Milestone Card with Action Button */}
            <div>
              <div className="relative w-full rounded-3xl p-6 bg-white border border-[#E8E8E8] card-hover-ambient group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7B7B7B]">
                    2024 — 2025
                  </span>
                  <a
                    href={ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:bg-[#222222] group-hover:text-white transition-colors"
                    aria-label="Connect on LinkedIn"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
                <h4 className="text-base font-medium text-[#222222]">
                  Data Visualisation Analyst Intern
                </h4>
                <p className="mt-1 text-xs text-[#7B7B7B] leading-relaxed">
                  Data Visualisation & Analytics • Power BI dashboards & financial forecasting reports.
                </p>
              </div>
            </div>

            {/* Two Feature Highlights with Sparkle/Star Icons */}
            <div className="space-y-4 sm:space-y-5">
              <div className="group flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5 sparkle-badge">
                  <Sparkle className="w-4 h-4 fill-white sparkle-icon" />
                </div>
                <p className="text-xs sm:text-sm text-[#7B7B7B] group-hover:text-[#222222] leading-relaxed transition-colors duration-200">
                  <strong className="text-[#222222] font-medium">Rising Star Award: </strong>
                  Honored at Principal Financial Group for zero-error accuracy across high-stakes participant maintenance and beneficiary distributions.
                </p>
              </div>

              <div className="group flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5 sparkle-badge">
                  <Sparkle className="w-4 h-4 fill-white sparkle-icon" />
                </div>
                <p className="text-xs sm:text-sm text-[#7B7B7B] group-hover:text-[#222222] leading-relaxed transition-colors duration-200">
                  <strong className="text-[#222222] font-medium">Regulatory Rigor: </strong>
                  Extensive expertise applying ERISA guidelines, corrective fund disbursements, and audit procedures to protect plan sponsor integrity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;