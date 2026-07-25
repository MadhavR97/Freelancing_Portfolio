import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error(error.text);
      });
  };

  const fieldSx = {
    '& .MuiInputBase-input': { color: 'white', fontSize: '0.95rem' },
    '& .MuiInputLabel-root': { color: '#71717a', '&.Mui-focused': { color: '#6366f1' } },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#27272a', transition: 'border-color 0.3s' },
      '&:hover fieldset': { borderColor: '#52525b' },
      '&.Mui-focused fieldset': { borderColor: '#6366f1', borderWidth: '2px' },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-28 scroll-mt-20">
      <ToastContainer position="top-right" theme="dark" autoClose={3000} />
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            <span className="text-white text-lg md:text-xl font-extrabold tracking-wide">CONTACT ME</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-white font-bold text-lg mb-6">Let's work together</h3>
                <div className="space-y-5">
                  {[
                    { icon: 'fa-location-dot', label: 'Location', value: 'Rajkot, Gujarat, India' },
                    { icon: 'fa-phone', label: 'Phone', value: '+91 8200451152' },
                    { icon: 'fa-envelope', label: 'Email', value: 'madhavrathod019@gmail.com' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <i className={`fa-solid ${item.icon} text-indigo-400 text-sm`} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-zinc-300 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800/50">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Social</p>
                  <div className="flex gap-3">
                    {[
                      { icon: 'fa-x-twitter', link: 'https://x.com/madhavrathod0' },
                      { icon: 'fa-github', link: 'https://github.com/MadhavR97' },
                      { icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/madhav-rathod-530a79384' },
                      { icon: 'fa-instagram', link: 'https://www.instagram.com/ig_madhavrathod' },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all duration-200"
                      >
                        <i className={`fa-brands ${social.icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-8 md:p-10">
                <h3 className="text-white font-bold text-lg mb-6 md:hidden">Send me a message</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <TextField label="Name" variant="outlined" name="name" required fullWidth sx={fieldSx} />
                    <TextField label="Email" variant="outlined" name="email" required fullWidth sx={fieldSx} />
                  </div>
                  <div className="mb-5">
                    <TextField label="Phone" variant="outlined" name="phone" required fullWidth sx={fieldSx} />
                  </div>
                  <div className="mb-5">
                    <TextField label="Message" variant="outlined" name="message" required fullWidth multiline rows={4} sx={fieldSx} />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    Send Message
                    <i className="fa-solid fa-paper-plane ml-2" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
