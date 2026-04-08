import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../admin/AuthContext";
import Navbar from "./navbar";
import Footer from "./footer";
import { LogOut, User, Sparkles, BookOpen, Clock, Award } from "lucide-react";

function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/user/auth");
  };

  // Prevent rendering if not logged in or not a regular user
  if (!user || user.role !== "user") {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-medium">Verifying Identity...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">
        
        {/* Welcome Banner */}
        <div className="glass-card p-10 relative overflow-hidden border-white/5 mb-8 animate-fade-in">
          {/* Decorative Orbs */}
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-50%] left-[-10%] w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-slate-900/50 border border-white/10 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-indigo-500/10 transform rotate-3 hover:rotate-0 transition-transform">
                {user.emoji || "👤"}
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Student Node</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
                  Welcome, <span className="text-gradient">{user.name}</span>
                </h1>
                <p className="text-slate-400 font-medium mt-2 flex items-center">
                  <User className="w-4 h-4 mr-2 opacity-50" />
                  {user.email}
                </p>
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="btn-secondary group flex items-center px-6 py-3"
            >
              <LogOut className="w-4 h-4 mr-2 text-slate-400 group-hover:text-rose-400 transition-colors" />
              <span>Disconnect</span>
            </button>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="glass-card p-8 border-white/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">My Courses</h3>
            <p className="text-slate-400 text-sm mb-6">View your active enrollments and learning progress.</p>
            <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-2xl bg-slate-900/20">
              <p className="text-slate-500 font-medium text-sm">No active courses found.</p>
              <button className="mt-4 text-indigo-400 font-bold text-xs uppercase tracking-widest hover:text-indigo-300">Browse Catalog</button>
            </div>
          </div>

          <div className="glass-card p-8 border-white/5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Schedule</h3>
            <p className="text-slate-400 text-sm mb-6">Upcoming classes, assignments, and deadlines.</p>
            <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-2xl bg-slate-900/20">
              <p className="text-slate-500 font-medium text-sm">Your schedule is clear.</p>
            </div>
          </div>

          <div className="glass-card p-8 border-white/5 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Achievements</h3>
            <p className="text-slate-400 text-sm mb-6">Certificates and badges earned on StudiPRO.</p>
            <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-2xl bg-slate-900/20">
              <p className="text-slate-500 font-medium text-sm">Start learning to earn badges.</p>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
