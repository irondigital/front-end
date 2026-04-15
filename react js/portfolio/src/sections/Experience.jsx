import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';

const TIMELINE = [
  {
    type: 'work',
    title: 'Senior Frontend Engineer',
    org: 'Tech Innovators Inc.',
    date: '2021 - Present',
    description: 'Lead the frontend development of a fintech web application using React, TypeScript, and Tailwind CSS. Mentored junior developers and established CI/CD pipelines.',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Creative Web Agency',
    date: '2018 - 2021',
    description: 'Developed and maintained various client projects. Built custom e-commerce solutions with Node.js and Next.js, integrating Stripe payment gateways.',
  },
  {
    type: 'education',
    title: 'B.S. in Computer Science',
    org: 'State University',
    date: '2014 - 2018',
    description: 'Graduated with honors. Specialized in human-computer interaction and web technologies. Member of the competitive programming team.',
  },
];

export default function Experience() {
  return (
    <SectionLayout id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Journey & <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 rounded-full -translate-x-1/2 opacity-30"></div>

        <div className="space-y-12">
          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            const delay = index * 0.2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay }}
                className={`relative flex items-center justify-between w-full group ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Icon Marker */}
                <div className="absolute left-[18px] md:left-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 dark:bg-dark border-4 border-primary-500 flex items-center justify-center -translate-x-1/2 z-10 text-primary-500 group-hover:scale-125 transition-transform duration-300">
                  {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Content Card */}
                <div className="w-[calc(100%-50px)] md:w-[45%] ml-auto md:ml-0 glass dark:glass-dark p-6 rounded-2xl hover:border-primary-500/50 transition-colors shadow-lg">
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-xs font-semibold rounded-full mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-2">
                    {item.org}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
}
