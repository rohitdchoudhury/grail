import React from "react";
import { Store, FlaskConical } from "lucide-react"; // Lucide icons

const StoreProductSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-96 bg-white">
      <div className="flex justify-center  space-x-24 py-28 align-middle">
        {/* Locate Stores */}
        <div className="flex items-center space-x-2">
          <Store className="w-6 h-6" />
          <p className="text-lg font-medium underline underline-offset-2">
            Locate stores
          </p>
        </div>

        {/* Browse Products */}
        <div className="flex items-center space-x-2">
          <FlaskConical className="w-6 h-6" />
          <p className="text-lg font-medium underline underline-offset-2">
            Browse Products
          </p>
        </div>
      </div>

      {/* Horizontal Line at the bottom */}
      <div className="w-full border-t-2 border-gray-300"></div>
    </div>
  );
};

export default StoreProductSection;
