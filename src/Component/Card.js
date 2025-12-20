import React, { useState, useEffect, useRef } from "react";

const GameSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  /* 🔥 AGNIPATH PRODUCTS DATA */
  const products = [
    {
      id: 1,
      title: "Agnipath Wafers",
      description:
        "Crispy aur light wafers jo har bite me perfect crunch aur taste dete hain.",
      image: "/image/wafar.png",
    },
    {
      id: 2,
      title: "Agnipath Masala Chips",
      description:
        "Chatpata masala aur zabardast crunch – har snack time ka hero.",
      image: "/image/masalachips.png",
    },
    {
      id: 3,
      title: "Agnipath Combo Box",
      description:
        "Multiple flavours ek hi box me – family aur parties ke liye perfect.",
      image: "/image/BOXANGNIPATH.png",
    },
    {
      id: 4,
      title: "Agnipath Special Snacks",
      description:
        "Premium taste aur quality ke saath Agnipath ka signature flavour.",
      image: "/image/BOXANGNIPATH.png",
    },
  ];

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* CENTER ACTIVE CARD */
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.children[activeIndex];
      if (card) {
        const scrollLeft =
          card.offsetLeft -
          container.offsetWidth / 2 +
          card.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#010317] py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Trending Agnipath Products
      </h2>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { scrollbar-width: none; }
        `}</style>

        {products.map((product, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={product.id}
              className={`
                snap-center flex-shrink-0 rounded-2xl overflow-hidden relative
                transition-all duration-500
                ${
                  isActive
                    ? "w-[260px] sm:w-[420px] md:w-[520px]"
                    : "w-[200px] sm:w-[300px] opacity-80"
                }
              `}
              style={{
                height: "260px",
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: "no-repeat",

                /* ✅ IMAGE CUT FIX */
                backgroundSize: "contain",
                backgroundPosition: "top center",
              }}
            >
              {/* Desktop overlay */}
              <div className="hidden sm:block absolute inset-0 bg-black/10"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg sm:text-2xl font-bold">
                  {product.title}
                </h3>

                {isActive && (
                  <p className="text-sm sm:text-base text-gray-200 mt-2">
                    {product.description}
                  </p>
                )}
              </div>

              {/* ACTIVE TAG */}
              {isActive && (
                <span className="absolute top-3 right-3 bg-[#c8a357] text-black text-xs px-3 py-1 rounded-full font-bold">
                  AGNIPATH
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              activeIndex === index
                ? "bg-[#c8a357] scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSlider;
