import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const WineProductsGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Masala Masti Chips",
      category: "Chips",
      price: "",
      image:
        "/image/masalachips.png",
      
    },
    {
      id: 2,
      name: "JARAMAN SHIRAZ",
      category: "ESTATE LABEL",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop",
      
    },
    {
      id: 3,
      name: "PINOT NOIR ROSÉ 2023",
      category: "TAYLOR MADE",
      price: "$28.00",
      image:
        "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400&h=600&fit=crop",
      badges: []
    },
    {
      id: 4,
      name: "RESERVE SHIRAZ 2021",
      category: "PREMIUM LABEL",
      price: "$45.00",
      image:
        "https://images.unsplash.com/photo-1566754436611-f0a5de0b3d6c?w=400&h=600&fit=crop",
      badges: []
    },
     {
      id: 5,
      name: "Masala Masti Chips",
      category: "Chips",
      price: "",
      image:
        "/image/masalachips.png",
      
    },
    {
      id: 6,
      name: "JARAMAN SHIRAZ",
      category: "ESTATE LABEL",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop",
      
    },
    {
      id: 7,
      name: "PINOT NOIR ROSÉ 2023",
      category: "TAYLOR MADE",
      price: "$28.00",
      image:
        "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400&h=600&fit=crop",
      badges: []
    },
    {
      id: 8,
      name: "RESERVE SHIRAZ 2021",
      category: "PREMIUM LABEL",
      price: "$45.00",
      image:
        "https://images.unsplash.com/photo-1566754436611-f0a5de0b3d6c?w=400&h=600&fit=crop",
      badges: []
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] font-sans">
      {/* Header */}
    <Navbar/>
<div className="w-full h-72 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80"
          alt="Balaji Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* CARD - Background stays same */}
              <div className="bg-[radial-gradient(circle_at_center,rgba(200,163,87,0.12)_0%,transparent_70%)] p-4 rounded-xl border border-white/10">

                {/* IMAGE CONTAINER */}
                <div className="relative h-56 flex items-center justify-center mb-3">
                  {/* Badges */}
                  {product.badges && (
                    <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                      {product.badges.map((badge, index) => (
                        <div
                          key={index}
                          className="w-7 h-7 bg-[#c8a357] text-black rounded-full flex items-center justify-center text-xs font-bold"
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Image - Only this moves up on hover */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-44 object-contain transition-all duration-500 ease-out ${
                      hoveredProduct === product.id
                        ? "scale-110 -translate-y-6"
                        : "scale-100 translate-y-0"
                    }`}
                  />
                </div>

                {/* INFO */}
                <div className="text-center">
                  <p className="text-[11px] text-[#c8a357] uppercase tracking-wider mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-sm font-semibold text-white leading-tight mb-1 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm font-medium text-[#c8a357]">
                    {product.price}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WineProductsGrid;