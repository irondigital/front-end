import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { UserPlus, Mail, Lock, ArrowRight, ShieldCheck, Sparkles, Fingerprint } from "lucide-react";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "admin"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Protocol failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden p-6 selection:bg-indigo-100">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] animate-float opacity-70" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-violet-50/40 rounded-full blur-[130px] animate-float opacity-60" style={{ animationDelay: "3s" }} />
      
      <div className="glass-card glass-card-hover p-12 w-full max-w-md relative z-10 border-white/60 animate-scale-in">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-indigo-500/25 shadow-lg transform -rotate-6 group hover:rotate-0 transition-all duration-700">
            <Fingerprint className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">
            Identity <span className="text-gradient">Genesis</span>
          </h2>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span>Admin Registration</span>
          </div>
        </div>

        {error && (
          <div className="bg-rose-50/50 border border-rose-100 text-rose-500 p-4 rounded-xl mb-8 text-sm font-bold flex items-center animate-shake">
            <ShieldCheck className="w-5 h-5 mr-3 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-7">
          
          <div className="space-y-2.5 group">
            <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Digital Identity</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="name@studipro.com"
                onChange={handleChange}
                required
                className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-300 font-bold text-sm"
              />
            </div>
          </div>

          <div className="space-y-2.5 group">
            <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Secure Passkey</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                required
                className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-300 font-bold text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-5 text-sm group shadow-indigo-100 mt-2"
          >
            <span className="relative z-10 flex items-center justify-center uppercase tracking-widest">
              {isSubmitting ? "Generating Hash..." : "Create Authority"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />}
            </span>
          </button>
        </form>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-[10px] uppercase tracking-[0.3em] font-black text-slate-300">Member Status</span>
          </div>
        </div>

        <Link
          to="/login"
          className="w-full flex items-center justify-center py-4.5 border-2 border-slate-50 hover:border-indigo-50 bg-white rounded-2xl text-slate-500 font-black text-xs hover:text-indigo-600 hover:bg-indigo-50/30 transition-all uppercase tracking-widest"
        >
          Return to Login
        </Link>

        {/* Brand Footer */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em] leading-relaxed">
            Studi<span className="text-indigo-400/50">PRO</span> System Architecture
          </p>
        </div>
      </div>

    </div>
  );
}

export default Register;