import {
  BookOpen,
  Clock,
  Moon,
  Smile,
  Sparkles,
  Sun,
  Sunrise,
  Users,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type ScheduleItem = {
  icon: LucideIcon
  key: TranslationKey
}

const weekdays: ScheduleItem[] = [
  { icon: Sunrise, key: 'daily.weekday1' },
  { icon: BookOpen, key: 'daily.weekday2' },
  { icon: Clock, key: 'daily.weekday3' },
  { icon: Sun, key: 'daily.weekday4' },
  { icon: Sparkles, key: 'daily.weekday5' },
  { icon: Moon, key: 'daily.weekday6' },
]

const weekend: ScheduleItem[] = [
  { icon: BookOpen, key: 'daily.weekend1' },
  { icon: Users, key: 'daily.weekend2' },
  { icon: Smile, key: 'daily.weekend3' },
]

export function DailyLife() {
  const { t } = useLanguage()

  return (
    <section id="daily" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('daily.chip')}</span>
          <h2 className="section-title mt-4">{t('daily.title')}</h2>
          <p className="section-lead">{t('daily.lead')}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScheduleCard
            title={t('daily.weekdaysTitle')}
            items={weekdays}
            icon={<Utensils className="h-5 w-5" />}
            accent="brand"
          />
          <ScheduleCard
            title={t('daily.weekendTitle')}
            items={weekend}
            icon={<Smile className="h-5 w-5" />}
            accent="ocean"
          />
        </div>
      </div>
    </section>
  )
}

function ScheduleCard({
  title,
  items,
  icon,
  accent,
}: {
  title: string
  items: ScheduleItem[]
  icon: React.ReactNode
  accent: 'brand' | 'ocean'
}) {
  const { t } = useLanguage()
  const headerClass =
    accent === 'brand'
      ? 'from-brand-500 to-brand-600'
      : 'from-ocean-500 to-ocean-600'
  const iconBg =
    accent === 'brand' ? 'bg-brand-100 text-brand-600' : 'bg-ocean-100 text-ocean-600'

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        className={`flex items-center gap-3 bg-gradient-to-r ${headerClass} px-6 py-4 text-white`}
      >
        <div className="rounded-lg bg-white/20 p-2">{icon}</div>
        <h3 className="text-lg font-bold font-display">{title}</h3>
      </div>
      <ol className="divide-y divide-slate-100">
        {items.map((it, idx) => {
          const Icon = it.icon
          return (
            <li key={it.key} className="flex items-center gap-4 px-6 py-4">
              <div
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-500 shadow ring-1 ring-slate-200">
                  {idx + 1}
                </span>
              </div>
              <div className="text-sm text-slate-800">{t(it.key)}</div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
