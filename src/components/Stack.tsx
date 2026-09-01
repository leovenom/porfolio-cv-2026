import { motion, useReducedMotion } from 'motion/react'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { scrollRevealTransition } from '../lib/motion'

export function Stack() {
  const reduced = useReducedMotion()
  const variant = usePortfolioVariant()

  return (
    <section id="stack" className="py-24 md:py-32" aria-labelledby="stack-heading">
      <div className="page-shell">
        <div className="mb-12 md:mb-16">
          <p className="label-caps text-ink-subtle">03 — Stack</p>
          <h2 id="stack-heading" className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {variant.sectionTitles.stack}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {variant.stackGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={scrollRevealTransition(index * 0.05)}
              className="glass rounded-2xl p-6"
            >
              <h3 className="label-caps text-accent">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="glass-chip rounded-lg px-3 py-1.5 text-sm text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
