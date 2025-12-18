import React from 'react';

export default function SnackStoryHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010317] via-[#010317] to-[#010317] py-8 px-4 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&family=Great+Vibes&display=swap');
          
          .font-display {
            font-family: 'Cormorant Garamond', serif;
          }
          .font-body {
            font-family: 'Montserrat', sans-serif;
          }
          .font-script {
            font-family: 'Great Vibes', cursive;
          }
        `}
      </style>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#010317] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#010317] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            
            {/* Top Label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[#c8a357]"></div>
              <p className="font-body text-[#c8a357] text-sm tracking-[0.3em] uppercase font-medium">
                The Incredible Journey
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="space-y-2">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#c8a357] font-bold block">
                How local-made
              </span>
              <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white block transform -rotate-2">
                snacks
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#c8a357] font-bold block">
                became a <span className="text-white italic">smash hit</span>
              </span>
            </h1>
            
            {/* Description */}
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-light">
              From selling their farmland to hustling in a cinema to building a brand 
              that rivals global giants. This is the story of <span className="text-[#c8a357] font-medium">India's blockbuster 
              snack</span> and those who made it.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 py-4">
              <div>
                <p className="font-display text-3xl sm:text-4xl text-[#c8a357] font-bold">40+</p>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider">Years Legacy</p>
              </div>
              <div className="w-[1px] bg-gray-700"></div>
              <div>
                <p className="font-display text-3xl sm:text-4xl text-[#c8a357] font-bold">₹4000</p>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider">Cr Revenue</p>
              </div>
              <div className="w-[1px] bg-gray-700"></div>
              <div>
                <p className="font-display text-3xl sm:text-4xl text-[#c8a357] font-bold">#1</p>
                <p className="font-body text-xs text-gray-500 uppercase tracking-wider">In Gujarat</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="font-body bg-[#c8a357] hover:bg-[#d4b46a] text-[#010317] font-semibold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[#c8a357]/30 hover:shadow-2xl">
                Read The Story →
              </button>
              <button className="font-body border-2 border-[#c8a357] text-[#c8a357] hover:bg-[#c8a357] hover:text-[#010317] font-semibold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-full transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="order-1 lg:order-2 relative h-72 sm:h-80 md:h-96 lg:h-[550px]">
            
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 transform hover:scale-105 hover:rotate-2 transition-all duration-500 z-20">
              <div className="relative group">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-2xl font-body font-bold shadow-lg z-10 text-[#010317] group-hover:scale-110 transition-transform">
                  +
                </div>
                <div className="bg-white p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://www.saveur.com/uploads/2019/03/18/AVTIFDEXIPLCEGHC4WXVI6JIMQ-1024x768.jpg?format=auto&optimize=high&width=1440" 
                      alt="Traditional Indian snacks"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-body text-center text-[10px] mt-2 text-gray-500 uppercase tracking-wider">
                    1970s • The Beginning
                  </p>
                </div>
              </div>
            </div>

            {/* Center Floating Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#c8a357] to-[#b8934a] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="font-script text-2xl sm:text-3xl text-[#010317]">Since</span>
              </div>
              <p className="font-display text-4xl sm:text-5xl text-[#c8a357] font-bold text-center mt-2">1974</p>
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-4 sm:left-8 w-36 sm:w-44 md:w-52 lg:w-60 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 z-20">
              <div className="relative group">
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-2xl font-body font-bold shadow-lg z-10 text-[#010317] group-hover:scale-110 transition-transform">
                  +
                </div>
                <div className="bg-white p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[3deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://www.zwirnerequipment.com/wp-content/uploads/2020/09/bigstock-Closeup-Of-Salty-Snacks-In-Foo-310390096.jpg" 
                      alt="Modern factory"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-body text-center text-[10px] mt-2 text-gray-500 uppercase tracking-wider">
                    Today • Modern Factory
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute top-8 right-0 w-36 sm:w-44 md:w-52 lg:w-64 transform hover:scale-105 hover:rotate-1 transition-all duration-500 z-20">
              <div className="relative group">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#c8a357] rounded-full flex items-center justify-center text-2xl font-body font-bold shadow-lg z-10 text-[#010317] group-hover:scale-110 transition-transform">
                  +
                </div>
                <div className="bg-white p-3 shadow-2xl rounded-xl border-4 border-[#c8a357] transform rotate-[4deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src="https://media.istockphoto.com/id/1156257589/photo/production-line-workers-at-a-biscuit-factory-in-africa.jpg?s=612x612&w=0&k=20&c=hF_CItMdXEbglSqnM9J6kCgLNmMNJOelvm3g5EmwWyI=" 
                      alt="Factory workers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-body text-center text-[10px] mt-2 text-gray-500 uppercase tracking-wider">
                    The Dream Team
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-24 right-4 bg-gradient-to-r from-[#c8a357] to-[#d4b46a] text-[#010317] px-5 py-2 rounded-full shadow-xl z-30">
              <span className="font-body font-bold text-sm">🇮🇳 Made in India</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}