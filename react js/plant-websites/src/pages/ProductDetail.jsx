import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaHeart, FaChevronLeft, FaStar, FaBox, FaWater, FaSun, FaLeaf, FaMinus, FaPlus } from "react-icons/fa";
import { getPlantById, getRelatedPlants } from "../data/plants";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = getPlantById(id);
  const related = plant ? getRelatedPlants(plant) : [];
  
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [lightbox, setLightbox] = useState(false);

  const { addToCart, cart } = useCartStore();
  const { toggleWishlist, isWishlisted } = useWishlistStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveImg(0);
    setQty(1);
  }, [id]);

  if (!plant) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-black mb-4">Plant Not Found</h1>
        <button onClick={() => navigate("/shop")} className="px-6 py-3 glass rounded-2xl">Return to Shop</button>
      </div>
    );
  }

  const wishlisted = isWishlisted(plant.id);
  const inCart = cart.some(i => i.id === plant.id);

  return (
    <div className="container mx-auto px-4 lg:px-12 py-10 text-white">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 hover:text-green-400 mb-8 transition-colors font-bold uppercase tracking-widest text-xs">
        <FaChevronLeft /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Images */}
        <div className="flex-1 w-full flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 hide-scrollbar">
            {plant.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImg(idx)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl glass border ${activeImg === idx ? "border-green-400" : "border-white/10"} p-2 transition-all`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain drop-shadow-md" />
              </button>
            ))}
          </div>

          <div className="flex-1 w-full relative group">
            <motion.div 
              key={activeImg}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-[3rem] p-8 aspect-square flex items-center justify-center cursor-pointer border border-white/5 group-hover:border-white/20 transition-all shadow-2xl"
              onClick={() => setLightbox(true)}
            >
              <img src={plant.images[activeImg]} alt={plant.name} className="w-full h-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)]" />
            </motion.div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-black tracking-widest uppercase mb-6 w-fit">
            {plant.title}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic lg:leading-[1.1]">{plant.name}</h1>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => <FaStar key={i} className={i < Math.floor(plant.rating) ? "" : "text-white/20"} />)}
            </div>
            <span className="text-white/40 text-sm font-medium">{plant.reviews} Reviews</span>
          </div>

          <p className="text-white/50 text-base md:text-lg leading-relaxed font-light mt-6">{plant.description}</p>
          <div className="text-4xl font-black text-green-400 mt-8 mb-10 italic">₹{plant.price}</div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="glass p-4 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
              <FaWater size={20} className="text-blue-400 mb-2" />
              <span className="text-[10px] uppercase font-black tracking-widest text-white/50 leading-tight">Waterings<br/>Every {plant.careSchedule} days</span>
            </div>
            <div className="glass p-4 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
              <FaSun size={20} className="text-yellow-400 mb-2" />
              <span className="text-[10px] uppercase font-black tracking-widest text-white/50 leading-tight">Sunlight<br/>{plant.sunlight}</span>
            </div>
            <div className="glass p-4 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
              <FaLeaf size={20} className="text-emerald-400 mb-2" />
              <span className="text-[10px] uppercase font-black tracking-widest text-white/50 leading-tight">Care<br/>{plant.maintenance}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center justify-between glass px-6 py-4 rounded-3xl border border-white/10 w-full sm:w-1/3">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-white/50 hover:text-white p-2"><FaMinus size={12} /></button>
              <span className="font-black w-8 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-white/50 hover:text-white p-2"><FaPlus size={12} /></button>
            </div>
            <button 
              onClick={() => addToCart(plant, qty)}
              className="flex-1 px-8 py-5 bg-white text-green-950 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              <FaShoppingCart /> {inCart ? "Add More" : "Add to Cart"}
            </button>
            <button 
              onClick={() => toggleWishlist(plant)}
              className={`p-5 rounded-3xl border transition-all flex items-center justify-center active:scale-95 ${wishlisted ? "bg-red-500/20 border-red-500/50 text-red-400" : "glass border-white/10 text-white/50 hover:text-red-400 hover:border-red-400/30"}`}
            >
              <FaHeart size={20} />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/40 text-xs font-black tracking-widest uppercase">
            <FaBox size={14} className="text-white/60" /> Free delivery & pot included
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <img src={plant.images[activeImg]} className="max-w-full max-h-[90vh] object-contain drop-shadow-[0_40px_80px_rgba(255,255,255,0.1)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
