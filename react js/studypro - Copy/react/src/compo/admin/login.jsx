import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ShieldAlert, Mail, Lock, LogIn, Sparkles, UserCheck } from "lucide-react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

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
    
    const result = await login(form.email, form.password);
    
    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      setError(result.message || "Invalid credentials. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden p-6 selection:bg-indigo-100">
      {/* Background Orbs - Premium Feel */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] animate-float opacity-70" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-50/40 rounded-full blur-[130px] animate-float opacity-60" style={{ animationDelay: "2s" }} />
      
      <div className="glass-card glass-card-hover p-12 w-full max-w-md relative z-10 border-white/60 animate-scale-in">
        
        {/* Logo/Icon Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-200 group transform -rotate-3 hover:rotate-0 transition-all duration-700">
            <UserCheck className="text-white w-10 h-10 group-hover:scale-110 transition-transform" />
          </div>
          <h2 className="text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">
            Security <span className="text-gradient">Node</span>
          </h2>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span>Encrypted Session</span>
          </div>
        </div>

        {error && (
          <div className="bg-rose-50/50 border border-rose-100 text-rose-500 p-4 rounded-2xl mb-8 text-sm font-bold flex items-center animate-shake">
            <ShieldAlert className="w-5 h-5 mr-3 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-3 group">
            <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Credential Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="admin@studipro.com"
                onChange={handleChange}
                required
                className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-300 font-bold text-sm"
              />
            </div>
          </div>

          <div className="space-y-3 group">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Access Key</label>
              <a href="#" className="text-[10px] font-black text-indigo-500 hover:text-indigo-700 tracking-widest uppercase transition-colors">Recovery?</a>
            </div>
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
            className="btn-primary w-full py-5 text-sm group shadow-indigo-100"
          >
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? "Syncing Credentials..." : "Access Control Center"}
              {!isSubmitting && <LogIn className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform" />}
            </span>
          </button>
        </form>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-[10px] uppercase tracking-[0.3em] font-black text-slate-300">Identity Protocol</span>
          </div>
        </div>

{/* Registration disabled publicly */}

        {/* Brand/Legal Footer */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em] leading-relaxed">
            Authorized Personnel Only
            <br />
            &copy; 2026 Studi<span className="text-indigo-400/50">PRO</span> Core
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;