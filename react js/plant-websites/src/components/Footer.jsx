import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaLeaf, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 border-t border-white/5 glass relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[-20%] left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 z-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3 text-2xl font-black text-white mb-6 italic tracking-tighter">
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">PLANTO</span>
          </Link>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed font-light">
            Elevating your indoor and outdoor spaces with nature's masterpiece. We deliver high-oxygen, carefully curated botanical specimens straight to your door.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/30 transition-all border border-white/10"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/30 transition-all border border-white/10"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/30 transition-all border border-white/10"><FaGithub /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><Link to="/shop" className="hover:text-green-400 transition-colors">Our Plants</Link></li>
            <li><Link to="/recommend" className="hover:text-green-400 transition-colors">Plant Quiz</Link></li>
            <li><Link to="/disease" className="hover:text-green-400 transition-colors">Disease AI</Link></li>
            <li><Link to="/location" className="hover:text-green-400 transition-colors">Local Picks</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6">Account</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><Link to="/login" className="hover:text-green-400 transition-colors">Sign In</Link></li>
            <li><Link to="/register" className="hover:text-green-400 transition-colors">Register</Link></li>
            <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">My Orders</Link></li>
            <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">Wishlist</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
          <p>© {new Date().getFullYear()} Planto Store. No real backend, just pure frontend magic.</p>
          <div className="flex items-center gap-1 font-medium">
            Made with <FaHeart className="text-red-500/50" /> and <FaLeaf className="text-green-500/50" /> via Vite + Zustand
          </div>
        </div>
      </div>
    </footer>
  );
}
