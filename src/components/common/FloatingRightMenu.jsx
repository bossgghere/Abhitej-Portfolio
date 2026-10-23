import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowUp } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', index: '00' },
  { id: 'about', label: 'About Me', index: '01' },
  { id: 'services', label: 'Career & Experience', index: '02' },
  { id: 'portfolio', label: 'Research & Analytics', index: '03' },
  { id: 'footer', label: 'Direct Contact', index: '04' },
];

/**
 * FloatingRightMenu Component
 * Minimal and aesthetic persistent navigation on the right side:
 * 1. Fixed floating "MENU" button (top-right) that triggers a sleek dark drawer
 * 2. Floating vertical section scrollspy dots dock along the right edge
 * Seamlessly allows users to jump directly to any section while scrolling.
 */
export const FloatingRightMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scrollspy: update active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // If user reaches near bottom of the page, activate footer
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection('footer');
        return;
      }

      // If at the very top, activate hero
      if (window.scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        if (item.id === 'hero') continue;

        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollTo = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. Fixed Floating Menu Button (Top Right) */}
      <div className="fixed top-5 right-5 sm:top-6 sm:right-10 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#222222] hover:bg-black text-white shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase">Menu</span>
          {isOpen ? (
            <X className="w-3.5 h-3.5" />
          ) : (
            <Menu className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-300" />
          )}
        </button>

        {/* Floating Minimal Drawer Overlay */}
        {isOpen && (
          <>
            {/* Click-outside backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute top-13 right-0 z-50 w-72 sm:w-80 bg-[#222222] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/15 backdrop-blur-xl animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Navigate</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full py-2.5 px-3 rounded-xl flex items-center justify-between text-left transition-all duration-200 group cursor-pointer ${
                        isActive
                          ? 'bg-white/15 text-white font-medium'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors">
                          {item.index}
                        </span>
                        <span className="text-xs sm:text-sm">{item.label}</span>
                      </div>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Links */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <a
                  href="https://www.linkedin.com/in/abhitej-kumar-8b5b19286/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 2. Floating Vertical Indicator Dots Dock (Right Edge) */}
      <nav
        aria-label="Quick section navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 py-4 px-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E8E8] shadow-sm select-none"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex items-center justify-center p-1 focus:outline-none cursor-pointer"
              aria-label={`Jump to ${item.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {/* Tooltip on hover (slides out to left) */}
              <div className="absolute right-9 px-2.5 py-1 rounded-full bg-[#222222] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md flex items-center gap-1.5">
                <span className="text-white/50 font-mono text-[10px]">{item.index}</span>
                <span>{item.label}</span>
              </div>

              {/* Indicator Dot/Pill */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2 h-5 bg-[#222222]'
                    : 'w-2 h-2 bg-[#D4D4D4] group-hover:bg-[#7B7B7B]'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default FloatingRightMenu;