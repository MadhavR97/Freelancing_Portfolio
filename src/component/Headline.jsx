import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ROLES = ['Full-Stack Developer', 'React Developer', 'Node.js Developer', 'UI Enthusiast'];
const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 45;
const HOLD_MS = 2200;

const Headline = () => {
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(ROLES[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const fullText = ROLES[roleIndex];
    let timeoutId;

    if (!isDeleting && displayText !== fullText) {
      timeoutId = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length + 1)), TYPE_SPEED_MS);
    } else if (!isDeleting && displayText === fullText) {
      timeoutId = setTimeout(() => setIsDeleting(true), HOLD_MS);
    } else if (isDeleting && displayText.length > 0) {
      timeoutId = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length - 1)), DELETE_SPEED_MS);
    } else if (isDeleting && displayText.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 250);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex, prefersReducedMotion]);

  const visibleText = prefersReducedMotion ? ROLES[0] : displayText;

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

      <div className="mt-3 flex min-h-[2.5rem] items-center md:min-h-[3rem]">
        <span className="sr-only">Full-Stack Developer</span>
        <span
          aria-hidden="true"
          className="flex items-center whitespace-nowrap text-lg font-medium text-zinc-400 sm:text-xl md:text-2xl"
        >
          {visibleText}
          <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-indigo-500 align-middle md:h-7" />
        </span>
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
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <span className="relative z-10">View Resume</span>
          <i className="fa-solid fa-arrow-down relative z-10 group-hover:translate-y-1 transition-transform duration-200" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 text-zinc-300 font-semibold text-sm hover:border-zinc-600 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          Get in Touch
          <i className="fa-solid fa-arrow-right" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Headline;
