import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    org: 'RED & WHITE SKILL EDUCATION',
    time: '2024 - 2025',
    role: 'Full Stack Web Development (MERN Stack)',
  },
  {
    org: 'MARWADI UNIVERSITY',
    time: '2018 - 2019',
    role: 'Master of Business Administration (Applied Management)',
  },
  {
    org: 'MARWADI UNIVERSITY',
    time: '2015 - 2017',
    role: 'Bachelor of Business Administration (Applied Management)',
  },
  {
    org: 'VIVEKANAND SCHOOL',
    time: '2013 - 2014',
    role: 'Higher Secondary Certificate',
  },
  {
    org: 'SHRI SATYAPRAKASH SCHOOL',
    time: '2012',
    role: 'Secondary School Certificate',
  },
];

function Education() {
  return (
    <section id="education" className="py-24 md:py-28 scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
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
            <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">EDUCATION</span>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent -translate-x-1/2" />

            <div className="space-y-10 md:space-y-12">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40, x: idx % 2 === 0 ? -30 : 30 },
                    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                  }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-[19px] md:left-1/2 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-indigo-500 border-[3px] border-[#050505] shadow-[0_0_0_3px_rgba(99,102,241,0.3)] z-10" />
                  <div className={`md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass rounded-xl p-6 md:p-7 hover:border-indigo-500/20 transition-colors duration-300">
                      <span className="text-xs text-indigo-400 font-semibold tracking-wider">{item.time}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{item.org}</h3>
                      <p className="text-zinc-400 text-sm mt-1">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
