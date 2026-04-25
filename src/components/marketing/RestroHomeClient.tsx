'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/useTranslation'
import { langPrefix } from '@/i18n/translations'
import { usePathLang } from '@/hooks/usePathLang'
import '@/styles/cms-page.css'
import PricingTiersSection from '@/components/pricing/PricingTiersSection'
import PricingComparisonTable from '@/components/pricing/PricingComparisonTable'

const LandingBelowFold = dynamic(() => import('./LandingBelowFold'), {
  ssr: true,
  loading: () => null,
})

const LandingFaqSection = dynamic(() => import('./LandingFaqSection'), {
  ssr: true,
  loading: () => null,
})

export type RestroHomeClientProps = {
  cmsHomeHtml?: string
  landingFaq?: { question?: string; answer?: string }[]
  landingCards?: unknown[]
  howSection?: { title?: string; description?: string } | null
  cmsSections?: unknown[]
}

function cmsHtmlHasVisibleText(html: string) {
  if (!html || typeof html !== 'string') return false
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > 0
}

/** English at `/`, Indonesian at `/id` (no trailing slash normalized). */
function isHomePath(pathname: string, lp: string) {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (!lp) return p === '/'
  return p === lp.replace(/\/+$/, '')
}

/**
 * Marketing home — parity with Vite `react_ai_restro_360_main` HomePage.
 * CMS/FAQ/cards/sections are fetched on the server and passed in for SSR HTML.
 */
export default function RestroHomeClient({
  cmsHomeHtml: cmsHomeHtmlProp = '',
  landingFaq: landingFaqProp = [],
  landingCards: landingCardsProp = [],
  howSection: howSectionProp = null,
  cmsSections: cmsSectionsProp = [],
}: RestroHomeClientProps) {
  const lang = usePathLang()
  const pathname = usePathname() || '/'
  const t = useTranslation(lang)
  const lp = langPrefix(lang)
  const isHomeLanding = isHomePath(pathname, lp)

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null)

  const cmsHomeHtml = cmsHomeHtmlProp
  const landingFaq = Array.isArray(landingFaqProp) ? landingFaqProp : []
  const landingCards = Array.isArray(landingCardsProp) ? landingCardsProp : []
  const howSection = howSectionProp
  const cmsSections = Array.isArray(cmsSectionsProp) ? cmsSectionsProp : []

  const faqItems =
    landingFaq.length > 0
      ? landingFaq.map((item) => ({ q: item.question ?? '', a: item.answer ?? '' }))
      : []

  return (
    <div className="main main--landing main--ar">
      <section className="ar-hero" aria-labelledby="ar-hero-title">
        <div className="ar-container ar-hero-grid">
          <div>
            <p className="ar-hero-kicker">{t('landing.arHeroEyebrow')}</p>
            <h1 id="ar-hero-title" className="ar-hero-title">
              {t('landing.heroTitleLine1')}
              <span className="ar-hero-title-accent">{t('landing.heroTitleAccent1')}</span>
              {t('landing.heroTitleLine2')}
              <span className="ar-hero-title-accent">{t('landing.heroTitleAccent2')}</span>
            </h1>
            <p className="ar-hero-sub">{t('landing.heroSubtitle')}</p>
            <div className="ar-hero-actions">
              <Link className="ar-btn-primary" href={`${lp}/contact`}>
                {t('landing.arGetStarted')}
              </Link>
              <Link className="ar-btn-ghost" href={`${lp}/contact`}>
                {t('landing.arContactLink')}
              </Link>
            </div>
          </div>
          <div className="ar-hero-visual" aria-hidden="true" />
        </div>
      </section>

      <section className="ar-stats" aria-label={t('landing.arStatsAria')}>
        <div className="ar-container ar-stats-grid">
          <div>
            <span className="ar-stat-value">{t('landing.arStat1Value')}</span>
            <span className="ar-stat-label">{t('landing.arStat1Label')}</span>
          </div>
          <div>
            <span className="ar-stat-value">{t('landing.arStat2Value')}</span>
            <span className="ar-stat-label">{t('landing.arStat2Label')}</span>
          </div>
          <div>
            <span className="ar-stat-value">{t('landing.arStat3Value')}</span>
            <span className="ar-stat-label">{t('landing.arStat3Label')}</span>
          </div>
        </div>
      </section>

      <section className="ar-quote" aria-labelledby="ar-quote-heading">
        <div className="ar-container ar-quote-grid">
          <h2 id="ar-quote-heading" className="ar-quote-text">
            {t('landing.arTestimonialQuote')}
          </h2>
          <div className="ar-quote-visual">
            <span className="ar-quote-badge">{t('landing.arQuoteBadge')}</span>
          </div>
        </div>
      </section>

      {isHomeLanding ? (
        <section className="ar-home-pricing" aria-labelledby="pricing-tiers-h2">
          <div className="ar-container">
            <PricingTiersSection
              title={t('landing.homePricingTitle')}
              sub={t('landing.homePricingSub')}
              lp={lp}
            />
            <PricingComparisonTable />
          </div>
        </section>
      ) : null}

      {isHomeLanding && cmsHtmlHasVisibleText(cmsHomeHtml) && (
        <section className="ar-cms landing-cms-body-section" aria-label={t('landing.cmsSectionAria')}>
          <div className="ar-container">
            <div
              className="cms-home-cms-body cms-page-content"
              dangerouslySetInnerHTML={{ __html: cmsHomeHtml }}
            />
          </div>
        </section>
      )}

      <LandingBelowFold
        t={t}
        cards={landingCards}
        howSection={howSection}
        sections={cmsSections}
        lp={lp}
      />

      {faqItems.length > 0 && (
        <LandingFaqSection
          t={t}
          faqItems={faqItems}
          faqOpenIndex={faqOpenIndex}
          setFaqOpenIndex={setFaqOpenIndex}
          lp={lp}
        />
      )}
    </div>
  )
}
