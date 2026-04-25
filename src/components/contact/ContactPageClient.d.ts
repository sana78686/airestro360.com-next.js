import type { ReactNode } from 'react'

export type ContactPageClientProps = {
  initialSettings?: Record<string, unknown> | null
}

export default function ContactPageClient(props: ContactPageClientProps): ReactNode
