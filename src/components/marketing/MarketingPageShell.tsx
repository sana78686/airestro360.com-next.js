import type { MarketingPagePayload } from '@/lib/marketing/types'
import PageHeroBar from '@/components/site/PageHeroBar'
import { tintForSlug } from '@/lib/pageHeaderTint'
import '@/styles/page-marketing.css'

export default function MarketingPageShell({ page, slug }: { page: MarketingPagePayload; slug: string }) {
  const tint = tintForSlug(slug)
  return (
    <article className="page-marketing wrap">
      <PageHeroBar title={page.title} subtitle={page.lead} tint={tint} />
      <div className="page-marketing-body">
        {page.sections.map((s, i) => (
          <section key={i} className="page-marketing-section">
            <h2 className="page-marketing-h2">{s.heading}</h2>
            <p className="page-marketing-p">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  )
}
