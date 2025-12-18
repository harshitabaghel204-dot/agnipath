import React, { useState } from 'react';

export default function WafersCards() {
  const products = [
    {
      id: 1,
      title: 'Crunchem - Masala Masti',
      category: 'WAFERS',
      price: '₹ 40',
      frontImage: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop',
      backImage: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Crunchex - Chilli Tadka',
      category: 'WAFERS',
      price: '₹ 40',
      frontImage: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop',
      backImage: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=400&fit=crop',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 3,
      title: 'Crunchem - Chaat Chaska',
      category: 'WAFERS',
      price: '₹ 40',
      frontImage: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&h=400&fit=crop',
      backImage: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&h=400&fit=crop',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container with Hover Effect */}
      <div 
        className={`relative ${product.bgColor} p-8 cursor-pointer overflow-hidden`}
        style={{ height: '320px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Back Image - Shows on Hover */}
        <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-out ${
          isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}>
          <img
            src={product.backImage}
            alt={`${product.title} Back`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Front Image - Slides Down on Hover */}
        <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-out ${
          isHovered ? 'translate-y-16 opacity-0 scale-90' : 'translate-y-0 opacity-100 scale-100'
        }`}>
          <img
            src={product.frontImage}
            alt={product.title}
            className="w-full h-full object-contain filter drop-shadow-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {product.title}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold text-gray-900">
          {product.price}
        </p>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex items-center gap-4 pt-2">
          {/* Quantity Controls */}
          <div className="flex items-center bg-gray-100 rounded-full">
            <button
              onClick={handleDecrease}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
            >
              −
            </button>
            <span className="w-12 text-center font-semibold text-gray-900">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}