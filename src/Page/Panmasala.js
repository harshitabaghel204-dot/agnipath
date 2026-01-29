// import { useState } from "react";
// import Footer from "../Component/Footer";
// import Navbar from "../Component/Navbar";
// export default function App() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   const products = [
//     {
//       id: 1,
//       name: "Garma Masala",
//       category: "Agnipath Masala",
//       price: "",
//       image: "/image/masalagarmaa.png",
//     },
//     {
//       id: 2,
//       name: "Chaat Masala",
//       category: "Agnipath Masala",
//       price: "",
//       image: "/image/chaatmasala.png",
//     },
   
   
//   ];

//   return (
    
//      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//           {/* Navbar */}
//           <Navbar />
    
//           {/* Hero Banner */}
//           <div className="relative w-full overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 z-10"></div>
//             <img
//               src="/image/Masalatop.png"
//               alt="Agnipath Western Snacks Banner"
//               className="w-full h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] xl:h-[420px] object-cover"
//             />
//           </div>
    
//           {/* Section Title */}
//           <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
//             <div className="text-center mb-12 md:mb-16">
//               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
//                 Our <span className="bg-gradient-to-r from-[#c8a357] via-yellow-500 to-[#c8a357] bg-clip-text text-transparent">PAN Masala Collection</span>
//               </h1>
//               <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//                Handcrafted Masala with authentic flavors and premium quality ingredients
//               </p>
//             </div>
    
//             {/* Products Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group relative"
//                   onMouseEnter={() => setHoveredProduct(product.id)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Product Card */}
//                   <div className="relative h-full overflow-hidden rounded-2xl border border-[#c8a357]/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:border-[#c8a357]/50 hover:shadow-2xl hover:shadow-[#c8a357]/20 group-hover:bg-white/10">
                    
//                     {/* Glow Effect */}
//                     <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#c8a357]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
//                     {/* Image Container */}
//                     <div className="relative h-56 md:h-60 flex items-center justify-center mb-6 overflow-hidden rounded-xl">
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#c8a357]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className={`h-44 md:h-48 object-contain transition-all duration-700 ease-out filter drop-shadow-2xl ${
//                           hoveredProduct === product.id
//                             ? "scale-125 -translate-y-8 rotate-3"
//                             : "scale-100 translate-y-0 rotate-0"
//                         }`}
//                       />
//                     </div>
    
//                     {/* Product Info */}
//                     <div className="relative z-10 text-center space-y-2">
//                       <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#c8a357]/20 to-[#c8a357]/10 rounded-full">
//                         <p className="text-[10px] md:text-xs font-semibold text-[#c8a357] uppercase tracking-widest">
//                           {product.category}
//                         </p>
//                       </span>
    
//                       <h3 className="text-sm md:text-base font-bold text-white leading-tight min-h-[40px] flex items-center justify-center px-2">
//                         {product.name}
//                       </h3>
    
//                       {product.price && (
//                         <p className="text-lg font-bold bg-gradient-to-r from-[#c8a357] to-yellow-400 bg-clip-text text-transparent">
//                           {product.price}
//                         </p>
//                       )}
    
//                       {/* Hover Indicator */}
//                       <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                         <div className="h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-[#c8a357] to-transparent rounded-full"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
    
//           {/* Footer */}
//           <Footer />
//         </div>
//   );
// }


import { useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function App() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Agnipath Pack",
      category: "Agnipath Masala",
      price: "Pure & Authentic",
      image: "/image/wafar.png",
    },
    {
      id: 2,
      name: "Agnipath Can",
      category: "Agnipath Masala",
      price: "Rich Aroma",
      image: "/image/BOXANGNIPATH.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-['Aachi',sans-serif] text-white selection:bg-[#c8a357] selection:text-black">
      <Navbar />

      {/* Hero Banner - Mobile Height Improved */}
      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/30 z-10"></div>
        <img
          src="/image/masalapan.png"
          alt="Banner"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-20">
        
        {/* Responsive Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Aachi',sans-serif] tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-[#c8a357] via-[#f1d28c] to-[#c8a357] bg-clip-text text-transparent">Exclusive Products</span>
          </h1>
          <div className="mt-4 w-16 h-1 bg-[#c8a357] mx-auto rounded-full"></div>
        </div>

        {/* Products Grid - Optimized for Mobile (Stacked on mobile, 2 columns on tablets+) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Card */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e] p-6 sm:p-10 transition-all duration-500 hover:border-[#c8a357]/40 shadow-xl group-hover:shadow-[#c8a357]/10">
                  
                  {/* Premium Glow (Visible on Hover) */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c8a357]/10 blur-[80px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>

                  {/* Image Container - Responsive sizing */}
                  <div className="relative h-56 sm:h-72 flex items-center justify-center mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`h-48 sm:h-60 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-all duration-700 ease-in-out ${
                        hoveredProduct === product.id
                          ? "scale-110 -translate-y-4 rotate-2"
                          : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="relative z-10 text-center">
                    <span className="inline-block px-4 py-1 border border-[#c8a357]/30 rounded-full mb-3">
                      <p className="text-[10px] sm:text-xs font-bold text-[#c8a357] uppercase tracking-widest">
                        {product.category}
                      </p>
                    </span>

                    <h3 className="text-xl sm:text-2xl font-['Aachi',sans-serif] font-bold text-white mb-2 group-hover:text-[#c8a357] transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description/Price Tag */}
                    <p className="text-sm text-gray-400 font-light mb-6">
                      {product.price || "Premium Selection"}
                    </p>

                    {/* Mobile Button - More clickable area */}
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}