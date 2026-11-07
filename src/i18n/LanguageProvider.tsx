import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Language, TranslationKey } from './translations'
import { pagePath } from './routes'
import type { Page } from './routes'

type LanguageContextValue = {
  language: Language
  page: Page
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const LANGUAGE_STORAGE_KEY = 'yayasan-lang'

const TITLE_KEY: Record<Page, TranslationKey> = {
  home: 'meta.homeTitle',
  donate: 'donatePage.docTitle',
  legal: 'legal.docTitle',
}

/**
 * The language comes from the URL (/ is Indonesian, /en/ is English), so every
 * version has its own address that search engines can index. Switching updates
 * the page in place and swaps the URL without a reload.
 */
export function LanguageProvider({
  initialLanguage,
  page,
  children,
}: {
  initialLanguage: Language
  page: Page
  children: ReactNode
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang)
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
      } catch {
        /* storage unavailable */
      }
      window.history.replaceState(null, '', pagePath(page, lang) + window.location.hash)
    },
    [page],
  )

  const t = useCallback(
    (key: TranslationKey) => translations[language][key] ?? key,
    [language],
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t(TITLE_KEY[page])
  }, [language, page, t])

  const value = useMemo(() => ({ language, page, setLanguage, t }), [language, page, setLanguage, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Link to the home page in the current language, optionally to one of its sections. */
export function useHomeHref() {
  const { language } = useLanguage()
  return useCallback((hash = '') => pagePath('home', language) + hash, [language])
}
