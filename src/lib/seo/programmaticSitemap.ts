import type { MetadataRoute } from 'next'
import { siteOriginFromEnv } from '@/lib/cms/html'
import { getBlogs, getPages } from '@/lib/cms/server'
import { MARKETING_SLUGS } from '@/lib/marketing/registry'

const LEGAL_SLUGS = ['terms', 'privacy-policy', 'disclaimer', 'about-us', 'cookie-policy']

function normalizeBlogSlugs(res: unknown): { slug: string }[] {
  if (Array.isArray(res)) {
    return (res as { slug?: string }[])
      .filter((b) => b && typeof b.slug === 'string')
      .map((b) => ({ slug: b.slug as string }))
  }
  if (res && typeof res === 'object') {
    const o = res as Record<string, unknown>
    const raw = Array.isArray(o.blogs) ? o.blogs : Array.isArray(o.data) ? o.data : []
    return (raw as { slug?: string }[])
      .filter((b) => b && typeof b.slug === 'string')
      .map((b) => ({ slug: b.slug as string }))
  }
  return []
}

function normalizePageSlugs(res: unknown): string[] {
  if (!res || typeof res !== 'object') return []
  const pages = (res as { pages?: { slug?: string }[] }).pages
  if (!Array.isArray(pages)) return []
  return pages
    .map((p) => (p && typeof p.slug === 'string' ? p.slug : ''))
    .filter(Boolean)
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function getProgrammaticSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const base = siteOriginFromEnv().replace(/\/+$/, '')
  const lastModified = new Date()

  const staticPaths = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/tools', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/id', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/id/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/id/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/id/tools', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/id/pricing', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/id/about', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const entries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: path === '' ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))

  for (const slug of Object.keys(MARKETING_SLUGS)) {
    const enc = encodeURIComponent(slug)
    entries.push({
      url: `${base}/${enc}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    })
    entries.push({
      url: `${base}/id/${enc}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    })
  }

  for (const slug of LEGAL_SLUGS) {
    const enc = encodeURIComponent(slug)
    entries.push({
      url: `${base}/legal/${enc}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
    entries.push({
      url: `${base}/id/legal/${enc}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  try {
    const [enBlogs, idBlogs, enPages, idPages] = await Promise.all([
      getBlogs('en'),
      getBlogs('id'),
      getPages('en'),
      getPages('id'),
    ])
    for (const b of normalizeBlogSlugs(enBlogs)) {
      entries.push({
        url: `${base}/blog/${encodeURIComponent(b.slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
    for (const b of normalizeBlogSlugs(idBlogs)) {
      entries.push({
        url: `${base}/id/blog/${encodeURIComponent(b.slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
    for (const slug of normalizePageSlugs(enPages)) {
      entries.push({
        url: `${base}/page/${encodeURIComponent(slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
    for (const slug of normalizePageSlugs(idPages)) {
      entries.push({
        url: `${base}/id/page/${encodeURIComponent(slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  } catch {
    /* CMS unavailable — static URLs still listed */
  }

  return entries
}

export function sitemapEntriesToXml(entries: MetadataRoute.Sitemap): string {
  const lines = entries.map((e) => {
    const loc = escapeXml(e.url)
    const lastmod =
      e.lastModified != null
        ? `<lastmod>${escapeXml(new Date(e.lastModified).toISOString())}</lastmod>`
        : ''
    const cf =
      e.changeFrequency != null
        ? `<changefreq>${escapeXml(String(e.changeFrequency))}</changefreq>`
        : ''
    const pr = e.priority != null ? `<priority>${escapeXml(String(e.priority))}</priority>` : ''
    return `  <url><loc>${loc}</loc>${lastmod}${cf}${pr}</url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join('\n')}\n</urlset>\n`
}
