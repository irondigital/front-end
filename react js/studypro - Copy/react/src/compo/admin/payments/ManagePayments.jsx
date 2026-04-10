import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  CreditCard, 
  CheckCircle2, 
  XCircle,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const API_BASE = "http://localhost:5000/auth/api/payments";

export default function ManagePayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState({ name: "", details: "", status: "Active", icon: "CreditCard" });
  const [isEditing, setIsEditing] = useState(false);

  const fetchPayments = async () => {
    try {
      const response = await axios.get(API_BASE);
      setPayments(response.data);
    } catch (err) {
      console.error("Error fetching payments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleOpenModal = (payment = null) => {
    if (payment) {
      setCurrentPayment(payment);
      setIsEditing(true);
    } else {
      setCurrentPayment({ name: "", details: "", status: "Active", icon: "CreditCard" });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${API_BASE}/${currentPayment._id}`, currentPayment);
      } else {
        await axios.post(API_BASE, currentPayment);
      }
      fetchPayments();
      setIsModalOpen(false);
    } catch (err) {
      alert("Error saving payment method");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this payment method?")) {
      try {
        await axios.delete(`${API_BASE}/${id}`);
        fetchPayments();
      } catch (err) {
        alert("Error deleting payment method");
      }
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 lg:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-display font-extrabold text-gray-900 tracking-tight">Payment Methods</h1>
            <p className="text-gray-500 font-medium mt-1">Configure and manage how your students pay for courses.</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="btn-primary flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Method
          </button>
        </header>

        {/* Table/List View */}
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/50">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search methods..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100/50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 transition-all text-sm font-medium"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><ChevronLeft className="w-5 h-5 text-gray-400" /></button>
              <span className="text-sm font-bold text-gray-500">Page 1 of 1</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><ChevronRight className="w-5 h-5 text-gray-400" /></button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                  <th className="px-8 py-4">Method Name</th>
                  <th className="px-8 py-4">Details / Instructions</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr><td colSpan="4" className="text-center py-20 font-bold text-gray-400">Loading payment methods...</td></tr>
                ) : payments.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-20 font-bold text-gray-400">No payment methods found.</td></tr>
                ) : payments.map((p) => (
                  <tr key={p._id} className="hover:bg-indigo-50/10 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mr-4 shadow-sm">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-gray-900">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-gray-600 font-medium max-w-xs truncate">{p.details}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${p.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                        {p.status === 'Active' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                        {p.status}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end items-center space-x-2">
                        <button 
                          onClick={() => handleOpenModal(p)}
                          className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-lg transition-colors shadow-sm bg-white"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(p._id)}
                          className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors shadow-sm bg-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-50 text-gray-400 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className="relative glass-card bg-white w-full max-w-lg p-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8">
                {isEditing ? "Edit Payment Method" : "New Payment Method"}
              </h2>
              
              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-1">Method Name</label>
                  <input 
                    type="text" 
                    value={currentPayment.name}
                    onChange={(e) => setCurrentPayment({...currentPayment, name: e.target.value})}
                    placeholder="e.g. Stripe, Bank Transfer"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl mt-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-1">Instructions / Details</label>
                  <textarea 
                    value={currentPayment.details}
                    onChange={(e) => setCurrentPayment({...currentPayment, details: e.target.value})}
                    placeholder="e.g. Please send the amount to account #..."
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl mt-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-medium h-32"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">Status</label>
                    <select 
                      value={currentPayment.status}
                      onChange={(e) => setCurrentPayment({...currentPayment, status: e.target.value})}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl mt-2 focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold appearance-none"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 btn-secondary py-4">Cancel</button>
                  <button type="submit" className="flex-1 btn-primary py-4">Save Method</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
