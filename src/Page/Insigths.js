import React from "react";
import Navbar from "../Component/Navbar";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const FreshTakesBlog = () => {
  const articles = [
    {
      id: 1,
      category: "Snacks",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=400&fit=crop",
      title: "From Closing Curtain to Snack Stardom: The Crunchy Story of Salatí Wafers",
      description:
        "Salatí Wafer's story isn't your everyday success tale. Picture a theater company finding itself offstage, curtain down, but eyes still on the spotlight...",
      date: "Oct 12, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "New Trends",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
      title: "Snack Like a Pro: Why Salatí's Wafers Are A Must-Have!",
      description:
        "Discover the unique qualities that make Salatí's wafers a favorite among snack lovers worldwide.",
      date: "Oct 10, 2025",
      readTime: "3 min read",
    },
    {
      id: 3,
      category: "Flavors",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
      title: "Bryn Gafeta, Bold Taste—The Secret Behind Bryn's Unique Crunch",
      description: "Dive into the flavor profiles and crunch secrets that make Bryn Gafeta irresistible.",
      date: "Oct 08, 2025",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=400&h=300&fit=crop",
      title: "Halal Fancy: Snack Golden-Packed – Fun, Incredible Taste",
      description: "Learn how Halal Fancy snacks are taking snacking to the next level.",
      date: "Oct 05, 2025",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Snacks",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
      title: "Why Bryn's Lychee Snacks Hit the Snacking Jackpot",
      description: "An inside look at why Bryn's lychee snacks are becoming a household favorite.",
      date: "Oct 01, 2025",
      readTime: "2 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] text-gray-100 font-sans selection:bg-[#c8a357] selection:text-black">
     <Navbar />
       <div className="w-full h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      {/* HEADER */}
      <div className="relative overflow-hidden pt-20 pb-16">
       
        <div className="w-full h-72 overflow-hidden">
          
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,163,87,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#c8a357] to-[#f3d693] rounded-2xl rotate-12 flex items-center justify-center shadow-xl shadow-[#c8a357]/20">
              <span className="text-3xl -rotate-12">🍿</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Fresh Takes & <span className="text-[#c8a357]">Crunchy</span> Trends
          </h1>

          <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
            Discover the stories behind your favorite snacks and stay ahead with the latest industry insights.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* FEATURED ARTICLE */}
        <div className="group relative bg-[#0a0d28] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#c8a357]/30 transition-all duration-500 mb-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="w-full lg:w-1/2 p-10 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#c8a357] text-black text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md">
                  Featured
                </span>
                <span className="text-white/40 text-sm flex items-center gap-1">
                  <Clock size={14} /> {articles[0].readTime}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight group-hover:text-[#c8a357] transition-colors">
                {articles[0].title}
              </h2>

              <p className="text-white/60 mb-8 text-lg leading-relaxed font-light">
                {articles[0].description}
              </p>

              <button className="flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c8a357] hover:text-white transition-all duration-300 group/btn">
                Read Full Story <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* GRID ARTICLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="group flex flex-col bg-[#0a0d28]/50 rounded-3xl overflow-hidden border border-white/5 hover:bg-[#0a0d28] hover:border-[#c8a357]/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010317] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border border-white/10">
                  {article.category}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-white/40 text-xs mb-4 uppercase tracking-tighter">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 leading-snug group-hover:text-[#c8a357] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-[#c8a357] font-semibold text-sm group/link">
                    Explore Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreshTakesBlog;
