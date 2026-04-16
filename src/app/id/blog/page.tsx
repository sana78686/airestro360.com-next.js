import type { Metadata } from 'next'
import { BlogListView } from '@/components/blog/BlogListView'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'

export const revalidate = 60

const b = translations.id.blog

export const metadata: Metadata = {
  title: b.listTitle,
  description: b.listIntro,
  alternates: { canonical: '/id/blog' },
  ...socialMetadata({
    title: b.listTitle,
    description: b.listIntro,
    path: '/id/blog',
    ogLocale: 'id_ID',
  }),
}

export default function IdBlogListPage() {
  return <BlogListView locale="id" />
}
