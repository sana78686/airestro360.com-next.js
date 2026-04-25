import type { MarketingPage } from '../types'

const S = (h: string, p: string) => ({ heading: h, body: p })
const meta = (lead: string) => lead.slice(0, 155)

export const INTEGRATIONS_EN: Record<string, MarketingPage> = {
  'pos-systems': {
    title: 'POS systems integration',
    metaDescription: meta(
      'Connect your existing POS so items, price books, and tickets stay aligned across in-store, web, and delivery.',
    ),
    lead: 'AI Restro 360 maps your catalog, taxes, and service areas to a single order graph. Whether you run a single site or a hundred, changes propagate with guardrails and audit history.',
    sections: [
      S('Implementation that respects operations', 'Blueprints, dry runs, and staged cutovers are built for open restaurants, not only greenfield projects.'),
      S('Ongoing health checks', 'Drift reports flag mismatches between channels before guests see them on a Friday night.'),
    ],
  },
  'delivery-marketplaces': {
    title: 'Delivery marketplaces in one line',
    metaDescription: meta(
      'Consolidate partner delivery with your in-house data model so the kitchen, pickup, and finance agree.',
    ),
    lead: 'Menu availability, 86d items, and price adjustments reflect across marketplaces and your first-party app. The pass sees one set of chits even when a partner injects a bag fee or promo at checkout.',
    sections: [
      S('Faster end-of-day', 'Payouts and tax lines tie back to order lines so you spend less time matching CSVs to your ledger.'),
      S('A calmer handoff', 'Dispatch and pickup surfaces share status so hosts do not juggle three tablets to answer one question.'),
    ],
  },
  'online-ordering': {
    title: 'Online ordering',
    metaDescription: meta(
      'Web and app ordering with your brand, your promos, and the same order stream as the floor and the kitchen.',
    ),
    lead: 'Guests get accurate ETAs, upsells that you approve, and saved profiles where you allow. Operations see the same ticket shape as the phone and the kiosk, so training stays simple.',
    sections: [
      S('Control without friction', 'Dayparts, throttling, and service radius rules protect the line while you still convert demand.'),
      S('Loyalty where it should be', 'Rewards and consents line up with your CRM policies instead of a separate “online-only” list.'),
    ],
  },
  'onsite-ordering': {
    title: 'On-site ordering and pickup',
    metaDescription: meta(
      'Handhelds, kiosks, and QR in one data model for dine-in, bar, and curbside.',
    ),
    lead: 'Host tools, line displays, and guest notifications share a single state machine. You can add modules without a second shadow-POS in the back office.',
    sections: [
      S('Pacing that matches your service', 'Coursing and fire rules apply whether the order was typed, scanned, or spoken.'),
      S('Training once', 'The same product names, modifiers, and allergy prompts appear everywhere, which cuts down on voids and remakes.'),
    ],
  },
  'dispatch-routing': {
    title: 'Dispatch and routing',
    metaDescription: meta(
      'Route orders to the right make line, handoff, or third-party driver with clear state for everyone involved.',
    ),
    lead: 'When you run your own drivers or a hybrid, routing rules balance distance, handoff windows, and in-house load. The guest sees a status that your staff can back up in one screen.',
    sections: [
      S('Exception paths', 'Remakes, cold-chain breaks, and address edits stay tracked so the next shift does not start blind.'),
      S('Partner and owned fleets', 'Bring couriers, staff drivers, and marketplace riders into a consistent workflow where policy allows.'),
    ],
  },
  'loyalty-integrations': {
    title: 'Loyalty and CRM connections',
    metaDescription: meta(
      'Match guests, consents, and offers across e‑commerce, in-store, and partners.',
    ),
    lead: 'Integrations keep the guest one ID across the stack. Points, tiers, and saved payments follow your business rules, not a marketplace default.',
    sections: [
      S('Compliant by design', 'Frequency caps, channel preferences, and audit trails are first-class, not a CSV export for legal later.'),
      S('Service with context', 'Front line tools show what matters: allergies, visit patterns, and recovery notes, without a data warehouse tab.'),
    ],
  },
  'uber-eats': {
    title: 'Uber Eats',
    metaDescription: meta(
      'Connect Uber Eats to your kitchen and handoff. When guests need marketplace couriers, orders stay visible with your in-house and first-party flow.',
    ),
    lead: 'We sync menus, 86d items, and handoff state so the pass is not running a second shadow operation. If your store relies on marketplace delivery, riders appear in the handoff view alongside your own drivers when the partner supplies them. If you use your in-house or contracted fleet, those routes can sit in the same control surface so the guest gets one clear pickup or delivery promise.',
    sections: [
      S('When Uber supplies riders', 'Handoff, bag checks, and status updates flow to the right party without a manual bridge between apps.'),
      S('When you supply riders or hybrid', 'You can still attach marketplace-originated tickets to a route you run, with guardrails and reporting that show who fulfilled the last mile.'),
      S('Operations and finance', 'Tax lines, service fees, and remakes are tied to the same item keys as your other channels, which keeps reconciliation and coaching aligned.'),
    ],
  },
  'doordash': {
    title: 'DoorDash',
    metaDescription: meta(
      'Link DoorDash with your item master, kitchen queue, and guest messaging without duplicating work.',
    ),
    lead: 'Menu pushes, 86d updates, and pricing windows travel to DoorDash the same way they travel to your other sales paths. The kitchen and expo see a normal ticket, not a parallel list.',
    sections: [
      S('Clear pickup and handoff', 'Handoff and wait-time signals stay consistent for staff so guests are not given three different answers.'),
      S('Reporting that matches the register', 'Channel tags stay on the line items your finance team already uses.'),
    ],
  },
  'square': {
    title: 'Square',
    metaDescription: meta(
      'Connect Square with AI Restro 360 to align catalog, locations, and payments with delivery and marketing.',
    ),
    lead: 'We keep items, locations, and permission roles mapped so a change in the catalog is reflected where guests order and where the line cooks. Payouts and adjustments stay in the language your accounting team already uses.',
    sections: [
      S('A cleaner rollout', 'Staged go-lives, dry runs, and backfills reduce surprise during busy weeks.'),
      S('Ongoing health', 'We surface drift and sync errors early so a Friday dinner rush is not the first time you see a gap.'),
    ],
  },
  'clover': {
    title: 'Clover',
    metaDescription: meta(
      'Clover + AI Restro 360: connect terminals, items, and staff roles to omnichannel order flow.',
    ),
    lead: 'Item libraries, service charges, and station routing stay in sync. Staff can work from familiar devices while the guest sees a consistent offer across kiosks, online, and marketplaces.',
    sections: [
      S('Service models from QSR to full service', 'Permissions and handoff match how you run each venue.'),
      S('Support and visibility', 'Logs and playbooks are built for franchise and multi-site teams who need a paper trail, not a mystery error code.'),
    ],
  },
  'build-integration': {
    title: 'Build on our integration platform',
    metaDescription: meta(
      'APIs, webhooks, and partner patterns for data teams, ISVs, and in-house product groups.',
    ),
    lead: 'We publish stable contracts, sandbox environments, and change logs. Your engineers focus on the guest or operator experience, not re-learning field names every month.',
    sections: [
      S('What we typically connect', 'Orders, menu events, guest profiles, and operational signals, with scoping and keys that respect least privilege.'),
      S('How to get started', 'Open a design session with your technical owner and we will map scopes, test plans, and cutover with your go-live team.'),
    ],
  },
  'partner-program': {
    title: 'Partner with AI Restro 360',
    metaDescription: meta(
      'Co-sell, integrate, and grow with a platform built for hospitality operators, technology vendors, and service firms.',
    ),
    lead: 'We work with integrators, agencies, and hardware partners that share our focus on real venues. Joint customers get a single operating picture instead of a patchwork of “almost integrated” tools.',
    sections: [
      S('Ways to collaborate', 'Technology embeds, referral programs, and services-led rollouts with clear enablement and support paths.'),
      S('What we look for', 'Reliability, transparent SLAs, and a willingness to test in live venues with a rollback plan, not a slide deck alone.'),
    ],
  },
}
