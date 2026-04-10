import React from "react";
import { Users, Clock, Award, ShieldCheck, ArrowRight, Zap, Globe, Star } from "lucide-react";

const Section2 = () => {
  const features = [
    {
      title: "Expert Mentors",
      desc: "Learn from industry professionals with 10+ years of real-world experience at top tech giants.",
      icon: Users,
      color: "indigo",
      tag: "Top 1%"
    },
    {
      title: "Flexible Learning",
      desc: "Get lifetime access to all course materials and learn at your own pace from anywhere in the world.",
      icon: Clock,
      color: "violet",
      tag: "Self-Paced"
    },
    {
      title: "Gold Certification",
      desc: "Receive industry-recognized certificates that help you stand out in the competitive job market.",
      icon: Award,
      color: "rose",
      tag: "Accredited"
    }
  ];

  return (
    <section className="py-32 bg-[#fafbfc] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-100 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-50 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Why StudiPRO?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            High-Impact Learning Built For <br />
            <span className="text-gradient">Professional Excellence</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed">
            We don't just teach code; we build careers. Our ecosystem is designed to take you from a curious learner to a high-earning specialist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="glass-card glass-card-hover p-10 group animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`w-16 h-16 bg-${f.color}-50 rounded-2xl flex items-center justify-center text-${f.color}-600 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-inner ring-1 ring-${f.color}-100/50`}>
                  <f.icon className="w-8 h-8" />
                </div>
                <span className={`text-[10px] font-black text-${f.color}-600 bg-${f.color}-50/50 px-2.5 py-1 rounded-lg uppercase tracking-wider`}>
                  {f.tag}
                </span>
              </div>
              
              <h4 className="text-2xl font-display font-extrabold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {f.title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-10">
                {f.desc}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <button className="flex items-center text-slate-900 font-black text-sm group/btn">
                  Explore Track
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Star className="w-3.5 h-3.5 fill-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;