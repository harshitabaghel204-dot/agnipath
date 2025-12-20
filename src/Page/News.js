import React from "react";
import Navbar from "../Component/Navbar";
import { ArrowRight, BookOpen } from "lucide-react";
import Footer from "../Component/Footer";

const FreshTakesBlog = () => {
  const articles = [
    {
      id: 1,
      category: "Agnipath Snacks",
      image:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=400&fit=crop",
      title:
        "From Local Roots to National Fame: The Crunchy Story of Agnipath Snacks",
      description:
        "Agnipath Snacks began with a bold vision—authentic spices, premium quality, and a crunch that wins hearts across India.",
      date: "Oct 12, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "Trends",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      title: "Snack Like a Pro: Why Agnipath Snacks Are a Must-Have",
      date: "Oct 10, 2025",
      readTime: "3 min read",
    },
    {
      id: 3,
      category: "Flavors",
      image:
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
      title: "Bold Spices, Big Crunch — The Agnipath Flavor Formula",
      date: "Oct 08, 2025",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&h=300&fit=crop",
      title: "Everyday Snacking Made Better with Agnipath",
      date: "Oct 05, 2025",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Agnipath Snacks",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
      title: "Why Agnipath Snacks Are Winning Every Crunch Moment",
      date: "Oct 01, 2025",
      readTime: "2 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] text-gray-100 font-sans">
      <Navbar />

      {/* HEADER */}
      <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 text-center px-4">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#c8a357] to-[#f3d693] rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
            <span className="text-2xl -rotate-12">🔥</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Agnipath <span className="text-[#c8a357]">Insights</span>
        </h1>

        <p className="max-w-xl sm:max-w-2xl mx-auto text-white/60 text-sm sm:text-base md:text-lg">
          Stories, flavors, and trends from the world of Agnipath Snacks —
          crafted for true snack lovers.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {articles.slice(1).map((article) => (
          <div
            key={article.id}
            className="group bg-[#0a0d28]/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 hover:border-[#c8a357]/30 transition"
          >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4 sm:p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 sm:gap-3 text-white/40 text-[10px] sm:text-xs mb-2 sm:mb-3 flex-wrap uppercase">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen size={12} /> {article.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 group-hover:text-[#c8a357] line-clamp-2">
                {article.title}
              </h3>

              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[#c8a357] font-semibold text-sm sm:text-base">
                  Explore Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default FreshTakesBlog;
