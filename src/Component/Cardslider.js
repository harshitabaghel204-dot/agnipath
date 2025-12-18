import React, { useState, useEffect } from 'react';

const WineSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&auto=format&fit=crop&q=60",
      title: "Estate Collection",
      label: "ESTATE",
      description: "Handcrafted wines from our finest vineyards",
      buttonText: "Explore Range"
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1719997502353-88e25b8f266c?w=800&auto=format&fit=crop&q=60",
      title: "The Perfect Pairing",
      label: "LIFESTYLE",
      description: "Discover the art of wine and literature, where every sip tells a story",
      buttonText: "Learn More"
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1677327746215-6d9411e306f1?w=800&auto=format&fit=crop&q=60",
      title: "Aroma Experience",
      label: "AROMA",
      description: "Indulge in the rich bouquet of our premium collection",
      buttonText: "Explore Range"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full flex">
        {slides.map((slide, index) => {
          const position = (index - currentSlide + slides.length) % slides.length;
          
          return (
            <div
              key={slide.id}
              className={`absolute h-full transition-all duration-1000 ease-in-out ${
                position === 0 
                  ? 'left-0 w-1/3 z-30' 
                  : position === 1 
                  ? 'left-1/3 w-1/3 z-20' 
                  : 'left-2/3 w-1/3 z-10'
              }`}
            >
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                {/* Image with Zoom Effect */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dynamic Overlay */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  position === 1 
                    ? 'bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80'
                    : 'bg-black bg-opacity-20 group-hover:bg-opacity-40'
                }`}></div>

                {/* Rotating Labels */}
                {position === 0 && (
                  <div className="absolute top-8 left-8 text-white transform -rotate-90 origin-left text-sm tracking-widest font-light transition-all duration-700 group-hover:translate-y-3 opacity-0 group-hover:opacity-100">
                    {slide.label}
                  </div>
                )}

                {position === 2 && (
                  <div className="absolute top-8 right-8 text-gray-200 transform rotate-90 origin-right text-sm tracking-widest font-light transition-all duration-700 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100">
                    {slide.label}
                  </div>
                )}

                {/* Center Content - Only for Middle Card */}
                {position === 1 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
                    <div className="max-w-md text-center space-y-4 transform transition-all duration-700 group-hover:-translate-y-4 opacity-0 group-hover:opacity-100">
                      <h2 className="text-4xl font-serif mb-2 animate-[fadeInUp_0.8s_ease-out]">
                        {slide.title}
                      </h2>
                      <p className="text-sm leading-relaxed opacity-90 animate-[fadeInUp_1s_ease-out]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Floating Wine Glass - Only for Right Card */}
                {position === 2 && (
                  <div className="absolute bottom-32 left-20 animate-[float_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-16 h-24 relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded-full bg-white bg-opacity-40 backdrop-blur-sm"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-300"></div>
                    </div>
                  </div>
                )}

                {/* Button with Hover Effect */}
                <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                  bg-white text-gray-800 px-6 py-2 text-sm rounded-md 
                  hover:scale-110 hover:shadow-2xl hover:bg-opacity-90
                  transition-all duration-300 shadow-md
                  opacity-0 group-hover:opacity-100">
                  {slide.buttonText}
                </button>

                {/* Card Number Indicator */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 
                  bg-white bg-opacity-20 backdrop-blur-sm px-4 py-1 rounded-full
                  text-white text-xs tracking-wider opacity-0 group-hover:opacity-100
                  transition-all duration-500">
                  {String(slide.id).padStart(2, '0')}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Dots */}
      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2 bg-white' 
                : 'w-2 h-2 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div> */}

      {/* Navigation Arrows */}
      {/* <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40
          bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full
          hover:bg-opacity-40 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40
          bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full
          hover:bg-opacity-40 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WineSlider;