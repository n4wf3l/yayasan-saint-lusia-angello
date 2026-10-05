import {
  BookOpenCheck,
  HeartHandshake,
  Home,
  Palette,
  Soup,
  Stethoscope,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type Program = {
  icon: LucideIcon
  titleKey: TranslationKey
  descKey: TranslationKey
  color: string
}

const programs: Program[] = [
  { icon: Home, titleKey: 'programs.p1Title', descKey: 'programs.p1Desc', color: 'from-brand-400 to-brand-600' },
  { icon: BookOpenCheck, titleKey: 'programs.p2Title', descKey: 'programs.p2Desc', color: 'from-ocean-400 to-ocean-600' },
  { icon: Soup, titleKey: 'programs.p3Title', descKey: 'programs.p3Desc', color: 'from-amber-400 to-orange-500' },
  { icon: Stethoscope, titleKey: 'programs.p4Title', descKey: 'programs.p4Desc', color: 'from-rose-400 to-pink-500' },
  { icon: Palette, titleKey: 'programs.p5Title', descKey: 'programs.p5Desc', color: 'from-violet-400 to-indigo-500' },
  { icon: HeartHandshake, titleKey: 'programs.p6Title', descKey: 'programs.p6Desc', color: 'from-emerald-400 to-teal-500' },
]

export function Programs() {
  const { t } = useLanguage()

  return (
    <section id="programs" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('programs.chip')}</span>
          <h2 className="section-title mt-4">{t('programs.title')}</h2>
          <p className="section-lead">{t('programs.lead')}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const Icon = p.icon
            return (
              <article
                key={p.titleKey}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} p-3 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 font-display">
                  {t(p.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t(p.descKey)}
                </p>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-brand-100 opacity-0 blur-3xl transition group-hover:opacity-70" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
