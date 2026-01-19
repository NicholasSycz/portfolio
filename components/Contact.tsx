
import React, { useState } from 'react';
import { PERSONAL_INFO, ICONS } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Replace this endpoint with your Formspree form endpoint or other form-handling service.
  // Example Formspree endpoint: https://formspree.io/f/yourFormId
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus('Message sent — thank you!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (err) {
      setStatus('Failed to send message. Please check your network and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto glass-panel rounded-[40px] p-8 md:p-16 border border-slate-200 dark:border-white/5 relative z-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              Let's craft magic, <br />
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-sm">
              I'm currently looking for new opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
              I'm a US citizen who also holds a Permanent Residence in Japan. Feel free to reach out regardless of your location!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-emerald-400 shadow-xl">
                  <ICONS.Mail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.email}</p>                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-amber-400 shadow-xl">
                  <ICONS.User />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
            />
            <textarea 
              rows={5}
              placeholder="Your Message" 
              className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none dark:text-white"
            ></textarea>
            <button className="w-full py-5 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-xl">
              {isSending ? 'Sending...' : 'Send Message'} <ICONS.Send />
            </button>
          </form>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Contact;