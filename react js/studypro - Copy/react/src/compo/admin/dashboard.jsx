import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { 
  Users, 
  BookOpen, 
  MessageSquare, 
  ArrowUpRight, 
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  Zap,
  Activity,
  Plus
} from "lucide-react";
import axios from "axios";

const API_BASE = "http://localhost:5000/auth/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalUsers: 0,
    totalMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [courses, admins, students] = await Promise.all([
          axios.get(`${API_BASE}/addcourses`),
          axios.get(`${API_BASE}/addadmin`),
          axios.get(`${API_BASE}/Studentdata`)
        ]);
        
        setStats({
          totalCourses: courses.data.length,
          totalUsers: admins.data.length,
          totalMessages: students.data.length,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setTimeout(() => setLoading(false), 500); // Subtle delay for smoother entry
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Courses", value: stats.totalCourses, icon: BookOpen, color: "indigo", trend: "+12%", desc: "Published modules" },
    { label: "Total Admins", value: stats.totalUsers, icon: Users, color: "violet", trend: "+3%", desc: "Active managers" },
    { label: "Engagements", value: stats.totalMessages, icon: MessageSquare, color: "rose", trend: "+25%", desc: "Student interactions" },
  ];

  const quickActions = [
    { label: "Add Course", icon: Plus, path: "/admin/courses-data/add-course", color: "indigo" },
    { label: "New Admin", icon: Users, path: "/admin/admin-data/add-admin", color: "violet" },
    { label: "Post Job", icon: Zap, path: "/admin/jobs/add-jobs", color: "amber" },
  ];

  return (
    <div className="flex bg-[#f8fafc] min-h-screen font-sans">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10 overflow-y-auto w-full animate-fade-in">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs tracking-widest uppercase mb-2">
              <Activity className="w-4 h-4" />
              <span>Real-time Operations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              HQ Dashboard
            </h1>
            <p className="text-slate-500 font-medium mt-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Overview of StudiPRO ecosystem for {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="flex items-center space-x-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="hidden sm:flex items-center space-x-3 bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-right mr-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">System Status</div>
                <div className="text-xs font-extrabold text-green-500 flex items-center justify-end">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                  Optimal High
                </div>
              </div>
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <Zap className="w-5 h-5 fill-indigo-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {statCards.map((card, idx) => (
            <div 
              key={idx} 
              className={`glass-card glass-card-hover p-8 group animate-scale-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-${card.color}-50 flex items-center justify-center text-${card.color}-600 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <div className="flex items-center text-green-500 text-xs font-bold bg-green-50 px-3 py-1.5 rounded-full border border-green-100/50">
                  <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  {card.trend}
                </div>
              </div>
              <h3 className="text-slate-400 font-bold text-[11px] tracking-widest uppercase mb-1">{card.label}</h3>
              <div className="flex items-end justify-between">
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                    {loading ? "..." : card.value}
                  </span>
                  <span className="text-slate-400 font-bold text-xs mb-1.5">{card.desc}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </div>
              
              {/* Fake Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="progress-ring">
                  <div 
                    className={`progress-ring-fill bg-${card.color}-500 shadow-[0_0_8px_var(--color-${card.color}-400)]`} 
                    style={{ width: `${card.trend.replace('+', '').replace('%', '')}%` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Content Sections */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Recent Activity */}
          <div className="lg:col-span-2 glass-card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-display font-extrabold text-slate-900">Platform Activity</h2>
              </div>
              <button className="text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors flex items-center">
                Full Audit <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl hover:bg-slate-50/80 transition-all border border-transparent hover:border-slate-100 group">
                  <div className="flex items-center space-x-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">Course Enrollment Sync</h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">Student <span className="text-slate-900 font-bold text-[10px]">USR-00{i}</span> purchased "Fullstack Mastery"</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">2 hours ago</span>
                    <span className="text-[10px] font-extrabold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-display font-extrabold text-slate-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, idx) => (
                  <button 
                    key={idx}
                    onClick={() => window.location.href = action.path}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group"
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg bg-${action.color}-100 flex items-center justify-center text-${action.color}-600 mr-3 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{action.label}</span>
                    </div>
                    <Plus className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Health */}
            <div className="glass-card p-8 bg-slate-900 border-none shadow-2xl shadow-indigo-200/20 text-white animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                  <Zap className="w-5 h-5 fill-indigo-400" />
                </div>
                <h2 className="text-xl font-display font-extrabold tracking-tight">System Intel</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-3 opacity-60">
                    <span>Server Load</span>
                    <span className="text-indigo-400">78.4%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full w-[78%] rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-indigo-400 shrink-0" />
                    <p className="text-[11px] font-medium leading-relaxed opacity-80">
                      We've observed a <span className="text-white font-bold underline decoration-indigo-500">14% surge</span> in nighttime traffic globally. CDN performance has been auto-scaled.
                    </p>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all border border-white/10">
                  View Network Logs
                </button>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;