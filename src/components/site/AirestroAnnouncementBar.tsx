'use client'

import { useState, useCallback, useEffect } from 'react'

type TFn = (key: string) => string

export default function AirestroAnnouncementBar({
  t,
  lang,
  className,
}: {
  t: TFn
  lang: string
  className?: string
}) {
  const items = [t('airestroHeader.announce1'), t('airestroHeader.announce2'), t('airestroHeader.announce3')].filter(Boolean)
  const [index, setIndex] = useState(0)
  const n = items.length || 1

  useEffect(() => {
    setIndex(0)
  }, [lang])

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n)
    },
    [n],
  )

  if (items.length === 0) return null

  return (
    <div
      className={['ar-announcement-bar', className].filter(Boolean).join(' ')}
      role="region"
      aria-label={t('airestroHeader.announceAria')}
    >
      <button
        type="button"
        className="ar-announcement-nav"
        aria-label={t('airestroHeader.announcePrev')}
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <p className="ar-announcement-text" aria-live="polite">
        {items[index]}
      </p>
      <button
        type="button"
        className="ar-announcement-nav"
        aria-label={t('airestroHeader.announceNext')}
        onClick={() => go(1)}
      >
        ›
      </button>
    </div>
  )
}
