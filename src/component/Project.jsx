import React from 'react';
import { motion } from 'framer-motion';
import bewakoofShot from '../assets/projects/bewakoof-clone.jpg';
import sugarShot from '../assets/projects/sugar-cosmetics-clone.jpg';
import adminShot from '../assets/projects/admin-panel.jpg';
import calculatorShot from '../assets/projects/calculator.jpg';

const projects = [
  {
    title: 'Bewakoof Clone',
    category: 'E-commerce storefront',
    image: bewakoofShot,
    imageAlt: 'Screenshot of the Bewakoof Clone e-commerce homepage',
    problem: 'Recreating a large fashion catalogue required product discovery, wishlist, and cart flows to feel seamless across every screen.',
    solution: 'Built a fully responsive React + Tailwind e-commerce UI with search and filters, product pages, complex wishlist/cart state, and secure authentication.',
    liveUrl: 'https://bewakoof-website-seven.vercel.app/',
    repoUrl: 'https://github.com/MadhavR97/Bewakoof_website',
    tags: ['React', 'Tailwind', 'Auth'],
    gradient: 'from-indigo-600 to-blue-600',
    accent: 'text-indigo-400',
  },
  {
    title: 'Sugar Cosmetics Clone',
    category: 'Beauty e-commerce',
    image: sugarShot,
    imageAlt: 'Screenshot of the Sugar Cosmetics Clone homepage',
    problem: 'Beauty shoppers needed a fast way to explore products, compare variants, and save products without friction.',
    solution: 'Delivered a responsive React + Tailwind storefront with search, advanced filters, variant selection, wishlist/cart, and full auth including account deletion.',
    liveUrl: 'https://sugar-cosmetics-website.vercel.app/',
    repoUrl: 'https://github.com/MadhavR97/Sugar_Cosmetics_Website',
    tags: ['React', 'Tailwind', 'Auth'],
    gradient: 'from-purple-600 to-pink-600',
    accent: 'text-purple-400',
  },
  {
    title: 'Admin Panel Dashboard',
    category: 'Full-stack admin tool',
    image: adminShot,
    // Placeholder: replace admin-panel.jpg with the dashboard screenshot when it is ready.
    imageAlt: 'Screenshot of the Admin Panel interface',
    problem: 'Task management needed a secure, central place to sign in, view a profile, and manage records without exposing data.',
    solution: 'Created a JWT-secured React admin dashboard with protected routes, profile access, and CRUD task management backed by Express and MongoDB Atlas.',
    liveUrl: 'https://admin-panel-frontend-iota-nine.vercel.app/',
    repoUrl: 'https://github.com/MadhavR97/Admin_Panel_Frontend',
    backendUrl: 'https://github.com/MadhavR97/Admin_Panel_Backend',
    tags: ['React', 'Express', 'MongoDB'],
    gradient: 'from-emerald-600 to-teal-600',
    accent: 'text-emerald-400',
  },
  {
    title: 'Calculator App',
    category: 'Vanilla JS utility',
    image: calculatorShot,
    imageAlt: 'Screenshot of the Calculator app interface',
    problem: 'A simple calculator still needs dependable chained operations and an easy way to correct input without a cluttered interface.',
    solution: 'Built a lightweight HTML, CSS, and JavaScript calculator with previous-value memory, clear/backspace controls, and a clean responsive layout.',
    liveUrl: 'https://calculatorappbymadhav.netlify.app/',
    repoUrl: 'https://github.com/MadhavR97/Java_Script/tree/main/Calculator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-amber-600 to-orange-600',
    accent: 'text-amber-400',
  },
];

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
            className="flex items-end justify-between gap-4 mb-10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
              <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">PROJECTS</span>
            </div>
            <p className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Selected work · {String(projects.length).padStart(2, '0')} projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group glass rounded-2xl overflow-hidden h-full flex flex-col transition-colors duration-300 hover:border-zinc-700/80"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/65 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 bg-black/30 px-2 text-[10px] font-semibold tracking-widest text-white/90 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{project.category}</p>
                      <h3 className="mt-1 text-lg md:text-xl font-bold tracking-wide text-white">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-700/60 bg-zinc-800/70 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex-1 space-y-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Problem</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{project.problem}</p>
                    </div>
                    <div>
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${project.accent}`}>Solution</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-zinc-800/60 pt-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the live ${project.title} project`}
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.gradient} px-4 py-2 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]`}
                      >
                        Visit Project
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true" />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open the GitHub repository for ${project.title}`}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors duration-200 hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                      >
                        <i className="fa-brands fa-github text-sm" aria-hidden="true" />
                        GitHub Repo
                      </a>
                    </div>
                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-300 focus-visible:outline-none focus-visible:text-zinc-200"
                      >
                        Backend repo
                        <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
