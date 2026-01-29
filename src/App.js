// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Page/Home";
// import About from "./Page/About";
// import Test from "./Page/Test";
// import Distributor from "./Page/Contactdistributor";
// import Contact from "./Page/Contact";
// import BrandCampaigns from "./Page/BrandCampaigns";
// import Insights from "./Page/Insigths";
// import News from "./Page/News";
// import Aboutus from "./Page/Aboutus";
// import Namkeen from "./Page/Namkeen";
// import Westernsnacks from "./Page/WesternSnacks";
// import Noodles from "./Page/Noodles";
// import Masala from "./Page/Masala";
// import panMasala from "./Page/Panmasala";
// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Test" element={<Test />} />
//         <Route path="/Contactdistributor" element={<Distributor />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/BrandCampaigns" element={<BrandCampaigns />} />
//         <Route path="/Insights" element={<Insights />} />
//         <Route path="/News" element={<News />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/namkeen" element={<Namkeen/>} />
//         <Route path="/westernsnacks" element={<Westernsnacks/>} />
//         <Route path="/noodles" element={<Noodles/>} />
//         <Route path="/masala" element={<Masala />} />
//          <Route path="/Panmasala" element={<panMasala />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
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
import Masala from "./Page/Masala";
import PanMasala from "./Page/Panmasala"; // ✅ Component name fixed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contactdistributor" element={<Distributor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brandcampaigns" element={<BrandCampaigns />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/news" element={<News />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/namkeen" element={<Namkeen />} />
        <Route path="/westernsnacks" element={<Westernsnacks />} />
        <Route path="/noodles" element={<Noodles />} />
        <Route path="/masala" element={<Masala />} />
        <Route path="/panmasala" element={<PanMasala />} /> {/* ✅ fixed */}
      </Routes>
    </Router>
  );
}

export default App;
