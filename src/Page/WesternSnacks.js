// import React, { useState } from "react";
// import Navbar from "../Component/Navbar";
// import Footer from "../Component/Footer";

// const AgnipathProductsGrid = () => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   const products = [
//     {
//       id: 1,
//       name: "Chataka Pataka Masala Masti",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/ChatakaPatakaMasalaMasti.png",
//     },
//     {
//       id: 2,
//       name: "Wheelos Masala",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/WheelosMasala.png",
//     },
//     {
//       id: 3,
//       name: "Amaize Cheese Chilli Nachos",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/AmaizeCheeseChilliNachos.png",
//     },
//     {
//       id: 4,
//       name: "Gippi opRings CheeseC hilli",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/GippiPopRingsCheeseChilli.png",
//     },
//     {
//       id: 5,
//       name: "Gippi PopRings Masala",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/GippiPopRingsMasala.png",
//     },
//     {
//       id: 6,
//       name: "Amaize Flamin HotNachos ",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/AmaizeFlaminHotNachos.png",
//     },
//     {
//       id: 7,
//       name: "Chataka Pataka Tangy omato",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/ChatakaPatakaTangyTomato.png",
//     },
//     {
//       id: 8,
//       name: "Yumstix",
//       category: "Agnipath Western Snacks",
//       price: "",
//       image: "/image/Yumstix.png",
//     },
   
//   ];

//   return (
//     <div className="min-h-screen bg-[#010317] font-sans">
//       {/* Navbar */}
//       <Navbar />

//       {/* 🔥 AGNIPATH BANNER */}
//         <div className="w-full overflow-hidden">
//   <img
//     src="/image/topsnaks.png"
//     alt="Balaji Banner"
//     className="
//       w-full
//       h-[180px]        /* mobile */
//       sm:h-[220px]
//       md:h-[260px]
//       lg:h-[320px]    /* desktop */
//       xl:h-[360px]    /* large screen */
//       object-cover
//     "
//   />
// </div>

//       {/* PRODUCTS GRID */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="relative overflow-hidden group cursor-pointer"
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               {/* Card */}
//               <div className="bg-[radial-gradient(circle_at_center,rgba(200,163,87,0.12)_0%,transparent_70%)] p-4 rounded-xl border border-white/10 transition-all duration-300 hover:border-[#c8a357]/40">

//                 {/* Image */}
//                 <div className="relative h-56 flex items-center justify-center mb-3">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className={`h-44 object-contain transition-all duration-500 ease-out ${
//                       hoveredProduct === product.id
//                         ? "scale-110 -translate-y-6"
//                         : "scale-100 translate-y-0"
//                     }`}
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="text-center">
//                   <p className="text-[11px] text-[#c8a357] uppercase tracking-wider mb-1">
//                     {product.category}
//                   </p>

//                   <h3 className="text-sm font-semibold text-white leading-tight mb-1">
//                     {product.name}
//                   </h3>

//                   {product.price && (
//                     <p className="text-sm font-medium text-[#c8a357]">
//                       {product.price}
//                     </p>
//                   )}
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AgnipathProductsGrid;
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
      name: "Gippi PopRings Cheese Chilli",
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
      name: "Amaize Flamin Hot Nachos",
      category: "Agnipath Western Snacks",
      price: "",
      image: "/image/AmaizeFlaminHotNachos.png",
    },
    {
      id: 7,
      name: "Chataka Pataka Tangy Tomato",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 z-10"></div>
        <img
          src="/image/topsnaks.png"
          alt="Agnipath Western Snacks Banner"
          className="w-full h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] xl:h-[420px] object-cover"
        />
      </div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Western <span className="bg-gradient-to-r from-[#c8a357] via-yellow-500 to-[#c8a357] bg-clip-text text-transparent">Snacks Collection</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience international flavors with our range of premium western-style snacks, perfectly seasoned and irresistibly crunchy
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#c8a357]/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:border-[#c8a357]/50 hover:shadow-2xl hover:shadow-[#c8a357]/20 group-hover:bg-white/10">
                
                {/* Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#c8a357]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Image Container */}
                <div className="relative h-56 md:h-60 flex items-center justify-center mb-6 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a357]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-44 md:h-48 object-contain transition-all duration-700 ease-out filter drop-shadow-2xl ${
                      hoveredProduct === product.id
                        ? "scale-125 -translate-y-8 rotate-3"
                        : "scale-100 translate-y-0 rotate-0"
                    }`}
                  />
                </div>

                {/* Product Info */}
                <div className="relative z-10 text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#c8a357]/20 to-[#c8a357]/10 rounded-full">
                    <p className="text-[10px] md:text-xs font-semibold text-[#c8a357] uppercase tracking-widest">
                      {product.category}
                    </p>
                  </span>

                  <h3 className="text-sm md:text-base font-bold text-white leading-tight min-h-[40px] flex items-center justify-center px-2">
                    {product.name}
                  </h3>

                  {product.price && (
                    <p className="text-lg font-bold bg-gradient-to-r from-[#c8a357] to-yellow-400 bg-clip-text text-transparent">
                      {product.price}
                    </p>
                  )}

                  {/* Hover Indicator */}
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-[#c8a357] to-transparent rounded-full"></div>
                  </div>
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