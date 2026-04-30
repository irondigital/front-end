import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionLayout from '../components/SectionLayout';

const PROJECTS = [
  
  {
    title: 'Planto',
    description: 'this also work like e-commerce where everyone can buy homedecor trees and flower.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop',
    tech: ['React js', 'Open Ai', 'Razor  pay', 'Tailwind'],
    github: 'https://github.com/irondigital/plant-websites',
    demo: 'https://plant-websites.vercel.app/'
  },
  {
    title: 'Mr. Store',
    description: 'this website is working like flipcart. this is gave more product compare to anyone with flat discount and easy payment methods.',
    image: 'https://images.unsplash.com/photo-1678281146604-0ee064e62aae?q=80&w=2070&auto=format&fit=crop',
    tech: ['React', 'Razor pay', 'Tailwind css', 'OpenAI'],
    github: 'https://github.com/irondigital/Mr.store',
    demo: 'https://mr-store-three.vercel.app/'
  },
  {
    title: 'Edupro',
    description: 'This website is for Students. Students can acess any course with Cheap price and study online in house. this course is very good for all because we have verify team those created this course like scrach to advanced.',
    image: '/project_dashboard.png', // We'll assume the generated image is placed here or it will fallback to placeholder
    tech: ['React', 'MongoDB', 'Nodejs', 'Rest api'],
    github: 'https://github.com/irondigital/front-end/tree/master/react%20js/studypro%20-%20Copy',
    demo: 'https://github.com/irondigital/front-end/tree/master/react%20js/studypro%20-%20Copy'
  }
];

export default function Projects() {
  return (
    <SectionLayout id="projects" bgClassName="bg-slate-100 dark:bg-black/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-2xl overflow-hidden glass dark:glass-dark shadow-lg"
          >
            {/* Image Container */}
            <div className="relative h-60 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400/1e293b/14b8a6?text=Project+Preview';
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-semibold bg-primary-500/10 text-primary-500 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <FaGithub size={18} /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
