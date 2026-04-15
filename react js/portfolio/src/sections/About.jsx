import { motion } from 'framer-motion';
import { Code, Layout, Server, Zap } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';

const SERVICES = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive, beautifully animated, and highly interactive user interfaces using modern frameworks like React and Vue.',
  },
  {
    icon: Server,
    title: 'Backend Devloper',
    description: 'Developing robust, scalable APIs and microservices using Node.js, Express, and database technologies like PostgreSQL and MongoDB.',
  },
  {
    icon: Code,
    title: 'Web Designer',
    description: 'Designing intuitive and premium user experiences with a focus on accessibility, glassmorphism, and performance optimization.',
  },
  {
    icon: Zap,
    title: 'Python developer',
    description: 'working with Rest ap and fast Api'

  },
];

export default function About() {
  return (
    <SectionLayout id="about" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
          <p>
            I am a full-stack developer with a passion for building beautifully designed, highly functional digital experiences. With years of experience spanning across the modern web stack, I thrive on turning complex problems into elegant solutions.
          </p>
          <p>
            My journey into tech started with a profound curiosity about how things work on the internet. Fast forward to today, and I've had the privilege of building software for startups, mid-sized companies, and massive open-source projects.
          </p>
          <p>
            When I'm not at my computer writing code, you can find me exploring new design trends, contributing to the developer community, or hiking in the great outdoors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass dark:glass-dark p-6 rounded-2xl text-center shadow-lg">
            <h3 className="text-4xl font-bold text-primary-500 mb-2">1+</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Years Experience</p>
          </div>
          <div className="glass dark:glass-dark p-6 rounded-2xl text-center shadow-lg mt-8">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">10+</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Projects Completed</p>
          </div>
          <div className="glass dark:glass-dark p-6 rounded-2xl text-center shadow-lg -mt-8">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">2+</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Happy Clients</p>
          </div>
          <div className="glass dark:glass-dark p-6 rounded-2xl text-center shadow-lg">
            <h3 className="text-4xl font-bold text-teal-500 mb-2">5 k+</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Lines of Code</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass dark:glass-dark p-8 rounded-2xl hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
}
