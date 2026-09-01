import { useRef, type MouseEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { IconArrowDown, IconArrowUpRight } from './icons'
import { HeroSplash } from './HeroSplash'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { contact } from '../data/content'
import { scrollToSectionById } from '../lib/a11y'
import { entranceTransition, motionDurations } from '../lib/motion'

export function Hero() {
  const reduced = useReducedMotion()
  const variant = usePortfolioVariant()
  const { hero } = variant
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToWork = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    void scrollToSectionById('work', reduced ? 'auto' : 'smooth')
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-x-clip pb-24 pt-32 md:pb-32 md:pt-40"
    >
      <HeroSplash sectionRef={sectionRef} />

      <div className="page-shell relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={entranceTransition(0.05, motionDurations.large)}
            className="font-display text-balance text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08] tracking-tight text-ink"
          >
            {hero.line1}
            <br />
            {hero.line2}
            <br />
            {hero.line3Before}{' '}
            <span className="ui-emphasis gradient-text inline-block pb-0.5">
              {hero.line3Emphasis}
            </span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={entranceTransition(0.12)}
            className="measure mt-6 text-lg text-ink-muted"
          >
            {hero.lede}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={entranceTransition(0.18)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              onClick={scrollToWork}
              className="glass-btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              See selected work
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="glass-btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-ink"
            >
              Get in touch
              <IconArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.dl
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={entranceTransition(0.28, motionDurations.standard)}
            className="glass-subtle mt-10 grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4"
          >
            {[
              ['Based in', 'Porto, Portugal'],
              ['Work auth', 'EU + Brazil'],
              ['Languages', 'PT · EN · DE'],
              ['Experience', '7 years'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="label-caps text-xs text-ink-subtle">{term}</dt>
                <dd className="tabular-nums mt-1 text-sm text-ink">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.a
        href="#work"
        onClick={scrollToWork}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={entranceTransition(0.55, motionDurations.standard)}
        className="label-caps relative z-10 mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs text-ink-subtle transition-colors duration-200 hover:text-accent"
        aria-label="Scroll to work section"
      >
        Scroll
        <IconArrowDown size={16} className="motion-safe:animate-bounce" aria-hidden />
      </motion.a>
    </section>
  )
}
