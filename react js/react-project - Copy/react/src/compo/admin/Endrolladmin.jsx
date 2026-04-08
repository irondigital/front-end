import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { 
  Users, Search, Filter, Trash2, CheckCircle2, XCircle, 
  Clock, Mail, Phone, BookOpen, CreditCard, ChevronRight,
  MoreVertical, Download, ExternalLink, ShieldCheck
} from "lucide-react";

function ManageEnrollments() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchEnrollments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/api/Studentdata");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching enrollments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const handledelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this enrollment record?")) return;
    try {
      await axios.delete(`http://localhost:5000/auth/api/Studentdata/${id}`);
      fetchEnrollments();
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/auth/api/Studentdata/${id}/status`, { paymentStatus: status });
      fetchEnrollments();
    } catch (err) {
      console.error("Failed to update status");
    }
  };

  const filteredStudents = students.filter(s => {
    const name = s.name || "";
    const email = s.email || "";
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || s.paymentStatus === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Verified": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Rejected": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default: return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg shadow-indigo-200">
                <Users className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-display font-extrabold text-gray-900 tracking-tight">Student Enrollments</h1>
            </div>
            <p className="text-gray-500 font-medium ml-1">Manage course applications and verify student payments.</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-5 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl border border-gray-200 shadow-sm transition-all font-bold text-sm">
              <Download className="w-4 h-4 mr-2 text-indigo-600" /> Export Data
            </button>
          </div>
        </div>

        {/* Stats Quick View */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Applications", value: students.length, icon: <Users />, color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Pending Review", value: students.filter(s => s.paymentStatus === "Pending").length, icon: <Clock />, color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Verified Today", value: students.filter(s => s.paymentStatus === "Verified").length, icon: <CheckCircle2 />, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Rejected", value: students.filter(s => s.paymentStatus === "Rejected").length, icon: <XCircle />, color: "text-rose-600", bg: "bg-rose-50" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 flex items-center space-x-5 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>{stat.icon}</div>
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-display font-black text-gray-900 mt-1">{loading ? "..." : stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-card p-4 mb-8 flex flex-col lg:flex-row items-center justify-between gap-6 bg-white border-none shadow-sm">
          <div className="flex items-center w-full lg:max-w-md relative group">
            <Search className="absolute left-4 text-gray-400 w-5 h-5 group-focus-within:text-indigo-600 transition-colors" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 transition-all font-medium text-sm"
            />
          </div>

          <div className="flex items-center space-x-3 w-full lg:w-auto">
            <Filter className="w-4 h-4 text-gray-400" />
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {["All", "Pending", "Verified", "Rejected"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                    filter === tab ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="glass-card overflow-hidden bg-white border-none shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Student Identity</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Course & Plan</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Payment Details</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-20 text-center font-bold text-gray-400 italic">Fetching enrollment data...</td>
                  </tr>
                ) : filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-20 text-center">
                      <div className="flex flex-col items-center justify-center opacity-30">
                        <Clock className="w-16 h-16 mb-4" />
                        <p className="text-xl font-bold italic tracking-tight text-gray-500">No matching requests found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student) => (
                    <tr key={student._id} className="hover:bg-indigo-50/20 transition-all group">
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black text-xl mr-4 group-hover:scale-110 transition-transform shadow-sm">
                            {(student.name || "?").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-gray-900 font-bold tracking-tight text-lg group-hover:text-indigo-600 transition-colors uppercase italic">{student.name}</div>
                            <div className="flex items-center mt-1 space-x-3 text-gray-500 text-xs font-bold font-mono">
                              <span className="flex items-center overflow-hidden max-w-[150px] truncate"><Mail className="w-3 h-3 mr-1.5 text-indigo-400" /> {student.email}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center space-x-2 text-gray-900 font-black uppercase tracking-tighter text-sm">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1" />
                          <span>{student.course}</span>
                        </div>
                        <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1.5">NODE::{student._id.slice(-8)}</div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gray-100 p-2.5 rounded-xl text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                            <CreditCard className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-gray-900 text-sm font-black uppercase tracking-wide">{student.paymentMethod || "MANUAL"}</p>
                            <p className="text-indigo-600 text-xs font-black mt-0.5">₹ {student.amount || "0"}</p>
                          </div>
                        </div>
                        {student.transactionId && (
                          <div className="mt-2 text-[9px] text-gray-400 flex items-center font-bold">
                            <ShieldCheck className="w-3 h-3 mr-1.5 text-emerald-500" /> TX_ID: {student.transactionId}
                          </div>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(student.paymentStatus)} shadow-sm`}>
                          {student.paymentStatus || "Pending"}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center justify-center space-x-2.5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                          <button 
                            onClick={() => updateStatus(student._id, "Verified")}
                            className="w-10 h-10 border border-emerald-100 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
                            title="Verify & Give Response"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => updateStatus(student._id, "Rejected")}
                            className="w-10 h-10 border border-rose-100 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
                            title="Reject Payment"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handledelete(student._id)}
                            className="w-10 h-10 border border-gray-100 bg-white text-gray-400 hover:bg-gray-900 hover:text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
                            title="Delete Permanently"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <p>&copy; 2026 Admin Response Management Node</p>
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Security Audit</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
            </div>
        </footer>
      </main>
    </div>
  );
}

export default ManageEnrollments;