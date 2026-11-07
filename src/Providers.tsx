import { StrictMode } from 'react'
import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageProvider'
import { CurrencyProvider } from './currency/CurrencyProvider'
import type { Language } from './i18n/translations'
import type { Page } from './i18n/routes'

/** Context shared by the browser (hydrate) and the build-time prerender. */
export function Providers({ page, lang, children }: { page: Page; lang: Language; children: ReactNode }) {
  return (
    <StrictMode>
      <LanguageProvider initialLanguage={lang} page={page}>
        <CurrencyProvider>
          {/* Honour the OS "reduce motion" setting for every framer-motion animation. */}
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </CurrencyProvider>
      </LanguageProvider>
    </StrictMode>
  )
}
