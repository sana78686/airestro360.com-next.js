'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/useTranslation'
import { langPrefix } from '@/i18n/translations'
import { usePathLang } from '@/hooks/usePathLang'
import { getPages, getLegalNav, getFaq } from '@/lib/cms-client'
import Breadcrumbs from './Breadcrumbs'
import AirestroAnnouncementBar from './AirestroAnnouncementBar'
import AirestroHeaderNav from './AirestroHeaderNav'
import Footer from './Footer'
import '@/styles/airestro-landing.css'

function faqListHasContent(res: { faq?: { question?: string; answer?: string }[] }) {
  const list = res?.faq
  if (!Array.isArray(list) || list.length === 0) return false
  return list.some((item) => {
    const strip = (s: string | undefined) =>
      String(s ?? '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    return strip(item.question).length > 0 || strip(item.answer).length > 0
  })
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const lang = usePathLang()
  const pathname = usePathname() || '/'
  const t = useTranslation(lang)
  const [footerPages, setFooterPages] = useState<
    { id: number; title: string; slug: string; placement?: string }[]
  >([])
  const [legalVisibility, setLegalVisibility] = useState<Record<string, boolean>>({})
  const [showFaqLink, setShowFaqLink] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const locale = lang

  useEffect(() => {
    let cancelled = false
    Promise.all([
      getPages(locale).catch(() => ({ pages: [] })),
      getLegalNav(locale).catch(() => ({ legal: {} })),
      getFaq(locale).catch(() => ({ faq: [] })),
    ]).then(([pagesRes, legalNavRes, faqRes]) => {
      if (cancelled) return
      setFooterPages(Array.isArray(pagesRes?.pages) ? pagesRes.pages : [])
      const legal = legalNavRes?.legal
      setLegalVisibility(
        legal && typeof legal === 'object' && !Array.isArray(legal)
          ? (legal as Record<string, boolean>)
          : {},
      )
      setShowFaqLink(faqListHasContent(faqRes))
    })
    return () => {
      cancelled = true
    }
  }, [locale])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      document.documentElement.dir = 'ltr'
    }
  }, [lang])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      setHeaderScrolled(y > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lp = langPrefix(lang)

  return (
    <div className="home-page">
      <header
        className={`header header--ar ar-header-shell${headerScrolled ? ' ar-header-shell--scrolled' : ''}`}
      >
        {scrollY < 1 ? (
          <AirestroAnnouncementBar t={t} lang={lang} className="ar-announcement-bar--desktop-only" />
        ) : null}
        <div className="ar-header-float-area">
          <AirestroHeaderNav
            t={t}
            lang={lang}
            lp={lp}
            pathname={pathname}
            showAnnouncement={scrollY < 1}
            legalVisibility={legalVisibility}
          />
        </div>
      </header>

      <main id="main-content" className="main cms-main" tabIndex={-1}>
        <Breadcrumbs />
        {children}
      </main>

      <Footer
        lang={lang}
        pathname={pathname}
        t={t}
        footerPages={footerPages}
        legalVisibility={legalVisibility}
        showFaqLink={showFaqLink}
      />
    </div>
  )
}
