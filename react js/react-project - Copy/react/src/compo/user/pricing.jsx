import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { Check, Zap, Crown, Rocket, Sparkles, ArrowRight } from "lucide-react";

function Pricing() {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Starter",
      subtitle: "For beginner learners",
      price: "999",
      period: "/month",
      features: [
        "Access to 5 essential courses",
        "Recorded 4K video lessons",
        "Community support access",
        "Standard course materials"
      ],
      highlight: false,
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      buttonText: "Start Learning"
    },
    {
      name: "Professional",
      subtitle: "Most popular for career growth",
      price: "2499",
      period: "/month",
      features: [
        "Access to ALL premium courses",
        "Live weekly masterclasses",
        "Industry verified certificates",
        "Portfolio & Project reviews",
        "Priority instructor support"
      ],
      highlight: true,
      badge: "Most Popular",
      icon: <Zap className="w-6 h-6 text-white" />,
      buttonText: "Join Pro"
    },
    {
      name: "Enterprise",
      subtitle: "For dedicated professionals",
      price: "4999",
      period: "/month",
      features: [
        "1-on-1 expert mentorship",
        "Advanced career coaching",
        "Resume & Portfolio polish",
        "Guaranteed interview prep",
        "Post-course job assistance"
      ],
      highlight: false,
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      buttonText: "Go Premium"
    }
  ];

  const handlePlanSelect = (plan) => {
    // Pass plan data to enrollment page
    navigate("/endroll", { state: { planName: plan.name, planPrice: plan.price } });
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300 font-sans">
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Premium Learning Plans</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
              Simple & Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pricing</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Unlock your future with expert-led courses. Choose the plan that best fits your ambitions and budget.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-gradient-to-b from-indigo-600/20 to-indigo-900/40 border-2 border-indigo-500/50 shadow-indigo-500/10 shadow-2xl"
                    : "bg-slate-900/40 border border-slate-800 hover:border-slate-700"
                } backdrop-blur-xl`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 rounded-2xl ${plan.highlight ? "bg-indigo-500 shadow-lg shadow-indigo-500/30" : "bg-slate-800 border border-slate-700"}`}>
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <h3 className="text-2xl font-display font-extrabold text-white">{plan.name}</h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter mt-1">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-slate-400 mr-1">₹</span>
                    <span className={`text-6xl font-display font-black tracking-tighter ${plan.highlight ? "text-white" : "text-white/90"}`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-500 ml-2 font-medium">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 min-h-[220px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-medium group-hover:translate-x-1 transition-transform">
                      <div className={`mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-800 text-slate-500"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.highlight ? "text-slate-200" : "text-slate-400"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-4 rounded-2xl flex items-center justify-center space-x-2 font-black uppercase tracking-widest shadow-lg transition-all active:scale-[0.98] ${
                    plan.highlight
                      ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-indigo-500/20"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="text-center">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-10">Trusted by modern learners worldwide</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                {/* Simplified logos as text placeholders */}
                <span className="text-2xl font-black italic">LEARN</span>
                <span className="text-2xl font-black italic">SKILL</span>
                <span className="text-2xl font-black italic">PRO</span>
                <span className="text-2xl font-black italic">GROW</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Pricing;