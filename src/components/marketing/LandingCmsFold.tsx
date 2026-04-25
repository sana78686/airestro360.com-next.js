import Link from 'next/link'

/** Icon key → emoji for CMS-driven cards (match CMS list). */
const CARD_ICON_EMOJI: Record<string, string> = {
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
    return (
      <span className="ar-step-badge landing-step-num" aria-hidden="true">
        {val || idx + 1}
      </span>
    )
  }
  if (type === 'fa-icon' && val) {
    return <i className={val} aria-hidden="true" />
  }
  if (type === 'icon' && val && CARD_ICON_EMOJI[val]) {
    return (
      <span className="landing-card-icon" aria-hidden="true">
        {CARD_ICON_EMOJI[val]}
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

function buildFourCards(cards: unknown[], t: (key: string) => string): CardLike[] {
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

export type LandingCmsFoldProps = {
  t: (key: string) => string
  cards?: unknown[]
  howSection?: { title?: string; description?: string } | null
  sections?: unknown[]
  lp?: string
}

/** CMS-driven part of the landing (WHAT/WHY/sections/how) — shared server + client. */
export default function LandingCmsFold({
  t,
  cards = [],
  howSection = null,
  sections = [],
  lp = '',
}: LandingCmsFoldProps) {
  const cardEmoji = (iconKey: string) => CARD_ICON_EMOJI[iconKey] ?? '✨'
  const whatFour = buildFourCards(cards, t)
  const whyFour = buildFourCards(cards, t)
  const sectionList = sections as SectionLike[]

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
                  {cardEmoji(String(card.icon ?? ''))}
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

      {sectionList.map((sec) => {
        const items = Array.isArray(sec.items) ? sec.items : []
        if (!items.length) return null
        const sectionId = `cms-section-${sec.id}`
        return (
          <section
            key={sec.id}
            className="landing-section landing-how ar-how"
            aria-labelledby={sectionId}
          >
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

      {sectionList.length === 0 && (
        <section
          className="landing-section landing-how ar-how"
          aria-labelledby="landing-how-heading"
        >
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
    </>
  )
}
