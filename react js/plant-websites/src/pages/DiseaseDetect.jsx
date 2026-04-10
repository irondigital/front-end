import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUpload, FaLeaf, FaTimes, FaSearch, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const MOCK_DISEASES = [
  { name: "Healthy Plant! ✅", confidence: 95, severity: "None", symptoms: "No visible symptoms detected.", treatment: "Continue current care routine!", color: "green" },
  { name: "Root Rot", confidence: 87, severity: "High", symptoms: "Yellowing leaves, mushy base.", treatment: "Repot in fresh soil, trim black roots.", color: "red" },
  { name: "Leaf Blight", confidence: 91, severity: "Moderate", symptoms: "Brown patches on leaves.", treatment: "Apply fungicide, improve air circulation.", color: "orange" },
];

export default function DiseaseDetect() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImage(file);
    setResult(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const analyze = () => {
    if (!image) return;
    setAnalyzing(true);
    setTimeout(() => {
      setResult(MOCK_DISEASES[Math.floor(Math.random() * MOCK_DISEASES.length)]);
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-[80vh] px-4 py-16 text-white max-w-2xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-4 bg-green-400/5">
          <FaSearch /> AI Diagnosis
        </span>
        <h1 className="text-5xl font-black tracking-tighter italic mb-4">Disease Detector</h1>
        <p className="text-white/40 text-sm">Upload a photo to instantly diagnose plant health issues.</p>
      </div>

      <div className="w-full">
        {!preview ? (
          <div onClick={() => inputRef.current?.click()} className="border-2 border-dashed border-white/10 hover:border-green-400/30 glass-card rounded-[3rem] p-16 text-center cursor-pointer transition-all">
            <FaUpload size={40} className="mx-auto text-green-400/50 mb-6" />
            <h3 className="text-xl font-black mb-2">Tap to upload a photo</h3>
            <p className="text-white/30 text-xs">Supports JPG, PNG • Max 10MB</p>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files[0])} />
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <div className="relative glass-card rounded-[3rem] overflow-hidden aspect-video flex items-center justify-center p-4 border border-white/5">
              <img src={preview} alt="Plant Preview" className="w-full h-full object-contain" />
              <button onClick={() => { setPreview(null); setResult(null); setImage(null); }} className="absolute top-4 right-4 p-3 glass rounded-2xl hover:text-red-400 border border-white/10"><FaTimes /></button>
              
              {analyzing && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                  <FaLeaf size={32} className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.8)] animate-pulse mb-4" />
                  <p className="text-xl font-black tracking-widest uppercase">Analyzing Plant...</p>
                </div>
              )}
            </div>

            {!result && !analyzing && (
              <button onClick={analyze} className="w-full py-5 bg-white text-green-950 font-black tracking-widest uppercase rounded-3xl hover:bg-green-50 shadow-2xl active:scale-95 transition-all">Scan Plant Health</button>
            )}

            <AnimatePresence>
              {result && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-[3rem] p-8 border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex flex-shrink-0 items-center justify-center bg-${result.color}-500/20 text-${result.color}-400`}>
                      {result.color === "green" ? <FaCheckCircle size={24} /> : <FaExclamationTriangle size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{result.name}</h3>
                      <p className="text-white/40 text-xs mt-1 uppercase font-bold tracking-widest">{result.confidence}% Match • {result.severity}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="glass p-5 rounded-3xl border border-white/5">
                      <p className="text-xs uppercase font-black text-white/40 mb-2">Symptoms</p>
                      <p className="text-sm text-white/70">{result.symptoms}</p>
                    </div>
                    <div className="glass p-5 rounded-3xl border border-green-400/20 bg-green-400/5">
                      <p className="text-xs uppercase font-black text-green-400/70 mb-2">Treatment Room</p>
                      <p className="text-sm text-green-400">{result.treatment}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
