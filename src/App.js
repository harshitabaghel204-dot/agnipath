import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Test from "./Page/Test";
import Distributor from "./Page/Contactdistributor";
import Contact from "./Page/Contact";
import BrandCampaigns from "./Page/BrandCampaigns";
import Insights from "./Page/Insigths";
import News from "./Page/News";
import Aboutus from "./Page/Aboutus";
import Namkeen from "./Page/Namkeen";
import Westernsnacks from "./Page/WesternSnacks";
import Noodles from "./Page/Noodles";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Contactdistributor" element={<Distributor />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BrandCampaigns" element={<BrandCampaigns />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/News" element={<News />} />
        <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/namkeen" element={<Namkeen/>} />
             <Route path="/westernsnacks" element={<Westernsnacks/>} />
              <Route path="/noodles" element={<Noodles/>} />
      </Routes>
    </Router>
  );
}

export default App;



