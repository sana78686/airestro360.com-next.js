/**
 * Re-export for bundler resolution (some dev builds resolve `@/utils/breadcrumbTrail` to `.js` first).
 * Implementation: `./breadcrumbTrail.ts`
 */
export { buildCompressPdfBreadcrumbItems, stripLocalePrefix } from './breadcrumbTrail.ts'
