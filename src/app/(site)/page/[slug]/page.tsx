import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/cms/server'
import { absolutizeCmsHtmlServer, siteOriginFromEnv } from '@/lib/cms/html'
import { JsonLdScript } from '@/components/cms/JsonLdScript'
import PageHeroBar from '@/components/site/PageHeroBar'
import { tintForSlug } from '@/lib/pageHeaderTint'
import { langPrefix } from '@/i18n/translations'
import '@/styles/cms-page.css'

export const revalidate = 60

function plainText(html: string) {
  if (!html || typeof html !== 'string') return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = (await getPageBySlug(slug, 'en')) as Record<string, string | undefined>
    if (data?._seo_redirect) return { title: 'Page' }
    const title = String(data?.title || slug)
    return { title, description: plainText(String(data?.content || '')).slice(0, 160) }
  } catch {
    return { title: 'Page' }
  }
}

export default async function CmsDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let data: Record<string, unknown>
  try {
    data = (await getPageBySlug(slug, 'en')) as Record<string, unknown>
  } catch {
    notFound()
  }

  const redir = data?._seo_redirect as { locale?: string; slug?: string } | undefined
  if (redir?.locale && redir?.slug) {
    const lp = langPrefix(redir.locale as 'id' | 'en')
    redirect(`${lp}/page/${encodeURIComponent(String(redir.slug))}`)
  }

  const origin = siteOriginFromEnv()
  const html = absolutizeCmsHtmlServer(String(data?.content || ''), origin)
  const jsonLd = data?.json_ld

  const pageTint = tintForSlug(`page-${slug}`)

  return (
    <article className="cms-page wrap">
      <JsonLdScript data={jsonLd} />
      <PageHeroBar title={String(data?.title || slug)} tint={pageTint} />
      <div className="cms-page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <footer className="cms-page-footer">
        <Link href="/" className="cms-page-back">
          ← Back to home
        </Link>
      </footer>
    </article>
  )
}
