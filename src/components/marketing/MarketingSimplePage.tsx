import Link from 'next/link'
import { getTranslation, langPrefix } from '@/i18n/translations'
import PageHeroBar from '@/components/site/PageHeroBar'
import { tintForPageKey } from '@/lib/pageHeaderTint'

type SimplePageKey = 'about'

type Locale = 'en' | 'id'

export default function MarketingSimplePage({ page, locale }: { page: SimplePageKey; locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key)
  const lp = langPrefix(locale)
  const title = t(`${page}.title`)
  const intro = t(`${page}.intro`)
  const ctaContact = t(`${page}.ctaContact`)
  const tint = tintForPageKey(page)

  return (
    <div className="main main--landing main--ar">
      <div className="ar-container" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
        <PageHeroBar title={title} subtitle={intro} tint={tint} />
        <div className="about-simple-cta" style={{ marginTop: '1.5rem' }}>
          <Link href={`${lp}/contact`} className="ar-btn-primary">
            {ctaContact}
          </Link>
        </div>
      </div>
    </div>
  )
}
