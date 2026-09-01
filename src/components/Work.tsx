import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { IconArrowUpRight, IconGithub } from './icons'
import { ProjectMedia } from './ProjectMedia'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import type { Project } from '../data/content'
import { projects } from '../data/content'
import { resolveProject } from '../data/variants'
import { scrollRevealTransition, viewportOnce } from '../lib/motion'

const accentStyles = {
  copper: 'border-white/10 bg-surface/30',
  sage: 'border-white/10 bg-surface/30',
  neutral: 'border-white/10 bg-surface/30',
}

const INITIAL_MORE_PROJECTS = 6
const MORE_PROJECTS_STEP = 6

function ProjectLinks({ project, className = 'mt-6' }: { project: Project; className?: string }) {
  const link = project.href ?? project.github

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-link inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent hover:text-accent"
          aria-label={project.href ? `View ${project.title} (opens in new tab)` : `View ${project.title} repository (opens in new tab)`}
        >
          {project.href ? 'View project' : 'View repo'}
          <IconArrowUpRight size={15} aria-hidden />
        </a>
      )}
      {project.github && project.href && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
              className="text-link inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          aria-label={`${project.title} on GitHub (opens in new tab)`}
        >
          <IconGithub size={16} aria-hidden />
          GitHub
        </a>
      )}
    </div>
  )
}

function FeaturedCase({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion()
  const reverse = index % 2 === 1

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={scrollRevealTransition(index * 0.05)}
      className={`group grid gap-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12 ${
        reverse ? '[&>.case-media]:md:order-2 [&>.case-body]:md:order-1' : ''
      }`}
    >
      <div className="case-media">
        <ProjectMedia project={project} framed />
      </div>

      <div className="case-body md:py-2">
        <p className="label-caps tabular-nums text-ink-subtle">
          {project.year}
          {project.company ? ` · ${project.company}` : ''}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-2 text-sm text-accent">{project.subtitle}</p>
        <p className="measure mt-5 text-sm leading-relaxed text-ink-muted md:text-[15px]">{project.description}</p>

        {project.metric && (
          <p className="tabular-nums mt-5 inline-flex rounded-lg border border-white/10 px-4 py-2 font-mono text-sm text-accent">
            {project.metric}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion()
  const externalUrl = project.href ?? project.github

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={scrollRevealTransition(index * 0.05)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-200 hover:border-white/20 ${accentStyles[project.accent]} ${externalUrl ? 'cursor-pointer' : ''}`}
    >
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={
            project.href
              ? `Visit ${project.title} (opens in new tab)`
              : `View ${project.title} on GitHub (opens in new tab)`
          }
        />
      )}

      {(project.media === 'pipeline' || project.image) && (
        <div className="overflow-hidden">
          <ProjectMedia project={project} interactive />
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="label-caps tabular-nums text-ink-subtle">
              {project.year}
              {project.company ? ` · ${project.company}` : ''}
            </p>
            <h3 className="mt-2 font-display text-xl leading-tight text-ink">{project.title}</h3>
            <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
          </div>
          {project.metric && (
            <span className="tabular-nums shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-accent">
              {project.metric}
            </span>
          )}
        </div>

        <p className="measure mt-4 line-clamp-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-200 ease-out group-focus-within:mt-4 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100 max-lg:mt-4 max-lg:grid-rows-[1fr] max-lg:opacity-100">
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Work() {
  const variant = usePortfolioVariant()
  const [visibleMoreCount, setVisibleMoreCount] = useState(INITIAL_MORE_PROJECTS)
  const [projectsStatus, setProjectsStatus] = useState('')

  const featured = variant.featuredIds
    .map((id) => {
      const base = projects.find((p) => p.id === id)
      if (!base) return null
      return resolveProject(base, variant.projectOverrides[id])
    })
    .filter((p): p is Project => p !== null)

  const featuredSet = new Set(variant.featuredIds)
  const more = projects.filter((p) => !featuredSet.has(p.id))
  const visibleMore = more.slice(0, visibleMoreCount)
  const remainingMore = more.length - visibleMoreCount

  return (
    <section id="work" className="relative z-10 py-24 md:py-32" aria-labelledby="work-heading">
      <div className="page-shell">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="label-caps tabular-nums text-ink-subtle">00 — Work</p>
          <h2 id="work-heading" className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {variant.sectionTitles.work}
          </h2>
          <p className="mt-4 measure text-ink-muted">{variant.workIntro}</p>
        </div>

        <div className="flex flex-col gap-14 md:gap-20">
          {featured.map((project, index) => (
            <FeaturedCase key={project.id} project={project} index={index} />
          ))}
        </div>

        {more.length > 0 && (
          <div
            id="projects"
            role="region"
            aria-labelledby="projects-heading"
            className="mt-20 border-t glass-divider pt-16 md:mt-24 md:pt-20"
          >
            <div className="mb-8 max-w-2xl md:mb-10">
              <p className="label-caps tabular-nums text-ink-subtle">
                01 — More projects
              </p>
              <h3 id="projects-heading" className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                {variant.sectionTitles.projects}
              </h3>
              <p className="measure mt-4 text-ink-muted">{variant.projectsIntro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleMore.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {remainingMore > 0 && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const nextCount = Math.min(visibleMoreCount + MORE_PROJECTS_STEP, more.length)
                    setVisibleMoreCount(nextCount)
                    setProjectsStatus(`Showing ${nextCount} of ${more.length} projects.`)
                  }}
                  className="glass-btn-ghost inline-flex min-h-11 cursor-pointer items-center rounded-full px-5 py-3 text-sm text-ink transition-colors"
                >
                  Show more
                  <span className="tabular-nums ml-1.5 text-ink-subtle">({remainingMore})</span>
                </button>
                <p aria-live="polite" aria-atomic="true" className="sr-only">
                  {projectsStatus}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
