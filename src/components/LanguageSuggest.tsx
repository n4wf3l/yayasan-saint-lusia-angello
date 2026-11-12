import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, X } from 'lucide-react'
import { LANGUAGE_STORAGE_KEY, useLanguage } from '../i18n/LanguageProvider'
import { translations } from '../i18n/translations'
import type { Language } from '../i18n/translations'

const AUTO_HIDE_MS = 30_000

/**
 * First visit only: if the browser's language differs from the page's, offer the
 * other version instead of redirecting (redirects would hide a language from Google).
 * Written in the suggested language so the visitor can read it.
 */
export function LanguageSuggest() {
  const { language, setLanguage } = useLanguage()
  const [suggested, setSuggested] = useState<Language | null>(null)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(LANGUAGE_STORAGE_KEY)) return
    } catch {
      return
    }
    const browser: Language = navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
    if (browser !== language) setSuggested(browser)
    // Only on arrival: a later switch is the visitor's own choice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dismiss = () => {
    setSuggested(null)
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      /* storage unavailable */
    }
  }

  // Left alone for 30 s counts as a no: it goes away and, like the close button, does not come back.
  useEffect(() => {
    if (!suggested) return
    const timer = window.setTimeout(dismiss, AUTO_HIDE_MS)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggested])

  const copy = suggested ? translations[suggested] : null

  return (
    <AnimatePresence>
      {suggested && copy && (
        <motion.div
          key="lang-suggest"
          role="dialog"
          aria-label={copy['langSuggest.text']}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // Shown on arrival, while the phone's sticky Donate bar is still hidden: it can sit at the very bottom.
          className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pl-4 shadow-xl shadow-slate-900/10 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-sm"
        >
          <Globe className="h-5 w-5 shrink-0 text-brand-700" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="text-sm text-slate-700">{copy['langSuggest.text']}</p>
            <button
              type="button"
              onClick={() => {
                setSuggested(null)
                setLanguage(suggested)
              }}
              className="mt-1 inline-flex min-h-9 items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {copy['langSuggest.cta']}
            </button>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label={copy['langSuggest.dismiss']}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
