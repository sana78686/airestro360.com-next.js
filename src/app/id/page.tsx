import type { Metadata } from 'next'
import RestroHomeClient from '@/components/marketing/RestroHomeClient'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const h = translations.id

export const metadata: Metadata = {
  title: h.seoHeroH1,
  description: h.subtitle,
  alternates: { canonical: '/id' },
  ...socialMetadata({
    title: h.seoHeroH1,
    description: h.subtitle,
    path: '/id',
    ogLocale: 'id_ID',
  }),
}

export default function IdHomePage() {
  return <RestroHomeClient />
}
