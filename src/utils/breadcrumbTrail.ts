import { defaultLang, supportedLangs, langPrefix } from '../i18n/translations'
import { ucWords } from './ucWords'
import { isMarketingSlug, getMarketingCategory } from '@/lib/marketing/registry'
import slugTitles from '@/lib/marketing/slug-titles.json'

type Crumb = { label: string; to?: string }

function slugLabel(slug: string) {
  return slug ? ucWords(String(slug).replace(/-/g, ' ')) : ''
}

/** Strip `/id`-style prefix; default locale (English) has no prefix. */
export function stripLocalePrefix(pathname: string) {
  const p = pathname.replace(/\/+$/, '') || '/'
  for (const l of supportedLangs) {
    if (l === defaultLang) continue
    const prefix = `/${l}`
    if (p === prefix || p.startsWith(`${prefix}/`)) {
      const rest = p === prefix ? '/' : p.slice(prefix.length) || '/'
      return { lang: l, rest }
    }
  }
  return { lang: defaultLang, rest: p }
}

const TITLES = slugTitles as Record<string, string>

/**
 * Breadcrumbs for the marketing site. Returns null on home; Amazon-style: Home &gt; Category &gt; Page.
 */
export function buildCompressPdfBreadcrumbItems(
  pathname: string,
  t: (key: string) => string,
): Crumb[] | null {
  const { lang, rest } = stripLocalePrefix(pathname)
  const lp = langPrefix(lang)
  if (rest === '/') return null

  const home: Crumb = { label: t('nav.home'), to: `${lp}/` }
  const join = (path: string) => `${lp}${path === '/' ? '' : path}`

  if (rest === '/tools') {
    return [home, { label: t('nav.allTools') }]
  }
  if (rest === '/compress' || rest === '/compress/result') {
    return [home, { label: t('nav.allTools'), to: join('/tools') }]
  }
  if (rest === '/blog') {
    return [home, { label: t('blog.listTitle') }]
  }
  if (rest.startsWith('/blog/')) {
    const slug = rest.slice('/blog/'.length).split('/')[0]
    return [home, { label: t('blog.listTitle'), to: join('/blog') }, { label: slugLabel(slug) || t('blog.listTitle') }]
  }
  if (rest.startsWith('/page/')) {
    const slug = rest.slice('/page/'.length).split('/')[0]
    return [home, { label: slugLabel(slug) || t('breadcrumb.page') }]
  }
  if (rest === '/contact') {
    return [home, { label: t('contact.title') }]
  }
  if (rest === '/pricing') {
    return [home, { label: t('pricing.title') }]
  }
  if (rest === '/about') {
    return [home, { label: t('about.title') }]
  }
  if (rest.startsWith('/legal/')) {
    const slug = rest.slice('/legal/'.length).split('/')[0]
    return [home, { label: t('breadcrumb.legal') }, { label: slugLabel(slug) || t('breadcrumb.legal') }]
  }

  const single = /^\/([^/]+)$/.exec(rest)
  if (single) {
    const seg = single[1]
    const staticPaths = new Set(['tools', 'compress', 'blog', 'contact', 'pricing', 'about'])

    if (isMarketingSlug(seg)) {
      const cat = getMarketingCategory(seg)
      const hub =
        cat === 'resource' ? join('/help-center') : join('/tools')
      const catLabel =
        cat === 'solution'
          ? t('breadcrumb.solutions')
          : cat === 'integration'
            ? t('breadcrumb.integrations')
            : t('breadcrumb.resources')
      const title = TITLES[seg] || slugLabel(seg)
      return [home, { label: catLabel, to: hub }, { label: title }]
    }

    if (!staticPaths.has(seg)) {
      return [home, { label: slugLabel(seg) }]
    }
  }

  return null
}
