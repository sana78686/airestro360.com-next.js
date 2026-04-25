import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { CmsClientBootstrap } from '@/components/CmsClientBootstrap'
import { siteOriginFromEnv } from '@/lib/cms/html'

/** Geometric brand sans — high legibility, matches airestro360 marketing */
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  adjustFontFallback: true,
})

const siteUrl = siteOriginFromEnv()
let metadataBase: URL
try {
  metadataBase = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`)
} catch {
  metadataBase = new URL('http://localhost:3003/')
}

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'AI Restro 360', template: '%s | AI Restro 360' },
  description:
    'Restaurant management software: POS, kitchen, delivery, inventory, and analytics — one platform for your venues.',
  applicationName: 'AI Restro 360',
  // No `app/favicon.ico` — that file overrides these. Tab icon: `public/logos/airestro360-favicon.png`
  icons: {
    icon: [{ url: '/logos/airestro360-favicon.png', type: 'image/png' }],
    apple: [{ url: '/logos/airestro360-favicon.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'AI Restro 360',
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    images: [
      {
        url: '/logos/airestro360-favicon.png',
        type: 'image/png',
        alt: 'AI Restro 360',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${outfit.className} antialiased`} suppressHydrationWarning>
        <CmsClientBootstrap />
        {children}
      </body>
    </html>
  )
}
