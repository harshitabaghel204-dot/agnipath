import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { ChevronDown } from "lucide-react";
import Footer from "../Component/Footer";

export default function WafersCards() {


  return (
    <div className="min-h-screen bg-[#010317] py-8 px-4 sm:py-12 md:py-16 lg:py-20">
      <Navbar />

      {/* Banner */}
      <div className="w-full h-[320px] md:h-[420px] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUziSQ3WXS2WBoDcVSBLxEliM7WKMH0YfELA&s"
          alt="Masaledar Snacks"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#c8a357]">
          Our masaledar lineup
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Endless choices of crunchy snacks. Find your favourite flavours and
          keep munching!
        </p>
      </div>

      {/* Filter - View - Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-10 px-4 gap-4">
        <button className="flex items-center gap-2 bg-[#c8a357] text-white border rounded-full px-5 py-2 shadow-sm hover:shadow font-medium">
          Filter <ChevronDown size={18} className="text-white" />
        </button>

        <div className="flex items-center gap-2 text-white">
          <span className="font-medium">View:</span>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-white text-sm">
              1
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm">
              2
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm">
              3
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-[#c8a357] text-white border rounded-full px-5 py-2 shadow-sm hover:shadow font-medium">
          Best selling <ChevronDown size={18} className="text-white" />
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}


