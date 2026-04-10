import React from "react";
import { Search, Monitor, Code2, GraduationCap, ChevronRight, Zap } from "lucide-react";

const Section5 = () => {
  const steps = [
    {
      title: "Choose Track",
      desc: "Browse our curated selection of high-impact tech specializations.",
      icon: Search,
      color: "indigo"
    },
    {
      title: "Master Skills",
      desc: "Deep dive into immersive modules with real-time mentor guidance.",
      icon: Monitor,
      color: "violet"
    },
    {
      title: "Build Projects",
      desc: "Apply your knowledge to production-grade real-world scenarios.",
      icon: Code2,
      color: "blue"
    },
    {
      title: "Get Certified",
      desc: "Receive industry-standard credentials and launch your career.",
      icon: GraduationCap,
      color: "rose"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm mb-6">
            <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">The Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            How StudiPRO <span className="text-gradient">Accelerates</span> You
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-xl mx-auto">
            Our systematic approach ensures you don't just learn, but you internalize and master every concept.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-12 text-center">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group animate-scale-in relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-white rounded-3xl border border-slate-100 shadow-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-indigo-100 transition-all duration-500 relative`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-display font-extrabold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector (Desktop Only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[4.5rem] -right-6 text-slate-200">
                  <ChevronRight className="w-8 h-8 animate-pulse shadow-sm rounded-full bg-white transition-colors group-hover:text-indigo-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;