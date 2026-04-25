import type { Metadata } from 'next'
import PricingView from '@/components/marketing/PricingView'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const p = translations.en.pricing

export const metadata: Metadata = {
  title: p.title,
  description: p.intro,
  alternates: { canonical: '/pricing' },
  ...socialMetadata({
    title: p.title,
    description: p.intro,
    path: '/pricing',
    ogLocale: 'en_US',
  }),
}

export default function PricingPage() {
  return <PricingView locale="en" />
}
