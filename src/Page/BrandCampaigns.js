import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Play } from "lucide-react";

const NoodlesGrid = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Agnipath | Flamyn' Chilli Noodles",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Agnipath | Masala Noodles – Kyunki Life Badi Masaledar Hai",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Agnipath | Hot Bites – Masaledar Zindagi",
      hasVideo: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Agnipath | Noodles Se Zyada Masaledar",
      hasVideo: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] text-white">
      <Navbar />

      {/* ✅ AGNIPATH BANNER */}
           <div className="w-full h-[320px] md:h-[300px] overflow-hidden">
        <img
          src="/image/topbanner.png"
          alt="Balaji Banner"
          className="w-full h-full object-cover"
        />
      </div>
      {/* PRODUCTS GRID */}
      <div className="py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3]">
                {playingVideo === product.id && product.hasVideo ? (
                  <video
                    src={product.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                )}

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Play Button */}
                {product.hasVideo && playingVideo !== product.id && (
                  <button
                    onClick={() => setPlayingVideo(product.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition rounded-t-2xl"
                  >
                    <Play className="w-10 h-10 text-white" />
                  </button>
                )}
              </div>

              {/* Title */}
              <div className="p-4">
                <p className="text-sm font-medium line-clamp-2">
                  {product.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NoodlesGrid;
