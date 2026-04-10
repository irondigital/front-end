import React, { useState } from "react";
import { FaSearch, FaCartPlus, FaBars, FaTimes, FaPlus, FaMinus, FaTrash, FaHeart, FaUser, FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useAuthStore } from "../store/useAuthStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { useThemeStore } from "../store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const { cart, cartCount, updateQuantity, removeFromCart, clearCart } = useCartStore();
  const cartTotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);
  const { isLoggedIn, user, logout } = useAuthStore();
  const { wishlist } = useWishlistStore();
  const { isDark, toggleTheme } = useThemeStore();

  const checkout = () => {
    alert("Checkout initiated (frontend only)");
    clearCart();
    setCartOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchVal.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchOpen(false);
      setSearchVal("");
    }
  };

  return (
    <header className="p-4 relative z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 glass rounded-[2rem] border-white/10 shadow-2xl">
        <Link to="/" className="flex items-center gap-3 text-2xl font-black text-white z-10 tracking-tighter italic">
          <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">PLANTO</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
          {[
            { to: "/", label: "Home" },
            { to: "/shop", label: "Shop" },
            { to: "/recommend", label: "Recommend" },
            { to: "/care-reminders", label: "Care" },
            { to: "/disease", label: "Disease Detect" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="hover:text-green-400 transition-all duration-300 relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Tools */}
        <div className="hidden md:flex gap-6 text-xl text-white items-center">
          <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-green-400 transition-all duration-300">
            <FaSearch size={16} />
          </button>
          <button onClick={toggleTheme} className="hover:text-green-400 transition-all duration-300">
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          
          <div className="relative cursor-pointer group" onClick={() => navigate("/dashboard")}>
            <FaHeart size={16} className="group-hover:text-red-400 transition-all duration-300" />
            <AnimatePresence>
              {wishlist.length > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black shadow-lg border-2 border-[#022c22]">
                  {wishlist.length}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="relative cursor-pointer group" onClick={() => setCartOpen(true)}>
            <FaCartPlus size={18} className="group-hover:text-green-400 transition-all duration-300" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black shadow-lg border-2 border-[#022c22]">
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {isLoggedIn ? (
            <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 glass border border-green-400/30 rounded-2xl text-green-400 text-xs font-black uppercase tracking-widest hover:bg-green-400/10 transition-all">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[9px] font-black">
                {user?.name?.[0]?.toUpperCase()}
              </div>
              {user?.name?.split(" ")[0]}
            </Link>
          ) : (
            <Link to="/login" className="flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-2xl text-white/60 text-xs font-black uppercase tracking-widest hover:border-white/30 hover:text-white transition-all">
              <FaUser size={12} /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-5">
          <div className="relative text-2xl text-white cursor-pointer" onClick={() => setCartOpen(true)}>
            <FaCartPlus size={18} />
            {cartCount > 0 && <span className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-black">{cartCount}</span>}
          </div>
          <button className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-4 right-4 mt-2 glass rounded-2xl border border-white/10 p-4 z-50">
            <div className="flex items-center gap-3">
              <FaSearch size={14} className="text-white/30" />
              <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} onKeyDown={handleSearch} placeholder="Search plants... (press Enter)" autoFocus className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-sm" />
              <button onClick={() => setSearchOpen(false)} className="text-white/30 hover:text-white"><FaTimes size={12} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 h-full w-full max-w-md glass border-l border-white/10 text-white shadow-2xl z-[101] flex flex-col">
              <div className="p-8 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-3xl font-black italic tracking-tighter flex items-center gap-4"><FaCartPlus className="text-green-400" /> CART</h2>
                <button onClick={() => setCartOpen(false)} className="p-3 hover:bg-white/10 rounded-full transition-all"><FaTimes size={24} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <FaCartPlus size={80} className="mb-6" />
                    <p className="text-2xl font-bold">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div layout key={item.id} className="flex gap-6 glass-card p-6 rounded-[2rem] border-white/5 relative overflow-hidden">
                      <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-3">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-xl" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-black text-lg italic tracking-tight">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-400/50 hover:text-red-400 p-1"><FaTrash size={14} /></button>
                          </div>
                          <p className="text-green-400 font-black mt-1">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-5 mt-4 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-green-400"><FaMinus size={10} /></button>
                          <span className="font-black w-6 text-center text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-green-400"><FaPlus size={10} /></button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t border-white/10 bg-white/5 backdrop-blur-3xl">
                  <div className="flex justify-between items-end mb-8 px-2">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-40">Total</span>
                    <span className="text-4xl font-black text-green-400 italic">₹{cartTotal}</span>
                  </div>
                  <button onClick={checkout} className="w-full py-6 bg-white text-green-950 rounded-[2rem] font-black text-xl shadow-2xl transition-all active:scale-95 hover:bg-green-50 flex items-center justify-center gap-4 uppercase tracking-widest">
                    Checkout <FaCartPlus />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
