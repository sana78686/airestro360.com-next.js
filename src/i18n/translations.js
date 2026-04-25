import idTranslations from './translations.id.js'

/**
 * UI strings: id (Indonesian), en (English).
 * Missing keys fall back to English (see getTranslation).
 */
export const translations = {
  en: {
    logoMark: 'AI Restro 360',
    nav: {
      merge: 'POS & ORDERS',
      split: 'KITCHEN & STOCK',
      compress: 'DELIVERY & GUESTS',
      convert: 'ANALYTICS & AI',
      allTools: 'ALL SOLUTIONS',
      login: 'Login',
      logIn: 'Log in',
      dashboard: 'Dashboard',
      signUp: 'Sign up',
      home: 'Home',
    },
    airestroHeader: {
      solutions: 'Solutions',
      integrations: 'Integrations',
      pricing: 'Pricing',
      resources: 'Resources',
      megaSolutions: 'Solutions',
      megaIntegrations: 'Integrations',
      megaResources: 'Resources',
      localeLabel: 'Language',
      solCol1: 'Front of house',
      solCol2: 'Kitchen & operations',
      solCol3: 'Delivery & loyalty',
      solCol4: 'Growth',
      sol1t: 'AI voice ordering',
      sol1s: 'Answer calls with a natural, brand-safe voice assistant.',
      sol2t: 'Table & QR ordering',
      sol2s: 'Guests order and pay from their phones at the table.',
      sol3t: 'Self-serve kiosk',
      sol3s: 'Reduce queues with a guided kiosk flow.',
      sol4t: 'Kitchen display',
      sol4s: 'Route tickets to stations with clear timing.',
      sol5t: 'Prep & queue',
      sol5s: 'Prioritize courses and course-fire timing.',
      sol6t: 'Inventory signals',
      sol6s: 'Spot waste patterns before they hit margin.',
      sol7t: 'Delivery sync',
      sol7s: 'One view for third-party delivery status.',
      sol8t: 'Loyalty & CRM',
      sol8s: 'Reward guests and keep profiles in sync.',
      sol9t: 'Analytics',
      sol9s: 'Sales, labor, and channel mix in one place.',
      sol10t: 'Marketing AI',
      sol10s: 'Campaign ideas tuned to your menu and season.',
      sol11t: 'Reviews & reputation',
      sol11s: 'Respond faster with suggested replies.',
      sol12t: 'Partner API',
      sol12s: 'Connect your data warehouse or custom stack.',
      intCardKicker: 'INTEGRATIONS',
      intCardTitle: '100+ restaurant connections',
      intCardDesc: 'POS, delivery, and guest data aligned for your teams.',
      intCardCta: 'All integrations',
      intOurTitle: 'Our integrations',
      intPartnersTitle: 'Our partners',
      intMid1: 'POS systems',
      intMid2: 'Delivery marketplaces',
      intMid3: 'Online ordering',
      intMid4: 'On-site ordering',
      intMid5: 'Dispatch & routing',
      intMid6: 'Loyalty & CRM',
      intP1: 'Uber Eats',
      intP2: 'DoorDash',
      intP3: 'Square',
      intP4: 'Clover',
      intP5: 'Become a partner',
      intP6: 'Build your integration',
      resCol1: 'Education',
      resCol2: 'Support',
      resCol3: 'Company',
      res1: 'Blog',
      res2: 'Documentation',
      resCase: 'Case studies',
      res3: 'Product updates',
      resEvents: 'Events',
      res4: 'Help center',
      res5: 'FAQ',
      res6: 'Contact us',
      res7: 'About us',
      res8: 'Careers',
      res9: 'How it works',
      announceAria: 'Site announcements',
      announcePrev: 'Previous announcement',
      announceNext: 'Next announcement',
      announce1:
        'NEW! AI Restro 360 introduces smart assistants for menus, reservations, and guest experience — explore what’s new.',
      announce2:
        'Connect POS, delivery, and loyalty in one place — built for busy restaurant teams.',
      announce3:
        'See pricing and onboarding options — talk to us about rolling out AI Restro 360 in your venues.',
      venueLabel: 'Venue',
      venuePrevAria: 'Previous location',
      venueNextAria: 'Next location',
      mobileMenuOpen: 'Open menu',
      mobileMenuClose: 'Close menu',
      legalInResources: 'Legal',
    },
    title: 'AI Restro 360 — restaurant management platform',
    /** Home `<title>`, Open Graph, and landing `<h1>`. */
    seoHeroH1: 'AI Restro 360 — restaurant management platform',
    subtitle:
      'Run POS, kitchen, delivery, inventory, and guest data in one place — built for busy restaurant teams.',
    selectPdf: 'Add files',
    orDrop: 'or drop them here',
    fromCloud: 'From cloud',
    otherSources: 'Other sources',
    fileProtection: '✓ File protection is active',
    addMoreFiles: 'Add more files',
    removeFile: 'Remove',
    dpi: 'DPI',
    imageQuality: 'Image quality',
    color: 'Color',
    colorNoChange: 'No change',
    colorGray: 'Gray',
    compress: 'Apply',
    compressing: 'Working…',
    resultReduced: 'The size has been reduced by',
    shareOrContinue: 'Share or continue',
    download: 'Download',
    preview: 'Preview',
    erase: 'Erase',
    restart: 'Restart',
    googleDrive: 'Google Drive',
    dropbox: 'Dropbox',
    email: 'Email',
    mailSubject: 'Your file is ready',
    mailBody: 'Download:',
    footer: '© 2026 – Powered by ApimsTec',
    footerProduct: 'PRODUCT',
    footerResources: 'RESOURCES',
    footerLegal: 'LEGAL',
    footerCompany: 'COMPANY',
    footerHome: 'Home',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerFaq: 'FAQ',
    footerTools: 'Tools',
    footerSolutions: 'SOLUTIONS',
    footerBusiness: 'Business',
    footerEducation: 'Education',
    footerSecurity: 'Security',
    footerPress: 'Press',
    footerPrivacy: 'Privacy policy',
    footerTerms: 'Terms & conditions',
    footerDisclaimer: 'Disclaimer',
    footerCookies: 'Cookies',
    footerAbout: 'About us',
    footerContact: 'Contact us',
    footerBlog: 'Blog',
    footerOther: 'OTHER',
    footerCopyrightPrefix: '© AI Restro 360 2026 – ',
    footerPoweredBy: 'powered by Apimstec',
    footerLanguage: 'English',
    footerGetGooglePlay: 'GET IT ON Google Play',
    footerDownloadAppStore: 'Download on the App Store',
    footerDownloadMacStore: 'Download on the Mac App Store',
    footerMicrosoftStore: 'Microsoft Store',
    footerCopyrightFull: 'Copyright © 2026 AI Restro 360. All rights reserved.',
    footerAddressLine: 'Serving hospitality teams worldwide.',
    footerRegionGlobal: 'Global',
    footerRegionAria: 'Select region',
    footerChatAria: 'Contact us',
    footerColResources: 'Resources',
    footerHelpCenter: 'Help center',
    footerDocumentation: 'Documentation',
    footerCaseStudies: 'Case studies',
    footerProductNews: 'Product updates',
    footerEvents: 'Events',
    footerCommunity: 'Community',
    footerCookiePolicy: 'Cookie policy',
    footerLegalAbout: 'Legal: About the company',
    footerColSolutions: 'Solutions',
    footerColIntegrations: 'Integrations',
    footerColFor: 'AI Restro 360 for',
    footerCareers: 'Careers',
    footerCustomerStories: 'Customer stories',
    footerNewsletter: 'Sign up for our newsletter',
    footerTermsOfService: 'Terms of service',
    footerPrivacyCookieNotice: 'Privacy & Cookie notice',
    footerSolSentinel: 'Sentinel',
    footerSolDeliveryApp: 'Delivery Manager App',
    footerSolDirect: 'Direct',
    footerSolDispatch: 'Dispatch',
    footerSolKiosk: 'Kiosk',
    footerSolTableOrdering: 'Table Ordering',
    footerSolQuestApp: 'Quest App',
    footerIntAll: 'All integrations',
    footerIntPos: 'POS systems',
    footerInt3p: '3P Marketplace',
    footerIntOnline: 'Online ordering',
    footerIntRetail: 'Retail',
    footerIntLoyalty: 'Loyalty & CRM',
    footerIntPartner: 'Become a partner',
    footerForRestaurants: 'Restaurants',
    footerForRetail: 'Retail',
    footerForEnterprise: 'Enterprise',
    ariaSelectPdf: 'Select files',
    ariaColorMode: 'Color mode',
    ariaRemove: 'Remove',
    compressionSettings: 'Processing settings',
    compressionResult: 'Result',
    progressInitializing: 'Initializing…',
    progressLoading: 'Loading…',
    progressPage: 'Processing…',
    progressFinalizing: 'Finalizing…',
    progressGrayscale: 'Applying options…',
    maxFilesReached: 'You already have the maximum of 10 files. Remove one to add another.',
    maxFilesPartial: 'Only the first files that fit were added (maximum 10).',
    maxFilesHint: 'Maximum 10 files per session.',
    fileCountHint: '{count} of {max} files selected',
    settingsRequiredHint: 'Complete the required options to continue.',
    fileDone: 'Done',
    compressFileProgress: 'File {current} of {total}: {name}',
    resultMultiTitle: 'Your files are ready',
    resultSavedSuffix: 'smaller',
    fromTheBlog: 'From the blog',
    viewAllPosts: 'View all posts',
    downloadAll: 'Download all',
    otherTools: 'Other tools',
    landing: {
      heroTitleLine1: 'Stop losing ',
      heroTitleAccent1: 'money',
      heroTitleLine2: ' every ',
      heroTitleAccent2: 'rush hour.',
      heroSubtitle:
        'Integrate your online order channels with your POS. AI Restro 360 helps you manage online orders from one place — plus kitchen, staff, and inventory in sync.',
      ctaCompress: 'Get started free',
      featuresTitle: 'Why teams choose AI Restro 360',
      feature1Title: 'Labor cost',
      feature1Desc: 'Overtime, slow stations, and scheduling gaps quietly drain payroll.',
      feature2Title: 'Order errors',
      feature2Desc: 'Manual re-entry from tablets and marketplaces means wrong items and voids.',
      feature3Title: 'Missed orders',
      feature3Desc: 'When systems do not talk, tickets get lost in the noise of a busy service.',
      feature4Title: 'Lost data',
      feature4Desc: 'No single place for sales, delivery, and guest data means you fly blind on margin.',
      howTitle: 'From zero to first order in one day',
      howStep1: 'Sign up',
      howStep1Desc: 'Create your venue, areas, and roles in minutes.',
      howStep2: 'Connect POS',
      howStep2Desc: 'Link your point of sale and order channels in one place.',
      howStep3: 'Go live',
      howStep3Desc: 'Turn on routing so tickets, prep, and dispatch stay aligned.',
      howStep4: 'Get orders',
      howStep4Desc: 'Web, app, and marketplace orders flow into one clean queue.',
      faqButtonFallback: 'Question {n}',
      faqTitle: 'Common questions',
      faq1Q: 'Is it free to try?',
      faq1A: 'We offer a guided setup — contact us for a plan that fits your venues.',
      faq2Q: 'Does it work with our POS and delivery apps?',
      faq2A: 'Yes. We connect major POS, marketplaces, and guest data so your team sees one truth.',
      faq3Q: 'How fast can we go live?',
      faq3A: 'Many teams go from signup to first live order in a day with our onboarding checklist.',
      faq4Q: 'Is support included?',
      faq4A: 'You get help center resources and paid tiers with direct support for rollout.',
      readyTitle: 'Ready to modernize your restaurant?',
      readySubtitle: 'Book a call or start with the modules you need first.',
      cmsSectionAria: 'Site introduction',
      arHeroEyebrow: 'Restaurant operations',
      arStatsAria: 'Key highlights',
      arStat1Value: '100+',
      arStat1Label: 'INTEGRATIONS & PARTNERS',
      arStat2Value: '24/7',
      arStat2Label: 'LIVE OPERATIONS',
      arStat3Value: '360°',
      arStat3Label: 'MENU TO GUEST',
      arTestimonialQuote:
        'We finally have one place for POS, delivery, and guest data — the floor and the back office actually agree.',
      arQuoteBadge: 'Built for busy venues',
      arContactLink: 'Book a demo',
      arFaqSubtitle: 'Real answers from your CMS. Expand a question to read the full response.',
      arFaqCta: 'Contact us',
      arFaqViewAll: 'Jump to questions',
      arWhatTitle: 'What hurts your P&L',
      arWhyTitle: 'Your restaurant bleeds money in ways you do not even notice.',
      arWhoTitle: 'Who this is for',
      arWho1Title: 'INDEPENDENT RESTAURANTS',
      arWho1Desc: 'Launch QR ordering, delivery sync, and clear ticket flow without a big IT project.',
      arWho2Title: 'MULTI-SITE GROUPS',
      arWho2Desc: 'Standardize recipes, reporting, and labor playbooks across venues in one stack.',
      arWho3Title: 'HOSPITALITY BRANDS',
      arWho3Desc: 'Keep loyalty, marketing, and reviews on-brand at scale.',
      arIntegrationsTitle: 'Works with the tools you already use',
      arIntegrationsSub: 'Connect POS, delivery, payments, and guest data in one flow.',
      arIntLogo1: 'POS',
      arIntLogo2: 'Delivery',
      arIntLogo3: 'Payments',
      arIntLogo4: 'Loyalty',
      arIntLogo5: 'Open API',
      arDualTitle: 'EXPLORE THE PLATFORM & GET HELP',
      arCtaCard1Title: 'SOLUTIONS',
      arCtaCard1Desc: 'See modules, integrations, and how teams roll out AI Restro 360.',
      arCtaCard2Title: 'TALK TO US',
      arCtaCard2Desc: 'Onboarding, enterprise rollout, or partnership questions — we are here.',
      arExploreLink: 'Explore',
      arGetStarted: 'Get started',
      homePricingTitle: 'Pick a plan that matches your service model',
      homePricingSub:
        'All plans include core POS. Upgrade for kitchen, delivery, and back-office in one place.',
    },
    tools: {
      pageTitle: 'Platform & solutions',
      frequentlyUsed: 'Popular',
      mergePdf: 'Point of sale',
      splitPdf: 'Kitchen & KDS',
      compressPdf: 'Delivery & marketplaces',
      editPdf: 'Menu & pricing',
      signPdf: 'Staff & shifts',
      convertPdf: 'Inventory & purchasing',
      imagesToPdf: 'Reservations',
      pdfToImages: 'Guest profiles',
      extractImages: 'Loyalty & CRM',
      protectPdf: 'Loss prevention',
      unlockPdf: 'Permissions & roles',
      rotatePdf: 'Table & QR order',
      removePages: 'Drive-thru & kiosk',
      extractPages: 'Catering & events',
      rearrangePages: 'Multi-site reporting',
      webpageToPdf: 'Marketing & campaigns',
      pdfOcr: 'Forecasting & AI',
      addWatermark: 'Branded receipts',
      addPageNumbers: 'Audit log',
      pdfOverlay: 'API & data export',
      comparePdfs: 'Benchmarking',
      webOptimize: 'Open integrations',
      redactPdf: 'Compliance & policies',
      createPdf: 'Onboarding',
      translatePdf: '24/7 support',
      jpgToPdf: 'Table management',
      wordToPdf: 'Payment routing',
      powerpointToPdf: 'Franchise tools',
      excelToPdf: 'Vendor catalog',
      htmlToPdf: 'Guest Wi‑Fi & reviews',
      pdfToJpg: 'In-store hardware',
      pdfToWord: 'Training mode',
      pdfToPowerpoint: 'Franchise ops',
      pdfToExcel: 'Costing',
      pdfToPdfa: 'Data residency',
    },
    megaMenu: {
      organizePdf: 'FRONT OF HOUSE',
      optimizePdf: 'KITCHEN OPS',
      convertToPdf: 'DELIVERY & GUESTS',
      convertFromPdf: 'GROWTH & LOYALTY',
      editPdf: 'INVENTORY',
      pdfSecurity: 'PERMISSIONS',
      pdfIntelligence: 'ANALYTICS & AI',
    },
    pricing: {
      title: 'Pricing',
      intro:
        'Plans are tailored to your venues, channels, and rollout. Tell us about your locations and stack — we’ll share options that fit.',
      ctaContact: 'Contact sales',
      ctaRegister: 'Get started',
    },
    about: {
      title: 'About AI Restro 360',
      intro:
        'We build software for restaurants and hospitality teams — so operations, guest data, and growth stay in sync.',
      ctaContact: 'Talk to us',
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch – contact form and details.',
      intro: 'Contact us about AI Restro 360, partnerships, or media inquiries.',
      detailsHeading: 'Contact details',
      sendAnother: 'Send another message',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      backHome: 'Back to home',
      noDetails: 'Contact details are not set yet. They can be added in the content manager.',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      chooseSubject: 'Choose a subject…',
      message: 'Message',
      writeMessage: 'Write a message',
      iAccept: 'I accept',
      termsAndConditions: 'Terms & Conditions',
      legalPrivacy: 'Legal & Privacy',
      sendMessage: 'Send message',
      successMessage: 'Your message has been sent. We will get back to you soon.',
      errorSend: 'Unable to send message. Please try again.',
      errorTerms: 'You must accept the Terms & Conditions and Legal & Privacy to send the form.',
      subjectGeneral: 'General inquiry',
      subjectSupport: 'Support',
      subjectFeedback: 'Feedback',
      subjectOther: 'Other',
    },
    notFound: {
      title: 'Page not found',
      body: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to home',
    },
    breadcrumb: {
      result: 'Result',
      page: 'Page',
      legal: 'Legal',
      solutions: 'Solutions',
      integrations: 'Integrations',
      resources: 'Resources',
    },
    blog: {
      listTitle: 'Blog',
      listIntro: 'Latest articles and updates.',
      readMore: 'Read more',
      noPosts: 'No blog posts yet.',
      emptyTitle: 'No articles yet',
      emptyBody:
        'We have not published any posts yet. Check back for restaurant tech guides, product updates, and hospitality insights.',
      backHome: 'Back to home',
      backToBlog: 'Back to blog',
    },
  },
  id: idTranslations,
}

/** Public site default: English at `/`; Indonesian at `/id/…`. */
export const defaultLang = 'en'

export const supportedLangs = ['en', 'id']

/** URL prefix: empty for English (default), `/id` for Indonesian. */
export function langPrefix(lang) {
  return lang === defaultLang ? '' : `/${lang}`
}

const OG_LOCALE_MAP = {
  id: 'id_ID',
  en: 'en_US',
}

export function langToOgLocale(lang) {
  return OG_LOCALE_MAP[lang] || lang || ''
}

/** Strings always resolve from English if missing in the active locale (avoids recursion when defaultLang is id). */
const TRANSLATION_FALLBACK = 'en'

/** User-chosen UI language (persists across visits; survives refresh). */
const LOCALE_STORAGE_KEY = 'restro360_user_locale'

/** Legacy session hint from old geo detection — migrated once into localStorage. */
const LOCALE_HINT_KEY = 'restro360_locale_hint'
const LOCALE_HINT_TTL_MS = 7 * 24 * 60 * 60 * 1000

export function readUserLocalePreference() {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (!raw) return null
    const lang = String(raw).trim().toLowerCase()
    return supportedLangs.includes(lang) ? lang : null
  } catch {
    return null
  }
}

export function writeUserLocalePreference(lang) {
  if (typeof localStorage === 'undefined') return
  if (!supportedLangs.includes(lang)) return
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, lang)
  } catch {
    /* private mode / quota */
  }
}

export function readLocaleHintCache() {
  if (typeof sessionStorage === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(LOCALE_HINT_KEY)
    if (!raw) return null
    const { lang, t } = JSON.parse(raw)
    if (typeof lang !== 'string' || typeof t !== 'number') return null
    if (Date.now() - t > LOCALE_HINT_TTL_MS) {
      sessionStorage.removeItem(LOCALE_HINT_KEY)
      return null
    }
    return supportedLangs.includes(lang) ? lang : null
  } catch {
    return null
  }
}

export function writeLocaleHintCache(lang) {
  if (typeof sessionStorage === 'undefined') return
  if (!supportedLangs.includes(lang)) return
  try {
    sessionStorage.setItem(LOCALE_HINT_KEY, JSON.stringify({ lang, t: Date.now() }))
  } catch {
    /* private mode */
  }
}

/** Language option for dropdown: flag emoji + label */
export const langOptions = {
  id: { flag: '🇮🇩', label: 'Bahasa Indonesia' },
  en: { flag: '🇬🇧', label: 'English' },
}

/** Map full browser locale tags to app lang (ISO 639-1). */
const BROWSER_LANG_ALIASES = {
  'id-id': 'id',
  'en-us': 'en',
  'en-gb': 'en',
}

/**
 * Browser language list only (no geo cache). Used inside async geo resolver.
 */
export function getPreferredLangFromBrowser() {
  if (typeof navigator === 'undefined') return defaultLang
  const locales = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language]
  for (const locale of locales) {
    const full = (locale || '').toLowerCase().replace(/_/g, '-')
    if (BROWSER_LANG_ALIASES[full]) return BROWSER_LANG_ALIASES[full]
    const code = full.split('-')[0]
    if (BROWSER_LANG_ALIASES[code]) return BROWSER_LANG_ALIASES[code]
    if (supportedLangs.includes(code)) return code
  }
  return defaultLang
}

/**
 * Preferred lang for redirects / invalid URL recovery:
 * 1) explicit user choice (localStorage)
 * 2) one-time migration from legacy session geo hint
 * 3) default English (no IP lookup — fast first paint)
 */
export function getPreferredLang() {
  if (typeof window === 'undefined') return defaultLang
  const stored = readUserLocalePreference()
  if (stored) return stored
  const legacy = readLocaleHintCache()
  if (legacy) {
    writeUserLocalePreference(legacy)
    try {
      sessionStorage.removeItem(LOCALE_HINT_KEY)
    } catch {
      /* ignore */
    }
    return legacy
  }
  return defaultLang
}

export function getTranslation(lang, keyPath) {
  const langData = translations[lang] ?? translations[TRANSLATION_FALLBACK]
  const keys = keyPath.split('.')
  let value = langData
  for (const k of keys) {
    value = value?.[k]
  }
  if (value !== undefined && value !== null) return value
  if (lang !== TRANSLATION_FALLBACK) return getTranslation(TRANSLATION_FALLBACK, keyPath)
  return keyPath
}
