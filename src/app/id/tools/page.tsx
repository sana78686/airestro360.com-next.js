import type { Metadata } from 'next'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'
import '@/styles/AllToolsPage.css'

const TOOLS_LIST = [
  { slug: 'merge', labelKey: 'tools.mergePdf', available: false },
  { slug: 'split', labelKey: 'tools.splitPdf', available: false },
  { slug: 'edit', labelKey: 'tools.editPdf', available: false },
  { slug: 'sign', labelKey: 'tools.signPdf', available: false },
  { slug: 'convert', labelKey: 'tools.convertPdf', available: false },
  { slug: 'images-to-pdf', labelKey: 'tools.imagesToPdf', available: false },
  { slug: 'pdf-to-images', labelKey: 'tools.pdfToImages', available: false },
  { slug: 'extract-images', labelKey: 'tools.extractImages', available: false },
  { slug: 'protect', labelKey: 'tools.protectPdf', available: false },
  { slug: 'unlock', labelKey: 'tools.unlockPdf', available: false },
  { slug: 'rotate', labelKey: 'tools.rotatePdf', available: false },
  { slug: 'remove-pages', labelKey: 'tools.removePages', available: false },
  { slug: 'extract-pages', labelKey: 'tools.extractPages', available: false },
  { slug: 'rearrange', labelKey: 'tools.rearrangePages', available: false },
  { slug: 'webpage-to-pdf', labelKey: 'tools.webpageToPdf', available: false },
  { slug: 'ocr', labelKey: 'tools.pdfOcr', available: false },
  { slug: 'watermark', labelKey: 'tools.addWatermark', available: false },
  { slug: 'page-numbers', labelKey: 'tools.addPageNumbers', available: false },
  { slug: 'overlay', labelKey: 'tools.pdfOverlay', available: false },
  { slug: 'compare', labelKey: 'tools.comparePdfs', available: false },
  { slug: 'optimize', labelKey: 'tools.webOptimize', available: false },
  { slug: 'redact', labelKey: 'tools.redactPdf', available: false },
  { slug: 'create', labelKey: 'tools.createPdf', available: false },
]

const id = translations.id

function t(key: string): string {
  const parts = key.split('.')
  let cur: unknown = id
  for (const p of parts) {
    cur = (cur as Record<string, unknown>)?.[p]
  }
  if (typeof cur === 'string') return cur
  let curEn: unknown = translations.en
  for (const p of parts) {
    curEn = (curEn as Record<string, unknown>)?.[p]
  }
  return typeof curEn === 'string' ? curEn : key
}

export const metadata: Metadata = {
  title: t('tools.pageTitle'),
  description: t('tools.frequentlyUsed'),
  robots: 'index,follow',
  ...socialMetadata({
    title: t('tools.pageTitle'),
    description: t('tools.frequentlyUsed'),
    path: '/id/tools',
    ogLocale: 'id_ID',
  }),
}

export default function IdToolsPage() {
  const lp = '/id'
  return (
    <div className="all-tools-page home-page">
      <main className="all-tools-main">
        <h1 className="all-tools-title">{t('tools.pageTitle')}</h1>
        <p className="all-tools-subtitle">{t('tools.frequentlyUsed')}</p>

        <div className="tools-grid">
          {TOOLS_LIST.map((tool) => (
            <a
              key={tool.slug}
              href={`${lp}/${tool.slug}`}
              className={`tool-card ${tool.available ? 'tool-card--available' : ''}`}
            >
              <span className="tool-card-icon" aria-hidden>
                📄
              </span>
              <span className="tool-card-label">{t(tool.labelKey)}</span>
              {tool.available ? (
                <span className="tool-card-badge" aria-hidden>
                  ✓
                </span>
              ) : null}
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
