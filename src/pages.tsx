import App from './App'
import { DonatePage } from './DonatePage'
import { LegalPage } from './LegalPage'
import type { Page } from './i18n/routes'

/** Top-level component of each page, shared by the browser entry and the prerender. */
export const PAGES: Record<Page, () => JSX.Element> = {
  home: App,
  donate: DonatePage,
  legal: LegalPage,
}
