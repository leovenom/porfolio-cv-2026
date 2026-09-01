import { useEffect, type RefObject } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function sectionHref(pathname: string, variantPath: string, hash: string) {
  const onProjectPage = pathname.includes('/projects/')
  return onProjectPage ? `${variantPath}${hash}` : hash
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
