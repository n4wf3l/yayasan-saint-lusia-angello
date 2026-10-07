import { useLanguage } from '../i18n/LanguageProvider'

export function Impact() {
  const { t } = useLanguage()

  return (
    <section id="impact" className="py-16 sm:py-24 lg:py-28 bg-slate-900 text-slate-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              {t('impact.chip')}
            </div>
            <h2 className="mt-3 font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
              {t('impact.title')}
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
              {t('impact.lead')}
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 self-end">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                {t('impact.donorsTitle')}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {t('impact.donorsLead')}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white">
                <li>— {t('impact.donor1')}</li>
                <li>— {t('impact.donor2')}</li>
                <li>— {t('impact.donor3')}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
