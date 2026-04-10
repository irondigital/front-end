import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { useCartStore } from "../store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaHeart, FaShoppingBag, FaSignOutAlt, FaLeaf, FaShoppingCart } from "react-icons/fa";

export default function UserDashboard() {
  const { user, logout } = useAuthStore();
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("wishlist");

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-white">
        <FaUser size={64} className="text-white/10 mb-6" />
        <h1 className="text-3xl font-black mb-4 tracking-tighter italic">Not Logged In</h1>
        <p className="text-white/40 mb-8">Please log in to view your dashboard.</p>
        <Link to="/login" className="px-8 py-4 bg-green-600 rounded-2xl text-white font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-12 py-12 text-white">
      {/* Header */}
      <div className="glass-card rounded-[3rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full -z-10" />
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[2rem] flex items-center justify-center text-4xl md:text-5xl font-black text-[#071a12] shadow-2xl shrink-0 p-1">
           <div className="w-full h-full bg-[#071a12] rounded-[1.8rem] flex items-center justify-center text-green-400">
             {user.name[0].toUpperCase()}
           </div>
        </div>
        <div className="text-center md:text-left flex-1">
          <span className="inline-block px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-3">
            Plant Enthusiast
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic mb-2">{user.name}</h1>
          <p className="text-white/40 text-sm">{user.email}</p>
        </div>
        <button onClick={() => { logout(); navigate("/"); }} className="px-6 py-4 glass border border-red-500/30 rounded-2xl text-red-400 font-black text-xs uppercase tracking-widest hover:bg-red-500/10 transition-all flex items-center gap-2">
          <FaSignOutAlt /> Sign Out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto hide-scrollbar">
        {[
          { id: "wishlist", label: `Wishlist (${wishlist.length})`, icon: FaHeart },
          { id: "orders", label: "Order History", icon: FaShoppingBag },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 shrink-0 ${
              activeTab === tab.id ? "bg-white text-green-950" : "glass border border-white/10 text-white/50 hover:bg-white/5"
            }`}
          >
            <tab.icon /> {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "wishlist" && (
            <motion.div key="wishlist" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {wishlist.length === 0 ? (
                <div className="glass rounded-[3rem] border border-white/5 p-16 flex flex-col items-center justify-center text-center">
                  <FaHeart size={48} className="text-white/10 mb-6" />
                  <p className="text-xl font-black mb-2 text-white/50">Your wishlist is empty</p>
                  <Link to="/shop" className="text-green-400 text-sm font-black uppercase tracking-widest mt-4 hover:underline">Browse Plants</Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {wishlist.map((plant) => (
                    <div key={plant.id} className="glass-card rounded-[2.5rem] p-5 border border-white/5 flex flex-col group relative">
                      <button onClick={() => removeFromWishlist(plant.id)} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all">
                        <FaTimes size={10} className="hidden" /> <FaHeart size={12} />
                      </button>
                      <Link to={`/plant/${plant.id}`} className="h-40 bg-white/5 rounded-[1.5rem] p-4 flex items-center justify-center mb-4">
                        <img src={plant.img} alt={plant.name} className="h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform" />
                      </Link>
                      <h3 className="font-black text-lg text-white mb-1 tracking-tight truncate">{plant.name}</h3>
                      <div className="flex items-center justify-between mt-auto pt-4">
                        <span className="text-green-400 font-black italic">₹{plant.price}</span>
                        <button onClick={() => addToCart(plant)} className="w-10 h-10 bg-white text-green-950 rounded-xl flex items-center justify-center hover:bg-green-50 transition-all">
                          <FaShoppingCart size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "orders" && (
            <motion.div key="orders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="glass rounded-[3rem] border border-white/5 p-16 flex flex-col items-center justify-center text-center">
                <FaShoppingBag size={48} className="text-white/10 mb-6" />
                <p className="text-xl font-black mb-2 text-white/50">No past orders</p>
                <p className="text-white/30 text-sm">Once you place an order, it will appear here.</p>
                <Link to="/shop" className="text-green-400 text-sm font-black uppercase tracking-widest mt-6 hover:underline">Start Shopping</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
