import { renderToString } from 'react-dom/server'
import { Providers } from './Providers'
import { PAGES } from './pages'
import type { Language } from './i18n/translations'
import type { Page } from './i18n/routes'

/** Build-time render of one page in one language, injected into its HTML by scripts/prerender.mjs. */
export function render(page: Page, lang: Language) {
  const Component = PAGES[page]
  return renderToString(
    <Providers page={page} lang={lang}>
      <Component />
    </Providers>,
  )
}
