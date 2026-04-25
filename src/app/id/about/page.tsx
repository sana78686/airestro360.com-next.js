import type { Metadata } from 'next'
import MarketingSimplePage from '@/components/marketing/MarketingSimplePage'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const a = translations.id.about

export const metadata: Metadata = {
  title: a.title,
  description: a.intro,
  alternates: { canonical: '/id/about' },
  ...socialMetadata({
    title: a.title,
    description: a.intro,
    path: '/id/about',
    ogLocale: 'id_ID',
  }),
}

export default function IdAboutPage() {
  return <MarketingSimplePage page="about" locale="id" />
}
