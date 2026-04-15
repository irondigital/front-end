import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiMysql, SiFigma } from 'react-icons/si';
import SectionLayout from '../components/SectionLayout';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Js', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Angular Js', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Postman', icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <SectionLayout id="skills" bgClassName="bg-slate-100 dark:bg-black/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Tech <span className="text-gradient">Arsenal</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div key={catIndex} className="glass dark:glass-dark p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              {category.title}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4"
            >
              {category.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 hover:border-primary-500/30 transition-colors group cursor-pointer"
                  >
                    <Icon
                      size={40}
                      className="mb-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
