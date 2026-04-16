'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/useTranslation'
import { usePathLang } from '@/hooks/usePathLang'
import { langPrefix } from '@/i18n/translations'
import '@/components/compress/HomePage.css'
import './RestroHome.css'

/** Marketing home — distinct hero styling from Compress PDF; expand from Vite `react_ai_restro_360_main` when ready. */
export default function RestroHomeClient() {
  const lang = usePathLang()
  const t = useTranslation(lang)
  const lp = langPrefix(lang)

  return (
    <div className="home-page restro-home">
      <main
        id="main-content-inner"
        className="main main--landing restro-home__main"
        tabIndex={-1}
      >
        <section className="restro-home__hero" aria-labelledby="restro-hero-title">
          <h1 id="restro-hero-title" className="restro-home__title">
            {t('seoHeroH1')}
          </h1>
          <p className="restro-home__subtitle">{t('subtitle')}</p>
          <nav className="restro-home__nav" aria-label="Site">
            <Link className="restro-home__link" href={`${lp}/blog`}>
              {t('footerBlog')}
            </Link>
            <Link className="restro-home__link" href={`${lp}/contact`}>
              {t('footerContact')}
            </Link>
          </nav>
        </section>
      </main>
    </div>
  )
}
