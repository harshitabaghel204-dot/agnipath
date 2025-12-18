import React, { useState, useEffect, useRef } from 'react';

const JourneyTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        const scrollStart = containerTop - windowHeight + 200;
        const scrollEnd = containerTop + containerHeight - 200;
        const scrollRange = scrollEnd - scrollStart;
        const currentScroll = scrollTop - scrollStart;
        
        const progress = Math.min(Math.max(currentScroll / scrollRange, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPathLength1 = () => {
    const totalLength = 1000;
    const animationProgress = Math.min(scrollProgress * 2, 1);
    return totalLength - (animationProgress * totalLength);
  };

  const getPathLength2 = () => {
    const totalLength = 1500;
    const animationProgress = Math.max((scrollProgress - 0.5) * 2, 0);
    return totalLength - (animationProgress * totalLength);
  };

  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-yellow-50 via-white to-yellow-50 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          
          {/* First Section - Early 1970s */}
          <div className="relative mb-40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?w=800&q=80"
                    alt="Traditional dwelling"
                    className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Right Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-green-600 mb-2 bg-green-100 px-6 py-2 rounded-full">Early</h3>
                </div>
                <h2 className="text-8xl font-black text-blue-900 leading-none tracking-tight">1970s</h2>
                <div className="h-2 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <h4 className="text-4xl font-bold text-gray-900 pt-4">Sacrificing the soil</h4>
                <p className="text-gray-700 text-xl leading-relaxed pt-2">
                  In their drought-stricken village, the Virani family was forced to sell their ancestral land, 
                  which could no longer support their livelihood.
                </p>
              </div>
            </div>
            
            {/* Animated Dotted Line */}
            <svg 
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ 
                top: '100%',
                height: '300px',
                width: '400px'
              }}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 200 0 Q 250 150, 200 300"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray="10,8"
                strokeDashoffset={getPathLength1()}
                filter="url(#glow)"
                style={{
                  transition: 'stroke-dashoffset 0.2s ease-out'
                }}
              />
            </svg>
          </div>

          {/* Product Section with Moving Snack Packet */}
          <div className="relative mb-40 flex justify-center" style={{ height: '300px' }}>
            {/* Dotted Vertical Line */}
            <svg 
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: '-150px',
                height: '600px',
                width: '10px',
                zIndex: 1
              }}
            >
              <line
                x1="5"
                y1="0"
                x2="5"
                y2="600"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray="10,8"
                filter="url(#glow)"
              />
            </svg>
            
            {/* Snack Packet Moving on Line */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
              style={{
                top: `${Math.max(0, Math.min(100, (scrollProgress - 0.2) * 250))}%`,
                transform: `translate(-50%, -50%) scale(${scrollProgress > 0.3 && scrollProgress < 0.7 ? 1.15 : 1}) rotate(${(scrollProgress - 0.5) * 20}deg)`,
                zIndex: 10
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80"
                alt="Snack packet"
                className="w-40 h-40 object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Bottom Dotted Line */}
            <svg 
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ 
                top: '50%',
                height: '350px',
                width: '400px'
              }}
            >
              <path
                d="M 200 0 Q 150 175, 200 350"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray="10,8"
                strokeDashoffset={getPathLength2()}
                filter="url(#glow)"
                style={{
                  transition: 'stroke-dashoffset 0.2s ease-out'
                }}
              />
            </svg>
          </div>

          {/* Second Section - Mid 1970s */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-green-600 mb-2 bg-green-100 px-6 py-2 rounded-full">Mid</h3>
                </div>
                <h2 className="text-8xl font-black text-blue-900 leading-none tracking-tight">1970s</h2>
                <div className="h-2 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <h4 className="text-4xl font-bold text-gray-900 pt-4">Entrepreneurial misstep</h4>
                <p className="text-gray-700 text-xl leading-relaxed pt-2">
                  With the money from the land sale, they ventured into the agricultural equipment business. 
                  But they were met with deceit and lost everything.
                </p>
              </div>
              
              {/* Right Image */}
              <div className="relative z-10 group order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80"
                    alt="Traditional farming"
                    className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yellow Bottom Border */}
          <div className="mt-20 h-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full"></div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl z-50 border-2 border-blue-500">
        <span className="text-sm font-bold">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>
    </div>
    
  );
};

export default JourneyTimeline;














