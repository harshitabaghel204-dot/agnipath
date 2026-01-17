import React, { useState } from "react";

export default function BecomeDistributor() {
  // const [imageUrl, setImageUrl] = useState("image/wafar.png");
  const imageUrl = 'image/wafar.png'

  const benefits = [
    "High Profit Margins",
    "Pan-India Network Support",
    "Dedicated Sales Team",
    "Marketing Collaterals Provided",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010317] to-[#0a0e17] py-16 sm:py-20 px-4 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Main Card */}
        <div className="relative bg-[#0a1223]/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#f4c768]/30 max-w-5xl mx-auto transform transition-all duration-700 hover:shadow-[#f4c768]/20 hover:shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4c768]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-6 sm:p-10 lg:p-14">
            {/* Left Text Content */}
            <div className="space-y-6 sm:space-y-8 z-10">
              <div className="inline-block px-3 sm:px-4 py-1.5 bg-yellow-500/10 border border-[#f4c768]/30 rounded-full text-[#f4c768] text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                Partnership Opportunity
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                Become our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4c768] to-yellow-400">
                  Distributor
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md font-openSans">
                Join the Agnipath Wafers family and become a key player in spreading India's favourite crunchy snacks across the nation!
              </p>

              {/* Benefits */}
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-sm sm:text-base font-openSans">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-[#f4c768] to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-[#0a0e17] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-[#f4c768]/30 hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 sm:gap-3 font-poppins">
                Connect With Us
                <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Right Product Display */}
            <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-48 sm:w-56 md:w-60 lg:w-64 h-64 sm:h-72 md:h-80 lg:h-96 perspective-[1500px]">
                <div className="rotating-packet w-full h-full relative transform-style-preserve-3d animate-rotate">
                  <div className="packet-side front rounded-2xl overflow-hidden border-2 border-[#f4c768]/30 shadow-xl">
                    <img
                      src={imageUrl}
                      alt="Balaji Wafers Product"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=550&fit=crop"; }}
                    />
                  </div>
                  <div className="packet-side back rounded-2xl overflow-hidden border-2 border-[#f4c768]/30 shadow-xl">
                    <img
                      src={imageUrl}
                      alt="Product Back"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=550&fit=crop"; }}
                    />
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-[#f4c768]/5 blur-2xl rounded-full -z-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-[#f4c768]/20 rounded-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        /* Glow Pulse */
        @keyframes pulse-slow { 0%,100%{ opacity:0.3; } 50%{ opacity:0.6; } }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        /* 3D Rotation */
        .rotating-packet { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotate360 12s linear infinite; transition: transform 0.5s ease; }
        .rotating-packet:hover { animation-duration: 8s; transform: scale(1.03); }
        .packet-side { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
        .packet-side.front { transform: translateZ(20px); }
        .packet-side.back { transform: rotateY(180deg) translateZ(20px); }
        @keyframes rotate360 { 0%{ transform: rotateY(0deg); } 100%{ transform: rotateY(360deg); } }

        /* 3D Perspective Fix */
        .perspective-[1500px] { perspective: 1500px; }
      `}</style>
    </div>
  );
}
