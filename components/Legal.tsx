import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="bg-transparent">
      <section id="privacy" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-slate-400">This is a minimal privacy policy placeholder. Replace with your full privacy policy content before publishing.</p>
        </div>
      </section>

      <section id="terms" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
          <p className="text-slate-400">This is a placeholder for Terms of Service. Provide your full terms as appropriate for your site.</p>
        </div>
      </section>

      <section id="status" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Status</h2>
          <p className="text-slate-400">Status information and uptime details can be placed here. For production sites consider linking to an external status page.</p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
