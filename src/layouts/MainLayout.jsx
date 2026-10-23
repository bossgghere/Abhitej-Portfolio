import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { LeftSidebarMeta } from '../components/common/LeftSidebarMeta';

/**
 * MainLayout Component
 * Formatted with UI/UX theme colors:
 * - Background: Tertiary (#F8F8F8)
 * - Text: Primary (#222222)
 * - Borders: #E8E8E8
 */
export const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F8F8] text-[#222222] overflow-x-hidden font-sans">
      {/* Left side desktop rail ("Product designer" | "2024") */}
      <LeftSidebarMeta />

      {/* Main wrapper offset by left rail on desktop */}
      <div className="lg:pl-16 xl:pl-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
