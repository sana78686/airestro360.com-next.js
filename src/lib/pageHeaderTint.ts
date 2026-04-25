/**
 * Per-page hero background tint (pastel gradient). Stays in sync across routes by slug.
 */
export type PageHeaderTint =
  | 'rose'
  | 'coral'
  | 'sky'
  | 'emerald'
  | 'violet'
  | 'amber'
  | 'fuchsia'
  | 'cyan'
  | 'lime'
  | 'slate'

const TINTS: PageHeaderTint[] = [
  'sky',
  'emerald',
  'rose',
  'violet',
  'amber',
  'cyan',
  'fuchsia',
  'coral',
  'lime',
  'slate',
]

export function tintForSlug(slug: string): PageHeaderTint {
  let h = 0
  for (let i = 0; i < slug.length; i += 1) {
    h = (h + slug.charCodeAt(i) * (i + 1)) % 10007
  }
  return TINTS[h % TINTS.length]
}

/** Simple pages that are not in the marketing registry */
export const PAGE_TINT: Record<string, PageHeaderTint> = {
  pricing: 'amber',
  about: 'rose',
  contact: 'emerald',
  blog: 'sky',
  'legal-default': 'slate',
}

export function tintForPageKey(key: string): PageHeaderTint {
  return PAGE_TINT[key] ?? 'sky'
}
