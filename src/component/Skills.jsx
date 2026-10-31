import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { icon: 'devicon-html5-plain', name: 'HTML5' },
  { icon: 'devicon-css3-plain', name: 'CSS3' },
  { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
  { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
  { icon: 'devicon-javascript-plain', name: 'JavaScript' },
  { icon: 'devicon-jquery-plain', name: 'jQuery' },
  { icon: 'devicon-react-original', name: 'React' },
  { icon: 'devicon-reactrouter-plain', name: 'React Router' },
  { icon: 'devicon-redux-original', name: 'Redux' },
  { icon: 'devicon-nodejs-plain', name: 'Node.js' },
  { icon: 'devicon-express-original', name: 'Express' },
  { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
  { icon: 'devicon-mongoose-original', name: 'Mongoose' },
  { icon: 'devicon-firebase-plain', name: 'Firebase' },
  { icon: 'devicon-vitejs-plain', name: 'Vite' },
  { icon: 'devicon-vscode-plain', name: 'VS Code' },
  { icon: 'devicon-github-original', name: 'GitHub' },
  { icon: 'devicon-postman-plain', name: 'Postman' },
  { icon: 'devicon-netlify-plain', name: 'Netlify' },
  { icon: 'devicon-vercel-original', name: 'Vercel' },
  { icon: 'devicon-sass-original', name: 'Sass' },
  { icon: 'devicon-materialui-plain', name: 'Material UI' },
  { icon: 'devicon-c-plain', name: 'C' },
  { icon: 'devicon-npm-plain', name: 'npm' },
];

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="inline-block w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
            <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">SKILLS</span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="group glass rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 h-28 md:h-32 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-white/[0.04]">
                  <span className="flex h-10 items-center justify-center">
                    <i
                      className={`${skill.icon} text-3xl md:text-4xl text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-400 font-medium text-center leading-tight transition-colors duration-300 group-hover:text-zinc-300">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
