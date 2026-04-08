import React, { useState } from "react";
import { Star, Quote, ChevronDown, ChevronUp, MessageSquare, HelpCircle } from "lucide-react";

const Section6 = () => {
  const testimonials = [
    {
      name: "Aman Patel",
      role: "SDE at Google",
      content: "StudiPRO helped me navigate the complex transition into high-end web development. The mentors are world-class.",
      avatar: "https://i.pravatar.cc/150?u=aman",
      rating: 5
    },
    {
      name: "Neha Singh",
      role: "Product Designer",
      content: "The UI/UX curriculum is comparable to top design schools. Practical, hands-on, and extremely relevant.",
      avatar: "https://i.pravatar.cc/150?u=neha",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      role: "Full Stack Lead",
      content: "Best platform for both beginners and experienced pros looking to stay ahead of the curve. High-quality content.",
      avatar: "https://i.pravatar.cc/150?u=rohit",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Is lifetime access included?",
      a: "Yes, once you enroll in a course, you get lifetime access to all future updates and resources for that track."
    },
    {
      q: "Do I get a verified certificate?",
      a: "Absolutely. You'll receive a cryptographically signed digital certificate upon successful completion of the course and final project."
    },
    {
      q: "Are the courses beginner-friendly?",
      a: "We offer tailored paths ranging from absolute beginner to advanced architectural patterns. You can start anywhere."
    }
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-[#fafbfc] py-32 relative overflow-hidden">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight tracking-tight">
            Loved By <span className="text-gradient">Thousands</span> of Students
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="glass-card glass-card-hover p-10 group animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-indigo-600/10 mb-6 group-hover:scale-110 transition-transform" />
              <div className="flex items-center space-x-1 text-amber-400 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic mb-10 text-lg">
                “{t.content}”
              </p>
              <div className="flex items-center space-x-4 pt-8 border-t border-slate-50">
                <div className="w-14 h-14 rounded-2xl border-2 border-white overflow-hidden shadow-lg group-hover:-translate-y-1 transition-transform">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900">{t.name}</h4>
                  <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Common Doubts</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Got Questions?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-card overflow-hidden transition-all duration-500 ${openFaq === i ? 'bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border-indigo-100' : 'hover:border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-display font-bold transition-colors ${openFaq === i ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-500'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${openFaq === i ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                  {openFaq === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              <div className={`transition-all duration-500 overflow-hidden ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;