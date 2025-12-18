import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { Play } from "lucide-react";
import Footer from "../Component/Footer";
const NoodlesGrid = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp | Flamyn' Chilli Noodles",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp | Masala Noodles Kyunki Life Badi Masaledar Hai",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp | Hot Bites Main Zindagi Jo Maze, With Masala N...",
      hasVideo: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp | Noodles Se Garao Se Bhi Zyada Masaledar",
      hasVideo: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp | Hot Bites Main Zindagi Jo Maze",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop",
      badge: "Tastefully Hot",
      title: "Chsp Life Badi Masaledar Hai Toh Chsp Bhi Masaledar...",
      hasVideo: true,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div className="min-h-screen bg-[#010317]">
      <Navbar />

      {/* Banner */}
      <div className="w-full h-72 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80"
          alt="Balaji Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Grid */}
      <div className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative">
                {playingVideo === product.id && product.hasVideo ? (
                  <video
                    src={product.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                )}

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>

                {/* Play Button */}
                {product.hasVideo && playingVideo !== product.id && (
                  <button
                    onClick={() => handlePlayVideo(product.id)}
                    className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
                  >
                    <Play className="w-5 h-5 text-black fill-black" />
                  </button>
                )}
              </div>

              {/* Title */}
              <div className="p-4">
                <p className="text-sm font-medium text-white line-clamp-2">
                  {product.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NoodlesGrid;
