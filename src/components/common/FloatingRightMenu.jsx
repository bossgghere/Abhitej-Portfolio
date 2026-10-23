import React, { useState, useEffect } from 'react';

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
 * - Floating vertical section scrollspy dots dock along the right edge
 * - Allows users to jump directly to any section while scrolling with real-time active indicators
 */
export const FloatingRightMenu = () => {
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

  const scrollTo = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      aria-label="Quick section navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 px-2 sm:px-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E8E8] shadow-sm select-none"
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
            {/* Tooltip on hover (slides out to left on desktop) */}
            <div className="hidden sm:flex absolute right-9 px-2.5 py-1 rounded-full bg-[#222222] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md items-center gap-1.5">
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
  );
};

export default FloatingRightMenu;