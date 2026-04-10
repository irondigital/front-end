import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSearch, FaHeart, FaShoppingBag, FaStar, FaFilter, FaTimes, FaLeaf, FaSun, FaWater, FaCheck
} from "react-icons/fa";
import { getPlants } from "../data/plants";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { useDebounce } from "../hooks/useDebounce";

const CATEGORIES = ["all", "tropical", "succulent", "flowering", "hanging", "vining"];
const SUNLIGHT = ["all", "low", "medium", "high"];
const MAINTENANCE = ["all", "easy", "medium", "hard"];
const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "rating", label: "Top Rated" },
];

const SkeletonCard = () => (
  <div className="glass-card rounded-[2.5rem] p-6 animate-pulse">
    <div className="h-48 bg-white/5 rounded-2xl mb-6" />
    <div className="h-4 bg-white/5 rounded-full mb-3 w-1/3" />
    <div className="h-6 bg-white/5 rounded-full mb-3 w-2/3" />
    <div className="h-4 bg-white/5 rounded-full mb-6 w-full" />
    <div className="h-12 bg-white/5 rounded-2xl" />
  </div>
);

const ShopCard = ({ plant }) => {
  const { addToCart, cart } = useCartStore();
  const { toggleWishlist, isWishlisted } = useWishlistStore();
  const inCart = cart.some((i) => i.id === plant.id);
  const wishlisted = isWishlisted(plant.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-[2.5rem] p-6 flex flex-col group relative overflow-hidden border border-white/5 hover:border-green-400/20 transition-all duration-500"
    >
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => toggleWishlist(plant)}
        className={`absolute top-5 right-5 z-10 p-2.5 rounded-2xl transition-all duration-300 ${
          wishlisted
            ? "bg-red-500/20 text-red-400 border border-red-400/30"
            : "glass text-white/40 hover:text-red-400 border border-white/10"
        }`}
      >
        <FaHeart size={14} />
      </motion.button>

      <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase">
        {plant.title}
      </span>

      <Link to={`/plant/${plant.id}`} className="flex justify-center items-center h-52 mt-4 overflow-hidden rounded-2xl">
        <img
          src={plant.img}
          alt={plant.name}
          loading="lazy"
          className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-700"
        />
      </Link>

      <div className="mt-6 flex flex-col gap-2 flex-1">
        <h2 className="text-xl font-black text-white tracking-tight group-hover:text-green-400 transition-colors duration-300">
          {plant.name}
        </h2>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 font-light">
          {plant.description}
        </p>

        <div className="flex gap-3 mt-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 flex items-center gap-1">
            <FaSun size={8} className="text-yellow-400" /> {plant.sunlight}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 flex items-center gap-1">
            <FaLeaf size={8} className="text-green-400" /> {plant.environment}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 flex items-center gap-1">
            <FaWater size={8} className="text-blue-400" /> {plant.maintenance}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={10}
                className={i < Math.floor(plant.rating) ? "text-yellow-400" : "text-white/10"}
              />
            ))}
          </div>
          <span className="text-[11px] text-white/40 font-medium">({plant.reviews})</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
        <span className="text-2xl font-black text-white italic">₹{plant.price}</span>
        <div className="flex gap-2">
          <Link
            to={`/plant/${plant.id}`}
            className="px-5 py-3 text-xs font-black uppercase tracking-widest glass border border-white/10 rounded-2xl text-white hover:border-green-400/40 hover:text-green-400 transition-all"
          >
            View
          </Link>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(plant)}
            className={`p-3 rounded-2xl transition-all active:scale-95 ${
              inCart
                ? "bg-green-600 text-white border border-green-500"
                : "bg-white text-green-950 hover:bg-green-50"
            }`}
          >
            {inCart ? <FaCheck size={16} /> : <FaShoppingBag size={16} />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Shop() {
  const allPlants = getPlants();
  const [searchRaw, setSearchRaw] = useState(new URLSearchParams(window.location.search).get("q") || "");
  const [category, setCategory] = useState("all");
  const [sunlight, setSunlight] = useState("all");
  const [maintenance, setMaintenance] = useState("all");
  const [environment, setEnvironment] = useState("all");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate remote loading config
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const search = useDebounce(searchRaw, 300);

  const filtered = useMemo(() => {
    let result = allPlants.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "all" || p.category === category;
      const matchSun = sunlight === "all" || p.sunlight === sunlight;
      const matchMaint = maintenance === "all" || p.maintenance === maintenance;
      const matchEnv =
        environment === "all" || p.environment === environment || p.environment === "both";
      const matchPrice = p.price <= maxPrice;
      return matchSearch && matchCat && matchSun && matchMaint && matchEnv && matchPrice;
    });

    if (sort === "price_asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "price_desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [allPlants, search, category, sunlight, maintenance, environment, maxPrice, sort]);

  const resetFilters = () => {
    setCategory("all");
    setSunlight("all");
    setMaintenance("all");
    setEnvironment("all");
    setMaxPrice(3000);
    setSort("default");
  };

  return (
    <div className="min-h-screen px-4 lg:px-12 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-6 bg-green-400/5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Our Collection
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-green-400 to-emerald-600 bg-clip-text text-transparent italic">
          Plant Shop
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={14} />
          <input
            type="text"
            value={searchRaw}
            onChange={(e) => setSearchRaw(e.target.value)}
            placeholder="Search plants..."
            className="w-full pl-12 pr-5 py-4 glass rounded-2xl border border-white/10 text-white placeholder-white/30 outline-none focus:border-green-400/40 transition-all text-sm font-medium bg-transparent"
          />
          {searchRaw && (
            <button
              onClick={() => setSearchRaw("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="glass border border-white/10 rounded-2xl px-5 py-4 text-white text-sm font-medium outline-none bg-transparent cursor-pointer min-w-[180px]"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="bg-[#071a12] text-white">
              {o.label}
            </option>
          ))}
        </select>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
            filtersOpen
              ? "bg-green-500 text-white"
              : "glass border border-white/10 text-white hover:border-green-400/40"
          }`}
        >
          <FaFilter size={12} />
          Filters
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card rounded-3xl p-8 mb-8 border border-white/5 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                        category === c
                          ? "bg-green-500 text-white"
                          : "glass border border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Sunlight</p>
                <div className="flex gap-2 flex-wrap">
                  {SUNLIGHT.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSunlight(s)}
                      className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                        sunlight === s
                          ? "bg-yellow-500/80 text-white"
                          : "glass border border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Maintenance</p>
                <div className="flex gap-2 flex-wrap">
                  {MAINTENANCE.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaintenance(m)}
                      className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                        maintenance === m
                          ? "bg-blue-500/80 text-white"
                          : "glass border border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                    Max Price: <span className="text-green-400">₹{maxPrice}</span>
                  </p>
                  <input
                    type="range"
                    min={200}
                    max={3000}
                    step={100}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-green-500"
                  />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Environment</p>
                  <div className="flex gap-2">
                    {["all", "indoor", "outdoor"].map((e) => (
                      <button
                        key={e}
                        onClick={() => setEnvironment(e)}
                        className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                          environment === e
                            ? "bg-emerald-600 text-white"
                            : "glass border border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={resetFilters}
              className="mt-6 text-xs font-black uppercase tracking-widest text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
            >
              <FaTimes size={10} /> Reset all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        key={filtered.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white/30 text-sm font-medium mb-6"
      >
        {filtered.length} plant{filtered.length !== 1 ? "s" : ""} found
      </motion.p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32 text-white/30"
        >
          <FaLeaf size={64} className="mx-auto mb-6 text-green-400/20" />
          <p className="text-2xl font-black">No plants match your filters</p>
          <button
            onClick={resetFilters}
            className="mt-6 px-8 py-4 bg-green-600 rounded-2xl text-white font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all"
          >
            Reset Filters
          </button>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filtered.map((plant) => (
              <ShopCard key={plant.id} plant={plant} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
