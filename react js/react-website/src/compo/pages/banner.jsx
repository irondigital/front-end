import React from "react";
import banner1 from "../../assets/Plant/3.png";
import banner2 from "../../assets/Plant/4.png";
import { FaShoppingBag } from "react-icons/fa"; // Optional: npm install lucide-react

function Banner() {
  return (
    <>
      <section className="px-4 py-10 text-center text-white max-w-7xl mx-auto">
        <h1 className="mb-10 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Our Trendy Plants
        </h1>

        {/* First Banner - Image Left */}
        <div className="bg-green-950 min-h-[400px] rounded-3xl relative flex flex-col md:flex-row items-center justify-end p-8 mb-20">
          <div className="md:absolute md:-left-10 md:-top-10 mb-8 md:mb-0">
            <img src={banner1} alt="Calathea Plant" className="h-64 md:h-[500px] object-contain drop-shadow-2xl" />
          </div>
          
          <div className="w-full md:w-1/2 text-left md:pl-10">
            <h2 className="text-xl md:text-2xl opacity-80 font-light">Trendy House Plants</h2>
            <h1 className="text-4xl md:text-6xl font-bold py-3 uppercase tracking-tight">Calathea Plant</h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Known for its stunning foliage, the Calathea is a perfect addition to any modern interior, acting as a natural air purifier.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-green-950 font-bold rounded-xl transition-transform hover:scale-105">
                Buy Now
              </button>
              <button className="p-3 border-2 border-white rounded-xl hover:bg-white hover:text-green-950 transition-colors">
                <FaShoppingBag size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Second Banner - Image Right */}
        <div className="bg-green-950 min-h-[400px] rounded-3xl relative flex flex-col-reverse md:flex-row items-center justify-start p-8 mt-40">
          <div className="w-full md:w-1/2 text-left md:pr-10">
            <h2 className="text-xl md:text-2xl opacity-80 font-light">Trendy House Plants</h2>
            <h1 className="text-4xl md:text-6xl font-bold py-3 uppercase tracking-tight">Calathea Plant</h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Bring nature closer to your living space with our premium nursery-grown indoor plants, delivered right to your doorstep.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-green-950 font-bold rounded-xl transition-transform hover:scale-105">
                Buy Now
              </button>
              <button className="p-3 border-2 border-white rounded-xl hover:bg-white hover:text-green-950 transition-colors">
                <FaShoppingBag size={24} />
              </button>
            </div>
          </div>

          <div className="md:absolute md:-right-10 md:-top-10 mb-8 md:mb-0">
            <img src={banner2} alt="Calathea Plant" className="h-64 md:h-[500px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;