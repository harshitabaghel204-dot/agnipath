// import React, { useState, useEffect, useRef } from "react";

// const GameSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);

//   /* 🔥 AGNIPATH PRODUCTS DATA */
//   const products = [
//     {
//       id: 1,
//       title: "Agnipath Wafers",
//       description:
//         "",
//       image: "/image/wafar.png",
//     },
//     {
//       id: 2,
//       title: "Agnipath Combo Box",
//       description:
//         "",
//       image: "/image/BOXANGNIPATH.png",
//     },
//     // {
//     //   id: 3,
//     //   title: "Agnipath Combo Box",
//     //   description:
//     //     "",
//     //   image: "/image/BOXANGNIPATH.png",
//     // },
//     // {
//     //   id: 4,
//     //   title: "Agnipath Special Namkeen",
//     //   description:
//     //     "",
//     //   image: "/image/ClassicSeve.png",
//     // },
//     // {
//     //   id: 5,
//     //   title: "Agnipath Special Snacks",
//     //   description:
//     //     "",
//     //   image: "/image/ChilliTadka.png",
//     // },
//     // {
//     //   id: 6,
//     //   title: "Agnipath Western Snacks",
//     //   description:
//     //     "",
//     //   image: "/image/WheelosMasala.png",
//     // },
//     // {
//     //   id: 7,
//     //   title: "Agnipath Noodles",
//     //   description:
//     //     "",
//     //   image: "/image/noodles.png",
//     // },
//   ];

//   /* AUTO SLIDE */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % products.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   /* CENTER ACTIVE CARD */
//   useEffect(() => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const card = container.children[activeIndex];
//       if (card) {
//         const scrollLeft =
//           card.offsetLeft -
//           container.offsetWidth / 2 +
//           card.offsetWidth / 2;
//         container.scrollTo({ left: scrollLeft, behavior: "smooth" });
//       }
//     }
//   }, [activeIndex]);

//   return (
//     <div className="bg-[#010317] py-10 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
//        Our Exclusive Products
//       </h2>

//       <div
//         ref={containerRef}
//         className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
//       >
//         <style>{`
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//           .scrollbar-hide { scrollbar-width: none; }
//         `}</style>

//         {products.map((product, index) => {
//           const isActive = index === activeIndex;

//           return (
//             <div
//               key={product.id}
//               className={`
//                 snap-center flex-shrink-0 rounded-2xl overflow-hidden relative
//                 transition-all duration-500
//                 ${
//                   isActive
//                     ? "w-[260px] sm:w-[420px] md:w-[520px]"
//                     : "w-[200px] sm:w-[300px] opacity-80"
//                 }
//               `}
//               style={{
//                 height: "260px",
//                 backgroundImage: `url(${product.image})`,
//                 backgroundRepeat: "no-repeat",

//                 /* ✅ IMAGE CUT FIX */
//                 backgroundSize: "contain",
//                 backgroundPosition: "top center",
//               }}
//             >
//               {/* Desktop overlay */}
//               <div className="hidden sm:block absolute inset-0 bg-black/10"></div>

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

//               {/* TEXT */}
//               <div className="absolute bottom-0 p-4 text-white">
//                 <h3 className="text-lg sm:text-2xl font-bold">
//                   {product.title}
//                 </h3>

//                 {isActive && (
//                   <p className="text-sm sm:text-base text-gray-200 mt-2">
//                     {product.description}
//                   </p>
//                 )}
//               </div>

//               {/* ACTIVE TAG */}
//               {isActive && (
//                 <span className="absolute top-3 right-3 bg-[#c8a357] text-black text-xs px-3 py-1 rounded-full font-bold">
//                   AGNIPATH
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* DOTS */}
//       <div className="flex justify-center gap-2 mt-6">
//         {products.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`w-3 h-3 rounded-full transition ${
//               activeIndex === index
//                 ? "bg-[#c8a357] scale-125"
//                 : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameSlider;


// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);

//   const products = [
//     {
//       id: 1,
//       name: "Agnipath Pan Masala",
//       category: "Agnipath ",
//       image: "/image/wafar.png",
//     },
//     {
//       id: 2,
//       name: "Agnipath Pan Masala",
//       category: "Agnipath ",
//       image: "/image/BOXANGNIPATH.png",
//     },
//     {
//       id: 3,
//       name: "Agnipath Pan Masala",
//       category: "Agnipath",
//       image: "/image/wafar.png",
//     },
//   ];

//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Auto slide for mobile
//   useEffect(() => {
//     if (!isMobile) return;
    
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % products.length);
//     }, 3500);
    
//     return () => clearInterval(interval);
//   }, [isMobile, products.length]);

//   // Scroll mobile container when activeIndex changes
//   useEffect(() => {
//     if (!isMobile || !containerRef.current) return;
    
//     const container = containerRef.current;
//     const card = container.children[activeIndex];
    
//     if (card) {
//       const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
//       container.scrollTo({ left: scrollLeft, behavior: "smooth" });
//     }
//   }, [activeIndex, isMobile]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 sm:py-12 md:py-16">
      
//       {/* Section Title */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 md:mb-16">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
//           Our  <span className="bg-gradient-to-r from-[#c8a357] via-yellow-500 to-[#c8a357] bg-clip-text text-transparent">Exclusive Products</span>
//         </h1>
//         <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-[#c8a357] mx-auto rounded-full"></div>
//         <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 max-w-xl mx-auto px-4">
//           Authentic flavors crafted with premium ingredients
//         </p>
//       </div>

//       {/* MOBILE VIEW: Auto-Slider */}
//       <div className="lg:hidden relative">
//         <div
//           ref={containerRef}
//           className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 sm:pb-10 px-4 sm:px-6"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style>{`
//             .scrollbar-hide::-webkit-scrollbar { display: none; }
//           `}</style>
          
//           {products.map((product, index) => {
//             const isActive = index === activeIndex;
//             return (
//               <div
//                 key={product.id}
//                 className={`snap-center flex-shrink-0 transition-all duration-700 ease-in-out ${
//                   isActive 
//                     ? "w-[260px] xs:w-[280px] sm:w-[320px] md:w-[360px] scale-100 sm:scale-105 opacity-100" 
//                     : "w-[220px] xs:w-[240px] sm:w-[280px] md:w-[320px] scale-90 sm:scale-90 opacity-50"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <ProductCard product={product} isActive={isActive} isMobile={true} />
//               </div>
//             );
//           })}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 px-4">
//           {products.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
//                 activeIndex === index 
//                   ? "bg-[#c8a357] w-6 sm:w-8" 
//                   : "bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500"
//               }`}
//               aria-label={`Go to product ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Swipe Hint */}
//         <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-gray-500 text-xs sm:text-sm">
//           <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
//           </svg>
//           <span>Swipe to explore</span>
//           <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//           </svg>
//         </div>
//       </div>

//       {/* DESKTOP VIEW: Centered Grid */}
//       <div className="hidden lg:flex flex-wrap justify-center gap-8 xl:gap-10 max-w-7xl mx-auto px-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="w-[340px] xl:w-[360px] transform transition-all duration-500 hover:-translate-y-4"
//             onMouseEnter={() => setHoveredProduct(product.id)}
//             onMouseLeave={() => setHoveredProduct(null)}
//           >
//             <ProductCard 
//               product={product} 
//               isActive={hoveredProduct === product.id} 
//               isDesktop={true} 
//             />
//           </div>
//         ))}
//       </div>

//       {/* Desktop Navigation Hint */}
//       <div className="hidden lg:block text-center mt-12">
//         <p className="text-gray-500 text-sm">
//           Hover over cards to see details
//         </p>
//       </div>
//     </div>
//   );
// }

// // Reusable Card Component
// function ProductCard({ product, isActive, isDesktop = false, isMobile = false }) {
//   return (
//     <div className={`relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-500 ${
//       isMobile 
//         ? "p-4 sm:p-6" 
//         : "p-6 lg:p-8"
//     } ${
//       isActive 
//         ? "border-[#c8a357] bg-white/10 shadow-2xl shadow-[#c8a357]/20" 
//         : "border-[#c8a357]/20 bg-white/5"
//     }`}>
      
//       {/* Glow Effect */}
//       <div className={`absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-[#c8a357]/20 rounded-full blur-3xl transition-opacity duration-700 ${
//         isActive ? "opacity-100" : "opacity-0"
//       }`}></div>

//       {/* Image Container */}
//       <div className={`relative flex items-center justify-center mb-4 sm:mb-6 ${
//         isMobile ? "h-44 sm:h-52 md:h-60" : "h-64 lg:h-72"
//       }`}>
//         <div className={`absolute inset-0 bg-gradient-to-br from-[#c8a357]/5 to-transparent rounded-xl transition-opacity duration-500 ${
//           isActive ? "opacity-100" : "opacity-0"
//         }`}></div>
//         <img
//           src={product.image}
//           alt={product.name}
//           className={`object-contain transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] ${
//             isMobile 
//               ? "h-36 sm:h-44 md:h-48" 
//               : "h-48 lg:h-56"
//           } ${
//             isActive 
//               ? "scale-110 rotate-3" 
//               : "scale-100 rotate-0"
//           }`}
//         />
//       </div>

//       {/* Text Content */}
//       <div className="text-center relative z-10 space-y-2 sm:space-y-3">
//         <span className={`inline-block text-[9px] sm:text-[10px] font-bold text-[#c8a357] uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 bg-[#c8a357]/10 rounded-full ${
//           isMobile ? "text-[9px]" : "text-[10px]"
//         }`}>
//           {product.category}
//         </span>
        
//         <h3 className={`font-bold text-white leading-tight flex items-center justify-center px-2 ${
//           isMobile 
//             ? "text-sm sm:text-base md:text-lg min-h-[40px] sm:min-h-[44px]" 
//             : "text-lg lg:text-xl min-h-[52px] lg:min-h-[56px]"
//         }`}>
//           {product.name}
//         </h3>
        
//         {product.price && (
//           <p className={`font-black bg-gradient-to-r from-[#c8a357] to-yellow-400 bg-clip-text text-transparent ${
//             isMobile ? "text-lg sm:text-xl" : "text-xl lg:text-2xl"
//           }`}>
//             {product.price}
//           </p>
//         )}
        
//         {/* Animated line indicator */}
//         <div className={`h-0.5 sm:h-1 bg-[#c8a357] mx-auto rounded-full transition-all duration-500 ${
//           isActive ? "w-12 sm:w-16 opacity-100" : "w-0 opacity-0"
//         }`}></div>
//       </div>

//       {/* Corner Decorations (Active Only) */}
//       {isActive && (
//         <>
//           <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-t-2 border-l-2 border-[#c8a357] rounded-tl-2xl opacity-60"></div>
//           <div className="absolute bottom-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-b-2 border-r-2 border-[#c8a357] rounded-br-2xl opacity-60"></div>
//         </>
//       )}
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);

//   const products = [
//     { id: 1, name: "Agnipath Pan Masala", category: "Agnipath", image: "/image/wafar.png" },
//     { id: 2, name: "Agnipath Pan Masala", category: "Agnipath", image: "/image/BOXANGNIPATH.png" },
//     { id: 3, name: "Agnipath Pan Masala", category: "Agnipath", image: "/image/wafar.png" },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Auto slide logic
//   useEffect(() => {
//     if (!isMobile) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % products.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [isMobile, products.length]);

//   // Scroll to active card logic
//   useEffect(() => {
//     if (!isMobile || !containerRef.current) return;
//     const container = containerRef.current;
//     const card = container.children[activeIndex];
//     if (card) {
//       // Improved scrolling for 1-card view
//       container.scrollTo({
//         left: card.offsetLeft,
//         behavior: "smooth",
//       });
//     }
//   }, [activeIndex, isMobile]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8">
//       {/* Section Title */}
//       <div className="max-w-7xl mx-auto px-4 text-center mb-12">
//         <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
//           Our <span className="bg-gradient-to-r from-[#c8a357] via-yellow-500 to-[#c8a357] bg-clip-text text-transparent">Exclusive Products</span>
//         </h1>
//         <div className="h-1 w-24 bg-[#c8a357] mx-auto rounded-full"></div>
//       </div>

//       {/* MOBILE VIEW: 1 Card at a time Auto-Slider */}
//       <div className="lg:hidden relative overflow-hidden">
//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               // Changed: w-full makes sure only 1 card is visible. px-4 adds side spacing.
//               className="w-full flex-shrink-0 snap-center px-6 transition-all duration-500"
//               onClick={() => setActiveIndex(index)}
//             >
//               <ProductCard 
//                 product={product} 
//                 isActive={index === activeIndex} 
//                 isMobile={true} 
//               />
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-8">
//           {products.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 activeIndex === index ? "bg-[#c8a357] w-8" : "bg-gray-600 w-2"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* DESKTOP VIEW */}
//       <div className="hidden lg:flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="w-[360px] transform transition-all duration-500 hover:-translate-y-4"
//             onMouseEnter={() => setHoveredProduct(product.id)}
//             onMouseLeave={() => setHoveredProduct(null)}
//           >
//             <ProductCard 
//               product={product} 
//               isActive={hoveredProduct === product.id} 
//               isDesktop={true} 
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProductCard({ product, isActive, isMobile }) {
//   return (
//     <div className={`relative h-full overflow-hidden rounded-3xl border transition-all duration-700 ${
//       isActive 
//         ? "border-[#c8a357] bg-white/10 shadow-2xl shadow-[#c8a357]/20 scale-100" 
//         : "border-[#c8a357]/10 bg-white/5 scale-95 opacity-60"
//     } p-8`}>
      
//       {/* Image */}
//       <div className={`relative flex items-center justify-center mb-6 ${isMobile ? 'h-56' : 'h-72'}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className={`object-contain transition-all duration-700 ${
//             isActive ? "scale-110 rotate-3" : "scale-100"
//           } h-full`}
//         />
//       </div>

//       {/* Content */}
//       <div className="text-center relative z-10">
//         <span className="inline-block text-[10px] font-bold text-[#c8a357] uppercase tracking-widest px-3 py-1 bg-[#c8a357]/10 rounded-full mb-3">
//           {product.category}
//         </span>
//         <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
//         <div className={`h-1 bg-[#c8a357] mx-auto rounded-full transition-all duration-500 ${
//           isActive ? "w-16" : "w-0"
//         }`}></div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const products = [
    { id: 1, name: "Agnipath Pan Masala Pack", category: "Agnipath", image: "/image/wafar.png" },
    { id: 2, name: "Agnipath Pan Masala Can", category: "Agnipath", image: "/image/BOXANGNIPATH.png" },
    { id: 3, name: "Agnipath Pan Masala Pack", category: "Agnipath", image: "/image/wafar.png" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide logic
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isMobile, products.length]);

  // Scroll to active card logic
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
    const container = containerRef.current;
    const card = container.children[activeIndex];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-3 lg:py-8 lg:min-h-screen">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-[#c8a357] via-yellow-500 to-[#c8a357] bg-clip-text text-transparent">Exclusive Products</span>
        </h1>
        <div className="h-1 w-24 bg-[#c8a357] mx-auto rounded-full"></div>
      </div>

      {/* MOBILE VIEW: 1 Card at a time Auto-Slider */}
      <div className="lg:hidden relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0 snap-center px-6 transition-all duration-500"
              onClick={() => setActiveIndex(index)}
            >
              <ProductCard 
                product={product} 
                isActive={index === activeIndex} 
                isMobile={true} 
              />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#c8a357] w-8" : "bg-gray-600 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[360px]"
          >
            <ProductCard 
              product={product} 
              isActive={true}
              isDesktop={true} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, isActive, isMobile }) {
  return (
    <div className={`relative h-full overflow-hidden rounded-3xl border transition-all duration-700 ${
      isActive 
        ? "border-[#c8a357] bg-white/10 shadow-2xl shadow-[#c8a357]/20 scale-100" 
        : "border-[#c8a357]/10 bg-white/5 scale-95 opacity-60"
    } p-8`}>
      
      {/* Image */}
      <div className={`relative flex items-center justify-center mb-6 ${isMobile ? 'h-64' : 'h-80'}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`max-w-full max-h-full object-contain transition-all duration-700 ${
            isActive ? "scale-100" : "scale-90"
          }`}
        />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <span className="inline-block text-[10px] font-bold text-[#c8a357] uppercase tracking-widest px-3 py-1 bg-[#c8a357]/10 rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
        <div className={`h-1 bg-[#c8a357] mx-auto rounded-full transition-all duration-500 ${
          isActive ? "w-16" : "w-0"
        }`}></div>
      </div>
    </div>
  );
}