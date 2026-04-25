import SiteLayoutClient from '@/components/site/SiteLayoutClient'
import { getFaq, getLegalNav, getPages } from '@/lib/cms/server'

export const revalidate = 60

function faqListHasContent(faqRes: unknown): boolean {
  const list = (faqRes as { faq?: { question?: string; answer?: string }[] })?.faq
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

export default async function SiteRouteLayout({ children }: { children: React.ReactNode }) {
  let footerPages: { id: number; title: string; slug: string; placement?: string }[] = []
  let legalVisibility: Record<string, boolean> = {}
  let showFaqLink = false
  try {
    const [pagesRes, legalNavRes, faqRes] = await Promise.all([
      getPages('en'),
      getLegalNav('en'),
      getFaq('en'),
    ])
    footerPages = Array.isArray(pagesRes?.pages) ? pagesRes.pages : []
    const legal = legalNavRes?.legal
    legalVisibility =
      legal && typeof legal === 'object' && !Array.isArray(legal)
        ? (legal as Record<string, boolean>)
        : {}
    showFaqLink = faqListHasContent(faqRes)
  } catch {
    /* CMS down — shell still renders */
  }

  return (
    <SiteLayoutClient footerPages={footerPages} legalVisibility={legalVisibility} showFaqLink={showFaqLink}>
      {children}
    </SiteLayoutClient>
  )
}
