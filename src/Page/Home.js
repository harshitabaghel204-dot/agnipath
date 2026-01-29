import React from "react";

import Slider from "../Component/Slider";
import Test from "../Component/test";
import About from "../Component/About";
import Card from "../Component/Card";
import Itemslider from "../Component/itemslider";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const Home = () => {
  return (
    <>
     <Navbar/>
 <Slider/>
 
 <Card/>
 <About/>
 <Test/>
<Itemslider/>


<Footer/>

    </>
  );
};

export default Home;
