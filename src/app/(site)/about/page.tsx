import type { Metadata } from 'next'
import MarketingSimplePage from '@/components/marketing/MarketingSimplePage'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const a = translations.en.about

export const metadata: Metadata = {
  title: a.title,
  description: a.intro,
  alternates: { canonical: '/about' },
  ...socialMetadata({
    title: a.title,
    description: a.intro,
    path: '/about',
    ogLocale: 'en_US',
  }),
}

export default function AboutPage() {
  return <MarketingSimplePage page="about" locale="en" />
}
