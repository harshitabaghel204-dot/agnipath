import React, { useState, useEffect, useRef } from "react";

export default function SpiceParallax() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const scrolled = -containerTop;
        setScrollY(Math.max(0, scrolled));
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = [
    {
      name: "",
      bgImage: "/image/image7.png",
      items: [
        { 
          image: "/image/sliderelachi.png", 
          name: "Cardamom Seeds", 
          left: "50%", 
          top: "10%", 
          size: "w-32", 
          fallDelay: 0
        },
        { 
          image: "", 
          name: "", 
          left: "75%", 
          top: "25%", 
          size: "w-28", 
          fallDelay: 0
        },
      ],
    },
    {
      name: "",
      nameUrdu: "",
      bgImage: "/image/oil1.png",
      items: [
        { 
          image: "https://static.vecteezy.com/system/resources/thumbnails/036/161/016/small/ai-generated-oil-drops-or-serum-droplet-gold-on-a-transparent-background-free-png.png", 
          name: "Sandalwood Oil", 
          left: "50%", 
          top: "20%", 
          size: "w-32", 
          fallDelay: 0
        },
        { 
          image: "", 
          name: "", 
          left: "70%", 
          top: "40%", 
          size: "w-29", 
          fallDelay: 0
        },
      ],
    },
    {
      name: "",
      bgImage: "/image/roseback.png",
      items: [
        { 
          image: "/image/rosepatti.png", 
          name: "Rose Essence", 
          left: "50%", 
          top: "45%", 
          size: "w-32", 
          fallDelay: 0
        },
        { 
          image: "", 
          name: "", 
          left: "70%", 
          top: "40%", 
          size: "w-29", 
          fallDelay: 0
        },
      ],
    },
    {
      name: "",
      nameUrdu: "",
      bgImage: "/image/ruh.png",
      items: [
        { 
          image: "/image/Ruhkewda.png", 
          name: "Ruh Kewda", 
          left: "50%", 
          top: "40%", 
          size: "w-32", 
          fallDelay: 0
        },
        { 
          image: "", 
          name: "", 
          left: "70%", 
          top: "50%", 
          size: "w-29", 
          fallDelay: 0
        },
      ],
    },
    {
      name: "",
      nameUrdu: "",
      bgImage: "/image/cloves1.png",
      items: [
        { 
          image: "/image/Clovesone.png", 
          name: "Cloves", 
          left: "50%", 
          top: "35%", 
          size: "w-32", 
          fallDelay: 0
        },
        { 
          image: "/image/Cloves.png", 
          name: "", 
          left: "65%", 
          top: "55%", 
          size: "w-28", 
          fallDelay: 0
        },
        { 
          image: "/image/kewda3.png", 
          name: "", 
          left: "85%", 
          top: "30%", 
          size: "w-24", 
          fallDelay: 0
        },
      ],
    },
    {
      name: "",
      nameUrdu: "",
      bgImage: "",
      items: [
        {
          image: "/image/BOXANGNIPATH.png",
          name: "Rajnigandha",
          left: "50%",
          top: "60%",
          size: "w-70",
          isContainer: true,
          fallDelay: 0,
        },
      ],
    },
  ];

  const totalHeight = sections.length * windowHeight;
  const scrollProgress = totalHeight > 0 ? scrollY / totalHeight : 0;

  const calculateFallPosition = (sectionIdx, item) => {
    // Start falling after scrolling past the first section
    const fallStartScroll = windowHeight;
    
    // Only start falling after we've scrolled past the first section
    if (scrollY <= fallStartScroll) {
      return 0;
    }
    
    // Calculate the target position (Rajnigandha section)
    const targetSection = sections.length - 1;
    const targetY = targetSection * windowHeight;
    
    // Calculate current section position
    const currentSectionY = sectionIdx * windowHeight;
    
    // Total distance to fall
    const totalFallDistance = targetY - currentSectionY;
    
    // Calculate fall progress (starts after first section, completes by last section)
    const scrollPastStart = scrollY - fallStartScroll;
    const totalScrollDistance = (targetSection - 1) * windowHeight;
    const fallProgress = Math.min(1, scrollPastStart / totalScrollDistance);
    
    return totalFallDistance * fallProgress;
  };

  const generateParticles = (count) => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    return p;
  };

  const particlesRef = useRef([]);

  if (particlesRef.current.length === 0) {
    particlesRef.current = sections.map(() => generateParticles(20));
  }

  return (
    <div ref={containerRef} className="relative bg-[#010317]">
      {/* SCROLL INDICATOR */}
      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce"
        style={{
          opacity: scrollProgress < 0.1 ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        <span className="text-white/60 text-sm uppercase tracking-widest"></span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-amber-400/80"
        >
          <path 
            d="M12 5v14m0 0l-7-7m7 7l7-7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* SECTIONS */}
      {sections.map((section, sectionIdx) => (
        <div
          key={sectionIdx}
          className="relative h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${section.bgImage})` }}
        >
          {/* PARTICLES */}
          <div className="absolute inset-0 overflow-hidden">
            {particlesRef.current[sectionIdx].map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  transform: `translateY(${
                    (scrollY - sectionIdx * windowHeight) * particle.speed
                  }px)`,
                  opacity: particle.opacity,
                }}
              />
            ))}
          </div>

          {/* SECTION LABEL */}
          <div
            className="absolute top-8 left-8 z-10"
            style={{
              transform: `translateY(${
                (scrollY - sectionIdx * windowHeight) * 0.1
              }px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-400/80 text-lg">0{sectionIdx + 1}</span>
              <span className="text-white/60 text-lg uppercase tracking-widest">
                {section.name}
              </span>
            </div>
            <p className="text-white/50 text-2xl font-light" dir="rtl">
              {section.nameUrdu}
            </p>
          </div>

          {/* ITEMS */}
          {section.items.map((item, itemIdx) => {
            const isContainer = item.isContainer;
            const isLast = sectionIdx === sections.length - 1;
            const hasName = item.name && item.name.trim() !== "";

            // Calculate fall position for items with names (not in last section, not containers)
            let fallY = !isContainer && !isLast && hasName
              ? calculateFallPosition(sectionIdx, item)
              : 0;

            const parallaxY =
              (scrollY - sectionIdx * windowHeight) *
              (0.15 + itemIdx * 0.05);

            return (
              <div
                key={itemIdx}
                className="absolute z-20"
                style={{
                  left: item.left,
                  top: item.top,
                  transform: `translate(-50%, -50%) translateY(${parallaxY + fallY}px)`,
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={item.image} 
                    alt=""
                    className={`${item.size} h-auto object-contain drop-shadow-2xl`}
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* GOLD LIGHT ANIMATION FOR RAJNIGANDHA SECTION */}
          {sectionIdx === sections.length - 1 && scrollProgress > 0.8 && (
            <div
              className="absolute z-10 rounded-full animate-pulse"
              style={{
                left: "50%",
                top: "60%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%)",
                opacity: Math.max(0, (scrollProgress - 0.8) / 0.2),
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}