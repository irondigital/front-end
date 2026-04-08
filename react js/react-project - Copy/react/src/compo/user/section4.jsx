import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Bookmark, Star, ArrowRight, Sparkles, Clock, Users } from "lucide-react";

const Section4 = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/api/addcourses");
        setdata(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#f8fafc] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-slide-up">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-indigo-600 font-black text-[10px] tracking-widest uppercase mb-4 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Most Popular <span className="text-gradient">Specializations</span>
            </h2>
            <p className="text-slate-500 font-medium mt-4 text-lg">
              Hand-picked courses designed to fast-track your journey into the top 1% of tech talent.
            </p>
          </div>
          <Link to="/courses" className="btn-secondary py-3.5 px-8 text-sm group flex items-center shrink-0">
            View All Courses
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[500px] bg-slate-100 rounded-[2.5rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.slice(0, 6).map((item, idx) => (
              <div 
                key={item._id} 
                className="glass-card glass-card-hover rounded-[2.5rem] overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-indigo-600 transition-all shadow-xl">
                      <Bookmark className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-xl shadow-indigo-500/30">
                      Best Seller
                    </span>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                      <span className="text-slate-400 text-[10px] font-black ml-2 tracking-wider">4.9 (1.2k)</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm line-clamp-2 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div>
                      <span className="text-slate-400 text-[10px] font-black uppercase block mb-1 tracking-widest">Value</span>
                      <span className="text-3xl font-black text-slate-900 tracking-tighter">₹{item.price}</span>
                    </div>
                    <Link to="/endroll">
                      <button className="btn-primary py-4 px-8 text-xs group/btn shadow-indigo-200">
                        Enroll Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Section4;