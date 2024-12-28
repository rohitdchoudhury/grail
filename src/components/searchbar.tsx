import React from 'react';
import { Search } from 'lucide-react'; 
const Searchbar: React.FC = () => {
  return (
    <footer className="py-6">
      <div className="flex justify-center">
        <div className="relative w-4/6 mx-4"> {/* Full-width search bar */}
          {/* Search Icon */}
          <span className="absolute inset-y-0 left-2 flex items-center">
            <Search className="text-gray-500" aria-hidden="true" size={18} />
          </span>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </footer>
  );
};

export default Searchbar;
