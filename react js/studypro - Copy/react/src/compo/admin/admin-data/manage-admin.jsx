import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import { 
  Users, 
  Search, 
  Plus, 
  Edit3, 
  Trash2, 
  Shield, 
  Mail, 
  ChevronRight,
  UserPlus,
  Download,
  Filter
} from "lucide-react";

const ManageAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/api/addadmin");
        setAdmins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAdmins();
  }, []);
    
  const handledelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this administrator?")) return;
    try {
      await axios.delete(`http://localhost:5000/auth/api/addadmin/${id}`);
      setAdmins((prev) => prev.filter((admin) => admin._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const filteredAdmins = admins.filter(admin => 
    admin.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admin.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admin.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 animate-slide-up">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Security & Access</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">Administrators</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Manage <span className="text-gradient">Privileges</span>
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button className="btn-secondary py-2.5 px-5 text-sm flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button 
              onClick={() => navigate("/admin/admin-data/add-admin")}
              className="btn-primary py-2.5 px-6 text-sm flex items-center shadow-indigo-100"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add Admin
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="glass-card p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, email, or role..." 
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
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Index</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Admin User</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Permission Level</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Connectivity</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-50">
                {filteredAdmins.length > 0 ? (
                  filteredAdmins.map((admin, i) => (
                    <tr key={admin._id} className="hover:bg-indigo-50/20 transition-all duration-300 group">
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-black font-mono text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-lg">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg group-hover:scale-105 transition-transform">
                            {admin.name?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {admin.name}
                            </h4>
                            <div className="flex items-center mt-1 text-[11px] font-medium text-slate-400">
                              <Mail className="w-3 h-3 mr-1.5" />
                              {admin.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center border ${
                          admin.role?.toLowerCase() === 'superadmin' 
                          ? 'bg-rose-50 text-rose-600 border-rose-100' 
                          : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                        }`}>
                          <Shield className="w-3 h-3 mr-1.5" />
                          {admin.role}
                        </span>
                      </td>

                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-600">Active</span>
                          <span className="text-[10px] font-bold text-emerald-500 flex items-center mt-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                            Live Sync
                          </span>
                        </div>
                      </td>

                      <td className="px-8 py-6 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => navigate(`/admin/admin-data/manage-admin/update-admin/${admin._id}`)}
                            className="p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all shadow-sm border border-slate-100"
                            title="Edit Permissions"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handledelete(admin._id)}
                            className="p-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm border border-slate-100"
                            title="Revoke Access"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-24 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-4 animate-pulse">
                          <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-slate-900 font-bold mb-1">No administrators found</h3>
                        <p className="text-slate-400 text-sm max-w-[250px] mx-auto leading-relaxed">
                          Your search query returned zero results. Check the spelling or try different keywords.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="bg-slate-50/50 px-8 py-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Security Log: Last audit 2h ago
            </span>
            <div className="flex items-center space-x-2">
              <button disabled className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-300 cursor-not-allowed uppercase tracking-wider">Prev</button>
              <button disabled className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-300 cursor-not-allowed uppercase tracking-wider">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageAdmin;