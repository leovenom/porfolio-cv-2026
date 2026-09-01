export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/** UI motion durations (seconds) — interactive UI stays under 300ms */
export const motionDurations = {
  micro: 0.12,
  standard: 0.2,
  modal: 0.26,
  entrance: 0.24,
  large: 0.28,
  exit: 0.16,
} as const

export const motionSpring = {
  /** ~100–150ms feel for pointer-driven parallax */
  snappy: { stiffness: 420, damping: 34, mass: 0.55 },
  soft: { stiffness: 280, damping: 30, mass: 0.65 },
} as const

export function entranceTransition(delay = 0, duration: number = motionDurations.entrance) {
  return { duration, delay, ease: EASE_OUT }
}

export function scrollRevealTransition(delay = 0, duration: number = motionDurations.large) {
  return { duration, delay, ease: EASE_OUT }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: entranceTransition(delay),
  }),
}

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: entranceTransition(delay, motionDurations.standard),
  }),
}

export const slideIn = {
  hidden: { opacity: 0, x: -12, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: entranceTransition(delay, motionDurations.standard),
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
}

export const cardLift = {
  y: -4,
  transition: { duration: motionDurations.standard, ease: EASE_OUT },
}

export const viewportOnce = { once: true, margin: '-80px' } as const

export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDurations.modal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    transition: { duration: motionDurations.exit, ease: EASE_OUT },
  },
}

export const modalItem = {
  hidden: { opacity: 0, x: -16, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: motionDurations.standard, delay, ease: EASE_OUT },
  }),
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: motionDurations.exit, ease: EASE_OUT },
  },
}
