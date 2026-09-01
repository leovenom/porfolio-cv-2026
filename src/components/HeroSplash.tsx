import { lazy, Suspense, type RefObject } from 'react'
import { useReducedMotion } from 'motion/react'

const SplashCursor = lazy(() => import('./SplashCursor'))

type HeroSplashProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HeroSplashFallback() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_srgb,var(--color-accent)_13%,transparent),transparent_50%),radial-gradient(circle_at_90%_70%,color-mix(in_srgb,var(--color-accent-cyan)_9%,transparent),transparent_45%)]" />
  )
}

export function HeroSplash({ sectionRef }: HeroSplashProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className="hero-splash-layer pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100%+7rem)]" aria-hidden>
        <HeroSplashFallback />
        <div className="hero-splash-edge" aria-hidden />
      </div>
    )
  }

  return (
    <div
      className="hero-splash-layer pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100%+7rem)]"
      aria-hidden
    >
      <HeroSplashFallback />
      <Suspense fallback={null}>
        <SplashCursor
          className="hero-splash-fluid absolute inset-0"
          interactionRef={sectionRef}
          DYE_RESOLUTION={768}
          SIM_RESOLUTION={128}
          SPLAT_RADIUS={0.22}
          SPLAT_FORCE={4600}
          DENSITY_DISSIPATION={4.3}
          RAINBOW_MODE={false}
          COLOR="#7ec3ff"
          SHADING
        />
      </Suspense>
      <div className="hero-splash-edge" aria-hidden />
    </div>
  )
}
