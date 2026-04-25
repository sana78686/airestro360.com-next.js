import { getTranslation, langPrefix } from '@/i18n/translations'
import PageHeroBar from '@/components/site/PageHeroBar'
import { tintForPageKey } from '@/lib/pageHeaderTint'
import PricingTiersSection from '@/components/pricing/PricingTiersSection'
import PricingComparisonTable from '@/components/pricing/PricingComparisonTable'

type Locale = 'en' | 'id'

/**
 * Full pricing page: tinted hero (breadcrumb handled by SiteLayout) + tier cards + comparison table.
 */
export default function PricingView({ locale }: { locale: Locale }) {
  const t = (k: string) => getTranslation(locale, k)
  const lp = langPrefix(locale)
  const title = t('pricing.title')
  const intro = t('pricing.intro')
  const tint = tintForPageKey('pricing')

  return (
    <div className="main main--landing main--ar">
      <div className="ar-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <PageHeroBar title={title} subtitle={intro} tint={tint} />
        <div style={{ padding: '0 0 2.5rem' }}>
          <PricingTiersSection lp={lp} />
          <PricingComparisonTable />
        </div>
      </div>
    </div>
  )
}
