import { motion, useReducedMotion } from 'motion/react'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { scrollRevealTransition } from '../lib/motion'

export function ExperienceSection() {
  const reduced = useReducedMotion()
  const variant = usePortfolioVariant()

  return (
    <section id="experience" className="glass-subtle border-y glass-divider py-24 md:py-32" aria-labelledby="experience-heading">
      <div className="page-shell">
        <div className="mb-12 md:mb-16">
          <p className="label-caps text-ink-subtle">02 — Experience</p>
          <h2 id="experience-heading" className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {variant.sectionTitles.experience}
          </h2>
        </div>

        <ol className="relative space-y-0">
          {variant.experience.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={reduced ? false : { opacity: 0, x: -12, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={scrollRevealTransition(index * 0.05)}
              className="grid gap-4 border-l glass-divider py-8 pl-6 md:grid-cols-[180px_1fr] md:gap-8 md:pl-8 lg:grid-cols-[220px_1fr]"
            >
              <div className="relative">
                <span
                  className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full border border-accent bg-accent/30 shadow-[0_0_12px_var(--color-accent-glow)] md:-left-[calc(2rem+5px)]"
                  aria-hidden
                />
                <p className="label-caps tabular-nums text-xs text-ink-subtle">{item.period}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.company} · {item.location}
                </p>
                <p className="measure mt-3 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
