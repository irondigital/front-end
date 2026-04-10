import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import { MdLocationOff } from "react-icons/md";
import { getPlants } from "../data/plants";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";

const getClimateZone = (lat, lon) => {
  if (lat >= 8 && lat <= 25 && lon >= 72 && lon <= 90) return "tropical";
  if (lat >= 25 && lat <= 35 && lon >= 68 && lon <= 78) return "arid";
  if (lat >= 30 && lat <= 37 && lon >= 74 && lon <= 82) return "cold";
  return "tropical";
};

const CLIMATE_LABELS = {
  tropical: { label: "Tropical", emoji: "🌴", desc: "Warm, humid climate — perfect for jungle plants!" },
  arid: { label: "Arid/Desert", emoji: "🌵", desc: "Dry, warm climate — succulents thrive here!" },
  cold: { label: "Cool / Hilly", emoji: "🏔️", desc: "Cool climate — prefer hearty, cold-tolerant plants!" },
};

const CLIMATE_TAGS = {
  tropical: ["tropical", "humid", "statement"],
  arid: ["arid", "desert", "low-light", "hardy"],
  cold: ["cold-tolerant", "outdoor"],
};

export default function LocationSuggestion() {
  const [zone, setZone] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const plants = getPlants();
  const { addToCart } = useCartStore();

  const detect = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const z = getClimateZone(latitude, longitude);
        setZone(z);

        try {
          const resp = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
          const data = await resp.json();
          setCity(data.city || data.locality || data.countryName || "Your Region");
        } catch {
          setCity("Your Region");
        }
        setLoading(false);
      },
      (err) => {
        setError("Location access denied. Please allow location permissions.");
        setLoading(false);
      }
    );
  };

  const suggestions = zone ? plants.filter((p) => CLIMATE_TAGS[zone]?.some((tag) => p.tags?.includes(tag))) : [];

  return (
    <div className="min-h-[80vh] px-4 lg:px-12 py-16 text-white flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-6 bg-green-400/5">
          <FaMapMarkerAlt size={10} /> Localized Picks
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter italic text-white mb-4">Plants for Your Area</h1>
        <p className="text-white/40 max-w-xl mx-auto font-light">Share your location, and we'll suggest plants that thrive in your climate.</p>
      </motion.div>

      {!zone ? (
        <div className="flex flex-col items-center gap-6 mb-12">
          <button onClick={detect} disabled={loading} className="flex items-center gap-4 px-10 py-5 bg-white text-green-950 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all shadow-2xl disabled:opacity-60">
            {loading ? <FaSpinner className="animate-spin" /> : <FaMapMarkerAlt />}
            {loading ? "Detecting..." : "Detect Location"}
          </button>
          {error && <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20"><MdLocationOff /> {error}</div>}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-5xl">
          <div className="glass-card rounded-[3rem] p-10 border border-white/5 mb-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="text-7xl">{CLIMATE_LABELS[zone]?.emoji}</div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-green-400 text-xs font-black uppercase tracking-widest mb-2">Detected: {city}</p>
              <h2 className="text-4xl font-black text-white italic">{CLIMATE_LABELS[zone]?.label}</h2>
              <p className="text-white/50 text-sm mt-2">{CLIMATE_LABELS[zone]?.desc}</p>
            </div>
            <button onClick={() => setZone(null)} className="px-6 py-4 glass border border-white/10 rounded-2xl text-white/50 hover:text-white uppercase font-black text-xs tracking-widest transition-all">Redetect</button>
          </div>

          <h3 className="text-2xl font-black text-white mb-6">Recommended ({suggestions.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestions.map((plant) => (
              <div key={plant.id} className="glass-card rounded-[2.5rem] p-6 border border-white/5 hover:border-green-400/20 transition-all relative overflow-hidden group">
                <img src={plant.img} alt={plant.name} className="h-40 w-full object-contain mb-4 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-black text-white mb-2">{plant.name}</h3>
                <p className="text-white/40 text-xs mb-4 line-clamp-2">{plant.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-black text-green-400 text-lg">₹{plant.price}</span>
                  <div className="flex gap-2">
                    <Link to={`/plant/${plant.id}`} className="px-4 py-2 glass rounded-xl text-xs uppercase font-black tracking-widest border border-white/10 hover:text-green-400">View</Link>
                    <button onClick={() => addToCart(plant)} className="px-4 py-2 bg-white text-green-950 rounded-xl text-xs uppercase font-black tracking-widest">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
