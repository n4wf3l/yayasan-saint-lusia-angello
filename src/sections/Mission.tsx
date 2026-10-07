import { useLanguage } from '../i18n/LanguageProvider'

export function Mission() {
  const { t } = useLanguage()

  return (
    <section id="mission" className="py-16 sm:py-24 lg:py-28 bg-brand-50/40 border-y border-brand-100">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2">
          <article>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t('mission.visionTitle')}
            </div>
            <blockquote className="mt-4 font-display text-2xl sm:text-3xl font-medium italic leading-snug text-slate-900">
              « {t('mission.visionText')} »
            </blockquote>
          </article>

          <article>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t('mission.missionTitle')}
            </div>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              {t('mission.missionText')}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
