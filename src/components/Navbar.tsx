import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IconArrowUpRight, IconList, IconX } from './icons'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { contact } from '../data/content'
import { NewTabNotice, sectionHref, useFocusTrap } from '../lib/a11y'
import { entranceTransition, modalItem, modalOverlay, motionDurations } from '../lib/motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const reduced = useReducedMotion()
  const { pathname } = useLocation()
  const variant = usePortfolioVariant()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const hrefFor = (hash: string) => sectionHref(pathname, variant.path, hash)
  const navigate = useNavigate()

  const closeMenu = useCallback(() => {
    setOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useFocusTrap(menuRef, open, closeMenu)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (open) closeMenu()

    const scrollBehavior: ScrollBehavior = reduced ? 'auto' : 'smooth'

    if (pathname === variant.path) {
      window.scrollTo({ top: 0, behavior: scrollBehavior })
      return
    }

    navigate(variant.path, { state: { scrollToTop: true } })
  }

  return (
    <>
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={entranceTransition(0, motionDurations.modal)}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled ? 'glass-subtle border-b glass-divider' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="page-shell flex items-center justify-between py-4">
          <Link
            to={variant.path}
            onClick={handleBrandClick}
            aria-label={`${contact.name}, back to top`}
            className="font-display text-lg tracking-tight text-ink transition-colors duration-200 hover:text-accent md:text-xl"
          >
            {contact.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={hrefFor(link.href)}
                className="nav-link text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={variant.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-btn-ghost inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-sm text-ink"
            >
              CV
              <IconArrowUpRight size={14} aria-hidden />
              <NewTabNotice />
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="glass-btn-ghost tap-target inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconX size={20} aria-hidden /> : <IconList size={20} aria-hidden />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={reduced ? undefined : modalOverlay}
            className="fixed inset-0 z-40 glass-strong md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-6 px-8" aria-label="Mobile">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={hrefFor(link.href)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i * 0.04}
                  variants={reduced ? undefined : modalItem}
                  className="nav-link font-display text-4xl text-ink"
                  onClick={closeMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={variant.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="nav-link mt-4 inline-flex min-h-11 items-center gap-2 text-accent transition-colors duration-200 hover:text-ink"
                onClick={closeMenu}
              >
                Download CV
                <IconArrowUpRight size={18} aria-hidden />
                <NewTabNotice />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
