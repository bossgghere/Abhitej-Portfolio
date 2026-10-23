import React from 'react';
import { sidebarData } from '@/data';

/**
 * LeftSidebarMeta component
 * Styled with UI/UX Theme colors:
 * - Text: Secondary (#7B7B7B)
 * - Border: #E8E8E8
 */
export const LeftSidebarMeta = () => {
  const { role, year } = sidebarData;

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-16 xl:w-20 border-r border-[#E8E8E8] z-40 flex-col justify-between items-center py-12 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Top portion: Role indicator */}
      <div className="flex flex-col items-center gap-6 mt-16">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#7B7B7B] font-medium [writing-mode:vertical-rl] rotate-180">
          {role}
        </span>
        <div className="w-[1px] h-12 bg-[#E8E8E8]" />
      </div>

      {/* Bottom portion: Year indicator */}
      <div className="mb-4">
        <span className="text-[11px] tracking-[0.2em] text-[#7B7B7B] font-medium [writing-mode:vertical-rl] rotate-180">
          {year}
        </span>
      </div>
    </aside>
  );
};

export default LeftSidebarMeta;
