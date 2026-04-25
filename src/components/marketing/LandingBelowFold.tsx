'use client'

import LandingCmsFold from './LandingCmsFold'
import LandingBelowFoldStatic from './LandingBelowFoldStatic'
import type { LandingCmsFoldProps } from './LandingCmsFold'

type Props = LandingCmsFoldProps

/** Below-the-fold: CMS fold + static marketing tail. */
export default function LandingBelowFold({ t, cards, howSection, sections, lp }: Props) {
  return (
    <>
      <LandingCmsFold t={t} cards={cards} howSection={howSection} sections={sections} lp={lp} />
      <LandingBelowFoldStatic t={t} lp={lp} />
    </>
  )
}
