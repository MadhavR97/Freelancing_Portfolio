import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Pointer from '../component/Pointer';
import RippleLoader from '../component/Loader';
import Headline from '../component/Headline';
import ProfileImage from '/Madhav.jpg';
import About from '../component/About';
import Education from '../component/Education';
import Skills from '../component/Skills';
import Project from '../component/Project';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-zinc-800/50'
          : 'bg-[#050505]/10 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          Madhav<span className="text-zinc-600 font-normal">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <a
          href="/Madhav_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
        >
          Resume
          <i className="fa-solid fa-arrow-down text-[10px]" />
        </a>
      </div>
    </motion.nav>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left z-[60]"
    />
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[150px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-indigo-400/40 animate-float" />
      <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-purple-400/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-indigo-400/30 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-1 h-1 rounded-full bg-purple-400/40 animate-float" style={{ animationDelay: '1.5s' }} />

      <svg className="absolute top-[15%] left-[5%] w-8 h-8 text-indigo-500/10 animate-rotate" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg className="absolute top-[25%] right-[8%] w-6 h-6 text-purple-500/10 animate-rotate" style={{ animationDuration: '25s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
      <svg className="absolute bottom-[35%] left-[8%] w-5 h-5 text-cyan-500/10 animate-rotate" style={{ animationDuration: '15s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="12,2 22,22 2,22" />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      <HeroBackground />
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center py-16 md:py-24">
          <div className="order-2 lg:order-1">
            <Headline />
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-3xl opacity-30 animate-pulse-glow" />
              <div className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#050505]">
                  <img
                    src={ProfileImage}
                    alt="Madhav Rathod"
                    className="w-full h-full object-cover scale-105"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-3 right-3 bg-[#050505] text-xs text-zinc-400 px-3 py-1.5 rounded-full border border-zinc-800 shadow-lg"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  Available
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <i className="fa-solid fa-chevron-down text-xs" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Pointer />
      <RippleLoader />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-shadow duration-300"
        >
          <i className="fa-solid fa-arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default Home;
