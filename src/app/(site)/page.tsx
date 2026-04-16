import type { Metadata } from 'next'
import RestroHomeClient from '@/components/marketing/RestroHomeClient'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

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

export default function HomePage() {
  return <RestroHomeClient />
}
