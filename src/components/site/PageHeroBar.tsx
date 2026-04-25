import type { PageHeaderTint } from '@/lib/pageHeaderTint'
import '@/styles/page-hero-bar.css'

type Props = {
  title: string
  subtitle?: string
  /** Optional: smaller eyebrow line above the title */
  kicker?: string
  tint: PageHeaderTint
  className?: string
}

export default function PageHeroBar({ title, subtitle, kicker, tint, className = '' }: Props) {
  return (
    <div className={`page-hero-bar page-hero-bar--${tint} ${className}`.trim()}>
      {kicker ? <p className="page-hero-bar-kicker">{kicker}</p> : null}
      <h1 className="page-hero-bar-title">{title}</h1>
      {subtitle ? <p className="page-hero-bar-sub">{subtitle}</p> : null}
    </div>
  )
}
