import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import img1 from "../../assets/Plant/1.png";
import img2 from "../../assets/Plant/7.png";
import img3 from "../../assets/Plant/3.png";
import img4 from "../../assets/Plant/4.png";
import img5 from "../../assets/Plant/5.png";
import img6 from "../../assets/Plant/6.png";

// Reusable Card Component
const PlantCard = ({ image, name, title }) => (
  /* Added mt-24 on mobile to give space for the floating image of the card above */
  <div className="bg-green-900 rounded-[2.5rem] p-6 relative flex flex-col items-center shadow-2xl mt-24 md:mt-0 w-full max-w-[350px] mx-auto">
    
    {/* Image Container: Reduced negative margin on mobile to stay within bounds */}
    <div className="-mt-24 md:-mt-28 lg:-mt-32 transition-transform duration-500 group-hover:scale-105 select-none">
      <img
        src={image}
        alt={name}
        className="h-48 md:h-56 lg:h-64 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
      />
    </div>

    <div className="mt-4 text-center w-full">
      <h3 className="text-xs md:text-sm opacity-70 uppercase tracking-[0.2em] font-medium text-green-100">
        {title}
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold my-2 text-white">
        {name}
      </h2>
      
      <p className="text-sm text-green-50/80 mb-6 px-2 leading-relaxed line-clamp-2">
        A beautiful addition to your home that brings nature indoors and purifies your air daily.
      </p>

      <div className="flex items-center justify-center gap-3 pb-2">
        <button className="flex-1 px-4 py-2.5 text-sm md:text-base font-bold border-2 border-white rounded-2xl hover:bg-white hover:text-green-900 transition-all active:scale-95">
          Buy Now
        </button>
        <button 
          className="p-3 bg-white text-green-900 rounded-2xl hover:bg-green-100 transition-all shadow-lg active:scale-95"
          aria-label="Add to cart"
        >
          < FaShoppingBag  size={22} />
        </button>
      </div>
    </div>
  </div>
);

function Item() {
  // Using an array makes the code much cleaner and easier to manage
  const allPlants = [
    { img: img1, title: "Trending", name: "Calathea Plant" },
    { img: img2, title: "Trending", name: "Snake Plant" },
    { img: img3, title: "Trending", name: "Aloe Vera" },
    { img: img4, title: "New Arrival", name: "Rubber Plant" },
    { img: img5, title: "New Arrival", name: "Peace Lily" },
    { img: img6, title: "New Arrival", name: "Monstera" },
  ];

  return (
    /* overflow-x-clip prevents horizontal scroll issues from floating images */
    <section className="text-white px-4 py-20 max-w-7xl mx-auto overflow-x-clip">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-32 tracking-tight">
        Our Products
      </h1>

      {/* Responsive Grid:
          - 1 column on mobile (grid-cols-1)
          - 2 columns on small tablets (sm:grid-cols-2)
          - 3 columns on desktop (lg:grid-cols-3)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32 md:gap-y-40">
        {allPlants.map((plant, index) => (
          <PlantCard 
            key={index}
            image={plant.img} 
            title={plant.title} 
            name={plant.name} 
          />
        ))}
      </div>
    </section>
  );
}

export default Item;