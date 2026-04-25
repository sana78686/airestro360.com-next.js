export type MarketingCategory = 'solution' | 'integration' | 'resource'

export type MarketingSection = {
  heading: string
  body: string
}

export type MarketingPage = {
  title: string
  metaTitle?: string
  metaDescription?: string
  lead: string
  sections: MarketingSection[]
}

export type MarketingPagePayload = MarketingPage & { category: MarketingCategory }
