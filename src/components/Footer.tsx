import { useLocation } from 'react-router-dom'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { contact } from '../data/content'
import { NewTabNotice, sectionHref } from '../lib/a11y'

export function Footer() {
  const { pathname } = useLocation()
  const variant = usePortfolioVariant()
  const year = new Date().getFullYear()
  const roleLabel = variant.pageTitle.replace('Leonardt Lauenstein — ', '')
  const hrefFor = (hash: string) => sectionHref(pathname, variant.path, hash)

  return (
    <footer className="glass-subtle border-t glass-divider py-8">
      <div className="page-shell flex flex-col items-start justify-between gap-4 text-sm text-ink-muted sm:flex-row sm:items-center">
        <p>
          © {year} {contact.name}. {roleLabel} · Porto, Portugal
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 font-mono text-xs">
          <a href={hrefFor('#work')} className="nav-link transition-colors hover:text-ink">
            Work
          </a>
          <a href={hrefFor('#projects')} className="nav-link transition-colors hover:text-ink">
            Projects
          </a>
          <a href={hrefFor('#experience')} className="nav-link transition-colors hover:text-ink">
            Experience
          </a>
          <a href={hrefFor('#stack')} className="nav-link transition-colors hover:text-ink">
            Stack
          </a>
          <a href={hrefFor('#contact')} className="nav-link transition-colors hover:text-ink">
            Contact
          </a>
          <a
            href={variant.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-link transition-colors hover:text-ink"
          >
            CV (PDF)
            <NewTabNotice />
          </a>
        </nav>
      </div>
    </footer>
  )
}
