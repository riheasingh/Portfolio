import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import ProjectModal from '../components/ProjectModal.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-pad relative min-h-screen overflow-hidden bg-[#050918] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_74%,rgba(99,102,241,0.10),transparent_30%)]" />
      <div className="star-field absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="font-display text-xs font-normal uppercase tracking-[0.38em] text-blue-300">
              Featured Work
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Projects</h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                className="group flex h-full min-h-[33rem] cursor-pointer flex-col overflow-hidden rounded-[1.4rem] border border-white/12 bg-[#0b1224] shadow-[0_30px_90px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-2 hover:border-blue-300/35"
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-[20rem] overflow-hidden border-b border-white/10 bg-slate-950">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.color}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.28),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
                      <project.icon className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-white/88" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-4 text-xs font-normal leading-6 text-slate-200">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-normal text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="btn-mini"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="btn-mini pointer-events-none opacity-55">
                        <ExternalLink size={16} />
                        Live Soon
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="btn-mini-muted"
                    >
                      <Code2 size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
