import React, { useState } from 'react';

const SidebarMenu = ({ menuItems = [
  { id: 1, icon: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-6.png', label: 'Home', active: true },
  { id: 2, icon: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-7.png', label: 'Categories', active: false },
  { id: 3, icon: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-8.png', label: 'Resources', active: false },
  { id: 4, icon: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-9.png', label: 'My Calendar', active: false },
  { id: 5, icon: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-10.png', label: 'Settings', active: false },
  { 
    id: 6, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMiA2djZsNC4yNSAyLjUyLjc3LTEuMjgtMy41Mi0yLjA5VjZoLTEuNXoiLz48L3N2Zz4=',
    label: 'Recent Activity',
    active: false 
  },
  { 
    id: 7, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE2IDlWNGwtOCA4IDggOHYtNWMzLjAzIDAgNS41IDIuNDcgNS41IDUuNXYxaC0ydjFoNHYtMmMwLTQuMTQtMy4zNi03LjUtNy41LTcuNXoiLz48L3N2Zz4=',
    label: 'Progress Tracker',
    active: false 
  },
  { 
    id: 8, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDIyYzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjg5IDIgMiAyem02LTZ2LTVjMC0zLjA3LTEuNjQtNS42NC00LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVTMTEgMy4xNyAxMSA0djEuNjhjLTIuMzYuNjgtNCA0LTQgNi4zMnY1bC0yIDJ2MWgxN3YtMWwtMi0yeiIvPjwvc3ZnPg==',
    label: 'Notifications',
    active: false 
  },
  { 
    id: 9, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3IDN2MmgtMTB2LTJoMTBtMC0yaC0xMGMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMnYtMTZjMC0xLjEtLjktMi0yLTJ6Ii8+PC9zdmc+',
    label: 'Bookmark Manager',
    active: false 
  },
 
  { 
    id: 10, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDNoLTE0Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi0xNGMwLTEuMS0uOS0yLTItMnptLTIgMTBoLTR2NGgtMnYtNGgtNHYtMmg0di00aDJ2NGg0djJ6Ii8+PC9zdmc+',
    label: 'Quick Notes',
    active: false 
  },
  { 
    id: 11, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tMiAxMkg2di0yaDEydjJ6bTAtM0g2VjloMTJ2NHptMC00SDZWNmgxMnYzeiIvPjwvc3ZnPg==',
    label: 'Messages',
    active: false 
  },
  { 
    id: 12, 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwIDguNjlWNGgtNC42OUwxMiAuNjkgOC42OSA0SDR2NC42OUwuNjkgMTIgNCAxNS4zMVYyMGg0LjY5TDEyIDIzLjMxIDE1LjMxIDIwSDIwdi00LjY5TDIzLjMxIDEyIDIwIDguNjl6TTEyIDE4Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnoiLz48L3N2Zz4=',
    label: 'Dark Mode',
    active: false 
  }
] }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
  };

  const mainMenuItems = menuItems.slice(0, 4);
  const moreMenuItems = menuItems.slice(4);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex w-20 min-h-screen flex-col">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={item.label === 'Dark Mode' ? toggleDarkMode : undefined}
            className={`flex flex-col items-center p-4 cursor-pointer transition-all duration-200 hover:bg-red-50 
              ${item.active ? 'bg-[#f5eae9]' : 'bg-[#fff]'}`}
          >
            <div className={`flex flex-col items-center gap-1 ${!item.active ? 'opacity-60' : ''}`}>
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span 
                className={`text-xs font-archivo mt-2 text-center
                  ${item.active ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white z-40">
        {/* More Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMoreMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMoreMenu}
        />

        {/* Additional Menus - Sliding Panel */}
        <div 
          className={`fixed bottom-16 left-0 w-full bg-white transition-transform duration-300 ease-in-out z-30
            ${isMoreMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="grid grid-cols-4 gap-4 p-4 border-t border-gray-200">
            {moreMenuItems.map((item) => (
              <div
                key={`more-${item.id}`}
                onClick={item.label === 'Dark Mode' ? toggleDarkMode : undefined}
                className={`flex flex-col items-center p-2 cursor-pointer transition-all duration-200
                  ${item.active ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className={`w-5 h-5 ${!item.active ? 'opacity-60' : ''}`} 
                />
                <span 
                  className={`text-xs font-archivo mt-1 text-center
                    ${item.active ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Bottom Navigation */}
        <nav className="flex justify-around items-center border-t border-gray-200 bg-white p-4 z-40 relative">
          {mainMenuItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center p-2 cursor-pointer transition-all duration-200 
                ${item.active ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
            >
              <img 
                src={item.icon} 
                alt={item.label} 
                className={`w-5 h-5 ${!item.active ? 'opacity-60' : ''}`} 
              />
              <span 
                className={`text-xs font-archivo mt-1 text-center
                  ${item.active ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
              >
                {item.label}
              </span>
            </div>
          ))}
          <button
            onClick={toggleMoreMenu}
            className={`flex flex-col items-center p-2 cursor-pointer transition-all duration-200
              ${isMoreMenuOpen ? 'text-[#c71010]' : 'text-[#211e1e]'}`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-5 h-5 ${isMoreMenuOpen ? 'text-[#c71010]' : 'text-gray-600'}`}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span className="text-xs font-archivo mt-1">More</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;