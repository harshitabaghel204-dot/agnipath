import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const AgnipathProductsGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Chataka Pataka Masala Masti",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/ChatakaPatakaMasalaMasti.png",
    },
    {
      id: 2,
      name: "Wheelos Masala",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/WheelosMasala.png",
    },
    {
      id: 3,
      name: "Amaize Cheese Chilli Nachos",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/AmaizeCheeseChilliNachos.png",
    },
    {
      id: 4,
      name: "Gippi opRings CheeseC hilli",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/GippiPopRingsCheeseChilli.png",
    },
    {
      id: 5,
      name: "Gippi PopRings Masala",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/GippiPopRingsMasala.png",
    },
    {
      id: 6,
      name: "Amaize Flamin HotNachos ",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/AmaizeFlaminHotNachos.png",
    },
    {
      id: 7,
      name: "Chataka Pataka Tangy omato",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/ChatakaPatakaTangyTomato.png",
    },
    {
      id: 8,
      name: "Yumstix",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/Yumstix.png",
    },
   
  ];

  return (
    <div className="min-h-screen bg-[#010317] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* 🔥 AGNIPATH BANNER */}
        <div className="w-full overflow-hidden">
  <img
    src="/image/topsnaks.png"
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
