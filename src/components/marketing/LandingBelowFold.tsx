'use client'

import Link from 'next/link'

/** Icon key → emoji for CMS-driven cards (match CMS list). */
const CARD_ICON_EMOJI = {
  lightning: '⚡',
  quality: '🎚️',
  lock: '🔒',
  star: '✨',
  document: '📄',
  shield: '🛡️',
  heart: '❤️',
  cloud: '☁️',
  download: '⬇️',
  upload: '⬆️',
  check: '✅',
  image: '🖼️',
  'file-plus': '📎',
  layers: '📑',
  sparkle: '✨',
  zap: '⚡',
  settings: '⚙️',
  globe: '🌐',
  mobile: '📱',
  clock: '⏱️',
}

function renderMediaIcon(item: { media_type?: string; media_value?: string }, idx: number) {
  const type = String(item.media_type || '').toLowerCase()
  const val = String(item.media_value || '').trim()
  if (type === 'number' || type === 'numbered') {
    return <span className="ar-step-badge landing-step-num" aria-hidden="true">{val || idx + 1}</span>
  }
  if (type === 'fa-icon' && val) {
    return <i className={val} aria-hidden="true" />
  }
  if (type === 'icon' && val && CARD_ICON_EMOJI[val as keyof typeof CARD_ICON_EMOJI]) {
    return (
      <span className="landing-card-icon" aria-hidden="true">
        {CARD_ICON_EMOJI[val as keyof typeof CARD_ICON_EMOJI]}
      </span>
    )
  }
  if (type === 'image' && val) {
    return <img src={val} alt="" className="landing-step-img" loading="lazy" aria-hidden="true" />
  }
  return <span className="ar-step-badge landing-step-num" aria-hidden="true">{idx + 1}</span>
}

type CardLike = {
  id?: string | number
  title?: string
  description?: string
  icon?: string
}

type SectionLike = {
  id?: number | string
  title?: string
  description?: string
  items?: Array<{
    id?: number | string
    title?: string
    description?: string
    media_type?: string
    media_value?: string
  }>
}

function buildFourCards(
  cards: unknown[],
  t: (key: string) => string,
): CardLike[] {
  const defaults = [1, 2, 3, 4].map((n) => ({
    id: `fallback-${n}`,
    title: t(`landing.feature${n}Title`),
    description: t(`landing.feature${n}Desc`),
    icon: ['layers', 'zap', 'check', 'globe'][n - 1],
  }))
  const out: CardLike[] = []
  for (let i = 0; i < 4; i += 1) {
    const c = cards[i] as CardLike | undefined
    out.push(c || defaults[i])
  }
  return out
}

/**
 * Below-the-fold: WHAT / WHY / HOW / WHO / integrations / dual CTA — CMS cards & sections preserved.
 */
export default function LandingBelowFold({
  t,
  cards = [],
  howSection = null,
  sections = [],
  lp = '',
}: {
  t: (key: string) => string
  cards?: unknown[]
  howSection?: { title?: string; description?: string } | null
  sections?: unknown[]
  lp?: string
}) {
  const cardEmoji = (iconKey: string) => CARD_ICON_EMOJI[iconKey as keyof typeof CARD_ICON_EMOJI] ?? '✨'
  const whatFour = buildFourCards(cards, t)
  const whyFour = buildFourCards(cards, t)

  return (
    <>
      <section className="ar-what" aria-labelledby="ar-what-heading">
        <div className="ar-container ar-what-grid">
          <div className="ar-what-visual" aria-hidden="true">
            <div className="ar-what-visual-inner" />
          </div>
          <div>
            <h2 id="ar-what-heading" className="ar-what-label">
              {t('landing.arWhatTitle')}
            </h2>
            <ul className="ar-what-list">
              {whatFour.map((card, idx) => (
                <li key={card.id ?? idx} className="ar-what-item">
                  <span className="ar-what-dot" aria-hidden="true" />
                  <div>
                    <p className="ar-what-item-title">{card.title}</p>
                    <p className="ar-what-item-desc">{card.description || ''}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ar-why" aria-labelledby="ar-why-heading">
        <div className="ar-container">
          <h2 id="ar-why-heading" className="ar-why-title">
            {t('landing.arWhyTitle')}
          </h2>
          <div className="ar-why-grid">
            {whyFour.map((card, idx) => (
              <div key={card.id ?? idx} className="ar-why-card">
                <span className="ar-why-card-icon" aria-hidden="true">
                  {cardEmoji(card.icon ?? '')}
                </span>
                <h3 className="ar-why-card-title">{card.title}</h3>
                <p className="ar-why-card-desc">{card.description || ''}</p>
                <Link href={`${lp}/tools`} className="ar-why-card-link">
                  {t('landing.arExploreLink')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(sections as SectionLike[]).map((sec) => {
        const items = Array.isArray(sec.items) ? sec.items : []
        if (!items.length) return null
        const sectionId = `cms-section-${sec.id}`
        return (
          <section key={sec.id} className="landing-section landing-how ar-how" aria-labelledby={sectionId}>
            <div className="ar-container">
              <h2 id={sectionId} className="landing-section-title">
                {sec.title || ''}
              </h2>
              {sec.description && <p className="landing-section-subtitle">{sec.description}</p>}
              <div className="ar-step-track" role="list">
                {items.map((item, idx) => (
                  <div key={item.id ?? idx} className="ar-step-card" role="listitem">
                    {renderMediaIcon(item, idx)}
                    <h3 className="ar-step-card-title">{item.title || ''}</h3>
                    <p className="ar-step-card-desc">{item.description || ''}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {sections.length === 0 && (
        <section className="landing-section landing-how ar-how" aria-labelledby="landing-how-heading">
          <div className="ar-container">
            <h2 id="landing-how-heading" className="landing-section-title">
              {howSection?.title?.trim?.() || t('landing.howTitle')}
            </h2>
            {howSection?.description?.trim?.() && (
              <p className="landing-section-subtitle">{howSection.description.trim()}</p>
            )}
            <div className="ar-step-track" role="list">
              <div className="ar-step-card" role="listitem">
                <span className="ar-step-badge landing-step-num" aria-hidden="true">1</span>
                <h3 className="ar-step-card-title">{t('landing.howStep1')}</h3>
                <p className="ar-step-card-desc">{t('landing.howStep1Desc')}</p>
              </div>
              <div className="ar-step-card" role="listitem">
                <span className="ar-step-badge landing-step-num" aria-hidden="true">2</span>
                <h3 className="ar-step-card-title">{t('landing.howStep2')}</h3>
                <p className="ar-step-card-desc">{t('landing.howStep2Desc')}</p>
              </div>
              <div className="ar-step-card" role="listitem">
                <span className="ar-step-badge landing-step-num" aria-hidden="true">3</span>
                <h3 className="ar-step-card-title">{t('landing.howStep3')}</h3>
                <p className="ar-step-card-desc">{t('landing.howStep3Desc')}</p>
              </div>
              <div className="ar-step-card" role="listitem">
                <span className="ar-step-badge landing-step-num" aria-hidden="true">4</span>
                <h3 className="ar-step-card-title">{t('landing.howStep4')}</h3>
                <p className="ar-step-card-desc">{t('landing.howStep4Desc')}</p>
              </div>
            </div>
          </div>
        </section>
      )}

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
