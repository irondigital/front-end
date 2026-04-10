import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaLeaf } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return alert("Fill all fields");
    const user = { id: Date.now(), ...form, role: "user" };
    localStorage.setItem("planto_user_data", JSON.stringify(user));
    login({ name: form.name, email: form.email, role: "user" });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass-card p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-[60px] rounded-full -z-10" />
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-[#071a12] rounded-[14px] flex items-center justify-center">
              <FaLeaf size={24} className="text-green-400" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-white text-center mb-2 italic tracking-tight">Join PLANTO</h2>
        <p className="text-white/40 text-center text-sm mb-10">Start your indoor jungle journey</p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
            <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full pl-12 pr-5 py-4 glass rounded-2xl border border-white/10 text-white placeholder-white/30 outline-none focus:border-green-400/50 transition-all text-sm bg-transparent" />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
            <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full pl-12 pr-5 py-4 glass rounded-2xl border border-white/10 text-white placeholder-white/30 outline-none focus:border-green-400/50 transition-all text-sm bg-transparent" />
          </div>
          <div className="relative">
            <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
            <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full pl-12 pr-5 py-4 glass rounded-2xl border border-white/10 text-white placeholder-white/30 outline-none focus:border-green-400/50 transition-all text-sm bg-transparent" />
          </div>

          <button type="submit" className="w-full py-5 bg-white text-green-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all mt-4 shadow-xl active:scale-95">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-white/40 text-sm">
          Already have an account? <Link to="/login" className="text-green-400 font-bold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}
