import React from "react";

const CategoriesSection = () => {
  // Make sure you have all categories defined here
  const categories = [
    {
      title: "Personal Finance",
      courses: 2,
      icon: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/layer-1.png",
      bgColor: "bg-[#fff2d2]",
    },
    {
      title: "Financial fundamentals",
      courses: 1,
      icon: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/layer-1-2.png",
      bgColor: "bg-[#ffe0e0]",
    },
    // Add more categories as needed
  ];

  const handleAddCategory = () => {
    // Add category functionality can be implemented here
    console.log("Add new category clicked");
  };

  return (
    <div className="relative px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">MY CATEGORIES</h2>
        <button
          onClick={handleAddCategory}
          className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition-colors duration-300"
          aria-label="Add new category"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${category.bgColor} rounded-[20px] p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300`}
          >
            <img
              src={category.icon}
              alt={category.title}
              className="w-10 h-10 mb-3"
            />
            <h3 className="font-medium text-center text-gray-800 text-base mb-1">
              {category.title}
            </h3>
            <p className="text-xs text-gray-600">
              {String(category.courses).padStart(2, '0')} {category.courses === 1 ? "course" : "courses"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;