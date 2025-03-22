import React from 'react';
import Header from '../shared/Header';
import SidebarMenu from '../shared/SidebarMenu';
import CategoriesSection from '../shared/CategoriesSection';
import StudentsSection from '../shared/StudentsSection';
import UpcomingEventsSection from '../shared/UpcomingEventsSection';

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#ffffff]">
      <div className="flex-none w-20 md:w-1/12 bg-white shadow-md flex items-start justify-center pt-2">
        <SidebarMenu />
      </div>
      <div className="flex-grow relative">
        <div className="w-full h-60 bg-gradient-to-b from-red-600 to-red-800">
          <Header />
        </div>
        
        <div className="absolute top-32 left-0 right-0 z-10">
          <div className="px-4">
            <CategoriesSection />
          </div>
          <div className="px-4 mt-8">
            <StudentsSection />
            <UpcomingEventsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
