import React from 'react';

const CategoryCards = ({ categories }) => {
  // Use the provided categories or fall back to defaultCategories
  const displayCategories = categories || defaultCategories;
  
  return (
    <div className="px-4 py-8 w-full">
      <h2 className="text-2xl font-bold mb-6">CATEGORIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {displayCategories.map((category, index) => (
          <div 
            key={index}
            className={`${category.bgColor} rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300`}
          >
            <img 
              src={category.icon} 
              alt={category.title}
              className="w-[54px] h-[54px] mb-4"
            />
            <h3 className="font-medium text-[16px] text-[#211e1e] text-center">
              {category.title}
            </h3>
            <p className="text-[14px] text-[#211e1e] opacity-60 mt-1">
              {category.courses} {category.courses === 1 ? 'course' : 'courses'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const defaultCategories = [
  {
    title: "Personal Finance",
    courses: 2,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1.png",
    bgColor: "bg-[#fff2d2]"
  },
  {
    title: "Financial fundamentals",
    courses: 1,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1-2.png",
    bgColor: "bg-[#ffe0e0]"
  },
  {
    title: "Investment Strategies",
    courses: 3,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1-3.png",
    bgColor: "bg-[#fff2d2]"
  },
  {
    title: "Retirement Planning",
    courses: 2,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1-4.png",
    bgColor: "bg-[#ffe0e0]"
  },
  {
    title: "Tax Optimization",
    courses: 1,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1-5.png",
    bgColor: "bg-[#fff2d2]"
  },
  {
    title: "Debt Management",
    courses: 4,
    icon: "https://dashboard.codeparrot.ai/api/image/Z9V4cJIdzXb5OlNv/layer-1-6.png",
    bgColor: "bg-[#ffe0e0]"
  }
];

export default CategoryCards;