import { useReducedMotion } from 'motion/react'
import { type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { contact } from '../data/content'
import { NewTabNotice, navigateToSection, sectionHref } from '../lib/a11y'

const sectionLinks = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
] as const

export function Footer() {
  const reduced = useReducedMotion()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const variant = usePortfolioVariant()
  const year = new Date().getFullYear()
  const roleLabel = variant.pageTitle.replace('Leonardt Lauenstein — ', '')
  const hrefFor = (hash: string) => sectionHref(pathname, variant.path, hash)
  const scrollBehavior: ScrollBehavior = reduced ? 'auto' : 'smooth'

  const handleSectionClick = (hash: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigateToSection({
      hash,
      pathname,
      variantPath: variant.path,
      navigate,
      behavior: scrollBehavior,
    })
  }

  return (
    <footer className="glass-subtle border-t glass-divider py-8">
      <div className="page-shell flex flex-col items-start justify-between gap-4 text-sm text-ink-muted sm:flex-row sm:items-center">
        <p>
          © {year} {contact.name}. {roleLabel} · Porto, Portugal
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 font-mono text-xs">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={hrefFor(link.href)}
              onClick={handleSectionClick(link.href)}
              className="nav-link transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
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
