import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const RESPONSES = {
  greet: "Hello! 🌿 Welcome to PLANTO! How can I help you?",
  help: "I can help with plant care, prices, tracking orders, and recommendations!",
  price: "Our plants range from ₹299 (Aloe) to ₹2499 (Fiddle Leaf). Check the Shop!",
  care: "Tip: Water less often but deeply, and always check the soil before watering! 💧",
  water: "Check your specific plant's schedule, but generally, wait for the top 2 inches of soil to dry.",
  default: "I'm not sure, but our team loves helping! You can try our Plant Recommender Quiz 🌿."
};

const getResponse = (msg) => {
  const m = msg.toLowerCase();
  if (m.match(/hi|hello|hey/)) return RESPONSES.greet;
  if (m.match(/help|support/)) return RESPONSES.help;
  if (m.match(/price|cost|₹/)) return RESPONSES.price;
  if (m.match(/care|maintain/)) return RESPONSES.care;
  if (m.match(/water/)) return RESPONSES.water;
  return RESPONSES.default;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: RESPONSES.greet }]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: "user", text: input }]);
    const currentInput = input;
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: getResponse(currentInput) }]);
    }, 600);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)] text-white hover:scale-110 transition-transform">
        <FaRobot size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] glass overflow-hidden rounded-3xl border border-white/10 z-[100] flex flex-col h-[400px] shadow-2xl">
            <div className="bg-green-500/10 p-4 border-b border-white/10 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center"><FaRobot /></div>
                <div>
                  <p className="font-black text-sm">PlantBot</p>
                  <p className="text-[10px] text-green-400">Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white"><FaTimes /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${m.from === "user" ? "bg-green-500 text-white rounded-br-sm font-medium" : "glass text-white/80 rounded-bl-sm border border-white/5"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-white/10 bg-black/20 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask about plants..." className="flex-1 bg-transparent text-white text-sm outline-none px-2" />
              <button onClick={send} className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white hover:bg-green-500 transition-colors"><FaPaperPlane size={12} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
