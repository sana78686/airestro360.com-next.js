import { headers } from 'next/headers'
import { CMS_API_BASE, normalizeSiteDomain, CMS_SITE_DOMAIN } from '@/config/cms'

const useDomainInApiPath = process.env.NEXT_PUBLIC_CMS_API_DOMAIN_PATH !== 'false'

function withLocaleQuery(path: string, locale?: string, publicPath?: string) {
  const parts: string[] = []
  if (locale) parts.push(`locale=${encodeURIComponent(locale)}`)
  if (publicPath) parts.push(`public_path=${encodeURIComponent(publicPath)}`)
  if (parts.length === 0) return path
  const joiner = path.includes('?') ? '&' : '?'
  return `${path}${joiner}${parts.join('&')}`
}

/** Site domain for API (server: env or request Host). Next.js 15: headers() is async. */
export async function getSiteDomainForRequest(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_DOMAIN
  if (fromEnv) return normalizeSiteDomain(fromEnv)
  try {
    const hList = await headers()
    const h = hList.get('x-forwarded-host') || hList.get('host') || ''
    const host = h.split(':')[0]
    const n = normalizeSiteDomain(host)
    if (n && n !== 'localhost' && n !== '127.0.0.1') return n
  } catch {
    /* headers() outside request */
  }
  return CMS_SITE_DOMAIN
}

async function fetchPublicJsonUncached(
  path: string,
  locale: string | undefined,
  host: string,
  publicPath?: string,
): Promise<unknown> {
  const rel = withLocaleQuery(path, locale, publicPath)
  const attempts: { root: string; headers: Record<string, string> }[] = []
  if (useDomainInApiPath) {
    attempts.push({
      root: `/${host}/api/public`,
      headers: { Accept: 'application/json' },
    })
    attempts.push({
      root: '/api/public',
      headers: { Accept: 'application/json', 'X-Domain': host },
    })
  } else {
    attempts.push({
      root: '/api/public',
      headers: { Accept: 'application/json', 'X-Domain': host },
    })
  }

  for (let i = 0; i < attempts.length; i += 1) {
    const { root, headers: h } = attempts[i]
    const url = `${CMS_API_BASE}${root}${rel}`
    let res: Response
    try {
      res = await fetch(url, { headers: h, next: { revalidate: 60 } })
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[cms] fetch failed (network):', url, err)
      }
      continue
    }
    if (res.ok) {
      try {
        return await res.json()
      } catch {
        continue
      }
    }
    const retry =
      useDomainInApiPath &&
      i === 0 &&
      attempts.length > 1 &&
      (res.status === 404 || res.status === 403)
    if (retry) continue
    const data = await res.json().catch(() => ({}))
    throw new Error((data as { message?: string }).message || `HTTP ${res.status}`)
  }
  if (process.env.NODE_ENV === 'development') {
    console.warn('[cms] all fetch attempts failed (network) for', path, '→ empty payload')
  }
  return null
}

export async function getHomePageContent(locale: string, publicPath: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/home-content', locale, host, publicPath)
  return (data ?? {}) as {
    content?: string
    json_ld?: { '@graph'?: unknown[] }
  }
}

export async function getBlogBySlug(slug: string, locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached(
    `/blogs/${encodeURIComponent(slug)}`,
    locale,
    host,
  )
  return (data ?? {}) as Record<string, unknown>
}

export async function getBlogs(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/blogs', locale, host)
  return (data ?? { blogs: [] }) as {
    blogs?: unknown[]
    json_ld?: unknown
    data?: unknown[]
  }
}

export async function getPageBySlug(slug: string, locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached(`/pages/${encodeURIComponent(slug)}`, locale, host)
  return (data ?? {}) as Record<string, unknown>
}

export async function getLegalPage(slug: string, locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached(`/legal/${encodeURIComponent(slug)}`, locale, host)
  return (data ?? {}) as Record<string, unknown>
}

export async function getContactSettings(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/contact', locale, host)
  return (data ?? {}) as Record<string, unknown>
}

export async function getPages(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/pages', locale, host)
  return (data ?? { pages: [] }) as {
    pages?: { id: number; title: string; slug: string; placement?: string }[]
  }
}

export async function getLegalNav(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/legal-nav', locale, host)
  return (data ?? { legal: {} }) as { legal?: Record<string, boolean> }
}

export async function getFaq(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/faq', locale, host)
  return (data ?? { faq: [] }) as { faq?: { question?: string; answer?: string }[] }
}

export async function getHomeCards(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/home-cards', locale, host)
  return (data ?? { cards: [], section: null }) as {
    cards?: unknown[]
    section?: { title?: string; description?: string } | null
  }
}

export async function getSections(locale: string) {
  const host = await getSiteDomainForRequest()
  const data = await fetchPublicJsonUncached('/sections', locale, host)
  return (data ?? { sections: [] }) as {
    sections?: Array<{
      id?: number | string
      title?: string
      description?: string
      items?: unknown[]
    }>
  }
}
