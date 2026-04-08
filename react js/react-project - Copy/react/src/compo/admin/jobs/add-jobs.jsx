import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  BarChart, 
  ChevronRight,
  Plus,
  ArrowLeft,
  Sparkles,
  ShieldAlert
} from "lucide-react";

function AddJob() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState({
    jobtitle: "",
    location: "",
    experience: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onHandleChange = (e) => {
    setJobs({
      ...jobs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      await axios.post("http://localhost:5000/auth/api/carrier", jobs);
      navigate("/admin/jobs/manage-jobs");
    } catch (err) {
      console.log(err);
      setError("Protocol failure: Unable to broadcast job posting.");
      setIsSubmitting(false);
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
              <Briefcase className="w-3.5 h-3.5" />
              <span>Talent Acquisition</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">New Posting</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Broadcast <span className="text-gradient">Role</span>
            </h1>
          </div>

          <button 
            onClick={() => navigate("/admin/jobs/manage-jobs")}
            className="btn-secondary py-2.5 px-5 text-sm flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            
            {/* Job Details Section */}
            <div className="glass-card p-10 space-y-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Position Details</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Core role identifying criteria</p>
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
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Official Job Title</label>
                  <div className="relative">
                    <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="text"
                      name="jobtitle"
                      placeholder="e.g., Senior Research Engineer"
                      value={jobs.jobtitle}
                      onChange={onHandleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Geographic Focus</label>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                      <input
                        type="text"
                        name="location"
                        placeholder="e.g., Remote / Noida"
                        value={jobs.location}
                        onChange={onHandleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Experience Tier</label>
                    <div className="relative">
                      <BarChart className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                      <input
                        type="text"
                        name="experience"
                        placeholder="e.g., 5+ Years"
                        value={jobs.experience}
                        onChange={onHandleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Employment Protocol</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <select
                      name="type"
                      value={jobs.type}
                      onChange={onHandleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm appearance-none"
                    >
                      <option value="">Select Type</option>
                      <option value="Full-Time">Full-Time Engagement</option>
                      <option value="Part-Time">Part-Time Support</option>
                      <option value="Internship">Technical Internship</option>
                      <option value="Remote">Remote Execution</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-6 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-5 text-sm group shadow-indigo-100"
              >
                <span className="relative z-10 flex items-center justify-center uppercase tracking-widest">
                  {isSubmitting ? "Broadcasting Posting..." : "Publish Job Role"}
                  {!isSubmitting && <Plus className="w-4 h-4 ml-3 group-hover:scale-125 transition-transform" />}
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddJob;