import { useLanguage } from '../i18n/LanguageProvider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('about.chip')}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium leading-tight text-slate-900">
            {t('about.title')}
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-base sm:text-lg leading-relaxed text-slate-700">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
    </section>
  )
}
