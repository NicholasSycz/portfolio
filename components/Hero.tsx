import React from "react";
import { PERSONAL_INFO, ICONS } from "../constants";

const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-4 relative"
    >
      <div className="max-w-4xl text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 glass-panel rounded-full text-sm font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
          Available for new opportunities!
        </div>

        <h1 className="text-2xl md:text-5xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
          Beautiful <span className="text-sm">(not perfect — just human)</span>
          <br />
          <span className="gradient-text">
            Elegant UX. Practical engineering.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            {PERSONAL_INFO.name}
          </span>
          , a {PERSONAL_INFO.title} focused on shipping polished, maintainable
          web apps that solve user problems and move product metrics.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white dark:text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 flex items-center justify-center"
          >
            View Projects
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="px-8 py-4 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl transition-all border border-slate-200 dark:border-slate-700 hover:scale-105 flex items-center justify-center gap-2"
          >
            <ICONS.Download /> Download Resume
          </a>
          {/* <a
            href="#contact"
            className="px-8 py-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Get in touch
          </a> */}
        </div>

        <div className="mt-16 flex justify-center gap-8">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-white transition-colors"
          >
            <ICONS.Github />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-white transition-colors"
          >
            <ICONS.Linkedin />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-white transition-colors"
          >
            <ICONS.Mail />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-slate-900 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
