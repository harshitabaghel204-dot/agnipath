import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const BecomeDistributor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    qualification: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    name: "",
    businessType: "",
    annualRevenue: "",
    businessExist: "",
    infra: "",
    investment: "",
    interested: "",
    experience: "",
    perimeter: "",
    inventory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Agnipath Distributor Form:", formData);
  };

  const steps = [
    { step: "01", title: "Fill out the form", desc: "Submit the form with accurate details" },
    { step: "02", title: "Wait for verification", desc: "Wait for the email verification" },
    { step: "03", title: "Discover distributors", desc: "Discovery the distributors" },
    { step: "04", title: "Get details via email", desc: "Get the details through email" },
  ];

  const perks = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      title: "Exclusive Pricing",
      desc: "Exclusive pricing available for Agnipath distributors",
      bgColor: "bg-[#c8a357]/10",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png",
      title: "Quality Snacks",
      desc: "Premium quality snacks from Agnipath",
      bgColor: "bg-[#c8a357]/10",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3039/3039386.png",
      title: "Timely Deliveries",
      desc: "Reliable and timely deliveries",
      bgColor: "bg-[#c8a357]/10",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917887.png",
      title: "Business Growth",
      desc: "Strong growth with Agnipath brand",
      bgColor: "bg-[#c8a357]/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010317] font-sans text-white">
      <Navbar />

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-[#c8a357]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#c8a357] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#c8a357] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-[#c8a357]">
            Become an Agnipath Distributor
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-4">
            Join <span className="text-[#c8a357] font-semibold">Agnipath</span> and distribute our
            delicious snacks across your region.
          </p>
        </div>
      </div>

      {/* STEPS */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a357] mb-12">
          Steps to Get Started
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c8a357] text-[#010317] flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PERKS */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-white/5 rounded-3xl mb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a357] mb-12 text-center">
          Perks of Agnipath Partnership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <div key={i} className={`${perk.bgColor} p-6 rounded-2xl text-center`}>
              <img src={perk.icon} alt={perk.title} className="w-14 h-14 mx-auto mb-4" />
              <h3 className="font-bold mb-2">{perk.title}</h3>
              <p className="text-sm text-white/70">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-[#c8a357]/10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a357] mb-8 text-center">
            Apply for Agnipath Distribution
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" name="firstName" onChange={handleChange} />
            <Input label="Last Name" name="lastName" onChange={handleChange} />
            <Input label="Phone" name="phone" />
            <Input label="Email" name="email" type="email" />
            <Input label="City" name="city" />
            <Input label="State" name="state" />

            <div className="md:col-span-2 flex justify-center pt-6">
              <button className="bg-[#c8a357] text-[#010317] px-10 py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

/* Helper */
const Input = ({ label, name, type = "text", onChange }) => (
  <div>
    <label className="block text-xs uppercase text-[#c8a357] mb-1">{label}</label>
    <input
      name={name}
      type={type}
      onChange={onChange}
      className="w-full px-4 py-3 bg-[#0a0c20] border border-[#c8a357]/20 rounded-lg text-white outline-none"
    />
  </div>
);

export default BecomeDistributor;
