import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../admin/AuthContext";
import Navbar from "./navbar";
import Footer from "./footer";
import { 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Fingerprint,
  Smile
} from "lucide-react";

function UserAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    emoji: "👤"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmojiChange = (emoji) => {
    setFormData({ ...formData, emoji });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (isLogin) {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate("/user/dashboard");
      } else {
        setError(result.message);
      }
    } else {
      const result = await register(formData);
      if (result.success) {
        setSuccess("Registration successful! You can now login.");
        setIsLogin(true);
      } else {
        setError(result.message);
      }
    }
    setLoading(false);
  };

  const emojis = ["👤", "🚀", "💡", "🎯", "🔥", "🌈", "🎓", "💻", "✨", "🌟"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="flex items-center justify-center py-24 px-6 relative overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="glass-card p-10 md:p-14 w-full max-w-lg relative z-10 border-white/5 animate-scale-in">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/20 transform -rotate-6 group hover:rotate-0 transition-all duration-700">
              {isLogin ? <Fingerprint className="text-white w-10 h-10 group-hover:scale-110 transition-transform" /> : <UserPlus className="text-white w-10 h-10 group-hover:scale-110 transition-transform" />}
            </div>
            <h2 className="text-4xl font-display font-black text-white mb-3 tracking-tight">
              {isLogin ? "Welcome" : "Create" } <span className="text-gradient">Account</span>
            </h2>
            <p className="text-slate-400 font-medium">
              {isLogin ? "Enter your credentials to access your console" : "Join our community of elite learners today" }
            </p>
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-2xl mb-8 text-sm font-bold flex items-center animate-shake">
              <ShieldCheck className="w-5 h-5 mr-3 flex-shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl mb-8 text-sm font-bold flex items-center animate-scale-in">
              <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {!isLogin && (
              <div className="space-y-2.5 group">
                <label className="text-[11px] font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-indigo-400 transition-colors">Visual Identity</label>
                <div className="relative">
                  <User className="absolute left-5 top-5 text-slate-500 w-5 h-5 group-focus-within:text-indigo-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="E.g. Elon Musk"
                    onChange={handleChange}
                    required
                    className="w-full pl-14 pr-6 py-4.5 bg-slate-900/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-bold text-sm"
                  />
                </div>
                
                {/* Emoji Selector */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center p-3 bg-slate-900/30 rounded-2xl border border-white/5">
                  {emojis.map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => handleEmojiChange(e)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${formData.emoji === e ? "bg-indigo-500 text-white scale-110 shadow-lg shadow-indigo-500/20" : "bg-slate-800/50 hover:bg-slate-700 hover:scale-105"}`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2.5 group">
              <label className="text-[11px] font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-indigo-400 transition-colors">Credential Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@nexus.com"
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-4.5 bg-slate-900/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-bold text-sm"
                />
              </div>
            </div>

            <div className="space-y-2.5 group">
              <label className="text-[11px] font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-indigo-400 transition-colors">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                  className="w-full pl-14 pr-6 py-4.5 bg-slate-900/50 border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-bold text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-5 text-sm group shadow-indigo-500/10 mt-4"
            >
              <span className="relative z-10 flex items-center justify-center uppercase tracking-widest font-black">
                {loading ? "Processing..." : (isLogin ? "Authenticate Session" : "Create Authority")}
                {!loading && <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />}
              </span>
            </button>
          </form>

          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-5 bg-[#0f172a] text-[10px] uppercase tracking-[0.4em] font-black text-slate-600">Protocol Switch</span>
            </div>
          </div>

          <button
            onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }}
            className="w-full flex items-center justify-center py-4.5 border-2 border-white/5 hover:border-indigo-500/30 bg-slate-900/30 rounded-2xl text-slate-400 font-black text-xs hover:text-indigo-400 transition-all uppercase tracking-widest"
          >
            {isLogin ? "Create New Identity" : "Already Identified? Access Login"}
          </button>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Add simple Success icon component since CheckCircle2 wasn't imported
const CheckCircle2 = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default UserAuth;
