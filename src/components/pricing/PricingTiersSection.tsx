import Link from 'next/link'
import {
  TIER_CARDS,
  PRICING_SECTION_SUB,
  PRICING_SECTION_TITLE,
} from '@/lib/pricingContent'
import '@/styles/pricing-sections.css'

type Props = {
  title?: string
  sub?: string
  /** Lang prefix e.g. '' or '/id' */
  lp?: string
}

function prefixPath(lp: string, path: string) {
  if (!path.startsWith('/')) return path
  const base = lp.replace(/\/$/, '')
  if (!base) return path
  return base + path
}

export default function PricingTiersSection({
  title = PRICING_SECTION_TITLE,
  sub = PRICING_SECTION_SUB,
  lp = '',
}: Props) {
  return (
    <section className="pricing-tiers" aria-labelledby="pricing-tiers-h2">
      <h2 id="pricing-tiers-h2" className="pricing-tiers-h2">
        {title}
      </h2>
      <p className="pricing-tiers-sub">{sub}</p>
      <ul className="pricing-tiers-grid">
        {TIER_CARDS.map((t) => (
          <li
            key={t.id}
            className={
              t.featured
                ? 'pricing-tier-card pricing-tier-card--featured'
                : 'pricing-tier-card'
            }
          >
            {t.badge ? <p className="pricing-tier-badge">{t.badge}</p> : null}
            <p className="pricing-tier-name">{t.name}</p>
            <p className="pricing-tier-tagline">{t.tagline}</p>
            <p className="pricing-tier-price">{t.priceMain}</p>
            {t.priceSub ? <p className="pricing-tier-price-sub">{t.priceSub}</p> : null}
            {t.priceNote ? <p className="pricing-tier-note">{t.priceNote}</p> : null}
            <Link
              className={t.featured ? 'pricing-tier-cta pricing-tier-cta--primary' : 'pricing-tier-cta'}
              href={prefixPath(lp, t.ctaHref)}
            >
              {t.cta}
            </Link>
            <ul className="pricing-tier-features" aria-label={`${t.name} includes`}>
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="pricing-tier-compare">
              <span>See feature table below</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
