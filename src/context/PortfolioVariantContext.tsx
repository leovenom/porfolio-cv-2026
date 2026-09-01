import { createContext, useContext, type ReactNode } from 'react'
import type { PortfolioVariant } from '../data/variants'

const PortfolioVariantContext = createContext<PortfolioVariant | null>(null)

export function PortfolioVariantProvider({
  variant,
  children,
}: {
  variant: PortfolioVariant
  children: ReactNode
}) {
  return (
    <PortfolioVariantContext.Provider value={variant}>{children}</PortfolioVariantContext.Provider>
  )
}

export function usePortfolioVariant(): PortfolioVariant {
  const variant = useContext(PortfolioVariantContext)
  if (!variant) {
    throw new Error('usePortfolioVariant must be used within PortfolioVariantProvider')
  }
  return variant
}
