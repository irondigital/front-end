import React from "react";
import { Linkedin, Twitter, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

const Section7 = () => {
  const instructors = [
    { name: "Raksi Sharma", role: "Full Stack Developer", img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe" },
    { name: "Anita Verma", role: "Data Scientist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { name: "David Lee", role: "UI / UX Designer", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4" },
    { name: "Sophelt Brown", role: "Cloud Engineer", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
    { name: "Aruni Mehta", role: "Mobile App Developer", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e" },
    { name: "Nick Kapoor", role: "Digital Marketing Expert", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" },
    { name: "Michael Scott", role: "Cyber Security Specialist", img: "https://images.unsplash.com/photo-1557862921-37829c790f19" },
    { name: "Priya Nair", role: "AI & ML Trainer", img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c" },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">The Elite Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Learn From The <br />
            <span className="text-gradient">Industry Pioneers</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((ins, i) => (
            <div 
              key={i} 
              className="glass-card glass-card-hover p-4 rounded-[2.5rem] group animate-scale-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                <img
                  src={ins.img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={ins.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Links on Hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-indigo-400 hover:text-white transition-all shadow-xl">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="px-4 pb-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <h3 className="font-display font-black text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {ins.name}
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                </div>
                <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  {ins.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;