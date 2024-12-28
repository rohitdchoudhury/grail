import React from 'react';

const ProductionSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-20 py-16 bg-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col w-1/2">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          OUR PRODUCTION
          <div className="w-3/6 h-1 bg-black mt-2"></div>
        </h2>

        {/* Vertical Line and Text Items */}
        <div className="flex items-start mt-10">
          {/* Vertical Line */}
          <div className="relative flex flex-col items-center">
             {/* <div className="w-4 h-4 bg-gray-400 rounded-full"></div> */}
            <div className="w-1 h-14 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-10 bg-gray-400"></div>
          </div>

          {/* Text Items */}
          <div className="ml-6 space-y-8 mt-10 underline underline-offset-2 ">
            <p className="text-lg font-semibold ">HIGH QUALITY MATERIAL</p>
            <p className="text-lg font-semibold">INNOVATIVE FABRICS</p>
            <p className="text-lg font-semibold">DURABLE AND ECO-FRIENDLY</p>
          </div>
        </div>
      </div>

      {/* Right Side: Images */}
      <div className="relative w-1/4 h-20">
        {/* 2nd Vertical Image (Reduced height) */}
        <img
          src="/p2.png"
          alt="Background Image"
          className="absolute w-1.75/3 h-64 rounded-lg object-cover z-10"
        />
        {/* 1st Overlaying Image */}
        <img
          src="/p1.png"
          alt="Overlaying Image"
          className="absolute top-2 left-8 w-2/4 h-auto rounded-r-lg object-cover   z-20"
        />
      </div>
    </div>
  );
};

export default ProductionSection;
