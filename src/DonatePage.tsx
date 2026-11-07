import { ArrowLeft } from 'lucide-react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Donate } from './sections/Donate'
import { Contact } from './sections/Contact'
import { LanguageSuggest } from './components/LanguageSuggest'
import { BackToTop } from './components/BackToTop'
import { useHomeHref, useLanguage } from './i18n/LanguageProvider'

/** Standalone donation page (/donasi/): a direct link to share on WhatsApp, Instagram or in campaigns. */
export function DonatePage() {
  const { t } = useLanguage()
  const homeHref = useHomeHref()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container-page pt-6 sm:pt-10">
          <a
            href={homeHref()}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('donatePage.back')}
          </a>
        </div>
        <Donate standalone />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <LanguageSuggest />
    </div>
  )
}
