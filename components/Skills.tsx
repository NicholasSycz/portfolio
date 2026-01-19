import React from "react";
import { SKILL_CATEGORIES } from "../constants";

const Skills: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return "✦";
      case 1:
        return "⚙";
      case 2:
        return "☁";
      case 3:
        return "⚡";
      default:
        return "◈";
    }
  };

  const getGlow = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-emerald-500";
      case 1:
        return "bg-amber-500";
      case 2:
        return "bg-indigo-500";
      case 3:
        return "bg-rose-500";
      default:
        return "bg-slate-500";
    }
  };

  const getTextClass = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-emerald-500/20 text-emerald-400";
      case 1:
        return "bg-amber-500/20 text-amber-400";
      case 2:
        return "bg-indigo-500/20 text-indigo-400";
      case 3:
        return "bg-rose-500/20 text-rose-400";
      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Tech Stack & Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            A specialized toolkit focused on performance, reliability, and
            modern engineering standards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.name}
              className={`glass-panel p-8 rounded-[32px] border border-white/5 relative overflow-hidden group hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 shadow-xl`}
            >
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${getGlow(
                  idx
                )}`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg ${getTextClass(
                      idx
                    )}`}
                  >
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 bg-white/50 dark:bg-slate-800/40 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all cursor-default group/skill text-slate-600 dark:text-slate-300"
                    >
                      <span className="flex items-center gap-2">
                        {skill.name}
                        <span className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full group-hover/skill:bg-emerald-500 transition-colors"></span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center opacity-30">
          <div className="flex gap-12 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden py-4 whitespace-nowrap mask-fade text-slate-900 dark:text-white">
            <span className="font-mono text-sm tracking-widest uppercase">
              Scalability
            </span>
            <span className="font-mono text-sm tracking-widest uppercase">
              Testing Strategy
            </span>
            <span className="font-mono text-sm tracking-widest uppercase">
              Performance Tuning
            </span>
            <span className="font-mono text-sm tracking-widest uppercase">
              Git Workflow
            </span>
            <span className="font-mono text-sm tracking-widest uppercase">
              DB Optimization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
