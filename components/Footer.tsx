
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [open, setOpen] = useState<null | 'privacy' | 'terms' | 'status'>(null);

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.
          </p>
        </div>
        
        <div className="flex gap-8">
          <button onClick={() => setOpen('privacy')} className="text-slate-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-widest font-bold">Privacy Policy</button>
          <button onClick={() => setOpen('terms')} className="text-slate-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-widest font-bold">Terms of Service</button>
          <button onClick={() => setOpen('status')} className="text-slate-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-widest font-bold">Status</button>
        </div>
      </div>

      {open && <LegalModal type={open} onClose={() => setOpen(null)} />}
    </footer>
  );
};

export default Footer;
