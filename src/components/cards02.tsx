import React from 'react';

interface Product {
  image: string;
  name: string;
  price: string;
}

const products: Product[] = [
  {
    image: '/i17.png', // Replace with your image paths
    name: 'GORE TEX SMART JACKET SHELL',
    price: '$600.00',
  },
  {
    image: '/i18.png',
    name: 'GORE TEX SMART JACKET SHELL',
    price: '$600.00',
  },
  {
    image: '/i19.png',
    name: 'GORE TEX SMART JACKET SHELL',
    price: '$600.00',
  },
];

const Cards: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white">
      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <a
            key={index}
            href="#"
            className="max-w-xs border border-gray-200 shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain mb-4"
            />
            {/* Product Name */}
            <h3 className="text-left text-sm font-semibold">{product.name}</h3>
            {/* Product Price */}
            <p className="text-left text-sm text-gray-700">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
