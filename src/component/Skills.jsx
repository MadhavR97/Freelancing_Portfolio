import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { icon: "devicon-html5-plain-wordmark", name: "HTML5" },
  { icon: "devicon-css3-plain-wordmark", name: "CSS3" },
  { icon: "devicon-bootstrap-plain-wordmark", name: "Bootstrap" },
  { icon: "devicon-tailwindcss-plain-wordmark", name: "Tailwind CSS" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-jquery-plain-wordmark", name: "jQuery" },
  { icon: "devicon-react-original-wordmark", name: "React" },
  { icon: "devicon-reactrouter-plain-wordmark", name: "React Router" },
  { icon: "devicon-redux-original", name: "Redux" },
  { icon: "devicon-nodejs-plain-wordmark", name: "Node.js" },
  { icon: "devicon-express-original-wordmark", name: "Express" },
  { icon: "devicon-mongodb-plain-wordmark", name: "MongoDB" },
  { icon: "devicon-mongoose-original-wordmark", name: "Mongoose" },
  { icon: "devicon-firebase-plain-wordmark", name: "Firebase" },
  { icon: "devicon-vitejs-plain", name: "Vite" },
  { icon: "devicon-vscode-plain-wordmark", name: "VS Code" },
  { icon: "devicon-github-original", name: "GitHub" },
  { icon: "devicon-postman-plain-wordmark", name: "Postman" },
  { icon: "devicon-netlify-plain-wordmark", name: "Netlify" },
  { icon: "devicon-vercel-original-wordmark", name: "Vercel" },
  { icon: "devicon-sass-original", name: "Sass" },
  { icon: "devicon-materialui-plain", name: "Material UI" },
  { icon: "devicon-c-plain-wordmark", name: "C" },
  { icon: "devicon-npm-original-wordmark", name: "npm" },
  { icon: "devicon-json-plain", name: "JSON" },
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
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <TiltCard className="glass rounded-xl p-5 flex flex-col items-center justify-center gap-2.5 h-28 md:h-32 cursor-default">
                  <i className={`${skill.icon} text-3xl md:text-4xl text-zinc-400`} />
                  <span className="text-[10px] text-zinc-600 font-medium text-center leading-tight">{skill.name}</span>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
