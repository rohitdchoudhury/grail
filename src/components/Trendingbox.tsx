import React from 'react';

const TrendingBox: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white">
      {/* Trending Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold tracking-wide">TRENDING</h2>
        <div className="mt-2 border-t-2 border-black w-[20%] mx-auto"></div> {/* Underline */}
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-6">
        {/* Left Card */}
        <div className="w-84 h-96 bg-white shadow-md">
          <img
            src="/image9.png"  // Replace with the left card image path
            alt="Left Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Card */}
        <div className="w-84 h-96 bg-white shadow-md">
          <img
            src="/image10.png"  // Replace with the right card image path
            alt="Right Card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingBox;
