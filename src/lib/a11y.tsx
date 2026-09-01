import { useEffect, type RefObject } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function sectionHref(pathname: string, variantPath: string, hash: string) {
  const onProjectPage = pathname.includes('/projects/')
  return onProjectPage ? `${variantPath}${hash}` : hash
}

const MAX_SCROLL_RETRIES = 48

export function syncNavScrollOffset() {
  const nav = document.querySelector<HTMLElement>('.nav-header')
  if (!nav) return

  document.documentElement.style.setProperty(
    '--nav-scroll-offset',
    `${Math.ceil(nav.getBoundingClientRect().height)}px`,
  )
}

export function getNavScrollOffset(extra = 0): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--nav-scroll-offset')
  const parsed = Number.parseFloat(value)
  if (Number.isFinite(parsed) && parsed > 0) return parsed + extra

  const nav = document.querySelector<HTMLElement>('.nav-header')
  return (nav?.getBoundingClientRect().height ?? 72) + extra
}

export function scrollToSectionById(
  id: string,
  behavior: ScrollBehavior = 'smooth',
): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0

    const tryScroll = () => {
      const target = document.getElementById(id)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - getNavScrollOffset()
        window.scrollTo({ top: Math.max(0, top), behavior })
        if (window.location.hash !== `#${id}`) {
          history.replaceState(null, '', `#${id}`)
        }
        resolve(true)
        return
      }

      attempts += 1
      if (attempts >= MAX_SCROLL_RETRIES) {
        resolve(false)
        return
      }

      requestAnimationFrame(tryScroll)
    }

    tryScroll()
  })
}

export function navigateToSection(options: {
  hash: string
  pathname: string
  variantPath: string
  navigate: (to: string) => void
  behavior: ScrollBehavior
  onAfterNavigate?: () => void
}) {
  const { hash, pathname, variantPath, navigate, behavior, onAfterNavigate } = options
  const id = hash.replace(/^#/, '')
  const onPortfolioPage = pathname === variantPath

  onAfterNavigate?.()

  if (!onPortfolioPage) {
    navigate(`${variantPath}${hash}`)
    return
  }

  void scrollToSectionById(id, behavior)
}

export function NewTabNotice() {
  return <span className="sr-only"> (opens in new tab)</span>
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:glass-btn-primary focus:px-4 focus:py-2"
    >
      Skip to content
    </a>
  )
}

export function useRouteFocus() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const main = document.getElementById('main')
    main?.focus({ preventScroll: true })

    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      navigate(
        { pathname: location.pathname, search: location.search, hash: location.hash },
        { replace: true, state: null },
      )
      return
    }

    if (location.hash) {
      syncNavScrollOffset()
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        void scrollToSectionById(id, 'auto')
      })
    }
  }, [location, navigate])
}

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  onEscape?: () => void,
) {
  useEffect(() => {
    if (!active) return
    const container = containerRef.current
    if (!container) return

    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => element.tabIndex !== -1 && !element.hasAttribute('disabled'),
      )

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onEscape?.()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = getFocusable()
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    getFocusable()[0]?.focus()

    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [active, containerRef, onEscape])
}
