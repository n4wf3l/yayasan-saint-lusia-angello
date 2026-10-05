import { CheckCircle2, Compass, Target } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

const valueKeys: TranslationKey[] = [
  'mission.value1',
  'mission.value2',
  'mission.value3',
  'mission.value4',
]

export function Mission() {
  const { t } = useLanguage()

  return (
    <section id="mission" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ocean-50 via-cream to-brand-50" aria-hidden />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('mission.chip')}</span>
          <h2 className="section-title mt-4">{t('mission.title')}</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card
            icon={<Compass className="h-6 w-6" />}
            title={t('mission.visionTitle')}
            body={t('mission.visionText')}
            accent="ocean"
          />
          <Card
            icon={<Target className="h-6 w-6" />}
            title={t('mission.missionTitle')}
            body={t('mission.missionText')}
            accent="brand"
          />
          <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-xl">
            <div className="inline-flex items-center justify-center rounded-xl bg-white/10 p-3">
              <CheckCircle2 className="h-6 w-6 text-brand-300" />
            </div>
            <h3 className="mt-5 text-xl font-bold font-display">
              {t('mission.valuesTitle')}
            </h3>
            <ul className="mt-4 space-y-3">
              {valueKeys.map((k) => (
                <li key={k} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({
  icon,
  title,
  body,
  accent,
}: {
  icon: React.ReactNode
  title: string
  body: string
  accent: 'brand' | 'ocean'
}) {
  const bg = accent === 'brand' ? 'bg-brand-100 text-brand-600' : 'bg-ocean-100 text-ocean-600'
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl">
      <div className={`inline-flex items-center justify-center rounded-xl p-3 ${bg}`}>
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-900 font-display">{title}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed">{body}</p>
    </div>
  )
}
