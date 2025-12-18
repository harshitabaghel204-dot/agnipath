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

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar />

        {/* Banner */}
        <div className="w-full h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center my-14 px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-black text-[#c8a357]">
            Let's Connect
          </h1>
          <p className="text-white/70 mt-3">
            Our representative will get back to you shortly
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Contact Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 w-full lg:w-[55%] relative z-20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#010317] mb-8">
                Balaji Wafers Private Limited
              </h2>

              <div className="mb-8 pl-4 border-l-4 border-[#c8a357]">
                <p className="text-[#010317]/80 text-lg leading-relaxed">
                  Survey No.13, Vajdi (Vad),<br />
                  Kalawad Road, Lodhika,<br />
                  Rajkot - 360021, Gujarat (India).
                </p>
              </div>

              <div className="mb-8">
                <p className="font-bold text-xl mb-2">Phone :</p>
                <p className="text-[#010317]/80 text-lg">
                  +91-281-2783755 / 56<br />
                  +91-7069014141
                </p>
              </div>

              <div>
                <p className="text-lg">
                  <span className="font-bold text-xl mr-2">E-mail :</span>
                  <a
                    href="mailto:contact@balajiwafers.com"
                    className="text-[#c8a357] font-bold hover:underline"
                  >
                    contact@balajiwafers.com
                  </a>
                </p>
              </div>

              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#c8a357]/10 rounded-full blur-3xl" />
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none">
              <img
                src="/image/masalachips.png"
                alt="Packet"
                className="w-full h-full object-contain rotate-12 drop-shadow-2xl animate-float"
              />
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mt-6 ml-4 sm:ml-8 md:ml-12">
              <img
                src="https://www.balajiwafers.com/cdn/shop/files/Crunchem_Masala_Masti_Wafers_Default_bc03ebaa-4c86-4de2-977b-c25c873ade91.png?v=1749561574&width=1500"
                alt="Balaji Wafers"
                className="h-56 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* MAP SECTION */}
          <div className="mt-24">
            <h2 className="text-center text-4xl font-bold text-[#c8a357] mb-8">
              Our Location
            </h2>

            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                title="Balaji Wafers Location"
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
          <div className="mt-20 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#c8a357] to-transparent rounded-full" />
          </div>
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
      <Footer/>
    </div>
  );
};

export default LetsConnect;
