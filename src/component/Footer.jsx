import React from 'react';

function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/50">
      <div className="section-container py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          Built with <span className="text-red-400/80">&hearts;</span> by{' '}
          <span className="text-zinc-300 font-semibold">Madhav Rathod</span> — &copy; {new Date().getFullYear()}
        </p>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
