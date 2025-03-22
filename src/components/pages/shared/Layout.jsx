import React from 'react';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import CategoriesSection from './CategoriesSection';
import StudentsSection from './StudentsSection';
import UpcomingEventsSection from './UpcomingEventsSection';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarMenu />
      <main className="flex-1 md:ml-20">
        {/* Header with reduced bottom padding */}
        <div className="bg-[#c71010] w-full pb-6">
          <Header />
        </div>
        
        {/* Main content - ensures full height scrollability */}
        <div className="flex-1 overflow-y-auto pb-32 -mt-6">
          <div className="max-w-7xl mx-auto px-4">
            {/* Categories section */}
            <div className="relative z-10">
              <CategoriesSection />
            </div>
            
            {/* Other sections */}
            <div className="mt-6">
              <StudentsSection />
            </div>
            
            {/* Upcoming Events Section */}
            <div className="mt-6">
              <UpcomingEventsSection />
            </div>
          </div>
          
          {/* Floating action button for mobile */}
          <div className="md:hidden fixed bottom-20 right-4">
            <button className="w-16 h-16 bg-[#c71010] rounded-full flex items-center justify-center shadow-lg hover:bg-[#a00d0d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;