import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isMarketingSlug } from '@/lib/marketing/registry'
import { getMarketingPage } from '@/lib/marketing/getPage'
import MarketingPageShell from '@/components/marketing/MarketingPageShell'

const RESERVED = new Set([
  'blog',
  'contact',
  'tools',
  'legal',
  'compress',
  'api',
  'page',
  'id',
  'pricing',
  'about',
])

export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>
}): Promise<Metadata> {
  const { tool } = await params
  if (!tool || RESERVED.has(tool.toLowerCase()) || !isMarketingSlug(tool)) {
    return { title: 'AI Restro 360' }
  }
  const page = getMarketingPage(tool, 'en')
  if (!page) return { title: 'AI Restro 360' }
  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
  }
}

export default async function MarketingToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params
  const key = tool?.toLowerCase() || ''
  if (!key || RESERVED.has(key) || !isMarketingSlug(key)) notFound()
  const page = getMarketingPage(key, 'en')
  if (!page) notFound()
  return <MarketingPageShell page={page} slug={key} />
}
