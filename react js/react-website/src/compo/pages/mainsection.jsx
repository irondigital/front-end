import React from "react";
import bg1 from "../../assets/Plant/1.png";
import { FaStar, FaVideo } from "react-icons/fa";
import logo from "../../assets/Glass-bg/logo.png";
import avtar1 from "../../assets/Plant/avtar.jpg"

function Main() {
  return (
    <div className="container mx-auto px-6 lg:px-10 py-10">
      {/* Main Section: 
          - flex-col for mobile (stacking)
          - lg:flex-row for desktop
      */}
      <section className="text-white flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-20 mt-10 lg:mt-24">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl leading-tight">
            Breathe <br className="hidden md:block"/> Natural
          </h1>
          <p className="text-lg md:text-xl mt-6 opacity-80 max-w-xl mx-auto lg:mx-0">
            Discover the perfect greenery for your space. Our curated house plants 
            bring life, fresh air, and a touch of nature's serenity to your modern home.
          </p>
          
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-10">
            <button className="text-lg font-semibold bg-white text-green-950 rounded-2xl px-10 py-3 hover:bg-opacity-90 transition-all shadow-xl">
              Explore
            </button>
            <button className="p-4 text-2xl rounded-2xl border-2 border-white hover:bg-white hover:text-green-950 transition-all group">
              <FaVideo className="group-hover:scale-110 transition-transform"/>
            </button>
          </div>

          {/* Review Card - Moved inside left col for desktop layout flow */}
          <div className="bg-green-900/40 backdrop-blur-md border border-white/20 w-full max-w-sm rounded-3xl mt-16 p-6 mx-auto lg:mx-0 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={avtar1} 
                alt="User" 
                className="w-14 h-14 rounded-full border-2 border-white p-1 object-cover"
              />
              <div>
                <h4 className="text-lg text-white font-bold capitalize">Alena Patel</h4>
                <div className="flex text-yellow-400 text-sm">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm italic leading-relaxed">
              "The best plant shopping experience! My Calathea arrived in perfect condition and is now the star of my living room."
            </p>
          </div>
        </div>

        {/* Right Side: Plant Card 
            - Added extra top margin on mobile (mt-32) to make room for the floating image
        */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mt-24 lg:mt-0">
          <div className="bg-green-900 rounded-[3rem] w-full max-w-sm aspect-[4/5] relative flex flex-col justify-end p-10 shadow-2xl">
            
            {/* Plant Image: Responsive sizing and positioning */}
            <div className="absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 w-[110%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-3">
              <img 
                src={bg1} 
                alt="Plant" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <h4 className="text-lg md:text-xl opacity-70 font-light">Trendy house plant</h4>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Calathea Plant</h1>
              <button className="w-full py-4 text-lg font-bold border-2 border-white rounded-2xl uppercase tracking-widest hover:bg-white hover:text-green-950 transition-all">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;