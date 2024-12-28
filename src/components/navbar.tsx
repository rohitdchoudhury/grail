import { Menu } from 'lucide-react';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Grail Logo */}
        <div className="flex items-center mx-20">
          <img 
            src="/logo.png" 
            alt="Grail Logo" 
            className="h-10 w-auto" // Adjust logo size here
          />
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-6 mx-20">
          <a href="/tech" className="text-black text-lg hover:text-gray-700 font-semibold">
            Tech
          </a>
          <a href="/store" className="text-black text-lg hover:text-gray-700 font-semibold">
            Store
          </a>
          <a href="/Menu" className="text-black text-lg hover:text-gray-700 font-semibold">
          <Menu />
          </a>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
