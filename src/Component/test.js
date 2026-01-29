// import React, { useState, useEffect, useRef } from "react";

// export default function SpiceParallax() {
//   const [scrollY, setScrollY] = useState(0);
//   const containerRef = useRef(null);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setScrollY(Math.max(0, -rect.top));
//       }
//     };

//     const handleResize = () => {
//       setWindowHeight(window.innerHeight);
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const sections = [
//     {
//       bgImage: "/image/image7.png",
//       mobileTopOffset: 0,
//       items: [
//         { image: "/image/sliderelachi.png", left: "50%", top: "18%", maxWidth: "150px" },
//       ],
//     },
//     {
//       bgImage: "/image/oil1.png",
//       mobileTopOffset: -40,
//       items: [
//         {
//           image:
//             "https://static.vecteezy.com/system/resources/thumbnails/036/161/016/small/ai-generated-oil-drops-or-serum-droplet-gold-on-a-transparent-background-free-png.png",
//           left: "50%",
//           top: "28%",
//           maxWidth: "150px",
//         },
//       ],
//     },
//     {
//       bgImage: "/image/roseback.png",
//       mobileTopOffset: -50,
//       items: [
//         { image: "/image/rosepatti.png", left: "50%", top: "48%", maxWidth: "150px" },
//       ],
//     },
//     {
//       bgImage: "/image/ruh.png",
//       mobileTopOffset: -45,
//       items: [
//         { image: "/image/Ruhkewda.png", left: "50%", top: "42%", maxWidth: "150px" },
//       ],
//     },
//     {
//       bgImage: "/image/cloves1.png",
//       mobileTopOffset: -35,
//       items: [
//         { image: "/image/Clovesone.png", left: "45%", top: "38%", maxWidth: "150px" },
//         { image: "", left: "65%", top: "58%", maxWidth: "120px" },
//       ],
//     },
//     {
//       bgImage: "/image/lastbg.png",
//       mobileTopOffset: 0,
//       items: [
//         {
//           image: "/image/BOXANGNIPATH.png",
//           left: "50%",
//           top: "60%",
//           maxWidth: "320px",
//           isContainer: true,
//         },
//       ],
//     },
//   ];

//   const calculateFallPosition = (sectionIdx) => {
//     const fallStartScroll = windowHeight;
//     if (scrollY <= fallStartScroll) return 0;

//     const targetY = (sections.length - 1) * windowHeight;
//     const currentSectionY = sectionIdx * windowHeight;
//     const totalFallDistance = targetY - currentSectionY;

//     const scrollPastStart = scrollY - fallStartScroll;
//     const totalScrollDistance = (sections.length - 2) * windowHeight;
//     const fallProgress = Math.min(1, scrollPastStart / totalScrollDistance);

//     return totalFallDistance * fallProgress;
//   };

//   return (
//     <div ref={containerRef} className="relative bg-[#010317] overflow-hidden">
//       {sections.map((section, sectionIdx) => (
//         <div
//           key={sectionIdx}
//           className="relative w-full flex items-center justify-center"
//           style={{
//             backgroundImage: `url(${section.bgImage})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: isMobile ? "center -30px" : "center",
//             backgroundSize: isMobile ? "100% auto" : "cover",
//             // ✅ Mobile height badha di - 70vh
//             height: isMobile ? "100vh" : "100vh",
//             minHeight: isMobile ? "50vh" : "100vh",
//             padding: 0,
//             margin: 0,
//             display: "flex",  
//           }}  
//         >
//           {section.items.map((item, itemIdx) => {
//             const isLast = sectionIdx === sections.length - 1;

//             const fallY =
//               !item.isContainer && !isLast
//                 ? calculateFallPosition(sectionIdx)
//                 : 0;

//             const parallaxY =
//               (scrollY - sectionIdx * windowHeight) *
//               (isMobile ? 0.05 : 0.12 + itemIdx * 0.04);

//             const mobileOffset = isMobile ? section.mobileTopOffset : 0;

//             return (
//               <div
//                 key={itemIdx}
//                 className="absolute z-20"
//                 style={{
//                   left: item.left,
//                   top: item.top,
//                   transform: `translate(-50%, -50%) translateY(${parallaxY + fallY + mobileOffset}px)`,
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="h-auto object-contain drop-shadow-xl"
//                   style={{
//                     maxWidth: item.isContainer
//                       ? isMobile
//                         ? "clamp(260px, 90vw, 380px)"
//                         : item.maxWidth
//                       : isMobile
//                       ? "clamp(50px, 30vw, 110px)"
//                       : item.maxWidth,
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// }





import React, { useState, useEffect, useRef } from "react";

export default function SpiceParallax() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [deviceType, setDeviceType] = useState("desktop");

  // Detect device type
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setScrollY(Math.max(0, -rect.top));
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      detectDevice();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    detectDevice();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ==================== MOBILE CONFIG ====================
  const mobileSections = [
    {
      bgImage: "/image/betelnut.png",
      items: [
        { image: "/image/beluntimage.png", left: "50%", top:"40%", maxWidth: "80px" },
      ],
    },
    {
      bgImage: "/image/mobile6.png",
      items: [
        { image: "/image/sliderelachi.png", left: "50%", top: "40%", maxWidth: "120px" },
      ],
    },
    {
      bgImage: "/image/mobile7.png",
      items: [
        {
          image: "https://static.vecteezy.com/system/resources/thumbnails/036/161/016/small/ai-generated-oil-drops-or-serum-droplet-gold-on-a-transparent-background-free-png.png",
          left: "50%",
          top: "40%",
          maxWidth: "110px",
        },
      ],
    },
    {
      bgImage: "/image/mobile8.png",
      items: [
        { image: "/image/rosepatti.png", left: "50%", top: "45%", maxWidth: "80px" },
      ],
    },
    {
      bgImage: "/image/mobileruh.png",
      items: [
        { image: "/image/Ruhkewda.png", left: "50%", top: "45%", maxWidth: "100px" },
      ],
    },
     {
      bgImage: "/image/katthaimage.png",
      items: [
        { image: "/image/katthamo.png", left: "50%", top: "42%", maxWidth: "90px" },
      ],
    },
    {
      bgImage: "/image/mobile10.png",
      items: [
        { image: "/image/Clovesone.png", left: "50%", top: "45%", maxWidth: "90px" },
      ],
    },
    {
      bgImage: "/image/lastbg.png",
      items: [
        {
          image: "/image/BOXANGNIPATH.png",
          left: "50%",
          top: "50%",
          maxWidth: "280px",
          isContainer: true,
        },
      ],
    },
  ];

  // ==================== TABLET CONFIG ====================
  const tabletSections = [
    {
      bgImage: "/image/image7.png",
      items: [
        { image: "/image/sliderelachi.png", left: "50%", top: "25%", maxWidth: "130px" },
      ],
    },
    {
      bgImage: "/image/oil1.png",
      items: [
        {
          image: "https://static.vecteezy.com/system/resources/thumbnails/036/161/016/small/ai-generated-oil-drops-or-serum-droplet-gold-on-a-transparent-background-free-png.png",
          left: "50%",
          top: "30%",
          maxWidth: "130px",
        },
      ],
    },
    {
      bgImage: "/image/roseback.png",
      items: [
        { image: "/image/rosepatti.png", left: "50%", top: "45%", maxWidth: "130px" },
      ],
    },
    {
      bgImage: "/image/ruh.png",
      items: [
        { image: "/image/Ruhkewda.png", left: "50%", top: "42%", maxWidth: "130px" },
      ],
    },
     {
      bgImage: "/image/katthaimage.png",
      items: [
        { image: "/image/katthamo.png", left: "50%", top: "42%", maxWidth: "150px" },
      ],
    },
    {
      bgImage: "/image/cloves1.png",
      items: [
        { image: "/image/Clovesone.png", left: "48%", top: "40%", maxWidth: "130px" },
      ],
    },
    {
      bgImage: "/image/lastbg.png",
      items: [
        {
          image: "/image/BOXANGNIPATH.png",
          left: "50%",
          top: "55%",
          maxWidth: "300px",
          isContainer: true,
        },
      ],
    },
  ];

  // ==================== DESKTOP CONFIG ====================
  const desktopSections = [


    {
      bgImage: "/image/belslider.png",
      items: [
        { image: "/image/beluntimage.png", left: "50%", top: "18%", maxWidth: "100px" },
      ],
    },
    {
      bgImage: "/image/image7.png",
      items: [
        { image: "/image/sliderelachi.png", left: "50%", top: "18%", maxWidth: "150px" },
      ],
    },
    
    {
      bgImage: "/image/oil1.png",
      items: [
        {
          image: "https://static.vecteezy.com/system/resources/thumbnails/036/161/016/small/ai-generated-oil-drops-or-serum-droplet-gold-on-a-transparent-background-free-png.png",
          left: "50%",
          top: "28%",
          maxWidth: "150px",
        },
      ],
    },
    {
      bgImage: "/image/roseback.png",
      items: [
        { image: "/image/rosepatti.png", left: "50%", top: "48%", maxWidth: "150px" },
      ],
    },
    {
      bgImage: "/image/ruh.png",
      items: [
        { image: "/image/Ruhkewda.png", left: "50%", top: "42%", maxWidth: "150px" },
      ],
    },
     {
      bgImage: "/image/katthaimage.png",
      items: [
        { image: "/image/katthamo.png", left: "50%", top: "42%", maxWidth: "150px" },
      ],
    },
    {
      bgImage: "/image/cloves1.png",
      items: [
        { image: "/image/Clovesone.png", left: "45%", top: "38%", maxWidth: "150px" },
      ],
    },
    {
      bgImage: "/image/lastbg.png",
      items: [
        {
          image: "/image/BOXANGNIPATH.png",
          left: "50%",
          top: "60%",
          maxWidth: "420px",
          isContainer: true,
        },
      ],
    },
  ];

  // Get sections based on device
  const getSections = () => {
    if (deviceType === "mobile") return mobileSections;
    if (deviceType === "tablet") return tabletSections;
    return desktopSections;
  };

  const sections = getSections();

  // Calculate fall position for parallax effect
  const calculateFallPosition = (sectionIdx, sectionHeight) => {
    const fallStartScroll = sectionHeight;
    if (scrollY <= fallStartScroll) return 0;

    const targetY = (sections.length - 1) * sectionHeight;
    const currentSectionY = sectionIdx * sectionHeight;
    const totalFallDistance = targetY - currentSectionY;

    const scrollPastStart = scrollY - fallStartScroll;
    const totalScrollDistance = (sections.length - 2) * sectionHeight;
    const fallProgress = Math.min(1, scrollPastStart / totalScrollDistance);

    return totalFallDistance * fallProgress;
  };

  // ==================== MOBILE RENDER ====================
  const renderContainerMobile = () => {
    const sectionHeight = windowHeight * 0.6; // 60vh for mobile

    return (
      <div ref={containerRef} className="relative bg-[#010317] overflow-hidden">
        {mobileSections.map((section, sectionIdx) => (
          <div
            key={sectionIdx}
            className="relative w-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${section.bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "60vh",
              minHeight: "350px",
            }}
          >
            {section.items.map((item, itemIdx) => {
              if (!item.image) return null;

              const isLast = sectionIdx === mobileSections.length - 1;
              const fallY = !item.isContainer && !isLast
                ? calculateFallPosition(sectionIdx, sectionHeight)
                : 0;

              const parallaxY = (scrollY - sectionIdx * sectionHeight) * 0.03;

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
                  <img
                    src={item.image}
                    alt=""
                    className="h-auto object-contain drop-shadow-xl"
                    style={{ maxWidth: item.maxWidth }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  // ==================== TABLET RENDER ====================
  const renderContainerTablet = () => {
    const sectionHeight = windowHeight * 0.8; // 80vh for tablet

    return (
      <div ref={containerRef} className="relative bg-[#010317] overflow-hidden">
        {tabletSections.map((section, sectionIdx) => (
          <div
            key={sectionIdx}
            className="relative w-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${section.bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "80vh",
              minHeight: "500px",
            }}
          >
            {section.items.map((item, itemIdx) => {
              if (!item.image) return null;

              const isLast = sectionIdx === tabletSections.length - 1;
              const fallY = !item.isContainer && !isLast
                ? calculateFallPosition(sectionIdx, sectionHeight)
                : 0;

              const parallaxY = (scrollY - sectionIdx * sectionHeight) * 0.08;

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
                  <img
                    src={item.image}
                    alt=""
                    className="h-auto object-contain drop-shadow-xl"
                    style={{ maxWidth: item.maxWidth }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  // ==================== DESKTOP RENDER ====================
  const renderContainerDesktop = () => {
    const sectionHeight = windowHeight; // 100vh for desktop

    return (
      <div ref={containerRef} className="relative bg-[#010317] overflow-hidden">
        {desktopSections.map((section, sectionIdx) => (
          <div
            key={sectionIdx}
            className="relative w-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${section.bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "100vh",
              minHeight: "100vh",
            }}
          >
            {section.items.map((item, itemIdx) => {
              if (!item.image) return null;

              const isLast = sectionIdx === desktopSections.length - 1;
              const fallY = !item.isContainer && !isLast
                ? calculateFallPosition(sectionIdx, sectionHeight)
                : 0;

              const parallaxY = (scrollY - sectionIdx * sectionHeight) * (0.12 + itemIdx * 0.04);

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
                  <img
                    src={item.image}
                    alt=""
                    className="h-auto object-contain drop-shadow-xl"
                    style={{ maxWidth: item.maxWidth }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  // ==================== MAIN RENDER ====================
  // Conditionally render based on device type
  if (deviceType === "mobile") {
    return renderContainerMobile();
  }

  if (deviceType === "tablet") {
    return renderContainerTablet();
  }

  return renderContainerDesktop();
}