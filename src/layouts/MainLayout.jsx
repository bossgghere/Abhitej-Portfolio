import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { FloatingRightMenu } from '../components/common/FloatingRightMenu';

/**
 * MainLayout Component
 * Clean layout without the left sidebar rail:
 * - Background: Tertiary (#F8F8F8)
 * - Text: Primary (#222222)
 * - Centered full-width flow
 * - Persistent minimal right-side floating navigation
 */
export const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F8F8] text-[#222222] overflow-x-hidden font-sans">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <FloatingRightMenu />
    </div>
  );
};

export default MainLayout;
