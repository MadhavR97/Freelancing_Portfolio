import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleLoader = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const hide = () => setTimeout(() => setIsVisible(false), 1200);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
      setTimeout(hide, 3000);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
          style={{ background: '#050505' }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/3 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center w-32 h-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute w-32 h-32 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, #6366f1, #a855f7, #06b6d4, transparent)',
                  WebkitMask: 'radial-gradient(circle, transparent 46px, black 47px, black 48px, transparent 49px)',
                  mask: 'radial-gradient(circle, transparent 46px, black 47px, black 48px, transparent 49px)',
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute w-20 h-20 rounded-full"
                style={{
                  background: 'conic-gradient(from 90deg, transparent, #a855f7, #06b6d4, #6366f1, transparent)',
                  WebkitMask: 'radial-gradient(circle, transparent 29px, black 30px, black 31px, transparent 32px)',
                  mask: 'radial-gradient(circle, transparent 29px, black 30px, black 31px, transparent 32px)',
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute w-12 h-12 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent, #06b6d4, #6366f1, #a855f7, transparent)',
                  WebkitMask: 'radial-gradient(circle, transparent 17px, black 18px, black 19px, transparent 20px)',
                  mask: 'radial-gradient(circle, transparent 17px, black 18px, black 19px, transparent 20px)',
                }}
              />

              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
                style={{ boxShadow: '0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(168,85,247,0.3)' }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex gap-1">
                {['M','a','d','h','a','v'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="text-2xl font-extrabold tracking-wider gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RippleLoader;
