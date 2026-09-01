import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Contact } from '../components/Contact'
import { ExperienceSection } from '../components/ExperienceSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Stack } from '../components/Stack'
import { Work } from '../components/Work'
import { PortfolioVariantProvider } from '../context/PortfolioVariantContext'
import { getVariantByPath } from '../data/variants'
import { SkipLink } from '../lib/a11y'
import { applyPageSeo } from '../lib/seo'

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
        <Work />
        <ExperienceSection />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </PortfolioVariantProvider>
  )
}
