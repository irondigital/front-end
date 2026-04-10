import React from "react";
import { MoveRight, Play, Sparkles, Users as UsersIcon } from "lucide-react";

const Section1 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white selection:bg-indigo-100">
      {/* Premium Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] animate-float opacity-70" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px] animate-float opacity-60" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">

        <div className="space-y-10 text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/50 text-indigo-600 font-extrabold text-[10px] tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse" />
            Empowering 100k+ Careers Globally
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[0.95] text-slate-900 tracking-tighter">
            Build Your <br />
            <span className="text-gradient">Future Self</span> <br />
            With StudiPRO
          </h1>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-xl text-slate-500 font-medium leading-relaxed">
            Join the elite circle of software engineers and designers. Master the most in-demand skills with our industry-led specialized tracks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <button className="btn-primary w-full sm:w-auto h-16 px-10 text-base group">
              Start Learning Now
              <MoveRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button className="btn-secondary w-full sm:w-auto h-16 px-10 text-base text-slate-700 font-extrabold group">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
                <Play className="fill-indigo-600 text-indigo-600 w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-12 border-t border-slate-100">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden shadow-lg hover:z-10 hover:-translate-y-1 transition-all cursor-pointer">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-2xl border-4 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                +2k
              </div>
            </div>
            <div className="text-sm font-bold text-slate-400">
              <span className="text-slate-900 font-extrabold text-lg block sm:inline">98% Success</span>
              <span className="hidden sm:inline"> — </span> 
              Join our thriving community
            </div>
          </div>
        </div>

        <div className="relative group perspective-1000 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-[3rem] blur-3xl transform -rotate-6 scale-95 group-hover:rotate-0 transition-all duration-1000" />
          <div className="relative glass-card p-3 rounded-[3rem] border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden group-hover:shadow-indigo-200/40 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=90&w=1200"
              className="rounded-[2.5rem] w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Elite Learning Experience"
            />
            {/* Floating Achievement Card */}
            <div className="absolute top-12 -right-8 animate-float p-6 glass-card border-white/60 w-56 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-amber-200">
                  ★
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">TOP RATED</div>
                  <div className="text-sm font-black text-slate-900">Elite Curriculum</div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Stats */}
            <div className="absolute bottom-10 left-10 right-10 p-1 glass-card border-white/40 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 bg-white/40 rounded-xl backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <UsersIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500">ACTIVE LEARNERS</div>
                    <div className="text-sm font-black text-slate-900">540,210+</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200/50" />
                <div className="hidden sm:block">
                  <div className="text-[10px] font-bold text-slate-500">TRUST SCORE</div>
                  <div className="text-sm font-black text-indigo-600">4.9 / 5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;