import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  const images = [
    "/image/Banner.png",
    "/image/Banner2.png",
    "https://rajnigandha.com/cdn/shop/files/Web_Banner_Meetha_Saffron_1920_x_700-01.jpg?v=1727762869",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [current]);

  return (
    <div className="relative w-full h-[650px] overflow-hidden rounded-xl">
      
      {/* IMAGES */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-[650px] object-cover flex-shrink-0"
            alt="slider-img"
          />
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black/80"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-lg hover:bg-black/80"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

    </div>
  );
}
