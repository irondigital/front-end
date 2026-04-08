import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";
import axios from "axios";
import { 
  Users, 
  Trash2, 
  ChevronRight, 
  ShieldCheck, 
  Search,
  Sparkles,
  AlertTriangle
} from "lucide-react";

axios.defaults.withCredentials = true;
const API_BASE = "http://localhost:5000/auth/api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState({ open: false, user: null });
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
      setDeleteModal({ open: false, user: null });
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 animate-slide-up">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>User Management</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-indigo-600">Registry</span>
            </div>
            <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">
              Registered <span className="text-gradient">Users</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all w-64"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="glass-card p-6 mb-8 flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Users</p>
              <p className="text-2xl font-black text-slate-900">{users.length}</p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Data</span>
          </div>
        </div>

        {/* Users Table */}
        <div className="glass-card overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-bold">No users found</p>
              <p className="text-sm mt-1">Users who register through the platform will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="text-left py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Identity</th>
                    <th className="text-left py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</th>
                    <th className="text-left py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                    <th className="text-right py-4 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u, i) => (
                    <tr key={u._id} className="border-t border-slate-100/50 hover:bg-slate-50/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-50 to-violet-50 border border-slate-100 rounded-xl flex items-center justify-center text-xl shadow-sm">
                            {u.emoji || "👤"}
                          </div>
                          <span className="font-bold text-sm text-slate-900">{u.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-500">{u.email}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                          {u.role}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => setDeleteModal({ open: true, user: u })}
                          className="p-2.5 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-all"
                          title="Delete user"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={() => setDeleteModal({ open: false, user: null })} />
          <div className="relative glass-card bg-white w-full max-w-sm p-8 animate-scale-in border-white/60 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-rose-50/50">
                <AlertTriangle className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2 tracking-tight">Delete User?</h3>
              <p className="text-slate-500 font-medium text-sm mb-2">
                Are you sure you want to remove <span className="font-bold text-slate-900">{deleteModal.user?.name}</span>?
              </p>
              <p className="text-slate-400 text-xs mb-8">
                {deleteModal.user?.emoji} {deleteModal.user?.email}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setDeleteModal({ open: false, user: null })}
                  className="flex-1 btn-secondary py-3.5 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteModal.user._id)}
                  className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-rose-500/25 hover:-translate-y-0.5"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
