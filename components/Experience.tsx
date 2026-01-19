
import React from 'react';
import { WORK_HISTORY, ICONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/10 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Professional Journey</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
          {WORK_HISTORY.map((job) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <ICONS.Briefcase />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">{job.role}</h3>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-xs font-mono bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-slate-500 border border-slate-200 dark:border-slate-800">
                    {job.start}<br /> {job.end}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;