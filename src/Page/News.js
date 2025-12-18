import React from "react";
import Navbar from "../Component/Navbar";
import { ArrowRight, BookOpen } from "lucide-react";
import Footer from "../Component/Footer";

const FreshTakesBlog = () => {
  const articles = [
    {
      id: 1,
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=400&fit=crop",
      title:
        "From Closing Curtain to Snack Stardom: The Crunchy Story of Salatí Wafers",
      description:
        "Salatí Wafer's story isn't your everyday success tale. Picture a theater company finding itself offstage, curtain down, but eyes still on the spotlight...",
      date: "Oct 12, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "New Trends",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      title: "Snack Like a Pro: Why Salatí's Wafers Are A Must-Have!",
      date: "Oct 10, 2025",
      readTime: "3 min read",
    },
    {
      id: 3,
      category: "Flavors",
      image:
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
      title: "Bryn Gafeta, Bold Taste—The Secret Behind Bryn's Unique Crunch",
      date: "Oct 08, 2025",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&h=300&fit=crop",
      title: "Halal Fancy: Snack Golden-Packed – Fun, Incredible Taste",
      date: "Oct 05, 2025",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
      title: "Why Bryn's Lychee Snacks Hit the Snacking Jackpot",
      date: "Oct 01, 2025",
      readTime: "2 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] text-gray-100 font-sans">
      <Navbar />

      {/* HEADER */}
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hot off <span className="text-[#c8a357]">the</span> press
        </h1>
        <p className="max-w-2xl mx-auto text-white/60 text-lg">
          Discover the stories behind your favorite snacks and stay ahead with
          the latest industry insights.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.slice(1).map((article) => (
          <div
            key={article.id}
            className="group bg-[#0a0d28]/50 rounded-3xl overflow-hidden border border-white/5 hover:border-[#c8a357]/20 transition"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 text-white/40 text-xs mb-4">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen size={12} /> {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#c8a357]">
                {article.title}
              </h3>

              <button className="flex items-center gap-2 text-[#c8a357] font-semibold text-sm">
                Explore Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default FreshTakesBlog;
