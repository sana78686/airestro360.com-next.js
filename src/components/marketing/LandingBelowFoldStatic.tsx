'use client'

import Link from 'next/link'
import type { LandingCmsFoldProps } from './LandingCmsFold'

type Props = Pick<LandingCmsFoldProps, 't' | 'lp'>

/** Static i18n marketing tail (who / integrations / dual CTA) — no CMS fetch. */
export default function LandingBelowFoldStatic({ t, lp = '' }: Props) {
  return (
    <>
      <section className="ar-who" aria-labelledby="ar-who-heading">
        <div className="ar-container">
          <h2 id="ar-who-heading" className="ar-who-title">
            {t('landing.arWhoTitle')}
          </h2>
          <div className="ar-who-grid">
            <div className="ar-who-card">
              <div className="ar-who-img" aria-hidden="true" />
              <h3 className="ar-who-card-title">{t('landing.arWho1Title')}</h3>
              <p className="ar-who-card-desc">{t('landing.arWho1Desc')}</p>
            </div>
            <div className="ar-who-card">
              <div className="ar-who-img" aria-hidden="true" />
              <h3 className="ar-who-card-title">{t('landing.arWho2Title')}</h3>
              <p className="ar-who-card-desc">{t('landing.arWho2Desc')}</p>
            </div>
            <div className="ar-who-card">
              <div className="ar-who-img" aria-hidden="true" />
              <h3 className="ar-who-card-title">{t('landing.arWho3Title')}</h3>
              <p className="ar-who-card-desc">{t('landing.arWho3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ar-integrations" aria-labelledby="ar-int-heading">
        <div className="ar-container ar-int-inner">
          <div className="ar-int-copy">
            <h2 id="ar-int-heading" className="ar-int-title">
              {t('landing.arIntegrationsTitle')}
            </h2>
            <p className="ar-int-sub">{t('landing.arIntegrationsSub')}</p>
          </div>
          <ul className="ar-int-chips" role="list">
            {(
              [
                'landing.arIntLogo1',
                'landing.arIntLogo2',
                'landing.arIntLogo3',
                'landing.arIntLogo4',
                'landing.arIntLogo5',
              ] as const
            ).map((k) => (
              <li key={k} className="ar-int-chip" role="listitem">
                <span className="ar-int-chip-dot" aria-hidden />
                <span className="ar-int-chip-label">{t(k)}</span>
              </li>
            ))}
          </ul>
          <div className="ar-int-cta-wrap">
            <Link href={`${lp}/tools`} className="ar-btn-primary ar-int-cta">
              {t('landing.arExploreLink')}
            </Link>
          </div>
        </div>
      </section>

      <section className="ar-dual" aria-labelledby="ar-dual-heading">
        <div className="ar-container">
          <h2 id="ar-dual-heading" className="ar-dual-title">
            {t('landing.arDualTitle')}
          </h2>
          <div className="ar-dual-grid">
            <div className="ar-dual-card">
              <h3>{t('landing.arCtaCard1Title')}</h3>
              <p>{t('landing.arCtaCard1Desc')}</p>
              <Link href={`${lp}/tools`}>{t('landing.arExploreLink')} →</Link>
            </div>
            <div className="ar-dual-card">
              <h3>{t('landing.arCtaCard2Title')}</h3>
              <p>{t('landing.arCtaCard2Desc')}</p>
              <Link href={`${lp}/contact`}>{t('landing.arFaqCta')} →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
