// import React, { useState } from "react";

// export default function BecomeDistributor() {
//   // const [imageUrl, setImageUrl] = useState("image/wafar.png");
//   const imageUrl = 'image/wafar.png'

//   const benefits = [
//     "High Profit Margins",
//     "Pan-India Network Support",
//     "Dedicated Sales Team",
//     "Marketing Collaterals Provided",
//   ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010317] to-[#0a0e17] py-16 sm:py-20 px-4 overflow-hidden relative">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-500/10 rounded-full blur-[80px]"></div>
//         <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>
//       </div>

//       <div className="max-w-6xl w-full mx-auto relative z-10">
//         {/* Main Card */}
//         <div className="relative bg-[#0a1223]/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#f4c768]/30 max-w-5xl mx-auto transform transition-all duration-700 hover:shadow-[#f4c768]/20 hover:shadow-2xl group">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#f4c768]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl"></div>

//           <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-6 sm:p-10 lg:p-14">
//             {/* Left Text Content */}
//             <div className="space-y-6 sm:space-y-8 z-10">
//               <div className="inline-block px-3 sm:px-4 py-1.5 bg-yellow-500/10 border border-[#f4c768]/30 rounded-full text-[#f4c768] text-xs sm:text-sm font-medium mb-2 sm:mb-4">
//                 Partnership Opportunity
//               </div>

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
//                 Become our <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] to-yellow-400">
//                   Distributor
//                 </span>
//               </h2>

//               <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md font-openSans">
//                 Join the Agnipath Wafers family and become a key player in spreading India's favourite crunchy snacks across the nation!
//               </p>

//               {/* Benefits */}
//               <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
//                 {benefits.map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-2 sm:gap-3">
//                     <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-gray-200 text-sm sm:text-base font-openSans">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <button className="group bg-gradient-to-r from-[#f4c768] to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-[#0a0e17] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-[#f4c768]/30 hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 sm:gap-3 font-poppins">
//                 Connect With Us
//                 <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
//               </button>
//             </div>

//             {/* Right Product Display */}
//             <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
//               <div className="relative w-48 sm:w-56 md:w-60 lg:w-64 h-64 sm:h-72 md:h-80 lg:h-96 perspective-[1500px]">
//                 <div className="rotating-packet w-full h-full relative transform-style-preserve-3d animate-rotate">
//                   <div className="packet-side front rounded-2xl overflow-hidden border-2 border-[#f4c768]/30 shadow-xl">
//                     <img
//                       src={imageUrl}
//                       alt="Balaji Wafers Product"
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=550&fit=crop"; }}
//                     />
//                   </div>
//                   <div className="packet-side back rounded-2xl overflow-hidden border-2 border-[#f4c768]/30 shadow-xl">
//                     <img
//                       src={imageUrl}
//                       alt="Product Back"
//                       className="w-full h-full object-cover"
//                       onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=550&fit=crop"; }}
//                     />
//                   </div>
//                 </div>

//                 {/* Glow */}
//                 <div className="absolute inset-0 bg-[#f4c768]/5 blur-2xl rounded-full -z-10 animate-pulse-slow"></div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute inset-0 border-2 border-[#f4c768]/20 rounded-3xl pointer-events-none"></div>
//         </div>
//       </div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

//         /* Glow Pulse */
//         @keyframes pulse-slow { 0%,100%{ opacity:0.3; } 50%{ opacity:0.6; } }
//         .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

//         /* 3D Rotation */
//         .rotating-packet { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotate360 12s linear infinite; transition: transform 0.5s ease; }
//         .rotating-packet:hover { animation-duration: 8s; transform: scale(1.03); }
//         .packet-side { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
//         .packet-side.front { transform: translateZ(20px); }
//         .packet-side.back { transform: rotateY(180deg) translateZ(20px); }
//         @keyframes rotate360 { 0%{ transform: rotateY(0deg); } 100%{ transform: rotateY(360deg); } }

//         /* 3D Perspective Fix */
//         .perspective-[1500px] { perspective: 1500px; }
//       `}</style>
//     </div>
//   );
// }



// import React from "react";

// export default function BecomeDistributor() {
//   const benefits = [
//     "High Profit Margins",
//     "Pan-India Network Support",
//     "Dedicated Sales Team",
//     "Marketing Collaterals Provided",
//   ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#010317] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/10 rounded-full blur-[80px]"></div>
//         <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>
//       </div>

//       <div className="max-w-5xl w-full mx-auto relative z-10">
//         {/* Main Card */}
//         <div className="relative bg-[#0a1223]/60 backdrop-blur-md rounded-[2rem] shadow-2xl overflow-hidden border border-[#f4c768]/20 transition-all duration-500 hover:border-[#f4c768]/40 group">
          
//           {/* Subtle Hover Glow */}
//           <div className="absolute inset-0 bg-gradient-to-br from-[#f4c768]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//           <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            
//             {/* Tag */}
//             <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 animate-fade-in">
//               <span className="w-2 h-2 rounded-full bg-[#f4c768] mr-2 animate-pulse"></span>
//               <span className="text-[#f4c768] text-xs sm:text-sm font-semibold tracking-wide uppercase">
//                 Partnership Opportunity
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
//               Become our <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] to-[#ffda85]">
//                 Distributor
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="max-w-xl text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
//               Join the <span className="text-white font-medium">Agnipath Wafers</span> family and become a key player in spreading India's favourite crunchy snacks across the nation!
//             </p>

//             {/* Benefits Grid - Becomes 2 columns on tablet/desktop */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
//               {benefits.map((item, idx) => (
//                 <div 
//                   key={idx} 
//                   className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
//                     <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-200 text-sm sm:text-base font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <button className="group relative z-10 overflow-hidden bg-[#f4c768] hover:bg-[#ffda85] text-[#0a0e17] font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-[0_0_20px_rgba(244,199,104,0.3)] hover:shadow-[0_0_30px_rgba(244,199,104,0.5)] transform hover:-translate-y-1 flex items-center gap-3">
//               Connect With Us
//               <svg 
//                 className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

// // First install: npm install @emailjs/browser

// export default function BecomeDistributor() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: ""
//   });

//   const benefits = [
//     "High Profit Margins",
//     "Pan-India Network Support",
//     "Dedicated Sales Team",
//     "Marketing Collaterals Provided",
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // EmailJS configuration
//     const serviceID = 'YOUR_SERVICE_ID';      // EmailJS से मिलेगा
//     const templateID = 'YOUR_TEMPLATE_ID';    // EmailJS से मिलेगा
//     const publicKey = 'YOUR_PUBLIC_KEY';      // EmailJS से मिलेगा

//     const templateParams = {
//       to_email: 'harshabaghel97@gmail.com',
//       from_name: formData.name,
//       from_email: formData.email,
//       phone: formData.phone,
//       company: formData.company || 'Not provided',
//       message: formData.message,
//     };

//     try {
//       const response = await emailjs.send(
//         serviceID,
//         templateID,
//         templateParams,
//         publicKey
//       );

//       console.log('Email sent successfully!', response);
//       alert('धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।');
//       setShowForm(false);
//       setFormData({ name: "", email: "", phone: "", company: "", message: "" });
//     } catch (error) {
//       console.error('Email failed:', error);
//       alert('कुछ गलत हो गया। कृपया दोबारा कोशिश करें।');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010317] via-[#0a0e27] to-[#010317] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 right-10 sm:top-0 sm:right-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
//         <div className="absolute bottom-10 left-10 sm:bottom-0 sm:left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-[#f4c768]/5 rounded-full blur-[60px]"></div>
//       </div>

//       <div className="max-w-6xl w-full mx-auto relative z-10">
//         {/* Main Card */}
//         <div className="relative bg-[#0a1223]/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#f4c768]/20 transition-all duration-500 hover:border-[#f4c768]/50 hover:shadow-[0_0_50px_rgba(244,199,104,0.15)] group">
          
//           {/* Hover Glow Effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-[#f4c768]/8 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//           {/* Subtle Pattern Overlay */}
//           <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #f4c768 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

//           <div className="relative p-6 sm:p-10 lg:p-14 xl:p-16">
            
//             {!showForm ? (
//               <>
//                 {/* Tag */}
//                 <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/15 to-yellow-600/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
//                   <span className="w-2 h-2 rounded-full bg-[#f4c768] mr-2.5 animate-pulse shadow-[0_0_8px_rgba(244,199,104,0.8)]"></span>
//                   <span className="text-[#f4c768] text-xs sm:text-sm font-bold tracking-wider uppercase">
//                     Partnership Opportunity
//                   </span>
//                 </div>

//                 {/* Heading */}
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-5 sm:mb-6 lg:mb-8">
//                   Become our <br className="sm:block" />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] via-[#ffd96a] to-[#ffda85]">
//                     Distributor
//                   </span>
//                 </h2>

//                 {/* Description */}
//                 <p className="max-w-2xl text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
//                   Join the <span className="text-[#f4c768] font-semibold">Agnipath Wafers</span> family and become a key player in spreading India's favourite crunchy snacks across the nation!
//                 </p>

//                 {/* Benefits Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-3xl mb-10 sm:mb-12 lg:mb-14">
//                   {benefits.map((item, idx) => (
//                     <div 
//                       key={idx} 
//                       className="group/benefit flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 hover:border-[#f4c768]/40 hover:bg-white/12 transition-all duration-300 hover:shadow-lg hover:shadow-[#f4c768]/10 hover:-translate-y-1 cursor-pointer"
//                     >
//                       <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-400/30 group-hover/benefit:scale-110 group-hover/benefit:rotate-12 transition-all duration-300 shadow-lg shadow-green-500/20">
//                         <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-100 text-sm sm:text-base lg:text-lg font-medium group-hover/benefit:text-white transition-colors duration-300">{item}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button 
//                   onClick={() => setShowForm(true)}
//                   className="group/btn relative overflow-hidden bg-gradient-to-r from-[#f4c768] to-[#ffda85] hover:from-[#ffda85] hover:to-[#f4c768] text-[#0a0e17] font-bold px-8 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-[0_0_25px_rgba(244,199,104,0.4)] hover:shadow-[0_0_40px_rgba(244,199,104,0.6)] transform hover:-translate-y-2 hover:scale-105 active:scale-95 flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
//                 >
//                   <span className="relative z-10 font-extrabold">Connect With Us</span>
//                   <svg 
//                     className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                     strokeWidth="3"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
                  
//                   {/* Animated Shine Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
//                   {/* Ripple Effect on Hover */}
//                   <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover/btn:scale-100 opacity-0 group-hover/btn:opacity-100 transition-all duration-500"></div>
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* Contact Form */}
//                 <div className="w-full max-w-3xl mx-auto">
//                   {/* Form Header */}
//                   <div className="text-center mb-8 sm:mb-10">
//                     <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/15 to-yellow-600/10 border border-yellow-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
//                       <span className="w-2 h-2 rounded-full bg-[#f4c768] mr-2.5 animate-pulse shadow-[0_0_8px_rgba(244,199,104,0.8)]"></span>
//                       <span className="text-[#f4c768] text-xs sm:text-sm font-bold tracking-wider uppercase">
//                         Let's Connect
//                       </span>
//                     </div>
//                     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
//                       Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] to-[#ffda85]">Touch</span>
//                     </h3>
//                     <p className="text-gray-400 text-sm sm:text-base">Fill out the form below and we'll get back to you soon!</p>
//                   </div>

//                   {/* Form */}
//                   <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//                     {/* Name */}
//                     <div>
//                       <label htmlFor="name" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Full Name <span className="text-red-400">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isSubmitting}
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                         placeholder="Enter your full name"
//                       />
//                     </div>

//                     {/* Email & Phone */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
//                       <div>
//                         <label htmlFor="email" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                           Email Address <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isSubmitting}
//                           className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                           placeholder="your@email.com"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                           Phone Number <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isSubmitting}
//                           className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>
//                     </div>

//                     {/* Company */}
//                     <div>
//                       <label htmlFor="company" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Company Name
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                         placeholder="Your company name (optional)"
//                       />
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label htmlFor="message" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Message <span className="text-red-400">*</span>
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isSubmitting}
//                         rows="4"
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
//                         placeholder="Tell us about your distribution requirements..."
//                       />
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="group/btn relative overflow-hidden bg-gradient-to-r from-[#f4c768] to-[#ffda85] hover:from-[#ffda85] hover:to-[#f4c768] text-[#0a0e17] font-bold px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-[0_0_25px_rgba(244,199,104,0.4)] hover:shadow-[0_0_40px_rgba(244,199,104,0.6)] transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//                             </svg>
//                             <span>Sending...</span>
//                           </>
//                         ) : (
//                           <>
//                             <span className="relative z-10 font-extrabold">Submit</span>
//                             <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                             </svg>
//                           </>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
//                       </button>
                      
//                       <button
//                         type="button"
//                         onClick={() => setShowForm(false)}
//                         disabled={isSubmitting}
//                         className="px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-gray-300 border-2 border-white/20 hover:border-[#f4c768]/50 hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-95 disabled:opacity-50"
//                       >
//                         Back
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

// export default function BecomeDistributor() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: ""
//   });

//   const benefits = [
//     "High Profit Margins",
//     "Pan-India Network Support",
//     "Dedicated Sales Team",
//     "Marketing Collaterals Provided",
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear error when user starts typing
//     if (submitStatus.type === 'error') {
//       setSubmitStatus({ type: '', message: '' });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     // ⚠️ यहाँ अपने ACTUAL IDs डालें - EmailJS dashboard से copy करें
//     const serviceID = 'service_xxxxxxx';    // 👈 अपना Service ID डालें
//     const templateID = 'template_xxxxxxx';  // 👈 अपना Template ID डालें
//     const publicKey = 'your_public_key';    // 👈 अपना Public Key डालें

//     const templateParams = {
//       to_email: 'Agnipathfoods@gmail.com',
//       from_name: formData.name,
//       from_email: formData.email,
//       phone: formData.phone,
//       company: formData.company || 'Not provided',
//       message: formData.message,
//     };

//     try {
//       // Initialize EmailJS
//       emailjs.init(publicKey);
      
//       const response = await emailjs.send(
//         serviceID,
//         templateID,
//         templateParams
//       );

//       console.log('SUCCESS!', response.status, response.text);
      
//       setSubmitStatus({
//         type: 'success',
//         message: '✅ धन्यवाद! आपका संदेश भेज दिया गया है।'
//       });
      
//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setShowForm(false);
//         setFormData({ name: "", email: "", phone: "", company: "", message: "" });
//         setSubmitStatus({ type: '', message: '' });
//       }, 2000);

//     } catch (error) {
//       console.error('FAILED...', error);
      
//       let errorMessage = '❌ कुछ गलत हो गया। कृपया दोबारा कोशिश करें।';
      
//       // Detailed error messages
//       if (error.text) {
//         if (error.text.includes('service_id')) {
//           errorMessage = '❌ Service ID गलत है। EmailJS dashboard से सही ID copy करें।';
//         } else if (error.text.includes('template_id')) {
//           errorMessage = '❌ Template ID गलत है। EmailJS dashboard से सही ID copy करें।';
//         } else if (error.text.includes('public_key') || error.text.includes('user_id')) {
//           errorMessage = '❌ Public Key गलत है। EmailJS Account settings से copy करें।';
//         }
//       }
      
//       setSubmitStatus({
//         type: 'error',
//         message: errorMessage
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010317] via-[#0a0e27] to-[#010317] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 right-10 sm:top-0 sm:right-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
//         <div className="absolute bottom-10 left-10 sm:bottom-0 sm:left-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-[#f4c768]/5 rounded-full blur-[60px]"></div>
//       </div>

//       <div className="max-w-6xl w-full mx-auto relative z-10">
//         <div className="relative bg-[#0a1223]/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#f4c768]/20 transition-all duration-500 hover:border-[#f4c768]/50 hover:shadow-[0_0_50px_rgba(244,199,104,0.15)] group">
          
//           <div className="absolute inset-0 bg-gradient-to-br from-[#f4c768]/8 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//           <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #f4c768 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

//           <div className="relative p-6 sm:p-10 lg:p-14 xl:p-16">
            
//             {!showForm ? (
//               <>
//                 <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/15 to-yellow-600/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
//                   <span className="w-2 h-2 rounded-full bg-[#f4c768] mr-2.5 animate-pulse shadow-[0_0_8px_rgba(244,199,104,0.8)]"></span>
//                   <span className="text-[#f4c768] text-xs sm:text-sm font-bold tracking-wider uppercase">
//                     Partnership Opportunity
//                   </span>
//                 </div>

//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-5 sm:mb-6 lg:mb-8">
//                   Become our <br className="sm:block" />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] via-[#ffd96a] to-[#ffda85]">
//                     Distributor
//                   </span>
//                 </h2>

//                 <p className="max-w-2xl text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
//                   Join the <span className="text-[#f4c768] font-semibold">Agnipath Wafers</span> family and become a key player in spreading India's favourite crunchy snacks across the nation!
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-3xl mb-10 sm:mb-12 lg:mb-14">
//                   {benefits.map((item, idx) => (
//                     <div 
//                       key={idx} 
//                       className="group/benefit flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 hover:border-[#f4c768]/40 hover:bg-white/12 transition-all duration-300 hover:shadow-lg hover:shadow-[#f4c768]/10 hover:-translate-y-1 cursor-pointer"
//                     >
//                       <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-400/30 group-hover/benefit:scale-110 group-hover/benefit:rotate-12 transition-all duration-300 shadow-lg shadow-green-500/20">
//                         <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-100 text-sm sm:text-base lg:text-lg font-medium group-hover/benefit:text-white transition-colors duration-300">{item}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button 
//                   onClick={() => setShowForm(true)}
//                   className="group/btn relative overflow-hidden bg-gradient-to-r from-[#f4c768] to-[#ffda85] hover:from-[#ffda85] hover:to-[#f4c768] text-[#0a0e17] font-bold px-8 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-[0_0_25px_rgba(244,199,104,0.4)] hover:shadow-[0_0_40px_rgba(244,199,104,0.6)] transform hover:-translate-y-2 hover:scale-105 active:scale-95 flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center"
//                 >
//                   <span className="relative z-10 font-extrabold">Connect With Us</span>
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out"></div>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="w-full max-w-3xl mx-auto">
//                   <div className="text-center mb-8 sm:mb-10">
//                     <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/15 to-yellow-600/10 border border-yellow-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
//                       <span className="w-2 h-2 rounded-full bg-[#f4c768] mr-2.5 animate-pulse shadow-[0_0_8px_rgba(244,199,104,0.8)]"></span>
//                       <span className="text-[#f4c768] text-xs sm:text-sm font-bold tracking-wider uppercase">
//                         Let's Connect
//                       </span>
//                     </div>
//                     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
//                       Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] to-[#ffda85]">Touch</span>
//                     </h3>
//                     <p className="text-gray-400 text-sm sm:text-base">Fill out the form below and we'll get back to you soon!</p>
//                   </div>

//                   {/* Status Message */}
//                   {submitStatus.message && (
//                     <div className={`mb-6 p-4 rounded-xl text-center font-medium ${
//                       submitStatus.type === 'success' 
//                         ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
//                         : 'bg-red-500/20 border border-red-500/30 text-red-400'
//                     }`}>
//                       {submitStatus.message}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//                     <div>
//                       <label htmlFor="name" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Full Name <span className="text-red-400">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isSubmitting}
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                         placeholder="Enter your full name"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
//                       <div>
//                         <label htmlFor="email" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                           Email Address <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isSubmitting}
//                           className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                           placeholder="your@email.com"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                           Phone Number <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           required
//                           disabled={isSubmitting}
//                           className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="company" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Company Name
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
//                         placeholder="Your company name (optional)"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
//                         Message <span className="text-red-400">*</span>
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         disabled={isSubmitting}
//                         rows="4"
//                         className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f4c768]/50 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
//                         placeholder="Tell us about your distribution requirements..."
//                       />
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="group/btn relative overflow-hidden bg-gradient-to-r from-[#f4c768] to-[#ffda85] hover:from-[#ffda85] hover:to-[#f4c768] text-[#0a0e17] font-bold px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-[0_0_25px_rgba(244,199,104,0.4)] hover:shadow-[0_0_40px_rgba(244,199,104,0.6)] transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//                             </svg>
//                             <span>Sending...</span>
//                           </>
//                         ) : (
//                           <>
//                             <span className="relative z-10 font-extrabold">Submit</span>
//                             <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                             </svg>
//                           </>
//                         )}
//                       </button>
                      
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowForm(false);
//                           setSubmitStatus({ type: '', message: '' });
//                         }}
//                         disabled={isSubmitting}
//                         className="px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-gray-300 border-2 border-white/20 hover:border-[#f4c768]/50 hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-95 disabled:opacity-50"
//                       >
//                         Back
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import axios from "axios";

// export default function BecomeDistributor() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const benefits = [
//     "High Profit Margins",
//     "Pan-India Network Support",
//     "Dedicated Sales Team",
//     "Marketing Collaterals Provided",
//   ];

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (submitStatus.type === "error") {
//       setSubmitStatus({ type: "", message: "" });
//     }
//   };

//   // 🔥 SEND DATA TO BACKEND
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: "", message: "" });

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/send-email",
//         formData
//       );

//       if (response.data.success) {
//         setSubmitStatus({
//           type: "success",
//           message: "✅ धन्यवाद! आपका संदेश भेज दिया गया है।",
//         });

//         setTimeout(() => {
//           setShowForm(false);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             company: "",
//             message: "",
//           });
//           setSubmitStatus({ type: "", message: "" });
//         }, 2000);
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "❌ कुछ गलत हो गया। कृपया दोबारा कोशिश करें।",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#010317] px-4">
//       <div className="max-w-4xl w-full bg-[#0a1223] rounded-2xl p-8 shadow-xl border border-yellow-500/20">

//         {!showForm ? (
//           <>
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Become our <span className="text-yellow-400">Distributor</span>
//             </h2>

//             <p className="text-gray-300 mb-8">
//               Join Agnipath Wafers and grow your business with us.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mb-8">
//               {benefits.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl text-gray-200"
//                 >
//                   ✅ {item}
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => setShowForm(true)}
//               className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-full"
//             >
//               Contact Us
//             </button>
//           </>
//         ) : (
//           <>
//             <h3 className="text-3xl font-bold text-white mb-6">
//               Contact <span className="text-yellow-400">Form</span>
//             </h3>

//             {submitStatus.message && (
//               <div
//                 className={`mb-4 p-3 rounded-lg text-center ${
//                   submitStatus.type === "success"
//                     ? "bg-green-500/20 text-green-400"
//                     : "bg-red-500/20 text-red-400"
//                 }`}
//               >
//                 {submitStatus.message}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-3 rounded bg-white/5 border border-white/10 text-white"
//               />

//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-3 rounded bg-white/5 border border-white/10 text-white"
//               />

//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-3 rounded bg-white/5 border border-white/10 text-white"
//               />

//               <input
//                 name="company"
//                 placeholder="Company Name (optional)"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 className="w-full p-3 rounded bg-white/5 border border-white/10 text-white"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-3 rounded bg-white/5 border border-white/10 text-white"
//               />

//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-full"
//                 >
//                   {isSubmitting ? "Sending..." : "Submit"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="flex-1 border border-white/20 text-white py-3 rounded-full"
//                 >
//                   Back
//                 </button>
//               </div>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import axios from "axios";

// export default function BecomeDistributor() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const benefits = [
//     { title: "High Profit Margins", desc: "Attractive distributor pricing & steady demand." },
//     { title: "Pan-India Network Support", desc: "Fast onboarding + territory guidance." },
//     { title: "Dedicated Sales Team", desc: "We help you close and scale faster." },
//     { title: "Marketing Collaterals Provided", desc: "Posters, creatives, and product support." },
//   ];

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (submitStatus.type === "error") setSubmitStatus({ type: "", message: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: "", message: "" });

//     try {
//       const response = await axios.post("http://localhost:5000/send-email", formData);

//       if (response.data.success) {
//         setSubmitStatus({
//           type: "success",
//           message: "Thank you! Your message has been sent.",
//         });

//         setTimeout(() => {
//           setShowForm(false);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             company: "",
//             message: "",
//           });
//           setSubmitStatus({ type: "", message: "" });
//         }, 1800);
//       } else {
//         setSubmitStatus({
//           type: "error",
//           message: "Something went wrong. Please try again.",
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#010317] px-4 py-10 sm:py-14">
//       <div className="mx-auto max-w-6xl">
//         {/* Outer Card */}
//         <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0a1223] shadow-2xl">
//           {/* subtle gradient glow */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,204,21,0.20),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_40%)]" />

//           <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-10">
//             {/* LEFT: Info/Benefits */}
//             <div className="flex flex-col justify-between">
//               <div>
//                 <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-gray-200">
//                   DISTRIBUTOR PROGRAM
//                 </p>

//                 <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
//                   Become our{" "}
//                   <span className="text-yellow-400">Distributor</span>
//                 </h2>

//                 <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
//                   Join Agnipath Wafers and grow your business with reliable supply,
//                   marketing support, and a strong sales ecosystem.
//                 </p>

//                 <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                   {benefits.map((b, i) => (
//                     <div
//                       key={i}
//                       className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-300">
//                           ✓
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-white">{b.title}</p>
//                           <p className="mt-1 text-xs leading-5 text-gray-300">
//                             {b.desc}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA only when form not shown */}
//               {!showForm && (
//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                   <button
//                     onClick={() => setShowForm(true)}
//                     className="w-full rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 sm:w-auto"
//                   >
//                     Contact Us
//                   </button>

//                   <a
//                     href="#"
//                     className="w-full rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     View Products
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT: Form Panel */}
//             <div className="rounded-3xl border border-white/10 bg-[#070d1c] p-5 sm:p-7">
//               {!showForm ? (
//                 <div className="flex h-full flex-col justify-center">
//                   <h3 className="text-xl font-bold text-white sm:text-2xl">
//                     Quick Contact
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-300">
//                     Click <span className="font-semibold text-yellow-300">Contact Us</span>{" "}
//                     to open the form. We’ll get back to you soon.
//                   </p>

//                   <div className="mt-6 grid gap-3 text-sm text-gray-200">
//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                       <p className="font-semibold text-white">Fast response</p>
//                       <p className="mt-1 text-xs text-gray-300">
//                         Your request is sent directly to our team.
//                       </p>
//                     </div>
//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
//                       <p className="font-semibold text-white">Territory discussion</p>
//                       <p className="mt-1 text-xs text-gray-300">
//                         We’ll discuss pricing, route-to-market and onboarding.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-5 flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-2xl font-extrabold text-white">
//                         Contact <span className="text-yellow-400">Form</span>
//                       </h3>
//                       <p className="mt-1 text-xs text-gray-300">
//                         Please share details and we’ll reach out.
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() => setShowForm(false)}
//                       className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
//                     >
//                       Back
//                     </button>
//                   </div>

//                   {submitStatus.message && (
//                     <div
//                       className={`mb-4 rounded-2xl border p-3 text-center text-sm ${
//                         submitStatus.type === "success"
//                           ? "border-green-500/30 bg-green-500/10 text-green-300"
//                           : "border-red-500/30 bg-red-500/10 text-red-300"
//                       }`}
//                     >
//                       {submitStatus.message}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <Input
//                         name="name"
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                       <Input
//                         name="phone"
//                         placeholder="Phone Number"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>

//                     <Input
//                       name="email"
//                       type="email"
//                       placeholder="Email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />

//                     <Input
//                       name="company"
//                       placeholder="Company Name (optional)"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                     />

//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20"
//                     />

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full rounded-full bg-yellow-400 py-3 text-sm font-extrabold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
//                     >
//                       {isSubmitting ? "Sending..." : "Submit"}
//                     </button>

//                     <p className="text-center text-[11px] leading-5 text-gray-400">
//                       By submitting, you agree to be contacted by our team.
//                     </p>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /** Small reusable input */
// function Input({ type = "text", ...props }) {
//   return (
//     <input
//       type={type}
//       {...props}
//       className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20"
//     />
//   );
// }






// import React, { useState } from "react";
// import axios from "axios";

// export default function BecomeDistributor() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const benefits = [
//     { title: "High Profit Margins", desc: "Attractive distributor pricing & steady demand." },
//     { title: "Pan-India Network Support", desc: "Fast onboarding + territory guidance." },
//     { title: "Dedicated Sales Team", desc: "We help you close and scale faster." },
//     { title: "Marketing Collaterals Provided", desc: "Posters, creatives, and product support." },
//   ];

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (submitStatus.type === "error") setSubmitStatus({ type: "", message: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: "", message: "" });

//     try {
//       const response = await axios.post("http://localhost:5000/send-email", formData);

//       if (response.data.success) {
//         setSubmitStatus({
//           type: "success",
//           message: "Thank you! Your message has been sent.",
//         });

//         setTimeout(() => {
//           setShowForm(false);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             company: "",
//             message: "",
//           });
//           setSubmitStatus({ type: "", message: "" });
//         }, 1800);
//       } else {
//         setSubmitStatus({
//           type: "error",
//           message: "Something went wrong. Please try again.",
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#010317] px-4 py-10 sm:py-14">
//       <div className="mx-auto max-w-6xl">
//         {/* Outer Card */}
//         <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0a1223] shadow-2xl">
//           {/* Enhanced gradient glow for better visual appeal */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,204,21,0.25),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_50%)]" />

//           <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-10">
//             {/* LEFT: Info/Benefits */}
//             <div className="flex flex-col justify-between">
//               <div>
//                 <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-gray-200">
//                   DISTRIBUTOR PROGRAM
//                 </p>

//                 <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
//                   Become our{" "}
//                   <span className="text-yellow-400">Distributor</span>
//                 </h2>

//                 <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
//                   Join Agnipath Wafers and grow your business with reliable supply,
//                   marketing support, and a strong sales ecosystem.
//                 </p>

//                 <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                   {benefits.map((b, i) => (
//                     <div
//                       key={i}
//                       className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.08] hover:shadow-lg"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-300 transition-colors group-hover:bg-yellow-400/30">
//                           ✓
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-white">{b.title}</p>
//                           <p className="mt-1 text-xs leading-5 text-gray-300">
//                             {b.desc}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA only when form not shown */}
//               {!showForm && (
//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                   <button
//                     onClick={() => setShowForm(true)}
//                     className="w-full rounded-full bg-yellow-400 px-7 py-3 text-sm font-extrabold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 sm:w-auto"
//                   >
//                     Contact Us
//                   </button>

//                   <a
//                     href="#"
//                     className="w-full rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 sm:w-auto"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     View Products
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT: Form Panel */}
//             <div className="rounded-3xl border border-white/10 bg-[#070d1c] p-5 sm:p-7 shadow-inner">
//               {!showForm ? (
//                 <div className="flex h-full flex-col justify-center">
//                   <h3 className="text-xl font-bold text-white sm:text-2xl">
//                     Quick Contact
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-300">
//                     Click <span className="font-semibold text-yellow-300">Contact Us</span>{" "}
//                     to open the form. We’ll get back to you soon.
//                   </p>

//                   <div className="mt-6 grid gap-3 text-sm text-gray-200">
//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
//                       <p className="font-semibold text-white">Fast response</p>
//                       <p className="mt-1 text-xs text-gray-300">
//                         Your request is sent directly to our team.
//                       </p>
//                     </div>
//                     <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
//                       <p className="font-semibold text-white">Territory discussion</p>
//                       <p className="mt-1 text-xs text-gray-300">
//                         We’ll discuss pricing, route-to-market and onboarding.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-5 flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-2xl font-extrabold text-white">
//                         Contact <span className="text-yellow-400">Form</span>
//                       </h3>
//                       <p className="mt-1 text-xs text-gray-300">
//                         Please share details and we’ll reach out.
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() => setShowForm(false)}
//                       className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
//                     >
//                       Back
//                     </button>
//                   </div>

//                   {submitStatus.message && (
//                     <div
//                       className={`mb-4 rounded-2xl border p-3 text-center text-sm ${
//                         submitStatus.type === "success"
//                           ? "border-green-500/30 bg-green-500/10 text-green-300"
//                           : "border-red-500/30 bg-red-500/10 text-red-300"
//                       }`}
//                     >
//                       {submitStatus.message}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <Input
//                         name="name"
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                       <Input
//                         name="phone"
//                         placeholder="Phone Number"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>

//                     <Input
//                       name="email"
//                       type="email"
//                       placeholder="Email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />

//                     <Input
//                       name="company"
//                       placeholder="Company Name (optional)"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                     />

//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20 resize-none"
//                     />

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full rounded-full bg-yellow-400 py-3 text-sm font-extrabold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
//                     >
//                       {isSubmitting ? "Sending..." : "Submit"}
//                     </button>

//                     <p className="text-center text-[11px] leading-5 text-gray-400">
//                       By submitting, you agree to be contacted by our team.
//                     </p>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /** Small reusable input */
// function Input({ type = "text", ...props }) {
//   return (
//     <input
//       type={type}
//       {...props}
//       className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-yellow-400/40 focus:ring-2 focus:ring-yellow-400/20"
//     />
//   );
// }




import React, { useState } from "react";
import axios from "axios";

export default function BecomeDistributor() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const benefits = [
    { title: "High Profit Margins", desc: "Attractive distributor pricing & steady demand." },
    { title: "Pan-India Network Support", desc: "Fast onboarding + territory guidance." },
    { title: "Dedicated Sales Team", desc: "We help you close and scale faster." },
    { title: "Marketing Collaterals Provided", desc: "Posters, creatives, and product support." },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.type === "error") setSubmitStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });

        setTimeout(() => {
          setShowForm(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
          setSubmitStatus({ type: "", message: "" });
        }, 1800);
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#010317] to-black px-4 py-12 sm:py-16 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Outer Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
          {/* Gradient glow */}
          <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.14),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.16),transparent_55%)]" />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
            {/* LEFT: Info/Benefits */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] text-gray-200 uppercase">
                  Distributor Program
                </p>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
                  Become our{" "}
                  <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                    Distributor
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                  Join <span className="font-semibold text-yellow-300">Agnipath Wafers</span> and
                  grow your business with reliable supply, marketing support, and a strong sales
                  ecosystem tailored for your territory.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {benefits.map((b, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-yellow-500/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-300 transition-colors group-hover:bg-yellow-400/30">
                          ✓
                        </div>
                        <div>
                          <p className="font-display text-sm font-semibold text-white">
                            {b.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-300">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA only when form not shown */}
              {!showForm && (
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full rounded-full bg-yellow-400 px-7 py-3 text-sm font-display font-extrabold tracking-wide text-black transition-all duration-300 hover:translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_14px_30px_rgba(250,204,21,0.45)] focus:outline-none focus:ring-2 focus:ring-yellow-400/60 sm:w-auto"
                  >
                    Contact Us
                  </button>

                  <a
                    href="#"
                    className="w-full rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 sm:w-auto"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Products
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT: Form Panel */}
            <div className="rounded-3xl border border-white/10 bg-[#050817]/90 p-5 sm:p-7 shadow-inner">
              {!showForm ? (
                <div className="flex h-full flex-col justify-center">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    Quick Contact
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Click{" "}
                    <span className="font-semibold text-yellow-300">
                      Contact Us
                    </span>{" "}
                    to open the form. Our sales team will reach out within{" "}
                    <span className="font-medium text-gray-100">24–48 hours.</span>
                  </p>

                  <div className="mt-6 grid gap-3 text-sm text-gray-200">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-yellow-400/40 hover:bg-white/[0.09]">
                      <p className="font-medium text-white">Fast response</p>
                      <p className="mt-1 text-xs text-gray-300">
                        Your request goes directly to our distribution team.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-yellow-400/40 hover:bg-white/[0.09]">
                      <p className="font-medium text-white">Territory discussion</p>
                      <p className="mt-1 text-xs text-gray-300">
                        We’ll discuss pricing, route-to-market and onboarding steps.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-white">
                        Contact <span className="text-yellow-400">Form</span>
                      </h3>
                      <p className="mt-1 text-xs text-gray-300">
                        Share a few details and we’ll get back to you with next steps.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                    >
                      Back
                    </button>
                  </div>

                  {submitStatus.message && (
                    <div
                      className={`mb-4 rounded-2xl border p-3 text-center text-sm ${
                        submitStatus.type === "success"
                          ? "border-green-500/40 bg-green-500/10 text-green-300"
                          : "border-red-500/40 bg-red-500/10 text-red-300"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      name="company"
                      placeholder="Company Name (optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                    />

                    <textarea
                      name="message"
                      placeholder="Tell us about your location, current business & monthly potential."
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-400/80 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/25 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-yellow-400 py-3 text-sm font-display font-extrabold tracking-wide text-black transition-all duration-300 hover:translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_14px_30px_rgba(250,204,21,0.5)] disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>

                    <p className="text-center text-[11px] leading-5 text-gray-400">
                      By submitting, you agree to be contacted by our distribution team for
                      business discussions.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small reusable input */
function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-400/80 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/25"
    />
  );
}