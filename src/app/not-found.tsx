import Link from 'next/link'
import { getTranslation } from '@/i18n/translations'
import SiteLayout from '@/components/site/SiteLayout'

export default function NotFound() {
  const t = (key: string) => getTranslation('en', key)
  return (
    <SiteLayout>
      <div className="main main--landing main--ar" style={{ minHeight: '50vh' }}>
        <section className="ar-hero">
          <div className="ar-container" style={{ maxWidth: 560, textAlign: 'center' }}>
            <h1 className="ar-hero-title" style={{ textTransform: 'none' }}>
              {t('notFound.title')}
            </h1>
            <p className="ar-hero-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              {t('notFound.body')}
            </p>
            <div className="ar-hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/" className="ar-btn-primary">
                {t('notFound.backHome')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
