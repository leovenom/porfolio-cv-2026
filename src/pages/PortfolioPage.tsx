import { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { PortfolioVariantProvider } from '../context/PortfolioVariantContext'
import { getVariantByPath } from '../data/variants'
import { SkipLink } from '../lib/a11y'
import { applyPageSeo } from '../lib/seo'

const Work = lazy(() => import('../components/Work').then((m) => ({ default: m.Work })))
const ExperienceSection = lazy(() =>
  import('../components/ExperienceSection').then((m) => ({ default: m.ExperienceSection })),
)
const Stack = lazy(() => import('../components/Stack').then((m) => ({ default: m.Stack })))
const Contact = lazy(() => import('../components/Contact').then((m) => ({ default: m.Contact })))

export function PortfolioPage() {
  const { pathname } = useLocation()
  const variant = getVariantByPath(pathname)

  useEffect(() => {
    applyPageSeo(variant)
  }, [variant])

  return (
    <PortfolioVariantProvider variant={variant}>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Suspense fallback={null}>
          <Work />
          <ExperienceSection />
          <Stack />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </PortfolioVariantProvider>
  )
}
