'use client'

import type { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

/**
 * FAQ — two-column block (left: title + CTAs, right: dark accordion rows). CMS-driven questions/answers.
 * Questions/answers come from CMS via HomePage (`faqItems`).
 */
export default function LandingFaqSection({
  t,
  faqItems,
  faqOpenIndex,
  setFaqOpenIndex,
  lp = '',
}: {
  t: (key: string, params?: Record<string, string | number>) => string
  faqItems: { q: string; a: string }[]
  faqOpenIndex: number | null
  setFaqOpenIndex: Dispatch<SetStateAction<number | null>>
  lp?: string
}) {
  if (!faqItems.length) return null

  return (
    <section id="landing-faq" className="landing-section ar-faq" aria-labelledby="landing-faq-heading">
      <div className="ar-container">
        <div className="ar-faq-grid">
          <div className="ar-faq-left">
            <h2 id="landing-faq-heading" className="ar-faq-heading">
              {t('landing.faqTitle')}
            </h2>
            <p className="ar-faq-sub">{t('landing.arFaqSubtitle')}</p>
            <div className="ar-faq-actions">
              <Link href={`${lp}/contact`} className="ar-faq-btn ar-faq-btn--primary">
                {t('landing.arFaqCta')}
              </Link>
              <a href="#landing-faq-list" className="ar-faq-btn ar-faq-btn--ghost">
                {t('landing.arFaqViewAll')}
              </a>
            </div>
          </div>
          <div id="landing-faq-list" className="ar-faq-right">
            <div className="ar-faq-list" role="list">
              {faqItems.map((item, i) => {
                const open = faqOpenIndex === i
                const qText = (item.q || '').trim()
                const qLabel = qText || t('landing.faqButtonFallback', { n: i + 1 })
                return (
                  <div key={i} className="ar-faq-item" role="listitem">
                    <button
                      type="button"
                      className="ar-faq-q"
                      onClick={() => setFaqOpenIndex((prev) => (prev === i ? null : i))}
                      aria-expanded={open}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                      aria-label={qText ? undefined : qLabel}
                    >
                      <span className="ar-faq-q-text">{qLabel}</span>
                      <span className="ar-faq-icon" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      className="ar-faq-a"
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      hidden={!open}
                    >
                      <div
                        className="ar-faq-a-inner cms-page-content"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
