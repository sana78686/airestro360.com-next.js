import Image from 'next/image'
import { LOGO_SRC, SITE_NAME } from '@/constants/brand'

type BrandLogoProps = {
  href: string
  ariaLabel: string
  text: string
}

const LOGO_W = 280
const LOGO_H = 72

/**
 * Site header logo — `public/logos/airestro360.png` (served as WebP/AVIF when possible).
 */
export default function BrandLogo({ href, ariaLabel, text }: BrandLogoProps) {
  const label = ariaLabel || text || SITE_NAME
  return (
    <a href={href} className="logo logo--brand logo--image" dir="ltr" aria-label={label}>
      <Image
        className="logo-site-img"
        src={LOGO_SRC}
        alt=""
        width={LOGO_W}
        height={LOGO_H}
        priority
        quality={90}
        sizes="(max-width: 600px) 200px, 280px"
      />
      <span className="sr-only">{text || SITE_NAME}</span>
    </a>
  )
}
