import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Headline = () => {
  const roles = ["Full-Stack Developer", "React Developer", "Node.js Developer", "UI Enthusiast"];
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeedMs = 80;
  const deleteSpeedMs = 50;
  const pauseAfterTypeMs = 1500;

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeoutId;

    if (!isDeleting && displayText !== fullText) {
      timeoutId = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length + 1)), typeSpeedMs);
    } else if (!isDeleting && displayText === fullText) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterTypeMs);
    } else if (isDeleting && displayText.length > 0) {
      timeoutId = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length - 1)), deleteSpeedMs);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full py-12 md:py-20"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm md:text-base text-zinc-500 tracking-widest uppercase"
      >
        Hello! I'm
      </motion.p>
      <h1 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
        Madhav{' '}
        <span className="gradient-text">Rathod</span>
      </h1>
      <div className="mt-3 h-10 md:h-12">
        <span className="text-xl md:text-2xl text-zinc-400 font-medium">
          {displayText}
        </span>
        <span className="ml-0.5 inline-block w-[2px] h-6 md:h-7 bg-indigo-500 animate-pulse align-middle" />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-zinc-500 text-base md:text-lg max-w-xl leading-relaxed"
      >
        I craft robust, scalable web applications with modern stacks — obsessed with performance, accessibility, and pixel-perfect experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="/Madhav_Resume.pdf"
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm overflow-hidden"
        >
          <span className="relative z-10">View Resume</span>
          <i className="fa-solid fa-arrow-down relative z-10 group-hover:translate-y-1 transition-transform duration-200" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 text-zinc-300 font-semibold text-sm hover:border-zinc-600 hover:text-white transition-all duration-300"
        >
          Get in Touch
          <i className="fa-solid fa-arrow-right" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Headline;
