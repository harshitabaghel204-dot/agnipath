import React, { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

const TechTasteHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Start playing video when button is clicked
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    // Pause and reset videoscroll
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#010317]">
      {/* Header Section */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-[#010317]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className=" max-w-3xl mx-auto text-center">  
           <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#c8a357" }}
            >
              The tech behind<br />the taste
            </h1>
            
             <p className="text-white text-sm md:text-base mb-6 leading-relaxed">
              "At our technical, Vanderbandan BBN gaat", according to Frans in our kitchen.
              We believe that old flavours matter. By using 2 international herbs, you get 
              the perfect mix for any dish."
            </p>
            
          </div>
        </div>
      </div>

      {/* Video/Image Section */}
      <div className="relative w-full h-[150vh]">
        {/* Background Video (hidden until play button is clicked) */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isPlaying ? 'opacity-100 z-20' : 'opacity-0 -z-10'
          }`}
          loop
          playsInline
        >
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Background Image (shown when video is not playing) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80')`,
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-black/40"></div>
        </div>

        {/* Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none pt-48 md:pt-56 lg:pt-64">
            <button
              onClick={handlePlayClick}
              className="group relative pointer-events-auto"
              aria-label="Play video"
            >
              {/* White circle background */}
              <div className="absolute inset-0 bg-white rounded-full transform scale-100 group-hover:scale-110 transition-transform duration-300 shadow-2xl"></div>
              
              {/* Play icon */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                <Play 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-blue-600 fill-blue-600 ml-2"
                />
              </div>

              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-white/50 animate-ping"></div>
            </button>
          </div>
        )}

        {/* Close Video Button (shown when video is playing) */}
        {isPlaying && (
          <div className="absolute top-8 right-8 z-30">
            <button
              onClick={handleCloseVideo}
              className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TechTasteHero;
