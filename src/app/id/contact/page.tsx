import type { Metadata } from 'next'
import ContactPageClient from '@/components/contact/ContactPageClient'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

const c = translations.id.contact

export const metadata: Metadata = {
  title: c.title,
  description: c.intro,
  alternates: { canonical: '/id/contact' },
  ...socialMetadata({
    title: c.title,
    description: c.intro,
    path: '/id/contact',
    ogLocale: 'id_ID',
  }),
}

export default function IdContactPage() {
  return <ContactPageClient />
}
