import React from "react";
import { Users, GraduationCap, Laptop, BarChart3 } from "lucide-react";

const Section3 = () => {
  const stats = [
    { label: "Students Enrolled", value: "540k+", icon: Users, color: "indigo" },
    { label: "Expert Instructors", value: "1,200+", icon: GraduationCap, color: "violet" },
    { label: "Courses Available", value: "850+", icon: Laptop, color: "blue" },
    { label: "Success Rate", value: "98.5%", icon: BarChart3, color: "rose" },
  ];

  return (
    <section className="bg-white py-20 border-y border-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col items-center p-6 rounded-3xl transition-all duration-500 hover:bg-slate-50/50">
              <div className={`w-14 h-14 bg-${stat.color}-50 rounded-2xl flex items-center justify-center text-${stat.color}-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter mb-2 group-hover:text-indigo-600 transition-colors">
                {stat.value}
              </h3>
              <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;