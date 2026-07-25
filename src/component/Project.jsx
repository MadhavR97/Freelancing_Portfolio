import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import bewakoof from '/Bewakoof_Logo.svg';
import sugar from '/Sugar_white_logo.png';
import dashboard from '/Dashboard.png';
import calculator from '/Calculator.png';

const projects = [
  {
    logo: bewakoof,
    title: 'Bewakoof Clone',
    desc: ['Built with React and Tailwind with auth: login, signup, logout.', 'Responsive UI, search, product list with filters, and single product page.', 'Wishlist and cart features for a complete flow.'],
    link: 'https://bewakoof-website-seven.vercel.app/',
    gradient: 'from-indigo-600 to-blue-600',
    tags: ['React', 'Tailwind', 'Auth'],
  },
  {
    logo: sugar,
    title: 'Sugar Cosmetics Clone',
    desc: ['React + Tailwind with full auth including account deletion.', 'Search, advanced filters, single product with color variants.', 'Wishlist and cart for seamless shopping.'],
    link: 'https://sugar-cosmetics-website.vercel.app/',
    gradient: 'from-purple-600 to-pink-600',
    tags: ['React', 'Tailwind', 'Auth'],
  },
  {
    logo: dashboard,
    title: 'Admin Panel Dashboard',
    desc: ['Frontend in React/Tailwind with backend using MongoDB Atlas.', 'JWT-secured auth, profile dashboard, and task management (CRUD).'],
    link: 'https://admin-panel-frontend-iota-nine.vercel.app/',
    gradient: 'from-emerald-600 to-teal-600',
    tags: ['React', 'MongoDB', 'JWT'],
  },
  {
    logo: calculator,
    title: 'Calculator App',
    desc: ['HTML/CSS/JS calculator with clean UI and previous value memory.'],
    link: 'https://calculatorappbymadhav.netlify.app/',
    gradient: 'from-amber-600 to-orange-600',
    tags: ['HTML', 'CSS', 'JS'],
  },
];

function TiltCard({ children, className }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

function Project() {
  return (
    <section id="projects" className="py-24 md:py-28 scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
            <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">PROJECTS</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <TiltCard className="glass rounded-2xl overflow-hidden group h-full">
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center p-2">
                        <img src={p.logo} alt={p.title} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex gap-2">
                        {p.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">{p.title}</h3>
                    <ul className="mt-3 space-y-1.5 flex-1">
                      {p.desc.map((d, i) => (
                        <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${p.gradient}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-zinc-800/50">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${p.gradient} text-white text-sm font-semibold hover:shadow-lg transition-shadow duration-300`}
                      >
                        Visit Project
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
