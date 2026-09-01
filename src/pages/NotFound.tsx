import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconArrowUpRight } from '../components/icons'
import { contact } from '../data/content'
import { SkipLink } from '../lib/a11y'
import { applyNotFoundSeo } from '../lib/seo'

export function NotFound() {
  useEffect(() => {
    applyNotFoundSeo()
  }, [])

  return (
    <div className="flex min-h-dvh flex-col text-ink">
      <SkipLink />
      <header className="page-shell py-6">
        <Link
          to="/"
          className="font-display text-lg tracking-tight transition-colors hover:text-accent md:text-xl"
        >
          {contact.name}
        </Link>
      </header>

      <main id="main" tabIndex={-1} className="page-shell flex flex-1 flex-col justify-center pb-24">
        <div className="glass-strong max-w-lg rounded-3xl p-8 md:p-10">
          <p className="label-caps text-ink-subtle">404</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Page not found</h1>
          <p className="measure mt-4 text-ink-muted">
            This URL does not match a portfolio page. Return to the main portfolio or email me directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="glass-btn-primary inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              Back to portfolio
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="glass-btn-ghost inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm text-ink transition-colors"
            >
              Contact
              <IconArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
