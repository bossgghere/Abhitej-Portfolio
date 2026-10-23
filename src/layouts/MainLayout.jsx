import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { LeftSidebarMeta } from '../components/common/LeftSidebarMeta';

/**
 * MainLayout Component
 * Houses the top navigation, left-side vertical metadata rail, and page outlet.
 */
export const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#f9f9fa] text-[#111111] overflow-x-hidden">
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
