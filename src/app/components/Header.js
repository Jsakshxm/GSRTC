import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-white bg-blue-900 shadow-md"> {/* Changed background color to blue and text color to white */}
      <h1 className="text-2xl font-bold">Path-Ek</h1> {/* Removed text color class */}
      <nav className="space-x-4">
        <a href="#" className="transition duration-300 hover:text-yellow-400">Home</a> {/* Changed hover text color to yellow */}
        <a href="#" className="transition duration-300 hover:text-yellow-400">About</a> {/* Changed hover text color to yellow */}
        <a href="#" className="transition duration-300 hover:text-yellow-400">Services</a> {/* Changed hover text color to yellow */}
        <a href="#" className="transition duration-300 hover:text-yellow-400">Contact</a> {/* Changed hover text color to yellow */}
      </nav>
    </div>
  );
};

export default Header;
