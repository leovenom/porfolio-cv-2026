import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import type { Project } from '../data/content'
import { PipelineCaseMedia } from './PipelineCaseMedia'

type ProjectMediaProps = {
  project: Project
  framed?: boolean
  interactive?: boolean
}

export function ProjectMedia({ project, framed = false, interactive = false }: ProjectMediaProps) {
  const variant = usePortfolioVariant()
  const frameClass = framed ? 'overflow-hidden rounded-2xl' : ''
  const scaleClass = interactive
    ? 'will-change-transform absolute inset-[-1px] motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]'
    : 'absolute inset-0'

  if (project.media === 'pipeline') {
    return (
      <div className={frameClass}>
        <PipelineCaseMedia pipeline={variant.pipeline} />
      </div>
    )
  }

  if (!project.image) return null

  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-surface-elevated/50 ${frameClass}`}>
      <div className={scaleClass}>
        <img
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          loading="lazy"
          decoding="async"
          className={`block h-full w-full ${
            project.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'
          }`}
        />
        {project.imageFit !== 'contain' && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"
            aria-hidden
          />
        )}
      </div>
    </div>
  )
}
