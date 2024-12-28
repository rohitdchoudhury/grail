import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-20 py-16">
      {/* Left Side: Heading and Text */}
      <div className="flex flex-col items-start">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 px-10">
          OUR VISION
          <div className="w-6/6 h-1 bg-black mt-2"></div>
        </h2>

        {/* Vertical Line and Text */}
        <div className="flex items-start px-10">
          {/* Vertical Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-1 h-12 bg-gray-300"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full mt-0"></div>
            <div className="w-1 h-12 bg-gray-300"></div>
          </div>

          {/* Vision Text */}
          <div className="ml-4 mt-10 ">
            <p className="text-lg font-semibold underline underline-offset-2">
              WE MAKE HIGH END TECH WEAR <br />
              ACCESSIBLE FOR EVERYONE
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/4 px-10">
        <img
          src="/Group 31.png"
          alt="Vision Image"
          className="w-full h-auto rounded-lg object-fit pl-10"
        />
      </div>
      
    </div>
  );
};

export default VisionSection;
