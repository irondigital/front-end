import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/compo/user/navbar";
import Section1 from "../src/compo/user/section1";
import Section2 from "../src/compo/user/section2";
import Section3 from "../src/compo/user/section3";
import Section4 from "../src/compo/user/section4";
import Section5 from "../src/compo/user/section5";
import Section6 from "../src/compo/user/section6";
import Section7 from "../src/compo/user/section7";
import Footer from "../src/compo/user/footer";
import Career from "./compo/user/carrier";

const Home = () => {
  return (


 


    <div className="font-sans bg-gray-50">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Career />
      <Footer />
    </div>
  );
};

export default Home;