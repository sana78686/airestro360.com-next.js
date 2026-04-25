'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/useTranslation'
import { langPrefix } from '@/i18n/translations'
import { usePathLang } from '@/hooks/usePathLang'
import Breadcrumbs from './Breadcrumbs'
import AirestroAnnouncementBar from './AirestroAnnouncementBar'
import AirestroHeaderNav from './AirestroHeaderNav'
import Footer from './Footer'
import '@/styles/airestro-landing.css'

export type CmsNavPage = { id: number; title: string; slug: string; placement?: string }

type Props = {
  children: React.ReactNode
  /** From server layout; omit in not-found to use empty nav (no client CMS round-trip). */
  footerPages?: CmsNavPage[]
  legalVisibility?: Record<string, boolean>
  showFaqLink?: boolean
}

export default function SiteLayoutClient({
  children,
  footerPages = [],
  legalVisibility = {},
  showFaqLink = false,
}: Props) {
  const lang = usePathLang()
  const pathname = usePathname() || '/'
  const t = useTranslation(lang)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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
