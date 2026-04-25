import type { MarketingPage } from '../types'

const S = (h: string, p: string) => ({ heading: h, body: p })

const meta = (lead: string) => lead.slice(0, 155)

export const SOLUTIONS_EN: Record<string, MarketingPage> = {
  'voice-ordering': {
    title: 'AI voice ordering for restaurants',
    metaDescription: meta(
      'Answer phone orders with a natural, brand-safe voice assistant. Tickets sync to your POS, kitchen, and delivery stack.',
    ),
    lead: 'AI Restro 360 gives guests a quick phone experience while your team stays focused on service. The assistant answers common questions, captures modifiers, routes orders to the right venue or brand profile, and writes clean tickets to your point of sale without retyping.',
    sections: [
      S(
        'Built for service and control',
        'Playbooks, allergen language, and upsell nudges follow your house rules. Supervisors can review call summaries and exceptions so training stays data-driven, not guesswork.',
      ),
      S(
        'One record with the rest of your stack',
        'Voice tickets share the same guest and item records as in-store, web, and marketplace orders, so your reporting, inventory, and loyalty data stay consistent.',
      ),
    ],
  },
  'table-ordering': {
    title: 'Table and QR ordering',
    metaDescription: meta(
      'Let guests order and pay from their phones with QR. Menus, fires, and payments align with the floor plan.',
    ),
    lead: 'Guests scan, browse your live menu, and check out in a few taps. Staff see table status, coursing, and coursing times on shared tickets so the line and floor stay coordinated.',
    sections: [
      S(
        'Faster turns without rushing guests',
        'Pay-at-table reduces terminal queues on busy nights. You control pacing with optional hold-and-fire rules that match your service style.',
      ),
      S(
        'Revenue and operations together',
        'Attach service charges, promos, and service paths per location, then read channel mix the same way you read POS sales.',
      ),
    ],
  },
  'kiosk-ordering': {
    title: 'Self-serve kiosks',
    metaDescription: meta(
      'Queue-busting kiosks with guided flows, add-ons, and upsells that post straight to the kitchen and POS.',
    ),
    lead: 'Self-order kiosks shorten the line, reduce order-entry mistakes, and keep upsells consistent. Flows are tuned for quick service, high-traffic lobbies, and brand-specific bundles.',
    sections: [
      S('Operational levers you expect', 'Hold items, 86 lists, and menu-day parts sync in near real time so guests only see what you can make.'),
      S('Service design your way', 'Choose guest journeys for dine-in, takeaway, and mixed venues with the same data model as the rest of AI Restro 360.'),
    ],
  },
  'kitchen-display': {
    title: 'Kitchen display and routing',
    metaDescription: meta(
      'Route tickets to stations, courses, and timing windows. Clear screens for the line and the pass.',
    ),
    lead: 'Tickets split by station, item, and fire time, with load-aware queues so the line keeps pace. Expedite views and alerts flag late or recalled items before guests do.',
    sections: [
      S('Stations that match your line', 'Pizza, grill, cold, and expo views can be configured by venue, daypart, and menu rotation.'),
      S('Connected to the floor', 'Docket changes and coursing flow back to servers and kiosks so the guest promise stays in sync with the pass.'),
    ],
  },
  'prep-queue': {
    title: 'Prep, queue, and course firing',
    metaDescription: meta(
      'Plan prep tasks and course fire timing so the kitchen and the floor agree on the same clock.',
    ),
    lead: 'Sequencing rules align starters, mains, and desserts with the table turn you want. Prep boards pull from the same order stream as the hot line and cold line.',
    sections: [
      S('When things change', 'Last-minute add-ons, VIP pacing, and large-party splits update without a paper chit chase.'),
      S('Metrics that help coaching', 'See bottlenecks by station and daypart, then adjust prep pars and training with data.'),
    ],
  },
  'inventory-insights': {
    title: 'Inventory signals and waste insight',
    metaDescription: meta(
      'Connect sales, recipes, and depletion to spot variance before it hits margin.',
    ),
    lead: 'Usage signals compare what you sell with what you use. Alerts highlight exceptions so managers can act before the week closes.',
    sections: [
      S('Tied to the menu, not a spreadsheet', 'Recipes and sub-recipes follow items across channels, not only POS categories.'),
      S('A practical cadence', 'Count templates and adjustment reasons keep audits fast enough for real restaurants.'),
    ],
  },
  'delivery-sync': {
    title: 'Delivery and marketplace sync',
    metaDescription: meta(
      'One operational view of third-party and first-party delivery with status, remakes, and handoff clarity.',
    ),
    lead: 'Orders from delivery partners and your own apps land in a single line with the same item master. Hosts, expo, and dispatch see one truth, even when a marketplace changes a bag fee mid-shift.',
    sections: [
      S('Reconcile faster', 'Payouts and tax lines stay aligned to items so finance can roll up without a separate spreadsheet per channel.'),
      S('Exception handling that scales', 'Remakes, refunds, and re-fires are tracked with the guest record for coaching and review responses.'),
    ],
  },
  'loyalty-crm': {
    title: 'Loyalty, profiles, and CRM',
    metaDescription: meta(
      'Keep guest history, consents, and offers aligned across web, in-store, and delivery.',
    ),
    lead: 'Profiles follow guests across their preferred channels, with guardrails for consent, frequency caps, and brand voice. Your teams see visit history, preferences, and risk flags where they work.',
    sections: [
      S('Offer logic you can stand behind', 'Segments and journeys respect policy and time windows so you do not over-message.'),
      S('Connected to service', 'Front-of-house tools surface birthdays, allergies, and tags without opening another app.'),
    ],
  },
  'analytics': {
    title: 'Analytics and reporting',
    metaDescription: meta(
      'Channel mix, labor, and margin in one place with the same item catalog your teams operate.',
    ),
    lead: 'Leaders can compare days, dayparts, and sites without re-mapping categories. The same product hierarchy powers finance, marketing, and operations.',
    sections: [
      S('From summary to line detail', 'Drill from region to venue to ticket, then export in formats your data team already uses.'),
      S('KPIs that matter in hospitality', 'Labor percent, check average, and guest recovery lift show next to the stories your GMs need to tell.'),
    ],
  },
  'marketing-ai': {
    title: 'Marketing and campaign support',
    metaDescription: meta(
      'Plan campaigns with menu-aware suggestions, timing hints, and channel-ready copy you still approve.',
    ),
    lead: 'Ideas are grounded in what you already sell, what is 86d, and what worked last season. You keep brand voice, legal language, and offer rules in control.',
    sections: [
      S('Faster from idea to launch', 'Start from templates tied to LTOs, holidays, and local events with guardrails for claims and images.'),
      S('Proof and iteration', 'Track performance back to the same order records as your operational dashboards.'),
    ],
  },
  'reviews': {
    title: 'Reviews and reputation',
    metaDescription: meta(
      'Route reviews into one queue with suggested responses and follow-up tasks that match your brand.',
    ),
    lead: 'Public feedback and private surveys land together so you can see themes by location and shift. Suggested replies save time, but a human still sends them.',
    sections: [
      S('Service recovery in context', 'Link a review to a ticket or table when your rules allow, so the team can learn, not just reply.'),
      S('Benchmark without noise', 'Category filters cut through marketplace quirks so you compare apples to apples.'),
    ],
  },
  'partner-api': {
    title: 'Partner API and data export',
    metaDescription: meta(
      'Connect your data warehouse, finance stack, and custom experiences with secure, versioned APIs.',
    ),
    lead: 'Bring orders, guests, and catalog events into the systems you already trust. Scopes, keys, and audit trails are built for multi-brand and franchise operators.',
    sections: [
      S('Stability for builders', 'Versioned contracts and change logs reduce surprise breaks when you roll out a new app team-wide.'),
      S('Security as a default', 'Principle-of-least-privilege and rotation-friendly credentials come standard, not as an add-on project.'),
    ],
  },
}
