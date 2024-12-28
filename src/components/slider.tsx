import { MoveRight, MoveLeft } from 'lucide-react';
import React, { useState } from 'react';

const images = [
  '/image 5.png', // Add your image paths here
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-screen h-screen mx-auto">
      {/* Image */}
      <div className="relative w-screen h-3/4"> {/* Set the height to 3/4 */}
        <img
          src={"./image 5.png"}
          alt="Fall Winter Collection"
          className="w-screen h-full object-cover" // Ensures the image fits the container
        />

        {/* Overlay Text Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold w-full h-24 flex items-end justify-center">
          <img 
            src="/text1.png" 
            alt="Fall Winter Collection" 
            className="w-3/6 h-20 object-contain mb-1"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          <MoveLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
