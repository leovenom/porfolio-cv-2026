import { useReducedMotion } from 'motion/react'

export function LiquidBackdrop() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-canvas" />
      <div className={`liquid-orb liquid-orb-a ${reduced ? '' : 'liquid-orb-animate-a'}`} />
      <div className={`liquid-orb liquid-orb-b ${reduced ? '' : 'liquid-orb-animate-b'}`} />
      <div className={`liquid-orb liquid-orb-c ${reduced ? '' : 'liquid-orb-animate-c'}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay grain" />
    </div>
  )
}
