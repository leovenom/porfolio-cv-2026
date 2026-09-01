import { projects, type Project } from '../data/content'
import type { PortfolioVariant } from '../data/variants'
import { resolveProject } from '../data/variants'

export function projectPath(variantPath: string, projectId: string) {
  const base = variantPath === '/' ? '' : variantPath
  return `${base}/projects/${projectId}`
}

export function getProjectById(id: string, variant?: PortfolioVariant): Project | null {
  const base = projects.find((project) => project.id === id)
  if (!base) return null
  if (!variant) return base
  return resolveProject(base, variant.projectOverrides[id])
}
