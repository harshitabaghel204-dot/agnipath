import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const LetsConnect = () => {
  return (
    <div className="min-h-screen bg-[#010317] font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-[#c8a357]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-[#c8a357]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Banner */}
        <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80"
            alt="Agnipath Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center my-10 sm:my-14 px-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#c8a357]">
            Let's Connect
          </h1>
          <p className="text-white/70 mt-3 text-sm sm:text-base md:text-lg">
            Our representative will get back to you shortly
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20 relative">
          
          {/* Contact Card */}
          <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-12 w-full lg:w-1/2 relative z-20">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#010317] mb-6 sm:mb-8">
              Agnipath Foods Private Limited
            </h2>

            <div className="mb-6 sm:mb-8 pl-4 border-l-4 border-[#c8a357]">
              <p className="text-[#010317]/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Survey No.13, Vajdi (Vad),<br />
                Kalawad Road, Lodhika,<br />
                Rajkot - 360021, Gujarat (India).
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="font-bold text-lg sm:text-xl mb-1">Phone :</p>
              <p className="text-[#010317]/80 text-sm sm:text-base md:text-lg">
                +91-281-2783755 / 56<br />
                +91-7069014141
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-bold text-lg sm:text-xl mr-2">E-mail :</span>
                <a
                  href="mailto:contact@agnipathfoods.com"
                  className="text-[#c8a357] font-bold hover:underline"
                >
                  contact@agnipathfoods.com
                </a>
              </p>
            </div>

            <div className="absolute -bottom-16 -right-16 w-64 sm:w-80 h-64 sm:h-80 bg-[#c8a357]/10 rounded-full blur-3xl" />
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[360px] md:w-[420px] pointer-events-none">
            <img
              src="/image/masalachips.png"
              alt="Agnipath Packet"
              className="w-full h-full object-contain rotate-12 drop-shadow-2xl animate-float"
            />
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mt-6 mx-auto">
            <img
              src="/image/masalachips.png"
              alt="Agnipath Foods"
              className="h-48 sm:h-56 md:h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 sm:mt-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#c8a357] mb-6 sm:mb-8">
            Our Location
          </h2>
          <div className="w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Agnipath Foods Location"
              src="https://www.google.com/maps?q=Balaji%20Wafers%20Private%20Limited%20Kalawad%20Road%20Lodhika%20Rajkot&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#c8a357] to-transparent rounded-full" />
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default LetsConnect;
