import type { MetadataRoute } from 'next'
import { siteOriginFromEnv } from '@/lib/cms/html'
import { getBlogs } from '@/lib/cms/server'
import { MARKETING_SLUGS } from '@/lib/marketing/registry'

export const revalidate = 3600

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  try {
    const [enRes, idRes] = await Promise.all([getBlogs('en'), getBlogs('id')])
    for (const b of normalizeBlogSlugs(enRes)) {
      entries.push({
        url: `${base}/blog/${encodeURIComponent(b.slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
    for (const b of normalizeBlogSlugs(idRes)) {
      entries.push({
        url: `${base}/id/blog/${encodeURIComponent(b.slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  } catch {
    /* CMS unavailable during build */
  }

  return entries
}
