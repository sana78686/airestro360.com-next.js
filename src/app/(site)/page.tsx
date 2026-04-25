import type { Metadata } from 'next'
import RestroHomeClient from '@/components/marketing/RestroHomeClient'
import AirestroHomeLandingServerBlocks from '@/components/marketing/AirestroHomeLandingServerBlocks'
import { JsonLdScript } from '@/components/cms/JsonLdScript'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'
import { getFaq, getHomeCards, getHomePageContent, getSections } from '@/lib/cms/server'
import { absolutizeCmsHtmlServer, siteOriginFromEnv } from '@/lib/cms/html'
import { cmsHtmlHasVisibleText } from '@/utils/cmsHtmlVisible'
import '@/styles/cms-page.css'

const h = translations.en

export const metadata: Metadata = {
  title: h.seoHeroH1,
  description: h.subtitle,
  alternates: { canonical: '/' },
  ...socialMetadata({
    title: h.seoHeroH1,
    description: h.subtitle,
    path: '/',
    ogLocale: 'en_US',
  }),
}

export default async function HomePage() {
  const locale = 'en'
  const publicPath = '/'

  let cmsHomeHtml = ''
  let homeJsonLd: Record<string, unknown> | null = null
  let landingFaq: { question?: string; answer?: string }[] = []
  let landingCards: unknown[] = []
  let howSection: { title?: string; description?: string } | null = null
  let cmsSections: unknown[] = []

  try {
    const homeRes = await getHomePageContent(locale, publicPath)
    cmsHomeHtml = typeof homeRes?.content === 'string' ? homeRes.content : ''
    const graph = homeRes?.json_ld?.['@graph']
    homeJsonLd =
      Array.isArray(graph) && graph.length > 0 && homeRes.json_ld
        ? (homeRes.json_ld as Record<string, unknown>)
        : null
  } catch {
    /* CMS optional */
  }

  try {
    const [faqRes, cardsRes, sectionsRes] = await Promise.all([
      getFaq(locale),
      getHomeCards(locale),
      getSections(locale),
    ])
    landingFaq = Array.isArray(faqRes.faq) ? faqRes.faq : []
    landingCards = Array.isArray(cardsRes.cards) ? cardsRes.cards : []
    howSection =
      cardsRes?.section && typeof cardsRes.section === 'object' ? cardsRes.section : null
    cmsSections = Array.isArray(sectionsRes.sections) ? sectionsRes.sections : []
  } catch {
    /* optional */
  }

  const origin = siteOriginFromEnv()
  const html = absolutizeCmsHtmlServer(cmsHomeHtml, origin)

  return (
    <>
      <h1 className="sr-only">{h.seoHeroH1}</h1>
      {homeJsonLd ? <JsonLdScript data={homeJsonLd} /> : null}
      <RestroHomeClient
        cmsHomeHtml={html}
        landingFaq={landingFaq}
        landingCards={landingCards}
        howSection={howSection}
        cmsSections={cmsSections}
        landingExtrasOnServer
      />
      {cmsHtmlHasVisibleText(html) ? (
        <section className="ar-cms landing-cms-body-section" aria-label={h.landing.cmsSectionAria}>
          <div className="ar-container">
            <div
              className="cms-home-cms-body cms-page-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      ) : null}
      <AirestroHomeLandingServerBlocks
        lang="en"
        cards={landingCards}
        sections={cmsSections}
        howSection={howSection}
      />
    </>
  )
}
