import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaArrowRight, FaCamera, FaStore, FaClock } from "react-icons/fa";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-6 lg:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 min-h-[85vh] relative z-10">
        
        {/* Hero Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-green-400/20 text-green-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10 bg-green-400/5 backdrop-blur-md">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Elevate Your Space
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none text-white italic">
            Nature's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-emerald-600">
              Masterpiece
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl mt-10 text-white/50 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Discover curated, high-oxygen botanical environments for your sanctuary. Experience pure, filtered air and modern living seamlessly connected to nature.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 mt-16">
            <Link to="/shop" className="px-10 py-5 bg-white text-green-950 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all shadow-2xl flex items-center gap-4 group">
              Shop Now <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/recommend" className="px-10 py-5 glass border border-white/10 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:border-green-400/30 hover:text-green-400 transition-all flex items-center gap-3">
              <FaLeaf /> Plant Quiz
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex-1 relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-lg aspect-square hidden lg:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-green-500/20 blur-[120px] rounded-full scale-125 -z-10" />
          <img src="/images/6.png" alt="Hero Plant" className="w-full h-full object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.8)] z-10" />
        </motion.div>

      </section>

      {/* Feature Navigation Cards */}
      <section className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Plant Shop", desc: "Browse full catalog", icon: FaStore, link: "/shop", color: "text-blue-400", bg: "bg-blue-400/10" },
            { title: "AI Disease", desc: "Upload & scan", icon: FaCamera, link: "/disease", color: "text-purple-400", bg: "bg-purple-400/10" },
            { title: "Local Picks", desc: "Geo-based plants", icon: FaLeaf, link: "/location", color: "text-emerald-400", bg: "bg-emerald-400/10" },
            { title: "Reminders", desc: "Care notifications", icon: FaClock, link: "/care-reminders", color: "text-yellow-400", bg: "bg-yellow-400/10" }
          ].map((feat, i) => (
            <Link key={i} to={feat.link}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-[2rem] border border-white/5 hover:border-green-400/20 transition-all group flex flex-col items-center text-center cursor-pointer h-full"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feat.bg}`}>
                  <feat.icon size={24} className={feat.color} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-white mb-2">{feat.title}</h3>
                <p className="text-white/40 text-sm">{feat.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
