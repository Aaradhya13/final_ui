import React from 'react';

const studentData = [
  {
    id: 1,
    name: 'Templeton Peck',
    image: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-2.png'
  },
  {
    id: 2,
    name: 'Angela Bower',
    image: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-3.png'
  },
  {
    id: 3,
    name: 'Michael Knight',
    image: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-4.png'
  },
  {
    id: 4,
    name: 'Devon Miles',
    image: 'https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-5.png'
  }
];

const StudentCard = ({ name, image }) => {
  return (
    <div className="min-w-[120px] p-4 flex flex-col items-center gap-3">
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 rounded-full"
      />
      <p className="font-archivo font-medium text-sm text-[#211e1e]">
        {name}
      </p>
    </div>
  );
};

const StudentsSection = ({ students = studentData }) => {
  return (
    <div className="w-full mt-8 bg-[#ffffff]">
      <div className="px-4 pb-6">
        <h2 className="text-2xl font-archivo font-semibold text-[#211e1e] uppercase mb-6">
          Students
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              image={student.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default StudentsSection;