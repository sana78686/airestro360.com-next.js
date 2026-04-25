import type { Metadata } from 'next'
import ContactPageClient from '@/components/contact/ContactPageClient'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'
import { getContactSettings } from '@/lib/cms/server'

const c = translations.en.contact

export const metadata: Metadata = {
  title: c.title,
  description: c.intro,
  alternates: { canonical: '/contact' },
  ...socialMetadata({
    title: c.title,
    description: c.intro,
    path: '/contact',
    ogLocale: 'en_US',
  }),
}

export default async function ContactPage() {
  let initialSettings: Record<string, unknown> | null = null
  try {
    initialSettings = (await getContactSettings('en')) as Record<string, unknown>
  } catch {
    /* client will refetch */
  }
  return <ContactPageClient initialSettings={initialSettings} />
}
