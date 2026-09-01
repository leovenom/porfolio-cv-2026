import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProjectMedia } from '../components/ProjectMedia'
import { IconArrowUpRight, IconGithub } from '../components/icons'
import { PortfolioVariantProvider } from '../context/PortfolioVariantContext'
import { getVariantByPath } from '../data/variants'
import { getProjectById } from '../lib/projects'
import { SkipLink } from '../lib/a11y'
import { applyProjectSeo } from '../lib/seo'
import { NotFound } from './NotFound'

function ProjectDetail() {
  const { pathname } = useLocation()
  const { projectId } = useParams<{ projectId: string }>()
  const variant = getVariantByPath(pathname)
  const project = projectId ? getProjectById(projectId, variant) : null

  useEffect(() => {
    if (project) applyProjectSeo(project, variant)
  }, [project, variant])

  if (!project) return <NotFound />

  return (
    <PortfolioVariantProvider variant={variant}>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="pb-24 pt-28 md:pb-32 md:pt-32">
        <div className="page-shell">
          <Link
            to={`${variant.path}#projects`}
            className="text-link inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent"
          >
            ← All projects
          </Link>

          <header className="mt-8 max-w-3xl">
            <p className="label-caps tabular-nums text-ink-subtle">
              {project.year}
              {project.company ? ` · ${project.company}` : ''}
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">{project.title}</h1>
            <p className="mt-3 text-lg text-accent">{project.subtitle}</p>
            {project.metric && (
              <p className="tabular-nums mt-5 inline-flex rounded-lg border border-white/10 px-4 py-2 font-mono text-sm text-accent">
                {project.metric}
              </p>
            )}
          </header>

          {(project.media === 'pipeline' || project.image) && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <ProjectMedia project={project} />
            </div>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="measure text-base leading-relaxed text-ink-muted md:text-[17px]">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-btn-primary inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
                    aria-label={`Visit ${project.title} live site (opens in new tab)`}
                  >
                    Visit live site
                    <IconArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-btn-ghost inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm text-ink transition-colors"
                    aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                  >
                    <IconGithub size={18} aria-hidden />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            <aside>
              <p className="label-caps text-ink-subtle">Stack & focus</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-ink-muted">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </PortfolioVariantProvider>
  )
}

export function ProjectPage() {
  return <ProjectDetail />
}
