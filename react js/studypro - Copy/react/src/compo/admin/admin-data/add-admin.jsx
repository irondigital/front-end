import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Shield, 
  User, 
  ChevronRight,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  ShieldAlert
} from "lucide-react";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/auth/api/addadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/admin/admin-data/manage-admin");
      } else {
        setError(data.message || "Credential generation failed.");
      }
    } catch (error) {
      console.error(error);
      setError("Network timeout: Protocol sync interrupted.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 animate-slide-up">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security & Access</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">New Administrator</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Initialize <span className="text-gradient">Authority</span>
            </h1>
          </div>

          <button 
            onClick={() => navigate("/admin/admin-data/manage-admin")}
            className="btn-secondary py-2.5 px-5 text-sm flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registry
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            
            {/* Identity & Access Section */}
            <div className="glass-card p-10 space-y-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Credential Setup</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Secure identity initialization</p>
                </div>
              </div>

              {error && (
                <div className="bg-rose-50 border border-rose-100 text-rose-500 p-4 rounded-xl text-xs font-bold flex items-center animate-shake">
                  <ShieldAlert className="w-4 h-4 mr-2" />
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Full Legal Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g., Alexander Sterling"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Credential Email</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="admin@studipro.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Initial Passkey</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Privilege Protocol (Role)</label>
                  <div className="relative">
                    <Shield className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm appearance-none"
                    >
                      <option value="admin">Standard Admin</option>
                      <option value="superadmin">Super Administrator</option>
                      <option value="editor">Content Editor</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-6 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-5 text-sm group shadow-indigo-100"
              >
                <span className="relative z-10 flex items-center justify-center uppercase tracking-widest">
                  {loading ? "Initializing Authority..." : "Confirm Protocol"}
                  {!loading && <Sparkles className="w-4 h-4 ml-3 group-hover:scale-125 transition-transform text-indigo-200" />}
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddAdmin;