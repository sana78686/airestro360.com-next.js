import type { MarketingPage } from '../types'

const S = (h: string, p: string) => ({ heading: h, body: p })
const meta = (lead: string) => lead.slice(0, 155)

export const RESOURCES_EN: Record<string, MarketingPage> = {
  'help-center': {
    title: 'Help center',
    metaDescription: meta(
      'How-to articles, playbooks, and answers for common AI Restro 360 questions across venues and roles.',
    ),
    lead: 'The help center is where operators, finance, and on-site staff find checklists, short videos, and field-tested procedures. We focus on the tasks you repeat every service: open, busy, and close, plus migration and new-site launch.',
    sections: [
      S('For everyday operations', 'Search by role, module, and venue type, then follow steps that map to the same product names you see in the app.'),
      S('Accountability and updates', 'Articles show last reviewed dates and what changed, so a district lead can be confident a procedure is current.'),
    ],
  },
  'documentation': {
    title: 'Product documentation',
    metaDescription: meta(
      'Reference guides for each module, permissions model, and integration contract used by your technical owners.',
    ),
    lead: 'Documentation explains how each surface behaves, not only what a button is called. It links to the same data definitions your POS, CRM, and reporting teams rely on.',
    sections: [
      S('For builders and approvers', 'Security notes, PII handling, and export formats are spelled out for reviews with IT and legal.'),
      S('Living references', 'We publish addenda when contracts or regional rules require a behavior change, with effective dates in plain language.'),
    ],
  },
  'case-studies': {
    title: 'Customer stories',
    metaDescription: meta(
      'How restaurant and hospitality groups use AI Restro 360 in live venues — real constraints, real outcomes.',
    ),
    lead: 'These stories follow brands that had to run during construction, re-brands, and peak holiday volume. We highlight what changed, what stayed manual on purpose, and the metrics the leadership team used to sign off on the next site.',
    sections: [
      S('Journeys you can map to your group', 'Multi-site, franchise, and mixed-model operators each show how they sequence POS, kitchen, and delivery in one program.'),
      S('Ask for a deeper walkthrough', 'Your team can work with us on a readout tailored to your current stack, compliance needs, and timeline.'),
    ],
  },
  'product-updates': {
    title: 'Product updates',
    metaDescription: meta(
      'What shipped, what is next, and how to prepare your venues for each release of AI Restro 360.',
    ),
    lead: 'Release notes are written for GMs, IT, and finance on the same page. We call out data impacts, new permissions, and training hooks before you see the change in a live service window.',
    sections: [
      S('Sensible cadence', 'We batch changes where it improves stability and offer early access sandboxes for larger programs.'),
      S('No surprises for guests', 'When a user-visible behavior moves, we pair it with a quick staff tip and, when needed, a comms pack for your field teams.'),
    ],
  },
  'events': {
    title: 'Events and office hours',
    metaDescription: meta(
      'Join live walkthroughs, Q&A calls, and regional sessions with product and customer teams.',
    ),
    lead: 'We host open sessions for new features, cutover playbooks, and “ask us anything” hours with the teams who build and deploy the product. You can also request a private review for a district or brand-wide rollout.',
    sections: [
      S('Time zones and languages', 'Most sessions are offered in English with recorded playback; regional meetups are listed when we have local customers co-hosting.'),
      S('Bring your runbook', 'The best events include your IT lead and a GM or operator who can speak to real floor constraints, not a slide deck only.'),
    ],
  },
  'community': {
    title: 'Community and peer groups',
    metaDescription: meta(
      'Connect with other operators, solution partners, and our team in moderated community spaces.',
    ),
    lead: 'Community is where you compare notes on the hard parts: handoff during NFL Sunday, multi-brand catalog governance, and how to run training when turnover is a constant.',
    sections: [
      S('Guidelines that protect guests', 'Discussions are moderated, vendor-neutral where possible, and aligned with your confidentiality expectations.'),
      S('Ways to participate', 'Office hours, special-interest threads for franchise and enterprise, and partner-led best-practice days.'),
    ],
  },
  'careers': {
    title: 'Careers at AI Restro 360',
    metaDescription: meta(
      'Build hospitality software with people who have worked in service, the line, and the data center.',
    ),
    lead: 'We hire across product, engineering, deployment, and customer experience. The common thread is respect for the pace of a real restaurant: clear ownership, on-call with empathy, and a bias toward fixes that an exhausted shift lead can use.',
    sections: [
      S('How to apply', 'Open roles and locations are published on this site as we grow; we work with a human review, not a black-box keyword filter alone.'),
      S('What we value', 'Reliability, plain communication, and the willingness to learn from operators who are mid-service when a screen misbehaves.'),
    ],
  },
  'api-overview': {
    title: 'APIs and data platform overview',
    metaDescription: meta(
      'A plain-language view of the AI Restro 360 platform interfaces for technical leads planning integrations.',
    ),
    lead: 'The API set covers the order graph, guest records where policy allows, menu events, and operational signals. Authentication is key-based with rotation and per-scope limits suitable for production environments.',
    sections: [
      S('Environments and lifecycles', 'Sandboxes, contract versions, and deprecation windows are published so you can plan releases with confidence.'),
      S('Security review pack', 'We provide materials that map common enterprise questionnaires to the controls we run day to day, not a generic PDF.'),
    ],
  },
}
