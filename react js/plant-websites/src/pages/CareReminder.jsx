import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell, FaPlus, FaTrash, FaCheck, FaWater, FaTimes } from "react-icons/fa";
import { getPlants } from "../data/plants";

export default function CareReminder() {
  const plants = getPlants();
  const [reminders, setReminders] = useState(() => JSON.parse(localStorage.getItem("plant_reminders") || "[]"));
  const [form, setForm] = useState({ plant: plants[0]?.name || "", interval: 3, task: "Water" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("plant_reminders", JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = () => {
    setReminders([...reminders, { ...form, id: Date.now() }]);
    setShowForm(false);
  };

  const removeReminder = (id) => setReminders(reminders.filter((r) => r.id !== id));

  const fireNotification = (r) => {
    if (Notification.permission === "granted") {
      new Notification(`🌿 Plant Reminder`, { body: `Time to ${r.task.toLowerCase()} your ${r.plant}!`, icon: "/images/1.png" });
    } else alert(`Time to ${r.task.toLowerCase()} your ${r.plant}!`);
  };

  return (
    <div className="min-h-[80vh] px-4 py-16 text-white max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-widest uppercase mb-4 bg-green-400/5">
          <FaBell /> Care Reminders
        </span>
        <h1 className="text-5xl font-black tracking-tighter italic mb-4">Plant Care Schedule</h1>
        <p className="text-white/40 text-sm">Set up custom browser notifications to keep your plants thriving.</p>
      </div>

      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {reminders.map((r) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="glass-card p-6 rounded-3xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 flex items-center justify-center rounded-2xl"><FaWater /></div>
              <div className="flex-1">
                <p className="font-black text-lg">{r.plant}</p>
                <p className="text-white/40 text-sm">{r.task} every <span className="text-green-400">{r.interval} days</span></p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => fireNotification(r)} className="p-3 glass rounded-xl border border-white/10 hover:text-green-400 hover:border-green-400/30 transition-all text-xs" title="Test Notification">
                  <FaBell />
                </button>
                <button onClick={() => removeReminder(r.id)} className="p-3 glass rounded-xl border border-white/10 hover:text-red-400 hover:border-red-400/30 transition-all text-xs">
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {showForm ? (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="glass-card rounded-[2.5rem] p-8 border border-white/5">
          <h3 className="font-black text-xl mb-6">New Reminder</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-black uppercase text-white/40 mb-2 block">Plant</label>
              <select value={form.plant} onChange={(e) => setForm({ ...form, plant: e.target.value })} className="w-full p-4 glass rounded-2xl bg-[#071a12] border-white/10">
                {plants.map((p) => <option key={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-black uppercase text-white/40 mb-2 block">Interval (Days): <span className="text-green-400">{form.interval}</span></label>
              <input type="range" min={1} max={30} value={form.interval} onChange={(e) => setForm({ ...form, interval: Number(e.target.value) })} className="w-full accent-green-500" />
            </div>
            <div className="flex gap-3 pt-4">
              <button onClick={addReminder} className="flex-1 py-4 bg-green-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-500 transition-all"><FaCheck className="inline mr-2"/> Save</button>
              <button onClick={() => setShowForm(false)} className="flex-1 py-4 glass border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"><FaTimes className="inline mr-2"/> Cancel</button>
            </div>
          </div>
        </motion.div>
      ) : (
        <button onClick={() => setShowForm(true)} className="w-full py-5 glass border border-white/10 border-dashed rounded-3xl text-white/40 hover:text-green-400 hover:border-green-400/30 font-black text-sm uppercase tracking-widest flex justify-center items-center gap-3 transition-all">
          <FaPlus /> Add Reminder
        </button>
      )}
    </div>
  );
}
