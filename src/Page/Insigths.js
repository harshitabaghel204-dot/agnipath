import React from "react";
import Navbar from "../Component/Navbar";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Footer from "../Component/Footer";

const FreshTakesBlog = () => {
  const articles = [
    {
      id: 1,
      category: "Snacks",
      image:
        "/image/topsnaks.png",
      title:
        "From Local Roots to National Fame: The Crunchy Journey of Agnipath Snacks",
      description:
        "Agnipath Snacks started with a simple vision—bold flavors, premium quality, and an unstoppable passion for crunch that India loves.",
      date: "Oct 12, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "New Trends",
      image:
        "/image/topinsigth.png",
      title: "Snack Like a Pro: Why Agnipath Snacks Are a Must-Have",
      description:
        "Explore what makes Agnipath Snacks stand out in today’s competitive snack market.",
      date: "Oct 10, 2025",
      readTime: "3 min read",
    },
    {
      id: 3,
      category: "Flavors",
      image:
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
      title: "Bold Spices, Big Crunch — The Agnipath Flavor Formula",
      description:
        "A deep dive into the spice blends and crunch techniques that define Agnipath Snacks.",
      date: "Oct 08, 2025",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Lifestyle",
      image:
        "/image/topsnaks.png",
      title: "Everyday Snacking Made Better with Agnipath",
      description:
        "Why Agnipath Snacks are becoming a daily favorite for families across India.",
      date: "Oct 05, 2025",
      readTime: "3 min read",
    },
    {
      id: 5,
      category: "Snacks",
      image:
        "/image/snacksetop.png",
      title: "How Agnipath Became a Trusted Name in Snacks",
      description:
        "Consistency, quality, and taste—discover the pillars behind Agnipath’s success.",
      date: "Oct 01, 2025",
      readTime: "2 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] text-gray-100 font-sans selection:bg-[#c8a357] selection:text-black">
      <Navbar />

      {/* Banner */}
          <div className="w-full h-[320px] md:h-[300px] overflow-hidden">
        <img
          src="/image/topinsigth.png"
          alt="Balaji Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* HEADER */}
      <div className="relative overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,163,87,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#c8a357] to-[#f3d693] rounded-2xl rotate-12 flex items-center justify-center shadow-xl shadow-[#c8a357]/20">
              <span className="text-3xl -rotate-12">🔥</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Agnipath <span className="text-[#c8a357]">Stories</span> & Insights
          </h1>

          <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed">
            Discover the journey, flavors, and future of Agnipath Snacks — crafted for true snack lovers.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-20">
        {/* FEATURED ARTICLE */}
        <div className="group relative bg-[#0a0d28] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#c8a357]/30 transition-all duration-500 mb-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-72 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#c8a357] text-black text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-md">
                  Featured
                </span>
                <span className="text-white/40 text-sm flex items-center gap-1">
                  <Clock size={14} /> {articles[0].readTime}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#c8a357] transition-colors">
                {articles[0].title}
              </h2>

              <p className="text-white/60 mb-8 text-lg leading-relaxed">
                {articles[0].description}
              </p>

              <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c8a357] hover:text-white transition-all">
                Read Full Story <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* GRID ARTICLES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="group bg-[#0a0d28]/60 rounded-3xl overflow-hidden border border-white/5 hover:border-[#c8a357]/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 text-xs text-white/40 mb-4 uppercase">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-6 group-hover:text-[#c8a357] transition-colors">
                  {article.title}
                </h3>

                <button className="mt-auto flex items-center gap-2 text-[#c8a357] font-semibold">
                  Explore Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreshTakesBlog;
