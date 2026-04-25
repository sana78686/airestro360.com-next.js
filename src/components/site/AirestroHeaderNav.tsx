'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { getMegaMenuIcon } from '@/components/site/MegaMenuIcons'
import {
  AIRESTRO_SOLUTIONS,
  AIRESTRO_INTEGRATIONS_OUR,
  AIRESTRO_INTEGRATIONS_PARTNERS,
  AIRESTRO_RESOURCES,
} from '@/config/airestroHeaderNavData'
import { RESTRO_LOGIN_URL, RESTRO_REGISTER_URL } from '@/config/portal'
import { SITE_NAME } from '@/constants/brand'
import BrandLogo from '@/components/site/BrandLogo'
import LangFlag from '@/components/site/LangFlag'
import { supportedLangs, langOptions, defaultLang, writeUserLocalePreference } from '@/i18n/translations'
import { langShortLabel } from '@/i18n/langMeta'

function buildLangSwitchHref(pathname: string, currentLang: string, targetLang: string) {
  let suffix = pathname
  if (currentLang !== defaultLang) {
    suffix = pathname.replace(new RegExp(`^/${currentLang}(/|$)`), '$1') || '/'
  }
  if (!suffix.startsWith('/')) suffix = '/' + suffix
  if (targetLang === defaultLang) return suffix
  return `/${targetLang}${suffix === '/' ? '' : suffix}`
}

function GlobeIcon() {
  return (
    <svg className="ar-locale-globe" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconHamburger() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

function AirestroIntIcon({ name }: { name?: string }) {
  const s = String(name || 'default')
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75 }
  switch (s) {
    case 'pos':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8M8 12h5M8 16h3" />
        </svg>
      )
    case 'delivery':
      return (
        <svg {...common}>
          <path d="M3 17h13l3-6V7H6a2 2 0 0 0-2 2v8z" />
          <circle cx="6.5" cy="18.5" r="1.5" />
          <circle cx="16.5" cy="18.5" r="1.5" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" />
        </svg>
      )
    case 'kiosk':
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 21h6" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      )
    case 'heart':
      return (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    case 'partner':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="4" />
          <path d="M8 21v-3a4 4 0 0 1 8 0v3" />
        </svg>
      )
    case 'wrench':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}

type MegaItem = { hash?: string; path?: string; slug?: string }

function resolveHref(lp: string, item: MegaItem) {
  if (item.hash) return `${lp}/#${item.hash}`
  if (item.path) {
    const p = item.path.replace(/^\//, '')
    return `${lp}/${p}`
  }
  if (item.slug) return `${lp}/${item.slug}`
  return lp || '/'
}

type TFn = (key: string) => string

export default function AirestroHeaderNav({
  t,
  lang,
  lp,
  pathname,
  showAnnouncement = false,
  legalVisibility = {},
}: {
  t: TFn
  lang: string
  lp: string
  pathname: string
  showAnnouncement?: boolean
  legalVisibility?: Record<string, boolean>
}) {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const zoneRef = useRef<HTMLDivElement | null>(null)
  const langRef = useRef<HTMLDivElement | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState<string | null>(null)

  const clearOpenTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = useCallback(() => {
    clearOpenTimer()
    closeTimer.current = setTimeout(() => setOpenKey(null), 160)
  }, [])

  const openMenu = (key: string) => {
    clearOpenTimer()
    setOpenKey(key)
  }

  useEffect(() => () => clearOpenTimer(), [])

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    if (langOpen) document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [langOpen])

  useEffect(() => {
    setOpenKey(null)
    setMobileMenuOpen(false)
    setMobileSub(null)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)')
    const onMq = () => {
      if (mq.matches) {
        setMobileMenuOpen(false)
        setMobileSub(null)
      }
    }
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenKey(null)
        setLangOpen(false)
        setMobileMenuOpen(false)
        setMobileSub(null)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const ArNavTrigger = ({
    k,
    labelKey,
    hasMega,
  }: {
    k: string
    labelKey: string
    hasMega?: boolean
  }) => {
    const active = openKey === k
    return (
      <button
        type="button"
        className={`ar-nav-pill-link ${active ? 'ar-nav-pill-link--active' : ''}`}
        aria-expanded={active}
        aria-haspopup={hasMega ? 'true' : undefined}
        onMouseEnter={() => hasMega && openMenu(k)}
        onFocus={() => hasMega && openMenu(k)}
        onClick={() => {
          if (hasMega) setOpenKey((cur) => (cur === k ? null : k))
        }}
      >
        <span>{t(labelKey)}</span>
        {hasMega && (
          <span className="ar-nav-chevron" aria-hidden>
            ▾
          </span>
        )}
      </button>
    )
  }

  const MegaSolutions = () => (
    <div className="ar-mega ar-mega--solutions" role="region" aria-label={t('airestroHeader.megaSolutions')}>
      <div className="ar-mega-panel-inner ar-mega-solutions-grid">
        {AIRESTRO_SOLUTIONS.map((col) => (
          <div key={col.columnKey} className="ar-mega-col">
            <h3 className="ar-mega-col-title">{t(col.columnKey)}</h3>
            <ul className="ar-mega-list">
              {col.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={resolveHref(lp, item)}
                    className="ar-mega-item"
                    onClick={() => setOpenKey(null)}
                  >
                    <span className="ar-mega-item-icon" aria-hidden>
                      {getMegaMenuIcon(item.slug)}
                    </span>
                    <span className="ar-mega-item-text">
                      <span className="ar-mega-item-title">{t(item.titleKey)}</span>
                      <span className="ar-mega-item-sub">{t(item.subKey)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )

  const MegaIntegrations = () => (
    <div className="ar-mega ar-mega--integrations" role="region" aria-label={t('airestroHeader.megaIntegrations')}>
      <div className="ar-mega-panel-inner ar-mega-integrations-grid">
        <div className="ar-mega-int-card">
          <p className="ar-mega-int-kicker">{t('airestroHeader.intCardKicker')}</p>
          <p className="ar-mega-int-headline">{t('airestroHeader.intCardTitle')}</p>
          <p className="ar-mega-int-desc">{t('airestroHeader.intCardDesc')}</p>
          <Link href={`${lp}/tools`} className="ar-mega-int-cta" onClick={() => setOpenKey(null)}>
            {t('airestroHeader.intCardCta')}
          </Link>
        </div>
        <div>
          <h3 className="ar-mega-col-title ar-mega-col-title--muted">{t('airestroHeader.intOurTitle')}</h3>
          <ul className="ar-mega-int-list">
            {AIRESTRO_INTEGRATIONS_OUR.map((row) => (
              <li key={row.titleKey}>
                <Link
                  href={resolveHref(lp, row)}
                  className="ar-mega-int-row"
                  onClick={() => setOpenKey(null)}
                >
                  <span className="ar-mega-int-row-icon" aria-hidden>
                    <AirestroIntIcon name={row.icon} />
                  </span>
                  <span>{t(row.titleKey)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="ar-mega-col-title ar-mega-col-title--muted">{t('airestroHeader.intPartnersTitle')}</h3>
          <ul className="ar-mega-int-list">
            {AIRESTRO_INTEGRATIONS_PARTNERS.map((row) => (
              <li key={row.titleKey}>
                <Link
                  href={resolveHref(lp, row)}
                  className="ar-mega-int-row"
                  onClick={() => setOpenKey(null)}
                >
                  <span className="ar-mega-int-row-icon ar-mega-int-row-icon--partner" aria-hidden>
                    {row.icon ? <AirestroIntIcon name={row.icon} /> : <span className="ar-mega-dot" />}
                  </span>
                  <span>{t(row.titleKey)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const showLegalInResources =
    !!(legalVisibility.terms || legalVisibility['privacy-policy'] || legalVisibility['cookie-policy'])

  const MegaResources = () => (
    <div className="ar-mega ar-mega--resources" role="region" aria-label={t('airestroHeader.megaResources')}>
      <div className="ar-mega-panel-inner ar-mega-resources-grid">
        {AIRESTRO_RESOURCES.map((col) => (
          <div key={col.columnKey} className="ar-mega-col">
            <h3 className="ar-mega-col-title">{t(col.columnKey)}</h3>
            <ul className="ar-mega-list ar-mega-list--compact">
              {col.items.map((item) => (
                <li key={item.titleKey}>
                  <Link
                    href={resolveHref(lp, item)}
                    className="ar-mega-item ar-mega-item--compact"
                    onClick={() => setOpenKey(null)}
                  >
                    <span className="ar-mega-item-icon ar-mega-item-icon--line" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path d="M6 4h12v16H6z" />
                        <path d="M9 8h6M9 12h4" />
                      </svg>
                    </span>
                    <span className="ar-mega-item-title">{t(item.titleKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {showLegalInResources ? (
        <div className="ar-mega-legal" role="group" aria-label={t('airestroHeader.legalInResources')}>
          <h3 className="ar-mega-legal-title">{t('airestroHeader.legalInResources')}</h3>
          <ul className="ar-mega-legal-list">
            {legalVisibility.terms ? (
              <li>
                <Link href={`${lp}/legal/terms`} className="ar-mega-legal-link" onClick={() => setOpenKey(null)}>
                  {t('footerTermsOfService')}
                </Link>
              </li>
            ) : null}
            {legalVisibility['privacy-policy'] ? (
              <li>
                <Link href={`${lp}/legal/privacy-policy`} className="ar-mega-legal-link" onClick={() => setOpenKey(null)}>
                  {t('footerPrivacy')}
                </Link>
              </li>
            ) : null}
            {legalVisibility['cookie-policy'] ? (
              <li>
                <Link href={`${lp}/legal/cookie-policy`} className="ar-mega-legal-link" onClick={() => setOpenKey(null)}>
                  {t('footerCookies')}
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </div>
  )

  const megaContent =
    openKey === 'solutions' ? (
      <MegaSolutions />
    ) : openKey === 'integrations' ? (
      <MegaIntegrations />
    ) : openKey === 'resources' ? (
      <MegaResources />
    ) : null

  const marqueeItems = [t('airestroHeader.announce1'), t('airestroHeader.announce2'), t('airestroHeader.announce3')].filter(Boolean)
  const marqueeText = marqueeItems.join('   ·   ')

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSub(null)
  }

  const toggleMobileSub = (key: string) => {
    setMobileSub((cur) => (cur === key ? null : key))
  }

  return (
    <div
      className="ar-header-zone"
      ref={zoneRef}
      onMouseLeave={scheduleClose}
    >
      <div className="ar-header-desktop">
      <div className="ar-header-pill">
        <BrandLogo href={`${lp}/`} ariaLabel={t('nav.home')} text={SITE_NAME} />
        <nav className="ar-header-pill-nav" aria-label="Primary">
          <ArNavTrigger k="solutions" labelKey="airestroHeader.solutions" hasMega />
          <ArNavTrigger k="integrations" labelKey="airestroHeader.integrations" hasMega />
          <Link
            href={`${lp}/pricing`}
            className="ar-nav-pill-link ar-nav-pill-link--link ar-nav-pill-link--plain"
            onMouseEnter={() => setOpenKey(null)}
          >
            {t('airestroHeader.pricing')}
          </Link>
          <ArNavTrigger k="resources" labelKey="airestroHeader.resources" hasMega />
        </nav>

        <div className="ar-header-pill-actions">
          <div className="ar-locale-wrap" ref={langRef}>
            <button
              type="button"
              className={`ar-locale-pill ${langOpen ? 'ar-locale-pill--open' : ''}`}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label={t('airestroHeader.localeLabel')}
              onClick={() => setLangOpen((o) => !o)}
            >
              <GlobeIcon />
              <span className="ar-locale-code">{langShortLabel[lang as keyof typeof langShortLabel] ?? lang?.toUpperCase() ?? 'EN'}</span>
            </button>
            {langOpen && (
              <ul className="ar-locale-menu" role="listbox">
                {supportedLangs.map((l) => (
                  <li key={l} role="option" aria-selected={lang === l}>
                    <a
                      href={buildLangSwitchHref(pathname, lang, l)}
                      className={`ar-locale-item ${lang === l ? 'ar-locale-item--active' : ''}`}
                      onClick={() => {
                        writeUserLocalePreference(l)
                        setLangOpen(false)
                      }}
                    >
                      <span className="ar-locale-item-flag" aria-hidden>
                        <LangFlag lang={l} width={20} />
                      </span>
                      <span>{langOptions[l as keyof typeof langOptions]?.label ?? l.toUpperCase()}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <span className="ar-header-actions-divider" aria-hidden />

          <a className="ar-header-log-in" href={RESTRO_LOGIN_URL} target="_blank" rel="noopener noreferrer">
            {t('nav.logIn')}
          </a>
          <a className="ar-header-cta" href={RESTRO_REGISTER_URL} target="_blank" rel="noopener noreferrer">
            {t('landing.arGetStarted')}
          </a>
        </div>
      </div>

      {megaContent && (
        <div
          className="ar-mega-host"
          onMouseEnter={clearOpenTimer}
        >
          {megaContent}
        </div>
      )}
      </div>

      <div className="ar-header-mobile">
        {!mobileMenuOpen && (
          <>
            <div className="ar-mobile-unified-topbar">
              {showAnnouncement && marqueeText ? (
                <div className="ar-mobile-marquee">
                  <p className="sr-only">{marqueeText}</p>
                  <div className="ar-marquee-viewport">
                    <div className="ar-marquee-track">
                      <span className="ar-marquee-chunk">{marqueeText}</span>
                      <span className="ar-marquee-chunk" aria-hidden>
                        {marqueeText}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="ar-mobile-unified-end">
                <div className="ar-locale-wrap" ref={langRef}>
                  <button
                    type="button"
                    className={`ar-locale-pill ar-locale-pill--topbar ${langOpen ? 'ar-locale-pill--open' : ''}`}
                    aria-expanded={langOpen}
                    aria-haspopup="listbox"
                    aria-label={t('airestroHeader.localeLabel')}
                    onClick={() => setLangOpen((o) => !o)}
                  >
                    <GlobeIcon />
                    <span className="ar-locale-code">{langShortLabel[lang as keyof typeof langShortLabel] ?? lang?.toUpperCase() ?? 'EN'}</span>
                  </button>
                  {langOpen && (
                    <ul className="ar-locale-menu" role="listbox">
                      {supportedLangs.map((l) => (
                        <li key={l} role="option" aria-selected={lang === l}>
                          <a
                            href={buildLangSwitchHref(pathname, lang, l)}
                            className={`ar-locale-item ${lang === l ? 'ar-locale-item--active' : ''}`}
                            onClick={() => {
                              writeUserLocalePreference(l)
                              setLangOpen(false)
                            }}
                          >
                            <span className="ar-locale-item-flag" aria-hidden>
                              <LangFlag lang={l} width={20} />
                            </span>
                            <span>{langOptions[l as keyof typeof langOptions]?.label ?? l.toUpperCase()}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="ar-mobile-mainbar">
              <BrandLogo href={`${lp}/`} ariaLabel={t('nav.home')} text={SITE_NAME} />
              <button
                type="button"
                className="ar-mobile-menu-btn"
                aria-expanded={false}
                aria-label={t('airestroHeader.mobileMenuOpen')}
                onClick={() => setMobileMenuOpen(true)}
              >
                <IconHamburger />
              </button>
            </div>
          </>
        )}

        {mobileMenuOpen && (
          <div className="ar-mobile-overlay" role="dialog" aria-modal="true" aria-label={t('nav.home')}>
            <div
              className="ar-mobile-overlay-backdrop"
              role="presentation"
              onClick={closeMobileMenu}
            />
            <div className="ar-mobile-overlay-panel">
              <div className="ar-mobile-overlay-head">
                <BrandLogo href={`${lp}/`} ariaLabel={t('nav.home')} text={SITE_NAME} />
                <button
                  type="button"
                  className="ar-mobile-overlay-close"
                  aria-label={t('airestroHeader.mobileMenuClose')}
                  onClick={closeMobileMenu}
                >
                  <IconClose />
                </button>
              </div>

              <div className="ar-mobile-overlay-actions ar-mobile-overlay-actions--top">
                <a
                  className="ar-header-log-in"
                  href={RESTRO_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.logIn')}
                </a>
                <a
                  className="ar-header-cta"
                  href={RESTRO_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('landing.arGetStarted')}
                </a>
              </div>

              <nav className="ar-mobile-nav" aria-label="Primary">
                <div className="ar-mobile-nav-block">
                  <button
                    type="button"
                    className={`ar-mobile-nav-trigger ${mobileSub === 'solutions' ? 'ar-mobile-nav-trigger--open' : ''}`}
                    onClick={() => toggleMobileSub('solutions')}
                  >
                    <span>{t('airestroHeader.solutions')}</span>
                    <span className="ar-mobile-nav-chevron" aria-hidden>▾</span>
                  </button>
                  {mobileSub === 'solutions' && (
                    <div className="ar-mobile-nav-groups">
                      {AIRESTRO_SOLUTIONS.map((col) => (
                        <div key={col.columnKey} className="ar-mobile-nav-group">
                          <p className="ar-mobile-nav-group-label">{t(col.columnKey)}</p>
                          <ul className="ar-mobile-nav-sub-list">
                            {col.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={resolveHref(lp, item)}
                                  className="ar-mobile-nav-tile"
                                  onClick={closeMobileMenu}
                                >
                                  <span className="ar-mobile-nav-tile-icon" aria-hidden>
                                    {getMegaMenuIcon(item.slug)}
                                  </span>
                                  <span className="ar-mobile-nav-tile-body">
                                    <span className="ar-mobile-nav-tile-title">{t(item.titleKey)}</span>
                                    <span className="ar-mobile-nav-tile-desc">{t(item.subKey)}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="ar-mobile-nav-block">
                  <button
                    type="button"
                    className={`ar-mobile-nav-trigger ${mobileSub === 'integrations' ? 'ar-mobile-nav-trigger--open' : ''}`}
                    onClick={() => toggleMobileSub('integrations')}
                  >
                    <span>{t('airestroHeader.integrations')}</span>
                    <span className="ar-mobile-nav-chevron" aria-hidden>▾</span>
                  </button>
                  {mobileSub === 'integrations' && (
                    <div className="ar-mobile-nav-groups">
                      <div className="ar-mobile-nav-group">
                        <Link
                          href={`${lp}/tools`}
                          className="ar-mobile-nav-card-cta"
                          onClick={closeMobileMenu}
                        >
                          {t('airestroHeader.intCardCta')}
                        </Link>
                      </div>
                      <div className="ar-mobile-nav-group">
                        <p className="ar-mobile-nav-group-label">{t('airestroHeader.intOurTitle')}</p>
                        <ul className="ar-mobile-nav-sub-list">
                          {AIRESTRO_INTEGRATIONS_OUR.map((row) => (
                            <li key={row.titleKey}>
                              <Link
                                href={resolveHref(lp, row)}
                                className="ar-mobile-nav-row-link ar-mobile-nav-row-link--stack"
                                onClick={closeMobileMenu}
                              >
                                <span className="ar-mobile-nav-row-icon" aria-hidden>
                                  <AirestroIntIcon name={row.icon} />
                                </span>
                                <span className="ar-mobile-nav-row-body">
                                  <span className="ar-mobile-nav-row-title">{t(row.titleKey)}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ar-mobile-nav-group">
                        <p className="ar-mobile-nav-group-label">{t('airestroHeader.intPartnersTitle')}</p>
                        <ul className="ar-mobile-nav-sub-list">
                          {AIRESTRO_INTEGRATIONS_PARTNERS.map((row) => (
                            <li key={row.titleKey}>
                              <Link
                                href={resolveHref(lp, row)}
                                className="ar-mobile-nav-row-link ar-mobile-nav-row-link--stack"
                                onClick={closeMobileMenu}
                              >
                                <span className="ar-mobile-nav-row-icon" aria-hidden>
                                  {row.icon ? <AirestroIntIcon name={row.icon} /> : <span className="ar-mobile-nav-dot" />}
                                </span>
                                <span className="ar-mobile-nav-row-body">
                                  <span className="ar-mobile-nav-row-title">{t(row.titleKey)}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ar-mobile-nav-block">
                  <Link
                    href={`${lp}/pricing`}
                    className="ar-mobile-nav-link-plain"
                    onClick={closeMobileMenu}
                  >
                    {t('airestroHeader.pricing')}
                  </Link>
                </div>

                <div className="ar-mobile-nav-block">
                  <button
                    type="button"
                    className={`ar-mobile-nav-trigger ${mobileSub === 'resources' ? 'ar-mobile-nav-trigger--open' : ''}`}
                    onClick={() => toggleMobileSub('resources')}
                  >
                    <span>{t('airestroHeader.resources')}</span>
                    <span className="ar-mobile-nav-chevron" aria-hidden>▾</span>
                  </button>
                  {mobileSub === 'resources' && (
                    <div className="ar-mobile-nav-groups">
                      {AIRESTRO_RESOURCES.map((col) => (
                        <div key={col.columnKey} className="ar-mobile-nav-group">
                          <p className="ar-mobile-nav-group-label">{t(col.columnKey)}</p>
                          <ul className="ar-mobile-nav-sub-list">
                            {col.items.map((item) => (
                              <li key={item.titleKey}>
                                <Link
                                  className="ar-mobile-nav-text-link"
                                  href={resolveHref(lp, item)}
                                  onClick={closeMobileMenu}
                                >
                                  {t(item.titleKey)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
