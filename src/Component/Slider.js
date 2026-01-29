import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider() {
  const images = [
    "/image/banner5.png",
    "/image/Banner2.png",
    "/image/bannner3.png",
    "/image/banner4.png",
    "/image/Banner.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden ">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className="
              w-full flex-shrink-0 object-cover

              h-[200px]
              sm:h-[220px]
              md:h-[380px]
              lg:h-[500px]

              object-center
              sm:object-[50%_50%]
              md:object-[50%_40%]
            "
          />
        ))}
      </div>

      {/* LEFT */}
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 p-2 rounded-full"
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* RIGHT */}
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 p-2 rounded-full"
        onClick={() =>
          setCurrent(current === images.length - 1 ? 0 : current + 1)
        }
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
