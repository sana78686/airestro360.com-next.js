import type { MarketingPagePayload } from './types'
import { getMarketingCategory, isMarketingSlug } from './registry'
import { PAGES_EN } from './pages.en'
import { PAGES_ID } from './pages.id'

export function getMarketingPage(slug: string, lang: 'en' | 'id'): MarketingPagePayload | null {
  const k = slug.toLowerCase()
  if (!isMarketingSlug(k)) return null
  const cat = getMarketingCategory(k)
  if (!cat) return null
  const base = (lang === 'id' ? PAGES_ID[k] : null) ?? PAGES_EN[k]
  if (!base) return null
  return { ...base, category: cat }
}
