import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col justify-between sticky top-0 h-[calc(100vh-80px)] w-1/4 p-8 text-[#8892b0]">
      <div className="space-y-6">
        <a href="#about" className="block hover:text-green-400">About</a>
        <a href="#experience" className="block hover:text-green-400">Experience</a>
        <a href="#projects" className="block hover:text-green-400">Projects</a>
      </div>
      <div className="flex gap-4 mt-10">
        <a href="#"><i className="fab fa-github text-xl"></i></a>
        <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
      </div>
    </aside>
  );
};

export default Sidebar;
