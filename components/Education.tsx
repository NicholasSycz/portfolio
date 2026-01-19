
import React from 'react';
import { EDUCATION_HISTORY, ICONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/10 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Academic Foundation</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-8">
            A diverse educational path that shaped my analytical and technical capabilities.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_HISTORY.map((edu) => (
            <div 
              key={edu.id} 
              className={`glass-panel p-6 sm:p-8 rounded-[32px] border transition-all duration-500 shadow-xl relative overflow-hidden group 
                ${edu.level === 'higher' ? 'md:col-span-1 border-indigo-500/20 dark:border-indigo-500/20 hover:border-indigo-500/40' : 'border-slate-200 dark:border-white/5 opacity-80 hover:opacity-100'}`}
            >
              {edu.level === 'higher' && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
                    Collegiate
                  </span>
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner shrink-0 ${
                    edu.level === 'higher' ? 'bg-indigo-500/10 text-indigo-500' : 
                    edu.level === 'intermediate' ? 'bg-emerald-500/10 text-emerald-500' :
                    'bg-slate-500/10 text-slate-500'
                  }`}>
                    <ICONS.Academic />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {edu.school}
                    </h3>
                    <p className={`font-semibold ${
                      edu.level === 'higher' ? 'text-indigo-600 dark:text-indigo-400' : 
                      'text-slate-500 dark:text-slate-400'
                    }`}>
                      {edu.degree}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                   <span className="text-xs font-mono bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-slate-500 border border-slate-200 dark:border-slate-800 shadow-sm">
                    {edu.period}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {edu.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-[11px] font-medium rounded-lg border transition-colors ${
                          edu.level === 'higher' ? 'bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-500/10' : 
                          'bg-slate-500/5 text-slate-600 dark:text-slate-500 border-slate-500/10'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
