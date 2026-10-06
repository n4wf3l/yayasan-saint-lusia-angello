import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

const weekdays: TranslationKey[] = [
  'daily.weekday1',
  'daily.weekday2',
  'daily.weekday3',
  'daily.weekday4',
  'daily.weekday5',
  'daily.weekday6',
]

const weekend: TranslationKey[] = [
  'daily.weekend1',
  'daily.weekend2',
  'daily.weekend3',
]

export function DailyLife() {
  const { t } = useLanguage()

  return (
    <section id="daily" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('daily.chip')}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-medium leading-tight text-slate-900">
            {t('daily.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('daily.lead')}
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Column
            title={t('daily.weekdaysTitle')}
            items={weekdays.map((k) => t(k))}
          />
          <Column
            title={t('daily.weekendTitle')}
            items={weekend.map((k) => t(k))}
          />
        </div>
      </div>
    </section>
  )
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-display text-xl font-medium text-slate-900 pb-3 border-b border-slate-900">
        {title}
      </div>
      <ol className="mt-5 space-y-4">
        {items.map((text) => (
          <li
            key={text}
            className="flex gap-4 text-base text-slate-800 leading-relaxed"
          >
            <span className="font-display text-slate-400 shrink-0 w-6">·</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
