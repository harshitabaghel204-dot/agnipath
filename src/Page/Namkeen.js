import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const AgnipathProductsGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Farali Chevdo Namkeen",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/Namkeen.png",
    },
    {
      id: 2,
      name: "Khakhra Masala Namkeen",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/KhakhraMasala.png",
    },
    {
      id: 3,
      name: "Masala Sev Murmura",
      category: "Agnipath Premium",
      price: "",
      image: "/image/MasalaSevMurmura.png",
    },
    {
      id: 4,
      name: "Aloo Sev Namkeen",
      category: "Agnipath Premium",
      price: "",
      image: "/image/AlooSev.png",
    },
    {
      id: 5,
      name: "Khakhra Methi Namkeen",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/KhakhraMethi.png",
    },
    {
      id: 6,
      name: " Papdi Gathiya ",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/PapdiGathiya.png",
    },
    {
      id: 7,
      name: "Shing Bhujia Namkeen",
      category: "Agnipath Premium",
      price: "",
      image: "/image/ShingBhujia (2).png",
    },
    {
      id: 8,
      name: "Katak Batak - Chilli Lemon",
      category: "Agnipath Premium",
      price: "",
      image: "/image/KatakBatakChilliLemon (2).png",
    },
    {
      id: 9,
      name: "Ratlami Sev",
      category: "Agnipath Premium",
      price: "",
      image: "/image/RatlamiSevr.png",
    },
    {
      id: 10,
      name: "Tikha Mitha Mix",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/TikhaMithaMix.png",
    },
    {
      id: 11,
      name: "Chana Jor Garam",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/ChanaJor Garam.png",
    },
    {
      id: 12,
      name: "Masala Shingr",
      category: "Agnipath Premium",
      price: "",
      image: "/image/MasalaShingr.png",
    },
     {
      id: 13,
      name: "Mung Dal Namkeen",
      category: "Agnipath Premium",
      price: "",
      image: "/image/MungDal.png",
    },
    {
      id: 14,
      name: "Chana  Dal",
      category: "Agnipath Premium",
      price: "",
      image: "/image/Chanadal.png",
    },
    {
      id: 15,
      name: "Tikha Mitha Mix",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/TikhaMithaMix.png",
    },
    {
      id: 16,
      name: "Classic Sev",
      category: "Agnipath Namkeen",
      price: "",
      image: "/image/ClassicSeve.png",
    },
    {
      id: 17,
      name: "Khatta Mitha Mix",
      category: "Agnipath Premium",
      price: "",
      image: "/image/KhattaMithaMix.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* 🔥 AGNIPATH BANNER */}
        <div className="w-full overflow-hidden">
  <img
    src="/image/Namkeentop.jpeg"
    alt="Balaji Banner"
    className="
      w-full
      h-[180px]        /* mobile */
      sm:h-[220px]
      md:h-[260px]
      lg:h-[320px]    /* desktop */
      xl:h-[360px]    /* large screen */
      object-cover
    "
  />
</div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Card */}
              <div className="bg-[radial-gradient(circle_at_center,rgba(200,163,87,0.12)_0%,transparent_70%)] p-4 rounded-xl border border-white/10 transition-all duration-300 hover:border-[#c8a357]/40">

                {/* Image */}
                <div className="relative h-56 flex items-center justify-center mb-3">
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

                {/* Info */}
                <div className="text-center">
                  <p className="text-[11px] text-[#c8a357] uppercase tracking-wider mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-sm font-semibold text-white leading-tight mb-1">
                    {product.name}
                  </h3>

                  {product.price && (
                    <p className="text-sm font-medium text-[#c8a357]">
                      {product.price}
                    </p>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AgnipathProductsGrid;
