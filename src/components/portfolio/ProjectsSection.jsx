import React from 'react';
import { ArrowUpRight, Cpu, Sparkle, TrendingUp } from 'lucide-react';
import { portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ProjectsSection Component
 * Re-engineered to match the EXACT 3-column editorial layout and visual elements
 * of the beloved About section:
 * - Column 1: Title, narrative overview, and directional hand-drawn curved arrow
 * - Column 2: Signature white Hero Stat Card (AI in Sports Analytics) with inset visual model box
 * - Column 3: Asymmetrical top project card (Financial BI Dashboards) with arrow + sparkle highlights
 */
export const ProjectsSection = () => {
  const { viewMoreLink } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Column 1 (Left - 4 cols): Headline, Research Overview & Hand-Drawn Curved Arrow */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
                <span>Projects</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                Research & Analytics
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed max-w-md">
                Bridging machine learning and executive business intelligence. From predictive athletic performance models in Python to automated financial reporting suites in Power BI.
              </p>
            </div>

            {/* Directional curved arrow */}
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

          {/* Column 2 (Center - 4 cols): Signature White Hero Stat Card (AI in Sports) */}
          <div className="lg:col-span-4">
            <div className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8E8E8] flex flex-col justify-between cursor-default">
              <div>
                <div className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#222222] mb-6 group-hover:scale-110 group-hover:bg-[#F8F8F8] transition-all duration-300">
                  <Cpu className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#222222] leading-tight">
                  AI in Sports
                </div>
                <p className="mt-3 text-xs sm:text-sm text-[#7B7B7B] leading-relaxed max-w-[280px]">
                  Research Paper – Role of AI in Sports Analytics & Predictive Modeling
                </p>
              </div>

              {/* Inset Model Performance Visual Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#222222] text-white flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-medium text-white/90">Predictive Model Output</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    R² = 0.89
                  </span>
                </div>
                
                {/* Minimalist SVG Forecast Curve */}
                <div className="py-3">
                  <svg viewBox="0 0 240 60" className="w-full h-14 overflow-visible">
                    <defs>
                      <linearGradient id="projGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 50 Q 50 45, 90 32 T 170 18 T 230 8 L 230 55 L 10 55 Z"
                      fill="url(#projGrad)"
                    />
                    <path
                      d="M 10 50 Q 50 45, 90 32 T 170 18 T 230 8"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="50" r="3" fill="#10B981" />
                    <circle cx="90" cy="32" r="3" fill="#10B981" />
                    <circle cx="170" cy="18" r="3" fill="#10B981" />
                    <circle cx="230" cy="8" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                  </svg>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span>Python & Seaborn</span>
                  <span className="text-white font-medium">Tableau Visuals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 (Right - 4 cols): Milestone Card with Arrow & Sparkle Highlights */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8 lg:space-y-10">
            
            {/* Top BI Dashboard Card with Action Button */}
            <div className="flex justify-start lg:justify-end">
              <div className="relative w-full sm:w-80 rounded-3xl p-6 bg-white border border-[#E8E8E8] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7B7B7B]">
                    Power BI & Excel
                  </span>
                  <a
                    href={viewMoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F8F8F8] border border-[#E8E8E8] flex items-center justify-center text-[#222222] group-hover:bg-[#222222] group-hover:text-white transition-colors"
                    aria-label="Discuss on LinkedIn"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
                <h4 className="text-base font-medium text-[#222222]">
                  Financial BI Dashboards
                </h4>
                <p className="mt-1 text-xs text-[#7B7B7B] leading-relaxed">
                  Automated executive KPI suites, trend analysis, and strategic forecasting models.
                </p>
              </div>
            </div>

            {/* Two Feature Highlights with Sparkle/Star Icons */}
            <div className="space-y-8">
              <div className="group flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5 group-hover:rotate-45 group-hover:bg-black transition-all duration-300">
                  <Sparkle className="w-4 h-4 fill-white" />
                </div>
                <p className="text-xs sm:text-sm text-[#7B7B7B] group-hover:text-[#222222] leading-relaxed transition-colors duration-200">
                  <strong className="text-[#222222] font-medium">Predictive Modeling: </strong>
                  Developed regression and forecasting algorithms in Python to evaluate team strategy, player dynamics, and performance trajectories.
                </p>
              </div>

              <div className="group flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center mt-0.5 group-hover:rotate-45 group-hover:bg-black transition-all duration-300">
                  <Sparkle className="w-4 h-4 fill-white" />
                </div>
                <p className="text-xs sm:text-sm text-[#7B7B7B] group-hover:text-[#222222] leading-relaxed transition-colors duration-200">
                  <strong className="text-[#222222] font-medium">Executive Storytelling: </strong>
                  Built dynamic interactive dashboards in Tableau and Power BI that translate complex quantitative models into clear decision-making tools.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
