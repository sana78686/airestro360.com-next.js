/**
 * Airestro 360 — header mega menus.
 * `slug` routes to `/:lang/:slug` (ComingSoon) when not a path.
 */

export const AIRESTRO_SOLUTIONS = [
  {
    columnKey: 'airestroHeader.solCol1',
    items: [
      { titleKey: 'airestroHeader.sol1t', subKey: 'airestroHeader.sol1s', slug: 'voice-ordering' },
      { titleKey: 'airestroHeader.sol2t', subKey: 'airestroHeader.sol2s', slug: 'table-ordering' },
      { titleKey: 'airestroHeader.sol3t', subKey: 'airestroHeader.sol3s', slug: 'kiosk-ordering' },
    ],
  },
  {
    columnKey: 'airestroHeader.solCol2',
    items: [
      { titleKey: 'airestroHeader.sol4t', subKey: 'airestroHeader.sol4s', slug: 'kitchen-display' },
      { titleKey: 'airestroHeader.sol5t', subKey: 'airestroHeader.sol5s', slug: 'prep-queue' },
      { titleKey: 'airestroHeader.sol6t', subKey: 'airestroHeader.sol6s', slug: 'inventory-insights' },
    ],
  },
  {
    columnKey: 'airestroHeader.solCol3',
    items: [
      { titleKey: 'airestroHeader.sol7t', subKey: 'airestroHeader.sol7s', slug: 'delivery-sync' },
      { titleKey: 'airestroHeader.sol8t', subKey: 'airestroHeader.sol8s', slug: 'loyalty-crm' },
      { titleKey: 'airestroHeader.sol9t', subKey: 'airestroHeader.sol9s', slug: 'analytics' },
    ],
  },
  {
    columnKey: 'airestroHeader.solCol4',
    items: [
      { titleKey: 'airestroHeader.sol10t', subKey: 'airestroHeader.sol10s', slug: 'marketing-ai' },
      { titleKey: 'airestroHeader.sol11t', subKey: 'airestroHeader.sol11s', slug: 'reviews' },
      { titleKey: 'airestroHeader.sol12t', subKey: 'airestroHeader.sol12s', slug: 'partner-api' },
    ],
  },
]

/** Middle column: { titleKey, path: 'tools' | 'blog' | slug } */
export const AIRESTRO_INTEGRATIONS_OUR = [
  { titleKey: 'airestroHeader.intMid1', slug: 'pos-systems', icon: 'pos' },
  { titleKey: 'airestroHeader.intMid2', slug: 'delivery-marketplaces', icon: 'delivery' },
  { titleKey: 'airestroHeader.intMid3', slug: 'online-ordering', icon: 'phone' },
  { titleKey: 'airestroHeader.intMid4', slug: 'onsite-ordering', icon: 'kiosk' },
  { titleKey: 'airestroHeader.intMid5', slug: 'dispatch-routing', icon: 'pin' },
  { titleKey: 'airestroHeader.intMid6', slug: 'loyalty-integrations', icon: 'heart' },
]

export const AIRESTRO_INTEGRATIONS_PARTNERS = [
  { titleKey: 'airestroHeader.intP1', slug: 'uber-eats' },
  { titleKey: 'airestroHeader.intP2', slug: 'doordash' },
  { titleKey: 'airestroHeader.intP3', slug: 'square' },
  { titleKey: 'airestroHeader.intP4', slug: 'clover' },
  { titleKey: 'airestroHeader.intP5', slug: 'partner-program', icon: 'partner' },
  { titleKey: 'airestroHeader.intP6', slug: 'build-integration', icon: 'wrench' },
]

export const AIRESTRO_RESOURCES = [
  {
    columnKey: 'airestroHeader.resCol1',
    items: [
      { titleKey: 'airestroHeader.res1', path: 'blog' },
      { titleKey: 'airestroHeader.res2', slug: 'documentation' },
      { titleKey: 'airestroHeader.resCase', slug: 'case-studies' },
      { titleKey: 'airestroHeader.res3', slug: 'product-updates' },
    ],
  },
  {
    columnKey: 'airestroHeader.resCol2',
    items: [
      { titleKey: 'airestroHeader.res4', slug: 'help-center' },
      { titleKey: 'airestroHeader.res5', hash: 'landing-faq' },
      { titleKey: 'airestroHeader.res6', path: 'contact' },
    ],
  },
  {
    columnKey: 'airestroHeader.resCol3',
    items: [
      { titleKey: 'airestroHeader.res7', path: 'about' },
      { titleKey: 'airestroHeader.res8', slug: 'careers' },
      { titleKey: 'airestroHeader.resEvents', slug: 'events' },
    ],
  },
]
