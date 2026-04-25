'use client'

import { useEffect } from 'react'
import { prepareCmsClient, startRevisionPolling } from '@/lib/cms-client'

export function CmsClientBootstrap() {
  useEffect(() => {
    let cancelled = false
    const run = () => {
      if (cancelled) return
      void prepareCmsClient().then(() => startRevisionPolling())
    }
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(run, { timeout: 4000 })
    } else {
      timeoutId = setTimeout(run, 1)
    }
    return () => {
      cancelled = true
      if (idleId != null && typeof window !== 'undefined') window.cancelIdleCallback(idleId)
      if (timeoutId != null) clearTimeout(timeoutId)
    }
  }, [])
  return null
}
