import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaSun, FaWater, FaCheck, FaRedo, FaArrowRight } from "react-icons/fa";
import { getPlants } from "../data/plants";
import { useCartStore } from "../store/useCartStore";

const QUESTIONS = [
  {
    id: "sunlight",
    question: "How much sunlight does your space get?",
    icon: FaSun,
    options: [
      { id: "low", label: "Low Light", desc: "Small windows, north-facing, shaded" },
      { id: "medium", label: "Medium Light", desc: "East/West facing, some direct sun" },
      { id: "high", label: "Bright Light", desc: "South facing, lots of direct sun" },
    ]
  },
  {
    id: "maintenance",
    question: "How much time can you dedicate to plant care?",
    icon: FaWater,
    options: [
      { id: "easy", label: "I forget easily", desc: "Needs minimal watering and care" },
      { id: "medium", label: "A few times a week", desc: "Can follow a regular schedule" },
      { id: "hard", label: "I'm a plant parent", desc: "Happy to mist and tend daily" },
    ]
  },
  {
    id: "environment",
    question: "Where will this plant live?",
    icon: FaLeaf,
    options: [
      { id: "indoor", label: "Indoors", desc: "Living room, bedroom, office" },
      { id: "outdoor", label: "Outdoors", desc: "Balcony, garden, patio" },
      { id: "both", label: "Doesn't matter", desc: "I have space for either!" },
    ]
  }
];

export default function Recommend() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const { addToCart } = useCartStore();

  const handleSelect = (optionId) => {
    const currentQ = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQ.id]: optionId };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => calculateResults(newAnswers), 400);
    }
  };

  const calculateResults = (finalAnswers) => {
    const plants = getPlants();
    
    const matches = plants.map(plant => {
      let score = 0;
      if (plant.sunlight === finalAnswers.sunlight) score += 3;
      if (plant.maintenance === finalAnswers.maintenance) score += 3;
      if (plant.environment === finalAnswers.environment || plant.environment === "both") score += 2;
      return { ...plant, matchScore: score };
    });

    matches.sort((a, b) => b.matchScore - a.matchScore);
    const topMatches = matches.filter(m => m.matchScore >= 5).slice(0, 3);
    setResults(topMatches.length > 0 ? topMatches : matches.slice(0, 3));
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {!results ? (
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-4 bg-green-400/5">
              <FaLeaf /> Plant Matchmaker
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tight">Find Your Perfect Plant</h1>
          </div>

          <div className="flex justify-between gap-2 mb-12 max-w-sm mx-auto">
            {QUESTIONS.map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: i <= step ? "100%" : "0%" }} className="h-full bg-green-500" />
              </div>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="text-center mb-10">
                  {React.createElement(QUESTIONS[step].icon, { size: 32, className: "mx-auto text-green-400 mb-6" })}
                  <h2 className="text-2xl md:text-3xl font-black text-white">{QUESTIONS[step].question}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {QUESTIONS[step].options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt.id)}
                      className={`p-6 rounded-[2rem] text-left transition-all border ${
                        answers[QUESTIONS[step].id] === opt.id 
                          ? "glass border-green-400 bg-green-500/10" 
                          : "glass border-white/5 hover:border-green-400/30 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-black text-white">{opt.label}</h3>
                        {answers[QUESTIONS[step].id] === opt.id && <FaCheck className="text-green-400" />}
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">Your Best Matches</h1>
            <p className="text-white/40">Based on your preferences, these plants will thrive with you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {results.map((plant, idx) => (
              <motion.div key={plant.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass-card rounded-[2.5rem] p-6 border border-white/5 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-bl-[2rem] z-10 shadow-lg">
                  {idx === 0 ? "Top Match" : "Great Fit"}
                </div>
                <div className="h-48 bg-white/5 rounded-[2rem] flex items-center justify-center p-4 mb-6">
                  <img src={plant.img} alt={plant.name} className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{plant.name}</h3>
                <p className="text-white/40 text-xs mb-6 flex-1 line-clamp-2">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-green-400 italic">₹{plant.price}</span>
                  <div className="flex gap-2">
                    <Link to={`/plant/${plant.id}`} className="px-4 py-2 text-xs font-black uppercase tracking-widest glass border border-white/10 rounded-xl text-white hover:border-green-400/40 hover:text-green-400 transition-all">View</Link>
                    <button onClick={() => addToCart(plant)} className="px-4 py-2 bg-white text-green-950 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-green-50 transition-all">Add</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={restart} className="w-full sm:w-auto justify-center px-8 py-4 glass text-white border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-white/30 transition-all flex items-center gap-3">
              <FaRedo /> Retake Quiz
            </button>
            <Link to="/shop" className="w-full sm:w-auto justify-center px-8 py-4 bg-green-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl flex items-center gap-3">
              Browse All <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
