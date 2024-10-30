import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Creative Agency 🌐</h1>
        <nav>
          <ul className="flex space-x-6">

            <li><span className="text-white hover:text-blue-300 cursor-pointer font-semibold text-[1rem]">Home</span></li>
            <li><span className="text-white hover:text-blue-300 cursor-pointer font-semibold text-[1rem]">Services</span></li>
            <li><span className="text-white hover:text-blue-300 cursor-pointer font-semibold text-[1rem]">About Us</span></li>
            <li><span className="text-white hover:text-blue-300 cursor-pointer font-semibold text-[1rem]">Contact</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
