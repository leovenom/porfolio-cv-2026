import { motion, useReducedMotion } from 'motion/react'
import { IconArrowUpRight, IconEnvelope, IconGithub, IconLinkedin, IconMapPin } from './icons'
import { usePortfolioVariant } from '../context/PortfolioVariantContext'
import { contact } from '../data/content'
import { scrollRevealTransition } from '../lib/motion'

export function Contact() {
  const reduced = useReducedMotion()
  const variant = usePortfolioVariant()

  return (
    <section id="contact" className="pb-24 pt-8 md:pb-32" aria-labelledby="contact-heading">
      <div className="page-shell">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={scrollRevealTransition()}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-glow blur-3xl" />

          <p className="label-caps text-ink-subtle">04 — Contact</p>
          <h2 id="contact-heading" className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            {variant.sectionTitles.contact}
          </h2>
          <p className="measure mt-4 text-lg text-ink-muted">
            {variant.contactHeadline}{' '}
            <strong className="ui-emphasis gradient-text">{variant.contactEmphasis}</strong>{' '}
            {variant.contactBody}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${contact.email}`}
              className="glass group flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
            >
              <IconEnvelope size={20} className="mt-0.5 text-accent" />
              <div className="min-w-0">
                <p className="label-caps text-xs text-ink-subtle">Email</p>
                <p className="truncate-ellipsis mt-1 text-sm text-ink group-hover:text-accent" title={contact.email}>
                  {contact.email}
                </p>
              </div>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <IconLinkedin size={20} className="mt-0.5 text-accent" aria-hidden />
              <div>
                <p className="label-caps text-xs text-ink-subtle">LinkedIn</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink group-hover:text-accent">
                  Profile
                  <IconArrowUpRight size={14} aria-hidden />
                </p>
              </div>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-accent/30"
              aria-label="GitHub profile @leovenom (opens in new tab)"
            >
              <IconGithub size={20} className="mt-0.5 text-accent" aria-hidden />
              <div>
                <p className="label-caps text-xs text-ink-subtle">GitHub</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink group-hover:text-accent">
                  @leovenom
                  <IconArrowUpRight size={14} aria-hidden />
                </p>
              </div>
            </a>

            <div className="glass flex items-start gap-3 rounded-xl p-4">
              <IconMapPin size={20} className="mt-0.5 text-accent" aria-hidden />
              <div>
                <p className="label-caps text-xs text-ink-subtle">Location</p>
                <p className="mt-1 text-sm text-ink">{contact.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="glass-btn-primary inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              Send an email
              <IconArrowUpRight size={16} aria-hidden />
            </a>
            <a
              href={variant.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-btn-ghost inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm text-ink transition-colors"
              aria-label="Download CV as PDF (opens in new tab)"
            >
              Download CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
