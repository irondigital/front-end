import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">DevPortfolio<span className="text-primary-500">.</span></h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Building premium digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-3 glass-dark hover:bg-white/10 rounded-full transition-colors hover:text-primary-400">
              <FaGithub size={20} />
            </a>
            <a href="#" className="p-3 glass-dark hover:bg-white/10 rounded-full transition-colors hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="p-3 glass-dark hover:bg-white/10 rounded-full transition-colors hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="p-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
