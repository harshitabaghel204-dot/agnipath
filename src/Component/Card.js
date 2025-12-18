import React, { useState, useEffect, useRef } from 'react';

const GameSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const games = [
    {
      id: 1,
      title: "Dota 2",
      description: "Valve ka legendary MOBA jahan 2 teams 5v5 battle karte hain ancient structures ko destroy karne ke liye.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Crunchem_Masala_Masti_Wafers_Default_bc03ebaa-4c86-4de2-977b-c25c873ade91.png?v=1749561574&width=1500"
    },
    {
      id: 2,
      title: "The Witcher 3",
      description: "Geralt of Rivia ki epic journey - monsters hunt karna, morally complex choices lena, aur vast open world explore karna.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Aloo_Sev_Default_Image_4c7257df-4685-439b-b5db-8f20e68e5a63.png?v=1749559689&width=1500"
    },
    {
      id: 3,
      title: "RDR 2",
      description: "Arthur Morgan ki emotional journey - Wild West ke last days mein outlaw gang ke saath survive karna.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Khakhra_Masala_Default_Image_4e08b10b-a317-46ba-906d-eb5f0b90c590.png?v=1746595955&width=1500"
    },
    {
      id: 4,
      title: "PUBG Mobile",
      description: "Battle Royale ka king! 100 players drop-in, loot karte hain, aur last survivor banna hai.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Tikha_Mitha_Mix_Default_Image_9db6724f-6d3f-45cd-a063-f5d21f802c89.png?v=1749558933&width=1500"
    },
    {
      id: 5,
      title: "Fortnite",
      description: "Vibrant battle royale with building mechanics, regular live events, aur popular crossovers.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Masala_Sev_Murmura_Default_Image_4651bad8-a0ca-4873-ad5c-25df46d8d46b.png?v=1753179554&width=1500"
    },
    {
      id: 6,
      title: "Far Cry 5",
      description: "Hope County, Montana mein fanatical doomsday cult ke against lone gunfighter ki story.",
      image: "https://www.balajiwafers.com/cdn/shop/files/Katak_Batak_Chilli_Lemon_Default_Image_28e1f5af-2cb1-4ae1-a2e2-733e0e1df3e4.png?v=1749558662&width=1500"
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % games.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to active card
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.children[activeIndex];
      if (card) {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#010317] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 font-['Poppins']">
          Trending Games
        </h2>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .card-transition {
              transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
            }
          `}</style>

          {games.map((game, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={game.id}
                className={`
                  flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer
                  card-transition snap-start
                  ${isActive 
                    ? 'w-[500px] md:w-[600px] shadow-xl scale-100' 
                    : 'w-[300px] md:w-[350px] scale-95 opacity-80 hover:opacity-100 hover:scale-100'
                  }
                `}
                style={{
                  height: "400px",
                  backgroundImage: `url(${game.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 text-white p-6 pt-16">
                  <h3 className="text-2xl font-bold mb-2 font-['Poppins']">
                    {game.title}
                  </h3>
                  {isActive && (
                    <p className="text-gray-200 leading-relaxed font-['Open_Sans']">
                      {game.description}
                    </p>
                  )}
                </div>

                {/* Active Indicator Badge */}
                {isActive && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ACTIVE
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {games.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-red-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;