import type { Metadata } from 'next'
import PricingView from '@/components/marketing/PricingView'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const p = translations.id.pricing

export const metadata: Metadata = {
  title: p.title,
  description: p.intro,
  alternates: { canonical: '/id/pricing' },
  ...socialMetadata({
    title: p.title,
    description: p.intro,
    path: '/id/pricing',
    ogLocale: 'id_ID',
  }),
}

export default function IdPricingPage() {
  return <PricingView locale="id" />
}
