import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionLayout from '../components/SectionLayout';

const SOCIAL_LINKS = [
  { icon: FaGithub, href: 'https://github.com' },
  { icon: FaLinkedin, href: 'https://linkedin.com' },
  { icon: FaTwitter, href: 'https://twitter.com' },
  { icon: Mail, href: 'mailto:test@example.com' },
];

export default function Hero() {
  return (
    <SectionLayout id="home" className="min-h-screen flex items-center pt-20">
      {/* Background animated blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary-500 mb-4 block">
            Hello World, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            John Doe
          </h1>
          <h3 className="text-2xl md:text-4xl font-medium text-slate-600 dark:text-slate-300 mb-6 h-12">
            I am a{' '}
            <span className="text-gradient font-bold">
              <Typewriter
                words={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            I build exceptional and accessible digital experiences for the web. 
            Passionate about modern web technologies and creating premium user interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#contact" className="px-8 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30 flex items-center gap-2">
              <Mail size={20} />
              Hire Me
            </a>
            <a href="#resume" className="px-8 py-3 rounded-full glass text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
            <div className="relative w-full h-full rounded-full glass border-4 border-white/20 p-2 overflow-hidden shadow-2xl">
              <img 
                src="/cyber_profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-top rounded-full shadow-[0_0_50px_rgba(20,184,166,0.5)] border-primary-400"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=John+Doe&background=14b8a6&color=fff&size=512';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
