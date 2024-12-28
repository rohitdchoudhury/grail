import React from 'react';

const DesignPrincipleCard: React.FC = () => {
  return (
    <div className="relative flex items-center justify-between bg-black px-20 py-16 text-white">
      {/* Left Side: Image */}
      <div className="w-1/6">
        <img
          src="/design.png"
          alt="Design Image"
          className="w-full h-auto rounded-r-lg object-cover"
        />
      </div>


      {/* Right Side: Text Section */}
      <div className="w-1/2 flex flex-col">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          OUR DESIGN PRINCIPLE
          <div className="w-3/5 h-1 bg-white mt-2"></div>
        </h2>

        {/* Vertical Line and Text Items */}
        <div className="flex items-start mt-8">
          {/* Vertical Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-1 h-6 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
          </div>

          {/* Text Items */}
          <div className="ml-6 space-y-8 mt-2 underline underline-offset-2">
            <p className="text-lg font-semibold">CUTTING EDGE INOVATION</p>
            <p className="text-lg font-semibold">TIMELESS PIECES</p>
            <p className="text-lg font-semibold">SUSTAINABLE PRODUCTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPrincipleCard;
