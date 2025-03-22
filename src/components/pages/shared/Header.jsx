import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current && 
        !profileMenuRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add logout functionality here
    console.log('Logging out...');
  };

  return (
    <div className="w-full h-full px-4 py-3">
      <div className="flex items-center justify-between flex-wrap">
        {/* Profile Section */}
        <div className="relative">
          <div 
            ref={profileButtonRef}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse.png"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-transparent hover:border-white transition-all duration-200"
            />
            <span className="text-white font-medium text-base">Jazzlyn</span>
          </div>

          {/* Profile Popup Menu */}
          {showProfileMenu && (
            <div 
              ref={profileMenuRef}
              className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-gray-900 font-medium">Jazzlyn</h4>
                    <p className="text-gray-500 text-sm">Teacher</p>
                  </div>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <button 
                  onClick={() => {/* Add profile view/edit handler */}}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-200"
                >
                  View Profile
                </button>
                <button 
                  onClick={() => {/* Add settings handler */}}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-200"
                >
                  Settings
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#e11e1e] rounded-[34px] px-4 py-3 w-full max-w-[560px] md:mx-4 mt-2 md:mt-0 order-3 md:order-2">
          <div className="flex items-center gap-2 w-full">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame.png" 
              alt="Search"
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search Courses,students..."
              className="bg-transparent border-none outline-none text-white placeholder-white text-sm w-full"
            />
          </div>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-2.png" 
            alt="Filter"
            className="w-5 h-5 ml-auto cursor-pointer"
          />
        </div>

        {/* Notifications and Favorites */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-3.png" 
              alt="Notifications"
              className="w-6 h-6"
            />
            <span className="text-white text-sm">Notifications</span>
          </div>
          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-4.png" 
              alt="Favorites"
              className="w-6 h-6"
            />
            <span className="text-white text-sm">Favorites</span>
          </div>
          {/* Mobile icons */}
          <div className="flex md:hidden items-center gap-4">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-3.png" 
              alt="Notifications"
              className="w-6 h-6"
            />
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-4.png" 
              alt="Favorites"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;