import React from "react";
import banner2 from "../../assets/Plant/5.png";
import { FaShoppingBag } from "react-icons/fa";
function Banner2() {
    return (
        <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto text-white overflow-hidden">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-24 text-gray-800 dark:text-white">
                Our Trendy Plants
            </h1>

            {/* Main Container 
          - w-full + max-w-sm/md on mobile ensures it doesn't bleed off screen
      */}
            <div className="bg-green-700 rounded-[2.5rem] relative flex flex-col md:flex-row items-center p-6 sm:p-10 md:p-16 min-h-[450px] mx-auto">

                {/* Image Container 
            - On Mobile: Image is relative, smaller (h-56), and centered.
            - On Desktop: Absolute, large (h-[500px]), and offset.
        */}
                <div className="relative w-full md:w-1/2 flex justify-center md:absolute md:-left-12 md:-top-20 z-20">
                    <img
                        src={banner2}
                        alt="Calathea Plant"
                        className="h-56 sm:h-64 md:h-[450px] lg:h-[550px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Text Content
            - w-full ensures text doesn't cause horizontal scrolling
            - Padding top on mobile to give space to the image above
        */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-auto text-center md:text-left z-10">
                    <h2 className="text-lg md:text-2xl opacity-90 font-light tracking-wide">
                        Trendy House Plants
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-3 md:py-5 uppercase tracking-tighter">
                        Calathea Plant
                    </h1>
                    <p className="text-green-50/80 text-sm md:text-lg mb-6 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
                        Elevate your living space with the vibrant colors and air-purifying
                        qualities of our premium Calathea collection.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                        <button className="px-6 py-3 md:px-10 md:py-4 text-base md:text-xl font-bold border-2 border-white rounded-2xl hover:bg-white hover:text-green-700 transition-all shadow-lg active:scale-95">
                            Buy Now
                        </button>
                        <button className="p-3 md:p-4 bg-white text-green-700 rounded-2xl hover:bg-green-50 transition-all shadow-md active:scale-95">
                            <FaShoppingBag size={24} className="md:w-7 md:h-7" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Banner2; 