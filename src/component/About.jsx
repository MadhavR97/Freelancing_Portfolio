import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Commitment' },
];

const info = [
  { label: 'Name', value: 'Madhav Rathod' },
  { label: 'Birthday', value: '10 July, 1997' },
  { label: 'Languages', value: 'Gujarati, Hindi, English' },
  { label: 'Age', value: `${Math.floor((new Date() - new Date('1997-07-10')) / 31557600000)} Years` },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Address', value: 'Rajkot, Gujarat, India' },
  { label: 'Phone', value: '+91 8200451152' },
  { label: 'Email', value: 'madhavrathod019@gmail.com' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const counterVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

function About() {
  return (
    <section id="about" className="py-24 md:py-28 scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <span className="inline-block w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
            <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">ABOUT ME</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <p className="text-zinc-400 leading-relaxed">
                  I am a Full-Stack Developer specializing in the MERN stack. I help businesses build fast, responsive, and scalable web applications. I care about clean code, performance, and accessible experiences that turn ideas into reliable products.
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mt-auto pt-8"
                >
                  <a
                    href="/Madhav_Resume.pdf"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow duration-300"
                  >
                    Download Resume
                    <i className="fa-solid fa-download group-hover:translate-y-0.5 transition-transform duration-200" />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 md:p-10 h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 h-full">
                  {info.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={counterVariants}
                      className="flex flex-col gap-1.5 min-w-0"
                    >
                      <span className="text-[11px] text-zinc-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm md:text-[15px] text-zinc-200 font-medium break-words">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={counterVariants}
                className="glass rounded-xl p-6 md:p-7 text-center hover:border-indigo-500/30 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</span>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
