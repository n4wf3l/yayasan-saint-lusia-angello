import { createRoot, hydrateRoot } from 'react-dom/client'
import { Providers } from './Providers'
import { PAGES } from './pages'
import { LANGUAGE_STORAGE_KEY } from './i18n/LanguageProvider'
import { pagePath, parsePath } from './i18n/routes'
// Fraunces is bundled with the site (weight and optical-size axes): no request to Google Fonts.
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import './index.css'

/** Browser bootstrap shared by every HTML entry: picks the page from the URL and hydrates the prerendered markup. */
export function mount() {
  const { page, lang } = parsePath(window.location.pathname)

  // A visitor who already chose a language goes straight to that version. Crawlers keep no storage, so they always get the URL's language.
  let stored: string | null = null
  try {
    stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  } catch {
    /* storage unavailable */
  }
  if ((stored === 'id' || stored === 'en') && stored !== lang) {
    window.location.replace(pagePath(page, stored) + window.location.hash)
    return
  }

  const Page = PAGES[page]
  const tree = <Providers page={page} lang={lang}><Page /></Providers>
  const root = document.getElementById('root')!
  // Production HTML is prerendered at build time; the dev server serves an empty root.
  if (root.hasChildNodes()) hydrateRoot(root, tree)
  else createRoot(root).render(tree)
}
