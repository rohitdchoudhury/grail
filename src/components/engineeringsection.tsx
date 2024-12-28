import React from "react";

const EngineeringSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-20 py-16 bg-black text-white">
      {/* Left Side: Image Section */}
      <div className="flex flex-col space-y-6 w-1/2">
        <img
          src="/i29.png"
          alt="Engineering 1"
          className="w-2/4 h-20 object-cover rounded-full"
        />
        <img
          src="/i30.png"
          alt="Engineering 2"
          className="w-2/4 h-20 object-cover rounded-full"
        />
        <img
          src="/i31.png"
          alt="Engineering 3"
          className="w-2/4 h-20 object-cover rounded-full"
        />
      </div>

      {/* Right Side: Text Section */}
      <div className="w-1/2 flex flex-col">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          OUR ENGINEERING
          <div className="w-3/6 h-1 bg-white mt-2"></div>
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
            <p className="text-lg font-semibold">LATEST DYES</p>
            <p className="text-lg font-semibold">DEDICATED FACTORIES</p>
            <p className="text-lg font-semibold">EXPERIMENTAL TESTING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringSection;
