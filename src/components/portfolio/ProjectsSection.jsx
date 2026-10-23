import React from 'react';
import { ArrowUpRight, Cpu, Sparkle } from 'lucide-react';
import { portfolioData } from '@/data';
import { useInView } from '@/hooks/useInView';

/**
 * ProjectsSection Component
 * Completes the 3-phase editorial cascade across the portfolio:
 * - Section 1 (About Me): Text & Arrow on LEFT → pointing right
 * - Section 2 (Experience): Text & Arrow in MIDDLE ↷
 * - Section 3 (Research & Projects): Text & Arrow on RIGHT ← pointing left
 * 
 * Layout:
 * - Column 1 (Left - lg:col-span-4): Financial BI Dashboards milestone card + Sparkle highlights
 * - Column 2 (Center - lg:col-span-4): Signature White Hero Card (AI in Sports) with predictive model box
 * - Column 3 (Right - lg:col-span-4): Headline ("Research & Analytics"), narrative, and directional curved arrow pointing left
 */
export const ProjectsSection = () => {
  const { viewMoreLink } = portfolioData;
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-14 sm:py-18 px-6 sm:px-10 lg:px-14 border-t border-[#E8E8E8] bg-[#F8F8F8]"
    >
      {/* Backward-compatibility anchor for legacy links */}
      <span id="portfolio" className="absolute -top-10" />
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Column 1 (Left - lg:col-span-4): Financial BI Milestone Card & Sparkle Highlights */}
          <div className="order-3 lg:order-1 lg:col-span-4 flex flex-col space-y-5 sm:space-y-6">
            
            {/* Top BI Dashboard Card with Action Button */}
            <div>
              <div className="relative w-full rounded-3xl p-6 bg-white border border-[#E8E8E8] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
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
            <div className="space-y-4 sm:space-y-5">
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

          {/* Column 2 (Center - lg:col-span-4): Signature White Hero Stat Card (AI in Sports) */}
          <div className="order-2 lg:order-2 lg:col-span-4">
            <div className="group bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#E8E8E8] flex flex-col justify-between cursor-default">
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

              {/* Inset Research Scope Box */}
              <div className="mt-8 rounded-2xl p-5 bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                  <span className="text-xs font-medium text-[#222222]">Research Scope</span>
                  <span className="text-[10px] text-[#222222] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#E8E8E8]">
                    Academic Paper
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[#7B7B7B]">
                  <div className="text-[#222222] font-normal">• Predictive Modeling & Player Forecasting</div>
                  <div className="text-[#222222] font-normal">• Game Strategy & Tactical Optimization</div>
                  <div className="text-[#222222] font-normal">• Visual Dashboards via Tableau & Seaborn</div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#7B7B7B]">
                  <span>Python & Machine Learning</span>
                  <span className="font-medium text-[#222222]">Quantitative Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 (Right - lg:col-span-4): Headline, Research Overview & Directional Curved Arrow (Pointing Left) */}
          <div className="order-1 lg:order-3 lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E8] text-xs font-medium text-[#222222] mb-4 hover:bg-[#dedede] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#222222] animate-pulse" />
                <span>Projects</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#222222] leading-tight">
                Research & Analytics
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#7B7B7B] leading-relaxed">
                Bridging machine learning and executive business intelligence. From predictive athletic performance models in Python to automated financial reporting suites in Power BI.
              </p>

              <div className="mt-6">
                <a
                  href={viewMoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
                >
                  <span>Discuss on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Directional curved arrow pointing LEFT towards the center card */}
            <div className="hidden lg:block mt-12 pr-4 select-none pointer-events-none opacity-40 hover:opacity-70 transition-opacity">
              <svg
                width="200"
                height="140"
                viewBox="0 0 200 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M180 120 C 170 70, 110 25, 25 35"
                  stroke="#7B7B7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 15 L 20 35 L 40 65"
                  stroke="#7B7B7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
