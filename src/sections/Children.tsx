import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type AgeGroup = {
  labelKey: TranslationKey
  count: number
}

const groups: AgeGroup[] = [
  { labelKey: 'children.ageBaby', count: 4 },
  { labelKey: 'children.ageToddler', count: 1 },
  { labelKey: 'children.ageSD', count: 8 },
  { labelKey: 'children.ageSMP', count: 5 },
  { labelKey: 'children.ageYouth', count: 2 },
]

type SampleChild = {
  nick: string
  age: string
  birthplace: string
}

const samples: SampleChild[] = [
  { nick: 'Liam', age: '10 bulan', birthplace: 'Jakarta' },
  { nick: 'Edgar', age: '3 tahun', birthplace: 'Jakarta' },
  { nick: 'Tommy', age: '9 tahun', birthplace: 'Ende, Flores' },
  { nick: 'Vianney', age: '14 tahun', birthplace: 'Nangaroro' },
]

export function Children() {
  const { t } = useLanguage()
  const total = groups.reduce((s, g) => s + g.count, 0)

  return (
    <section id="children" className="py-16 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('children.chip')}
          </div>
          <h2 className="mt-3 font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-slate-900">
            {t('children.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('children.lead')}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {groups.map((g) => {
                const pct = (g.count / total) * 100
                return (
                  <li key={g.labelKey}>
                    <div className="flex items-baseline justify-between">
                      <div className="text-sm font-medium text-slate-900">
                        {t(g.labelKey)}
                      </div>
                      <div className="font-display text-sm text-slate-500">
                        {g.count}
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full bg-brand-600"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {t('children.sampleIntro')}
            </div>
            <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {samples.map((c) => (
                <li
                  key={c.nick}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <div>
                    <div className="font-display text-lg font-medium text-slate-900">
                      {c.nick}
                    </div>
                    <div className="text-xs text-slate-500">{c.birthplace}</div>
                  </div>
                  <div className="text-sm text-slate-700">{c.age}</div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              {t('children.privacy')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
