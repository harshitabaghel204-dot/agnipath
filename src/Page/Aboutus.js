import React from "react";
import {
  FaGem,
  FaCrown,
  FaLeaf,
  FaHandshake,
  FaAward,
  FaUsers,
  FaStar,
  FaCheck,
  FaLightbulb,
  FaPalette,
  FaHandsHelping,
  FaQuoteLeft,
} from "react-icons/fa";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function AboutUsPage() {
  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#010317]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
        .font-elegant {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>
<Navbar/>
      {/* ========== HERO SECTION ========== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src=""
            alt="luxury background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010317]/95 via-[#010317]/80 to-[#010317]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c8a357]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c8a357]/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20">
          {/* Top Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#c8a357]" />
            <span className="font-body text-[#c8a357] text-xs sm:text-sm tracking-[0.3em] uppercase">
              Welcome to Agnipath
            </span>
            <div className="w-12 h-[1px] bg-[#c8a357]" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Where Craftsmanship
            <br />
            <span className="text-[#c8a357]">Meets Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Delivering premium quality products and bespoke experiences designed 
            to elevate your lifestyle and create lasting impressions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("our-story")}
              className="font-body bg-[#c8a357] text-[#010317] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d4b46a] transition-all duration-300 tracking-wide"
            >
              Discover Our Story
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="font-body border-2 border-[#c8a357] text-[#c8a357] px-8 py-4 rounded-full font-medium text-base hover:bg-[#c8a357] hover:text-[#010317] transition-all duration-300 tracking-wide"
            >
              Our Values
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-body text-white/40 text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#c8a357] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
      <section id="our-story" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#010317]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Section Label */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#c8a357]" />
                <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                  Our Journey
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                A Legacy of
                <span className="text-[#c8a357]"> Excellence</span>
              </h2>

              {/* Description */}
              <div className="space-y-6 font-body text-base sm:text-lg text-white/70 leading-relaxed">
                <p>
                  At Agnipath, we believe every creation tells a story—and every 
                  story deserves to be remembered. Under the visionary guidance of 
                  our founders, we transform ordinary moments into extraordinary 
                  experiences.
                </p>
                <p>
                  Our commitment to{" "}
                  <span className="text-[#c8a357] font-medium">
                    timeless elegance, tradition, and modern sophistication
                  </span>{" "}
                  has made us a trusted name across India.
                </p>
                <p>
                  Every piece we create reflects our dedication to{" "}
                  <span className="text-[#c8a357] font-medium">
                    craftsmanship, quality, and innovation
                  </span>
                  —ensuring your experience is nothing short of exceptional.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#c8a357]">
                    300+
                  </div>
                  <div className="font-body text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">
                    Partners
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#c8a357]">
                    10+
                  </div>
                  <div className="font-body text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">
                    Years
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#c8a357]">
                    1L+
                  </div>
                  <div className="font-body text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">
                    Products
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-4 border border-[#c8a357]/20 rounded-2xl transform rotate-3" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                  src="/image/office.jpg"
                  alt="Founder"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010317] via-transparent to-transparent" />
              </div>

              {/* Quote Card */}
              
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      <section id="values" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#0a0d20]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                What We Stand For
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-[#c8a357]">Values</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              These principles guide every creation and every partnership we build.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: FaGem,
                title: "Premium Quality",
                desc: "Unwavering commitment to excellence in every detail.",
              },
              {
                Icon: FaCrown,
                title: "Exclusivity",
                desc: "Unique creations that speak to your vision and values.",
              },
              {
                Icon: FaLeaf,
                title: "Sustainability",
                desc: "Eco-friendly practices that honor our planet.",
              },
              {
                Icon: FaHandshake,
                title: "Trust",
                desc: "Building lasting relationships through integrity.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group text-center p-8 bg-[#010317] rounded-2xl border border-white/5 hover:border-[#c8a357]/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#c8a357]/30 flex items-center justify-center group-hover:bg-[#c8a357] group-hover:border-[#c8a357] transition-all duration-300">
                  <Icon className="text-[#c8a357] text-2xl group-hover:text-[#010317] transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section id="why-us" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#010317]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                Why Choose Us
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="text-[#c8a357]">Leaders</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Chosen by discerning clients for our dedication to excellence and innovation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: FaAward,
                title: "Heritage & Expertise",
                bullets: [
                  "Award-winning design team",
                  "International quality standards",
                  "Blend of tradition & modernity",
                ],
                desc: "Rooted in rich traditions, delivering world-class experiences.",
              },
              {
                Icon: FaUsers,
                title: "Trusted Partnerships",
                bullets: [
                  "500+ corporate clients",
                  "98% repeat business rate",
                  "Pan-India network",
                ],
                desc: "Building impactful solutions that strengthen relationships.",
              },
              {
                Icon: FaStar,
                title: "Exceptional Results",
                bullets: [
                  "Enhanced brand reputation",
                  "Stronger engagement",
                  "Sustainable solutions",
                ],
                desc: "Creating experiences that build trust and loyalty.",
              },
            ].map(({ Icon, title, desc, bullets }) => (
              <div
                key={title}
                className="bg-[#0a0d20] p-8 rounded-2xl border border-white/5 hover:border-[#c8a357]/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#c8a357]/10 flex items-center justify-center">
                    <Icon className="text-[#c8a357] text-xl" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                  {desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 font-body text-sm text-white/70">
                      <FaCheck className="text-[#c8a357] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#0a0d20]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                Testimonials
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Voices of <span className="text-[#c8a357]">Trust</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                avatar: "/assets/aboutUsImages/teamImage1.jpg",
                name: "Ananya Sharma",
                title: "CEO, TechVision Pvt. Ltd.",
                quote: "Their attention to detail and premium selection helped us create experiences that truly resonate with our company's values.",
                rating: 5,
              },
              {
                avatar: "/assets/aboutUsImages/teamImage2.jpg",
                name: "Rohit Mehra",
                title: "Director, Global Trade India",
                quote: "The quality and craftsmanship exceeded all expectations. Our partners were genuinely impressed.",
                rating: 5,
              },
              {
                avatar: "/assets/aboutUsImages/teamImage3.jpg",
                name: "Priya Nair",
                title: "Marketing Head, Elite Brands",
                quote: "They understand both luxury and business. They don't just deliver—they create experiences.",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#010317] p-8 rounded-2xl border border-white/5"
              >
                {/* Quote */}
                <FaQuoteLeft className="text-[#c8a357]/30 text-3xl mb-4" />
                <p className="font-elegant text-white/70 text-lg italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <div className="font-display font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="font-body text-xs text-white/50">
                      {t.title}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-[#c8a357] text-sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Brands */}
          <div className="text-center">
            <h3 className="font-display text-xl text-white/80 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {["TCS", "Wipro", "Infosys", "Unilever", "PepsiCo", "Dabur", "ITC"].map((brand) => (
                <div
                  key={brand}
                  className="bg-[#c8a357] text-[#010317] px-4 py-2 rounded-lg font-body font-semibold text-sm tracking-wide"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TIMELINE ========== */}
      <section id="timeline" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#010317]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                Our Journey
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#c8a357]">Heritage</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#c8a357] via-[#c8a357]/50 to-[#c8a357]/20" />

            <div className="space-y-12">
              {[
                { year: "2014", title: "Humble Beginnings", text: "Started with a dream and a small team." },
                { year: "2017", title: "First Milestone", text: "Secured our first major client." },
                { year: "2020", title: "Expansion", text: "Expanded to multiple cities across India." },
                { year: "2024", title: "Legacy", text: "Became a trusted name in the industry." },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center gap-8">
                  {/* Year - Left on even, Right on odd */}
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                    {idx % 2 === 0 ? (
                      <>
                        <div className="font-display text-3xl font-bold text-[#c8a357] mb-2">{item.year}</div>
                        <h3 className="font-display text-xl text-white font-semibold mb-2">{item.title}</h3>
                        <p className="font-body text-white/60 text-sm">{item.text}</p>
                      </>
                    ) : (
                      <div className="font-display text-3xl font-bold text-[#c8a357]">{item.year}</div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-[#c8a357] border-4 border-[#010317] z-10" />

                  {/* Content - Right on even, Left on odd */}
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                    {idx % 2 !== 0 ? (
                      <>
                        <h3 className="font-display text-xl text-white font-semibold mb-2">{item.title}</h3>
                        <p className="font-body text-white/60 text-sm">{item.text}</p>
                      </>
                    ) : (
                      <div className="font-display text-3xl font-bold text-[#c8a357] md:hidden">{item.year}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section id="team" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#0a0d20]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                Our Team
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Behind the <span className="text-[#c8a357]">Craft</span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rohita Sharma", role: "Founder & CEO", avatar: "/image/office.jpg" },
              { name: "Ravi Sharma", role: "Head of Operations", avatar: "/image/office.jpg" },
              { name: "Neha Kapoor", role: "Creative Director", avatar: "/image/office.jpg" },
              { name: "Ankit Verma", role: "Tech Lead", avatar: "/image/office.jpg" },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                {/* Image */}
                <div className="relative mb-6 mx-auto w-40 h-40 rounded-2xl overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#c8a357]/0 group-hover:bg-[#c8a357]/20 transition-all duration-300" />
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-[#c8a357] text-xs uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section id="process" className="py-20 sm:py-32 px-4 sm:px-8 bg-[#010317]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a357]" />
              <span className="font-body text-[#c8a357] text-sm tracking-[0.2em] uppercase">
                Our Process
              </span>
              <div className="w-12 h-[1px] bg-[#c8a357]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              The Art of <span className="text-[#c8a357]">Creation</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { Icon: FaLightbulb, step: 1, title: "Consultation", text: "Understanding your vision and requirements." },
              { Icon: FaPalette, step: 2, title: "Design", text: "Crafting detailed prototypes with premium materials." },
              { Icon: FaHandsHelping, step: 3, title: "Delivery", text: "Bringing your vision to life with precision." },
            ].map(({ Icon, step, title, text }) => (
              <div key={step} className="text-center">
                {/* Icon with Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-[#0a0d20] border-2 border-[#c8a357]/30 flex items-center justify-center">
                    <Icon className="text-[#c8a357] text-3xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#c8a357] flex items-center justify-center font-display font-bold text-[#010317]">
                    {step}
                  </div>
                </div>

                {/* Title & Text */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="font-body text-white/60 text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section
        id="cta"
        className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920"
            alt="background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010317] via-[#010317]/95 to-[#010317]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Experience
            <br />
            <span className="text-[#c8a357]">Excellence?</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Partner with us to create premium experiences that elevate your brand 
            and create lasting impressions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="font-body bg-[#c8a357] text-[#010317] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#d4b46a] transition-all duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-body border-2 border-white text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-[#010317] transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "24/7", label: "Support" },
              { value: "Global", label: "Delivery" },
              { value: "Lifetime", label: "Guarantee" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}