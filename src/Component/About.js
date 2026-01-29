// import React from 'react';

// export default function SnackStoryHero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#010317] via-[#010317] to-[#010317] py-6 px-4 sm:py-10 md:py-16 lg:py-20 relative overflow-hidden">
      
//       {/* Google Fonts */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&family=Great+Vibes&display=swap');
          
//           .font-display { font-family: 'Cormorant Garamond', serif; }
//           .font-body { font-family: 'Montserrat', sans-serif; }
//           .font-script { font-family: 'Great Vibes', cursive; }
//         `}
//       </style>

//       {/* Background Decoration */}
//       {/* <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-44 sm:w-56 h-44 sm:h-56 bg-[#010317] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#010317] rounded-full blur-3xl"></div>
//       </div> */}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

//           {/* Left Content */}
//           <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8">
            
//             {/* Top Label */}
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="w-10 h-[1px] sm:w-12 bg-[#c8a357]"></div>
//               <p className="font-body text-[#c8a357] text-xs sm:text-sm tracking-widest uppercase font-medium">
//                 The Incredible Journey
//               </p>
//             </div>

//             {/* Main Heading */}
//             <h1 className="space-y-1 sm:space-y-2">
//               <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c8a357] font-bold block">
//                 How local-made
//               </span>
//               <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white block transform -rotate-2">
//                 snacks
//               </span>
//               <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c8a357] font-bold block">
//                 became a <span className="text-white italic">smash hit</span>
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="font-body text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-full sm:max-w-lg font-light">
//               From selling their farmland to hustling in a cinema to building a brand 
//               that rivals global giants. This is the story of <span className="text-[#c8a357] font-medium">India's blockbuster 
//               snack</span> and those who made it.
//             </p>

//             {/* Stats Row */}
//             <div className="flex flex-wrap gap-4 sm:gap-8 py-2">
//               <div>
//                 <p className="font-display text-2xl sm:text-3xl text-[#c8a357] font-bold">40+</p>
//                 <p className="font-body text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Years Legacy</p>
//               </div>
//               <div className="w-[1px] bg-gray-700 hidden sm:block"></div>
//               <div>
//                 <p className="font-display text-2xl sm:text-3xl text-[#c8a357] font-bold">₹4000</p>
//                 <p className="font-body text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Cr Revenue</p>
//               </div>
//               <div className="w-[1px] bg-gray-700 hidden sm:block"></div>
//               <div>
//                 <p className="font-display text-2xl sm:text-3xl text-[#c8a357] font-bold">#1</p>
//                 <p className="font-body text-xs sm:text-sm text-gray-500 uppercase tracking-wider">In Gujarat</p>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-3 sm:gap-4">
//               <button className="font-body bg-[#c8a357] hover:bg-[#d4b46a] text-[#010317] font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[#c8a357]/30 hover:shadow-2xl">
//                 Read The Story →
//               </button>
//               <button className="font-body border-2 border-[#c8a357] text-[#c8a357] hover:bg-[#c8a357] hover:text-[#010317] font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300">
//                 Watch Video
//               </button>
//             </div>

//           </div>

//           {/* Right Images */}
//           <div className="order-1 lg:order-2 relative h-60 sm:h-80 md:h-96 lg:h-[550px]">
            
//             {/* Top Left Image */}
//             <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 transform hover:scale-105 hover:rotate-2 transition-all duration-500 z-20">
//               <div className="relative group">
//                 <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg text-[#010317] group-hover:scale-110 transition-transform">
//                   +
//                 </div>
//                 <div className="bg-white p-2 sm:p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500">
//                   <div className="aspect-[4/3] rounded-lg overflow-hidden">
//                     <img 
//                       src="https://www.saveur.com/uploads/2019/03/18/AVTIFDEXIPLCEGHC4WXVI6JIMQ-1024x768.jpg?format=auto&optimize=high&width=1440" 
//                       alt="Traditional Indian snacks"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>
//                   <p className="font-body text-[8px] sm:text-[10px] mt-1 text-center text-gray-500 uppercase tracking-wider">
//                     1970s • The Beginning
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Center Floating Badge */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//               <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#c8a357] to-[#b8934a] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
//                 <span className="font-script text-xl sm:text-3xl text-[#010317]">Since</span>
//               </div>
//               <p className="font-display text-3xl sm:text-4xl text-[#c8a357] font-bold text-center mt-1 sm:mt-2">1974</p>
//             </div>

//             {/* Bottom Left Image */}
//             <div className="absolute bottom-0 left-2 sm:left-6 w-28 sm:w-36 md:w-44 lg:w-52 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 z-20">
//               <div className="relative group">
//                 <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg text-[#010317] group-hover:scale-110 transition-transform">
//                   +
//                 </div>
//                 <div className="bg-white p-2 sm:p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[3deg] group-hover:rotate-0 transition-transform duration-500">
//                   <div className="aspect-[4/3] rounded-lg overflow-hidden">
//                     <img 
//                       src="https://www.zwirnerequipment.com/wp-content/uploads/2020/09/bigstock-Closeup-Of-Salty-Snacks-In-Foo-310390096.jpg" 
//                       alt="Modern factory"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>
//                   <p className="font-body text-[8px] sm:text-[10px] mt-1 text-center text-gray-500 uppercase tracking-wider">
//                     Today • Modern Factory
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="absolute top-6 right-0 w-28 sm:w-36 md:w-44 lg:w-56 transform hover:scale-105 hover:rotate-1 transition-all duration-500 z-20">
//               <div className="relative group">
//                 <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg text-[#010317] group-hover:scale-110 transition-transform">
//                   +
//                 </div>
//                 <div className="bg-white p-2 sm:p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[4deg] group-hover:rotate-0 transition-transform duration-500">
//                   <div className="aspect-[3/4] rounded-lg overflow-hidden">
//                     <img 
//                       src="https://media.istockphoto.com/id/1156257589/photo/production-line-workers-at-a-biscuit-factory-in-africa.jpg?s=612x612&w=0&k=20&c=hF_CItMdXEbglSqnM9J6kCgLNmMNJOelvm3g5EmwWyI=" 
//                       alt="Factory workers"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>
//                   <p className="font-body text-[8px] sm:text-[10px] mt-1 text-center text-gray-500 uppercase tracking-wider">
//                     The Dream Team
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Badge */}
//             <div className="absolute bottom-20 sm:bottom-24 right-2 sm:right-4 bg-gradient-to-r from-[#c8a357] to-[#d4b46a] text-[#010317] px-3 sm:px-5 py-1 sm:py-2 rounded-full shadow-xl z-30">
//               <span className="font-body font-bold text-xs sm:text-sm">🇮🇳 Made in India</span>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


















// import React from 'react';

// export default function SnackStoryHero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#010317] via-[#010317] to-[#010317] py-6 px-4 sm:py-10 md:py-16 lg:py-20 relative overflow-hidden">
      
//       {/* Google Fonts */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&family=Great+Vibes&display=swap');
          
//           .font-display { font-family: 'Cormorant Garamond', serif; }
//           .font-body { font-family: 'Montserrat', sans-serif; }
//           .font-script { font-family: 'Great Vibes', cursive; }
//         `}
//       </style>

//       {/* Background Decoration */}
//       {/* <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-44 sm:w-56 h-44 sm:h-56 bg-[#010317] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#010317] rounded-full blur-3xl"></div>
//       </div> */}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

//           {/* Left Content */}
//           <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8">
            
//             {/* Top Label */}
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="w-10 h-[1px] sm:w-12 bg-[#c8a357]"></div>
             
//             </div>

//             {/* Main Heading */}
          

//             {/* Description */}
          

//             {/* Stats Row */}
           

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-3 sm:gap-4">
              
//               <button className="font-body border-2 border-[#c8a357] text-[#c8a357] hover:bg-[#c8a357] hover:text-[#010317] font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300">
//                 Read More
//               </button>
//               <button className="font-body border-2 border-[#c8a357] text-[#c8a357] hover:bg-[#c8a357] hover:text-[#010317] font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300">
//                 Watch Video
//               </button>
//             </div>

//           </div>

//           {/* Right Images */}
        

//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// export default function SnackStoryHero() {
//   return (
//     <div className="min-h-screen bg-[#010317] py-12 px-4 sm:py-16 lg:py-20 relative overflow-hidden flex items-center">
      
//       {/* Google Fonts Injection */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&family=Great+Vibes&display=swap');
          
//           .font-display { font-family: 'Cormorant Garamond', serif; }
//           .font-body { font-family: 'Montserrat', sans-serif; }
//           .font-script { font-family: 'Great Vibes', cursive; }
//         `}
//       </style>

//       {/* Ambient Background Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8a357]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* LEFT CONTENT (Text) */}
//           {/* Order: 2 on Mobile (below image), 1 on Desktop (left) */}
//           <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            
//             {/* Top Label */}
//             <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up">
//               <span className="font-script text-[#c8a357] text-2xl sm:text-3xl">The Origin</span>
//               <div className="w-12 h-[1px] bg-[#c8a357]/50"></div>
//               <span className="font-body text-[#c8a357] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
//                 Est. 2024
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
//               Crafting the <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a357] via-[#eecf88] to-[#c8a357]">
//                 Perfect Crunch
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="font-body text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
//               From the heart of India to your taste buds, Agnipath Wafers brings you a symphony of spices and tradition. We don't just make snacks; we engineer moments of joy, one crispy bite at a time.
//             </p>

//             {/* Stats Row */}
//             <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10 border-b border-white/10 max-w-md mx-auto lg:mx-0">
//               <div className="text-center lg:text-left">
//                 <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">100%</h4>
//                 <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">Natural</p>
//               </div>
//               <div className="text-center lg:text-left border-l border-white/10 lg:pl-6">
//                 <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">50+</h4>
//                 <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">Flavors</p>
//               </div>
//               <div className="text-center lg:text-left border-l border-white/10 lg:pl-6">
//                 <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">1M+</h4>
//                 <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">Happy Eaters</p>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//               <button className="font-body bg-[#c8a357] text-[#010317] hover:bg-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-none transform skew-x-[-10deg] transition-all duration-300 hover:skew-x-0 group">
//                 <span className="block skew-x-[10deg] group-hover:skew-x-0">Read Our Story</span>
//               </button>
              
//               <button className="font-body border border-[#c8a357]/50 text-[#c8a357] hover:border-[#c8a357] hover:bg-[#c8a357]/10 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-none transform skew-x-[-10deg] transition-all duration-300 group">
//                 <span className="flex items-center gap-2 skew-x-[10deg]">
//                   <span>Watch Video</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT CONTENT (Images) */}
//           {/* Order: 1 on Mobile (top), 2 on Desktop (right) */}
//           <div className="order-1 lg:order-2 relative">
//             <div className="relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] lg:aspect-square">
              
//               {/* Decorative Frame Border */}
//               <div className="absolute inset-0 border-2 border-[#c8a357]/30 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 z-0"></div>
              
//               {/* Main Image */}
//               <div className="absolute inset-0 bg-gray-800 overflow-hidden shadow-2xl z-10">
//                 <img 
//                   src="https://www.saveur.com/uploads/2019/03/18/AVTIFDEXIPLCEGHC4WXVI6JIMQ-1024x768.jpg?format=auto&optimize=high&width=1440" 
//                   alt="Premium Potato Chips" 
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-90"
//                 />
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#010317] via-transparent to-transparent opacity-60"></div>
//               </div>

//               {/* Floating Element (Badge or Small Image) */}
//               <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 bg-[#0a0e17] p-4 sm:p-5 border border-[#c8a357]/30 shadow-xl max-w-[160px] sm:max-w-[200px]">
//                 <p className="font-display text-[#c8a357] text-xl sm:text-2xl font-bold italic leading-none">
//                   "Simply <br/> Irresistible"
//                 </p>
//                 <div className="flex text-yellow-500 mt-2 text-xs sm:text-sm">
//                   ★★★★★
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';

export default function SnackStoryHero() {
  return (
    <div className="min-h-screen bg-[#010317] py-12 px-4 sm:py-16 lg:py-20 relative overflow-hidden flex items-center">
      
      {/* Google Fonts Injection */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&family=Great+Vibes&display=swap');
          
          .font-display { font-family: 'Cormorant Garamond', serif; }
          .font-body { font-family: 'Montserrat', sans-serif; }
          .font-script { font-family: 'Great Vibes', cursive; }
        `}
      </style>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8a357]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Label */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="font-script text-[#c8a357] text-2xl sm:text-3xl">
                The Taste Journey
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]/50"></div>
              <span className="font-body text-[#c8a357] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                Est. 2024
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
            How local-made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a357] via-[#eecf88] to-[#c8a357]">
           snacks becam a smash hit
              </span>
            </h1>

            {/* Description */}
            <p className="font-body text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
             From selling their farmland to hustling in a cinema to <b>building a brand that rivals global giants</b> This is the story of India’s blockbuster snack and those who made it.
            
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10 border-b border-white/10 max-w-md mx-auto lg:mx-0">
              <div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">100%</h4>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">
                  Quality Ingredients
                </p>
              </div>
              <div className="border-l border-white/10 lg:pl-6">
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">30+</h4>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">
                  Varieties
                </p>
              </div>
              <div className="border-l border-white/10 lg:pl-6">
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#c8a357]">1M+</h4>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider mt-1">
                  Happy Customers
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="font-body bg-[#c8a357] text-[#010317] hover:bg-white font-bold px-8 py-3.5 transition">
                Explore Our Products
              </button>
              {/* <button className="font-body border border-[#c8a357]/50 text-[#c8a357] hover:bg-[#c8a357]/10 font-semibold px-8 py-3.5 transition">
                Watch Factory Story
              </button> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-800 overflow-hidden shadow-2xl">
                <img 
                  src="https://www.saveur.com/uploads/2019/03/18/AVTIFDEXIPLCEGHC4WXVI6JIMQ-1024x768.jpg"
                  alt="Agnipath Namkeen and Chips"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010317] opacity-60"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0a0e17] p-4 border border-[#c8a357]/30">
                <p className="font-display text-[#c8a357] text-xl font-bold italic">
                  “Desi Taste, <br /> Premium Crunch”
                </p>
                <div className="text-yellow-500 mt-1">★★★★★</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
