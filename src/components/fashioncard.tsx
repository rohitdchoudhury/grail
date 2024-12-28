import React from 'react';

const FashionCard: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative w-full max-w-screen-xl mx-auto p-4">
        {/* Main Fashion Image */}
        <div className="relative">
          <img
            src="/image6.png" // Replace with your fashion image path
            alt="Fashion"
            className="w-full h-80 object-cover" // Increased height to h-80
          />
          <div className="absolute bottom-0 left-4 text-white text-2xl font-bold">
            FASHION
          </div>
        </div>
      </div>

      
      <div className="relative flex justify-center space-x-4">
  {/* Fit Image (Overlay) */}
  <div className="relative w-full max-w-md p-4 bg-white border">
    <div className="relative w-full">
      <img
        src="/image7.png" // Replace with your function image path
        alt="Fit"
        className="w-full h-60 object-cover"
      />
      <div className="absolute bottom-0 left-4 text-black text-xl font-bold">
        FIT
      </div>
    </div>
  </div>

 {/* White Box around Image */}
<div className="p-4 bg-slate-100 border border-gray-300 w-full max-w-md mx-auto translate-y-[-30%]">
  {/* Function Image */}
  <div className="relative w-full bg-slate-700 border-x-10 border-y-10 ">
    <div className="relative w-full">
      <img
        src="/image8.png" // Replace with your fit image path
        alt="Function"
        className="w-full h-60 object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-4 text-black text-xl font-bold">
      FUNCTION
    </div>
  </div>
</div>

</div>

        
      </div>
  //  </div>



    // </div>
  );
};

export default FashionCard;
