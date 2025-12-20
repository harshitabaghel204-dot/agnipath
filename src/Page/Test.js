// BalajiJourney.jsx

import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../Component/Navbar"; 
import Footer from '../Component/Footer';

// --- DATA ---
const journey = [
  {
    year: "Early 1970s",
    title: "Sacrificing the Soil",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600",
    text: "When drought dried up their fields, the Virani family didn’t give up — they packed their dreams and moved on. A hard goodbye to farming… but hello to something even bigger.",
  },
  {
    year: "Mid 1970s",
    title: "Entrepreneurial Misstep",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=600",
    text: "Failures taught them more than success ever could. Every ‘no’ was a lesson. Every setback? A step closer to their destiny. 💪",
  },
  {
    year: "1974",
    title: "Cinema Scenes",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=600",
    text: "They started selling wafers in cinema halls — and suddenly, popcorn wasn’t the only thing making people happy. Snacks became their stage. 🍿🎬",
  },
  {
    year: "1978",
    title: "First Factory",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    text: "No fancy machines. Just sweat, passion, and a tiny factory. That’s where Balaji began — not with money, but with heart.",
  },
  {
    year: "1981",
    title: "Turning the Tables",
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=600",
    text: "Agnipath Wafers was born — not just a brand, but a promise. A promise of taste, joy, and moments shared over crunchy bites. ❤️",
  },
  {
    year: "1990s",
    title: "Expansion Era",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600",
    text: "From one town to hundreds — the yellow packet became a symbol of happiness. Every shelf, every home, every picnic — Agnipath was there.",
  },
  {
    year: "2000s",
    title: "National Presence",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600",
    text: "From Gujarat to Goa, Delhi to Dibrugarh — Agnipath became India’s snack companion. Not just a brand. A friend. 🇮🇳",
  },
  {
    year: "Today",
    title: "Legacy Continues",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600",
    text: "With state-of-the-art factories and the same old love, Agnipath still makes snacks that bring families together. Because some stories never end — they just get crunchier. 😊",
  },
];

// Chip Packet Images 
const chipImages = [
  "/image/wafar.png", 
   "/image/BOXANGNIPATH.png" ,
  "/image/masalachips.png" 
];

// --- COMPONENTS ---

// 1. SVG Timeline Path (Unchanged)
const TimelinePath = ({ progress, containerHeight, activeSection }) => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [chipPosition, setChipPosition] = useState({ x: 0, y: 0, angle: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pathData = `M248.7.4s-58.8,151.6-7.7,285.2c17.5,49.8,89,150,278,186,76.8,14.6,256.9,14.8,300.1,94.9,47.8,88.6-130,145.8-184.5,164.6-94.7,32.8-213.6,47.2-272.1,138.9-65.9,103.4-50.4,252,30.2,343.1,46.7,52.8,112.6,83.2,179.1,102.6,68.3,19.9,148.3,15.1,209.8,53.3,110.4,68.7,50.8,230.1-21.4,303.7-86.5,88.2-214.6,138.4-327.9,180.2-92,34-176,104.4-218,187.5-65.3,129.3-57.2,374,90.9,447,108.8,53.6,235.8,38.6,339.7,105.4,90.8,58.4,138.6,154.3,131,262.1-8.1,114.6-97.5,147.2-197.6,168-71.6,14.9-145.8,36.2-202.8,84.2-47.6,40.1-87.7,95.2-113.4,151.8-46.6,102.5-8.3,198,82,260.2,88,60.7,190.4,93.9,296.8,99.2,71.5,3.6,196.5-7.8,238.4,66.7h0c62.7,111.7-92.7,180.5-170.9,211.9-58.4,23.4-118.7,41.5-178.3,61.7-128.5,43.5-318.6,181.6-299.5,337.3,12.8,104.1,160,170.7,245.7,200,91.1,31.2,187.3,59.1,267.3,114.5,58.9,40.9,85.3,91.9,35.8,153.6-34.9,43.4-83.4,76.1-129.4,106.5-57,37.8-119.8,59.6-181.4,87.7-117.8,53.8-308,180.7-244.8,335.1,12.8,26.7,70,89.3,196,126.5,157.5,46.5,238.5,21,328,113,0,0,98.3,137.6-82.5,228-41.3,12.7-122,53-114,113`;

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    if (pathRef.current && pathLength > 0) {
      const currentLength = pathLength * progress;
      const point = pathRef.current.getPointAtLength(currentLength);
      
      const nextPoint = pathRef.current.getPointAtLength(
        Math.min(currentLength + 10, pathLength)
      );
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
      
      setChipPosition({ x: point.x, y: point.y, angle });
      
      const imageIndex = activeSection % chipImages.length;
      setCurrentImageIndex(imageIndex);
    }
  }, [progress, pathLength, activeSection]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full hidden md:block pointer-events-none z-[1]">
      <svg
        viewBox="0 0 1069.1 5873.9"
        className="w-full h-auto"
        style={{ height: containerHeight }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>
            {`
              .timeline-path {
                fill: none;
                stroke: #ffffff;
                stroke-dasharray: 5 6;
                stroke-width: 2px;
              }
              .timeline-path-progress {
                fill: none;
                stroke: #ffffff;
                stroke-width: 3px;
                transition: stroke-dashoffset 0.1s ease-out;
              }
            `}
          </style>
        </defs>
        <path
          ref={pathRef}
          className="timeline-path"
          d={pathData}
          style={{ opacity: 0.3 }}
        />
        <path
          className="timeline-path-progress"
          d={pathData}
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength - (pathLength * progress),
          }}
        />
        <g transform={`translate(${chipPosition.x - 40}, ${chipPosition.y - 53})`}>
          <image
            href={chipImages[currentImageIndex]}
            width="80"
            height="106"
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
              transition: 'transform 0.3s ease-out',
            }}
          />
        </g>
      </svg>
    </div>
  );
};

// 2. Mobile Timeline Dot (Unchanged)
const MobileTimelineDot = ({ isActive }) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-16 md:hidden z-20">
    <div
      className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
        isActive
          ? 'bg-green-500 border-green-500 scale-125'
          : 'bg-white border-green-400'
      }`}
    >
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
      )}
    </div>
  </div>
);

// 3. Journey Section — ✅ TEXTS & TYPOGRAPHY ENHANCED
const JourneySection = ({ item, index, isActive, sectionRef }) => {
  const isEven = index % 2 === 0;
  const firstItemSpacing = index === 0 ? 'mt-24 md:mt-48' : '';

  return (
    <div
      ref={sectionRef}
      className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 py-20 md:py-32 ${firstItemSpacing} ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <MobileTimelineDot isActive={isActive} />

      <div
        className={`w-full md:w-5/12 relative z-[100] transform transition-all duration-700 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
        }`}
      >
        <div className="relative group">
          <div
            className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
              isActive ? 'bg-[#c8a357] blur-xl opacity-20' : 'opacity-0'
            }`}
          />
          <img
            src={item.image}
            alt={item.title}
            className={`relative z-10 rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover transition-all duration-500 ${
              isActive ? 'shadow-[#c8a357] shadow-2xl' : ''
            }`}
            loading="lazy"
          />
          <div
            className={`absolute z-20 -bottom-4 ${
              isEven ? '-right-4' : '-left-4'
            } bg-[#c8a357] text-[#010317] px-6 py-2 rounded-full shadow-lg transition-all duration-500 ${
              isActive ? 'scale-100' : 'scale-75 opacity-50'
            }`}
          >
             {/* Styled Year Badge */}
            <span className="font-serif font-bold italic text-lg">{item.year}</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-2/12" />

      <div
        className={`w-full md:w-5/12 relative z-10 ${
          isEven ? 'md:text-left' : 'md:text-right'
        } text-center transform transition-all duration-700 delay-200 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
        }`}
      >
        {/* YEAR TYPOGRAPHY: Elegant Serif, Large, Gold */}
        <h3
          className={`font-serif text-6xl md:text-8xl font-black italic tracking-tighter transition-colors duration-500 ${
            isActive ? 'text-[#c8a357]' : 'text-[#c8a357]/30'
          }`}
        >
          {item.year}
        </h3>

        {/* TITLE TYPOGRAPHY: Modern Sans, Uppercase, Spaced Out */}
        <h4
          className={`font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.2em] mt-6 transition-colors duration-500 ${
            isActive ? 'text-white' : 'text-white/30'
          }`}
        >
          {item.title}
        </h4>

        {/* BODY TEXT TYPOGRAPHY: Clean Sans, Good Line Height, Soft White */}
        <p
          className={`font-sans mt-6 leading-8 text-lg md:text-xl font-light transition-colors duration-500 ${
            isActive ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          {item.text}
        </p>

        <div
          className={`mt-8 flex items-center gap-2 ${
            isEven ? 'md:justify-start' : 'md:justify-end'
          } justify-center`}
        >
          <div
            className={`h-0.5 rounded-full transition-all duration-700 ${
              isActive ? 'w-24 bg-[#c8a357]' : 'w-8 bg-white/20'
            }`}
          />
          <div
            className={`h-0.5 rounded-full transition-all duration-700 delay-100 ${
              isActive ? 'w-8 bg-[#c8a357]/80' : 'w-4 bg-white/10'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

// 4. Side Progress Dots (Unchanged)
const ProgressIndicator = ({ activeSection, onSectionClick }) => (
  <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
    {journey.map((item, i) => (
      <button
        key={i}
        onClick={() => onSectionClick(i)}
        className={`group flex items-center gap-2 transition-all duration-300 ${
          i === activeSection ? 'scale-110' : 'opacity-50 hover:opacity-100'
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            i <= activeSection ? 'bg-[#c8a357]' : 'bg-gray-500'
          }`}
        />
        <span
          className={`text-xs font-medium font-sans uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
            i === activeSection
              ? 'opacity-100 text-[#c8a357] translate-x-0'
              : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'
          }`}
        >
          {item.year}
        </span>
      </button>
    ))}
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function BalajiJourney() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = window.scrollY + timelineRect.top;
      const timelineHeight = timelineRect.height;
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportMiddle - timelineTop) / timelineHeight
        )
      );
      setScrollProgress(progress);

      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;

          if (viewportMiddle >= sectionTop) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (timelineRef.current) {
        setTimelineHeight(timelineRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div
      className="bg-[#010317] min-h-screen font-sans"
      ref={containerRef}
    >
      <Navbar/>
      
      {/* Top Banner Image */}
      <div className="w-full h-[420px] md:h-[500px] overflow-hidden">
        <img
          src="/image/topbanner.png"
          alt="Balaji Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="max-w-6xl mx-auto px-4 md:px-8 relative"
        ref={timelineRef}
      >
        <TimelinePath
          progress={scrollProgress}
          containerHeight={timelineHeight}
          activeSection={activeSection} 
        />

        {/* Mobile Chip */}
        <div className="md:hidden sticky top-1/2 -translate-y-1/2 z-5 flex justify-center pointer-events-none mb-[-80px]">
          <div className="relative">
            <div className="absolute inset-0 bg-[#c8a357] rounded-full blur-2xl opacity-30 scale-150" />
            <img
              src={chipImages[activeSection % chipImages.length]} 
              alt="Balaji Chips"
              className="w-16 h-16 object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {journey.map((item, i) => (
          <JourneySection
            key={i}
            item={item}
            index={i}
            isActive={i <= activeSection}
            sectionRef={(el) => (sectionRefs.current[i] = el)}
          />
        ))}
      </div>

      <ProgressIndicator
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Importing Premium Fonts: Playfair Display (Serif) and Plus Jakarta Sans (Sans) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }1

        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Footer/>
    </div>
  );
}