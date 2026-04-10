import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import { 
  Plus, 
  BookOpen, 
  FileText, 
  Clock, 
  BarChart, 
  IndianRupee, 
  Image as ImageIcon, 
  Link as LinkIcon,
  ChevronRight,
  Sparkles,
  ArrowLeft
} from "lucide-react";

function AdminAddCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    duration: "",
    level: "",
    price: "",
    image: "",
    link: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
   
    try {
      await axios.post("http://localhost:5000/auth/api/addcourses", formData);
      navigate("/admin/courses-data/manage-courses");
    } catch (err) {
      setError(err.response?.data?.message || "Protocol failure: Sync interrupted.");
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
              <BookOpen className="w-3.5 h-3.5" />
              <span>Catalog Management</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">New Course</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Create <span className="text-gradient">Experience</span>
            </h1>
          </div>

          <button 
            onClick={() => navigate("/admin/courses-data/manage-courses")}
            className="btn-secondary py-2.5 px-5 text-sm flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Catalog
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            
            {/* Core Details Section */}
            <div className="glass-card p-10 space-y-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">Basic Information</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Primary course identity metadata</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Course Title</label>
                  <div className="relative">
                    <BookOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g., Advanced System Architecture"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">Course Description</label>
                  <div className="relative">
                    <FileText className="absolute left-5 top-6 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                    <textarea
                      name="desc"
                      placeholder="Detail the curriculum, outcomes, and value proposition..."
                      value={formData.desc}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full pl-14 pr-6 py-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-medium text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-10 space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Timeline & Level</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Duration and complexity tier</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-violet-600 transition-colors">Course Duration</label>
                    <div className="relative">
                      <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-violet-500 transition-colors" />
                      <input
                        type="text"
                        name="duration"
                        placeholder="e.g., 6 Months"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-violet-600 transition-colors">Proficiency Level</label>
                    <div className="relative">
                      <BarChart className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-violet-500 transition-colors" />
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all font-bold text-sm appearance-none"
                      >
                        <option value="">Select Tier</option>
                        <option value="Beginner">Entry Level</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced Pro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-10 space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">Value & Assets</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Pricing and visual identifiers</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors">Course Pricing</label>
                    <div className="relative">
                      <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="text"
                        name="price"
                        placeholder="e.g., 4999"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 transition-all font-bold text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors">Visual ID (Image URL)</label>
                    <div className="relative">
                      <ImageIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                      <input
                        type="text"
                        name="image"
                        placeholder="e.g., https://unsplash.com/..."
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 transition-all font-bold text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* External Link Section */}
            <div className="glass-card p-10 space-y-6">
              <div className="space-y-3 group">
                <label className="text-[11px] font-black text-slate-400 ml-1 uppercase tracking-widest group-focus-within:text-indigo-600 transition-colors">LMS Destination (Course Link)</label>
                <div className="relative">
                  <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="text"
                    name="link"
                    placeholder="e.g., https://lms.studipro.com/target"
                    value={formData.link}
                    onChange={handleChange}
                    required
                    className="w-full pl-14 pr-6 py-4.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all font-bold text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-6 pt-4">
               {error && <span className="text-xs font-bold text-rose-500 uppercase tracking-widest animate-pulse">{error}</span>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary py-5 px-10 text-sm group shadow-indigo-100"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? "Generating Course Entity..." : "Publish to Catalog"}
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

export default AdminAddCourse;