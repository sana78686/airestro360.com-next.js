import type { MarketingCategory } from './types'

/** Single-segment marketing URLs served by `app/(site)/[tool]/page.tsx` (and `app/id/[tool]/page.tsx`). */
export const MARKETING_SLUGS: Record<string, MarketingCategory> = {
  // Solutions (mega menu)
  'voice-ordering': 'solution',
  'table-ordering': 'solution',
  'kiosk-ordering': 'solution',
  'kitchen-display': 'solution',
  'prep-queue': 'solution',
  'inventory-insights': 'solution',
  'delivery-sync': 'solution',
  'loyalty-crm': 'solution',
  'analytics': 'solution',
  'marketing-ai': 'solution',
  'reviews': 'solution',
  'partner-api': 'solution',
  // Integrations (our + partners)
  'pos-systems': 'integration',
  'delivery-marketplaces': 'integration',
  'online-ordering': 'integration',
  'onsite-ordering': 'integration',
  'dispatch-routing': 'integration',
  'loyalty-integrations': 'integration',
  'uber-eats': 'integration',
  'doordash': 'integration',
  'square': 'integration',
  'clover': 'integration',
  'build-integration': 'integration',
  'partner-program': 'integration',
  // Resources
  'help-center': 'resource',
  'documentation': 'resource',
  'case-studies': 'resource',
  'product-updates': 'resource',
  'events': 'resource',
  'community': 'resource',
  'careers': 'resource',
  'api-overview': 'resource',
}

export function isMarketingSlug(slug: string): boolean {
  return Boolean(slug && Object.prototype.hasOwnProperty.call(MARKETING_SLUGS, slug.toLowerCase()))
}

export function getMarketingCategory(slug: string): MarketingCategory | null {
  const k = slug.toLowerCase()
  return MARKETING_SLUGS[k] ?? null
}
