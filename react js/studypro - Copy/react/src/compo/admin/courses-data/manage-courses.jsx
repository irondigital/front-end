import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Filter, 
  Download, 
  ChevronRight,
  BookOpen,
  Calendar,
  Layers,
  IndianRupee
} from "lucide-react";

function ManageCoursesTable() {
  const [data, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/api/addcourses");
        setdata(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`http://localhost:5000/auth/api/addcourses/${id}`);
      setdata(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = data.filter(item => 
    item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.level?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 animate-slide-up">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Management</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">Courses</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Manage <span className="text-gradient">Catalog</span>
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button className="btn-secondary py-2.5 px-5 text-sm flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button 
              onClick={() => navigate("/admin/courses-data/add-course")}
              className="btn-primary py-2.5 px-6 text-sm flex items-center shadow-indigo-100"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Course
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="glass-card p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by title, level, or keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="glass-card overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="overflow-x-auto min-h-[400px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 text-left border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Id</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Course Detail</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Configuration</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Value</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-50">
                {filteredData.length > 0 ? (
                  filteredData.map((item, idx) => (
                    <tr key={item._id} className="hover:bg-indigo-50/20 transition-all duration-300 group">
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-black font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                          #{item._id.slice(-6).toUpperCase()}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 rounded-[1.2rem] object-cover shadow-md group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-600 border-2 border-white rounded-full flex items-center justify-center">
                              <BookOpen className="w-2.5 h-2.5 text-white" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {item.title}
                            </h4>
                            <div className="flex items-center mt-1 text-[10px] font-black text-slate-400 leading-none tracking-wider">
                              BEST SELLER • SPECIALIZATION
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        <div className="space-y-2">
                          <div className="flex items-center text-xs font-semibold text-slate-600">
                            <Calendar className="w-3.5 h-3.5 mr-2 text-indigo-500" />
                            {item.duration}
                          </div>
                          <div className="flex items-center text-xs font-semibold text-slate-600">
                            <Layers className="w-3.5 h-3.5 mr-2 text-violet-500" />
                            <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-black ${
                              item.level?.toLowerCase() === 'advanced' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                            }`}>
                              {item.level}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <div className="flex items-center text-lg font-black text-slate-900 tracking-tighter">
                            <IndianRupee className="w-4 h-4 mr-0.5 text-slate-400" />
                            {item.price}
                          </div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">
                            Current Tier
                          </span>
                        </div>
                      </td>

                      <td className="px-8 py-6 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => navigate(`/update-course/${item._id}`)}
                            className="p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all shadow-sm border border-slate-100"
                            title="Edit Course"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm border border-slate-100"
                            title="Delete Course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-20 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-4 animate-pulse">
                          <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-slate-900 font-bold mb-1">No courses found</h3>
                        <p className="text-slate-400 text-sm max-w-[250px] mx-auto leading-relaxed">
                          Try adjusting your search or filters to find what you're looking for.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Placeholder */}
          <div className="bg-slate-50/50 px-8 py-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Showing {filteredData.length} of {data.length} Results
            </span>
            <div className="flex items-center space-x-2">
              <button disabled className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-300 cursor-not-allowed">Previous</button>
              <button disabled className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-300 cursor-not-allowed">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManageCoursesTable;