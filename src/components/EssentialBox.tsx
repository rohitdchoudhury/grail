import React from 'react';

const EssentialsBox: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white">
      {/* Grail Essentials Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold tracking-wide">GRAIL ESSENTIALS</h2>
        <div className="mt-2 border-t-2 border-black w-[20%] mx-auto"></div> {/* Underline */}
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-4">
        {/* Left Card */}
        <div className="w-64 h-64 bg-white shadow-md">
          <img
            src="/image11.png"  // Replace with the left card image path
            alt="Left Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Card */}
        <div className="relative w-64 h-64 bg-white shadow-md">
          <img
            src="/image12.png"  // Replace with the middle card image path
            alt="Middle Card"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Card */}
        <div className="w-64 h-64 bg-white shadow-md">
          <img
            src="/image13.png"  // Replace with the right card image path
            alt="Right Card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-6 text-center">
        <button className="bg-black text-white px-6 py-2 font-semibold text-sm">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default EssentialsBox;
