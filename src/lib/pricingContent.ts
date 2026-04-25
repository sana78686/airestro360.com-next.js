/**
 * Static plan + feature matrix copy (English). Adjust pricing labels as needed.
 * UI uses the main site light theme (not the dark reference screenshots).
 */
export type PlanId = 'launch' | 'grow' | 'company'

export const PRICING_SECTION_TITLE = 'Pick a plan that matches your service model'
export const PRICING_SECTION_SUB =
  'All plans include core POS. Upgrade for kitchen, delivery, and back-office in one place.'

export const COMPARISON_TITLE = 'Full feature comparison'
export const COMPARISON_SUB = 'Plan-level feature breakdown for AI Restro 360.'

export type TierCard = {
  id: PlanId
  name: string
  tagline: string
  priceMain: string
  priceSub?: string
  priceNote?: string
  cta: string
  ctaHref: string
  featured?: boolean
  features: string[]
  badge?: string
}

export const TIER_CARDS: TierCard[] = [
  {
    id: 'launch',
    name: 'Launch',
    tagline: 'Single site, quick counter & takeaway',
    priceMain: 'Contact for pricing',
    priceSub: 'Per venue / month',
    cta: 'Start free trial',
    ctaHref: '/contact',
    features: [
      'POS + menu & order flow',
      'Customer profiles & receipts',
      'Daily sales summary',
      'Email support & setup guide',
    ],
  },
  {
    id: 'grow',
    name: 'Grow',
    tagline: 'Full-service dining & multi-channel orders',
    priceMain: 'Contact for pricing',
    priceSub: 'Best for growing teams',
    priceNote: 'Typical step-up: kitchen display, delivery sync, and inventory in one stack.',
    cta: 'Start free trial',
    ctaHref: '/contact',
    featured: true,
    badge: 'Most popular for independent restaurants',
    features: [
      'Everything in Launch',
      'Kitchen display & prep queues',
      'Riders + live delivery tracking',
      'Inventory & purchasing signals',
      'Website + online ordering',
      'Tables, roles & staff permissions',
    ],
  },
  {
    id: 'company',
    name: 'Company',
    tagline: 'Multi-site brands and franchise groups',
    priceMain: 'Custom pricing',
    priceSub: 'By branches and compliance needs',
    cta: 'Contact us',
    ctaHref: '/contact',
    features: [
      'Everything in Grow',
      'Unlimited venues (as contracted)',
      'Group dashboards & brand policies',
      'API access & integrations',
      'Dedicated success manager',
      'Priority support & uptime options',
    ],
  },
]

export type ComparisonRow = { feature: string; launch: boolean; grow: boolean; company: boolean }

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: 'Cloud POS & terminals', launch: true, grow: true, company: true },
  { feature: 'Kitchen display (KDS)', launch: false, grow: true, company: true },
  { feature: 'Riders app + live tracking', launch: false, grow: true, company: true },
  { feature: 'Inventory & cost signals', launch: false, grow: true, company: true },
  { feature: 'Financial reporting pack', launch: false, grow: true, company: true },
  { feature: 'Website + online ordering', launch: true, grow: true, company: true },
  { feature: 'Reservations & floor tools', launch: false, grow: true, company: true },
  { feature: 'Role-based staff access', launch: true, grow: true, company: true },
  { feature: 'Advanced analytics & exports', launch: false, grow: true, company: true },
  { feature: 'Deals, promos & loyalty hooks', launch: true, grow: true, company: true },
  { feature: 'Multi-location & franchise controls', launch: false, grow: false, company: true },
  { feature: 'API & data integrations', launch: false, grow: true, company: true },
]
