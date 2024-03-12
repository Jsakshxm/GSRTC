import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="w-48 bg-white shadow-lg"> {/* Added background color white */}
      <div className="p-4">
        <Link href="/">
          <h1 className="font-bold cursor-pointer hover:text-blue-700">Home</h1> {/* Added cursor-pointer and hover effect */}
        </Link>
        <h1 className="font-bold cursor-pointer hover:text-blue-700">Dashboard</h1> {/* Added cursor-pointer and hover effect */}
        <h1 className="font-bold cursor-pointer hover:text-blue-700">Our Buses</h1> {/* Added cursor-pointer and hover effect */}
        <h1 className="font-bold cursor-pointer hover:text-blue-700">Live Location</h1> {/* Added cursor-pointer and hover effect */}
      </div>
      <ul>
        <h1 className="p-4 font-bold">Subscription</h1>
        <li className="pl-4">Analytics</li>
        <li className="pl-4">Mission</li>
        <li className="pl-4">Story</li>
        <li className="pl-4">Join Us</li>
        <li className="pl-4">Social Media</li>
      </ul>
    
    </div>
  );
};

export default SideBar;
