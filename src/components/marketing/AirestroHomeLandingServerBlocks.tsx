import { getTranslation, langPrefix } from '@/i18n/translations'
import LandingCmsFold from '@/components/marketing/LandingCmsFold'

type Lang = 'en' | 'id'

type Props = {
  lang: Lang
  cards: unknown[]
  sections: unknown[]
  howSection: { title?: string; description?: string } | null
}

/** Server-rendered CMS fold so View Source includes CMS-driven copy without waiting for client nav. */
export default function AirestroHomeLandingServerBlocks({ lang, cards, sections, howSection }: Props) {
  const t = (key: string) => String(getTranslation(lang, key))
  const lp = langPrefix(lang)
  return (
    <LandingCmsFold t={t} cards={cards} howSection={howSection} sections={sections} lp={lp} />
  )
}
