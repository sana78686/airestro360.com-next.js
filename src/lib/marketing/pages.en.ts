import type { MarketingPage } from './types'
import { SOLUTIONS_EN } from './content/solutions.en'
import { INTEGRATIONS_EN } from './content/integrations.en'
import { RESOURCES_EN } from './content/resources.en'

export const PAGES_EN: Record<string, MarketingPage> = {
  ...SOLUTIONS_EN,
  ...INTEGRATIONS_EN,
  ...RESOURCES_EN,
}
