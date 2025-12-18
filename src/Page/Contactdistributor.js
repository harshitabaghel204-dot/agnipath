import React, { useState } from 'react';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const BecomeDistributor = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', qualification: '',
    phone: '', email: '', city: '', state: '', country: '',
    name: '', businessType: '', annualRevenue: '', businessExist: '',
    infra: '', investment: '', interested: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const steps = [
    { step: '01', title: 'Fill out the form', desc: 'Submit the form with accurate details' },
    { step: '02', title: 'Wait for verification', desc: 'Wait for the email verification' },
    { step: '03', title: 'Discover distributors', desc: 'Discovery the distributors' },
    { step: '04', title: 'Get details via email', desc: 'Get the details through email' }
  ];

  const perks = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png',
      title: 'Exclusive Pricing',
      desc: 'Exclusive pricing available for distributor',
      bgColor: 'bg-[#c8a357]/10'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png',
      title: 'Quality Snacks',
      desc: 'Get quality snacks to distribute',
      bgColor: 'bg-[#c8a357]/10'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3039/3039386.png',
      title: 'Timely Deliveries',
      desc: 'Timely deliveries to your location',
      bgColor: 'bg-[#c8a357]/10'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917887.png',
      title: 'Reasonable Growth',
      desc: 'Reasonable growth in your business',
      bgColor: 'bg-[#c8a357]/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010317] font-sans text-white">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#c8a357]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#c8a357] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#c8a357] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl font-black text-[#c8a357] tracking-tight drop-shadow-lg">
              Become Our Distributor
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Join our network and distribute our delicious snacks. Fill out our form and we'll contact you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-serif text-4xl font-bold text-[#c8a357] mb-16 text-center md:text-left">
          Steps to Get Started
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#c8a357] text-[#010317] flex items-center justify-center text-2xl font-serif font-bold shadow-lg shadow-[#c8a357]/20 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-white mb-2 text-base uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-[#c8a357]/50 to-transparent -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Perks Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-white/5 rounded-3xl mb-16">
        <h2 className="font-serif text-4xl font-bold text-[#c8a357] mb-12 text-center">
          Perks of Partnership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div key={index} className={`${perk.bgColor} border border-[#c8a357]/20 rounded-2xl p-8 text-center hover:bg-[#c8a357]/20 transition-all duration-300 hover:-translate-y-2 group cursor-default`}>
              <div className="flex justify-center mb-6">
                <img 
                  src={perk.icon} 
                  alt={perk.title}
                  className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-bold text-lg text-white mb-3 uppercase tracking-wide">{perk.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#010317] py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#c8a357] mb-4">Let's Team Up</h2>
            <p className="text-white/60">Fill in the details below to start your application</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-[#c8a357]/10 shadow-2xl">
            
            {/* Personal Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <InputField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
                <InputField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="Phone *" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
                
                <div className="md:col-span-2">
                  <SelectField label="Country" name="country" value={formData.country} onChange={handleChange} options={["India", "USA", "UK"]} />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#c8a357] mb-3 ml-1">
                    Full Address / Name
                  </label>
                  <textarea
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-5 py-4 bg-[#0a0c20] border border-[#c8a357]/20 rounded-xl focus:ring-2 focus:ring-[#c8a357] focus:border-transparent outline-none transition-all resize-none text-white placeholder-white/20"
                    placeholder="Enter full details..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                Business Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SelectField label="Current Business (if Exist)" name="businessExist" value={formData.businessExist} onChange={handleChange} options={["Yes", "No"]} />
                <InputField label="Experience (Years)" name="experience" value={formData.experience} onChange={handleChange} />
                <SelectField label="Business Type" name="businessType" value={formData.businessType} onChange={handleChange} options={["Retail", "Wholesale"]} />
                <SelectField label="Annual Revenue" name="annualRevenue" value={formData.annualRevenue} onChange={handleChange} options={["< 1 Lac", "1-5 Lac", "5-10 Lac", "> 10 Lac"]} />
                <SelectField label="Infrastructure" name="infra" value={formData.infra} onChange={handleChange} options={["Own", "Rented"]} />
                <InputField label="Operating Perimeter" name="perimeter" value={formData.perimeter} onChange={handleChange} />
                <SelectField label="Existing Inventory" name="inventory" value={formData.inventory} onChange={handleChange} options={["Yes", "No"]} />
                <SelectField label="Why Interested?" name="interested" value={formData.interested} onChange={handleChange} options={["Business Growth", "Brand Partnership"]} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="font-sans bg-[#c8a357] hover:bg-[#b08d45] text-[#010317] font-black uppercase tracking-[0.2em] py-5 px-16 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#c8a357]/30 text-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Note */}
     <Footer/>

      {/* STYLES FOR FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

// Helper Components to keep code clean and consistent

const InputField = ({ label, name, type = "text", value, onChange, required = false }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-widest text-[#c8a357] mb-3 ml-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 bg-[#0a0c20] border border-[#c8a357]/20 rounded-xl focus:ring-2 focus:ring-[#c8a357] focus:border-transparent outline-none transition-all text-white placeholder-white/20 font-medium"
      required={required}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-widest text-[#c8a357] mb-3 ml-1">
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-4 bg-[#0a0c20] border border-[#c8a357]/20 rounded-xl focus:ring-2 focus:ring-[#c8a357] focus:border-transparent outline-none transition-all text-white appearance-none cursor-pointer font-medium"
      >
        <option value="" className="bg-[#0a0c20] text-gray-500">Select Option</option>
        {options.map((opt, i) => (
          <option key={i} value={opt} className="bg-[#0a0c20]">{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#c8a357]">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
      </div>
    </div>
  </div>
);

export default BecomeDistributor;