import React, { useState } from "react";
import { PROJECTS, ICONS } from "../constants";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLimit = 120;
  const isLongDescription = project.description.length > descriptionLimit;

  return (
    <div className="group relative glass-panel rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all hover:-translate-y-2 shadow-lg flex flex-col h-full">
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4">
          {project.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded"
            >
              {s}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
          {project.title}
        </h3>

        <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
          {isExpanded || !isLongDescription ? (
            <p>{project.description}</p>
          ) : (
            <p>{project.description.slice(0, descriptionLimit)}...</p>
          )}

          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-500 transition-colors text-xs inline-flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  See Less <span className="rotate-180">▼</span>
                </>
              ) : (
                <>
                  See More <span>▼</span>
                </>
              )}
            </button>
          )}
        </div>

        <div className="space-y-2 mb-8 flex-grow">
          {project.contributions.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-300"
            >
              <span className="text-emerald-500">•</span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
          {project.github && !project.isProprietary && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-white transition-colors"
              id={`github-link-${project.id}`}
            >
              <ICONS.Github />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline"
              id={`project-link-${project.id}`}
            >
              Check it out <ICONS.External />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured Coding Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              A selection of technical projects across AI, Web, and
              Infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
