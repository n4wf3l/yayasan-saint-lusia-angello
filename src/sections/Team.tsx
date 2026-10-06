import { Crown, Eye, Scale, ScrollText, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type BoardMember = {
  roleKey: TranslationKey
  name: string
  icon: LucideIcon
  color: string
}

const board: BoardMember[] = [
  {
    roleKey: 'team.pembinaRole',
    name: 'Lusia Owa',
    icon: Crown,
    color: 'from-brand-500 to-brand-600',
  },
  {
    roleKey: 'team.pengawasRole',
    name: 'Damianus Dera',
    icon: Eye,
    color: 'from-ocean-500 to-ocean-600',
  },
  {
    roleKey: 'team.ketuaRole',
    name: 'Maximus Ali Perajaka',
    icon: Scale,
    color: 'from-amber-500 to-orange-600',
  },
  {
    roleKey: 'team.sekretarisRole',
    name: 'Efentinus Ndruru',
    icon: ScrollText,
    color: 'from-violet-500 to-indigo-600',
  },
  {
    roleKey: 'team.bendaharaRole',
    name: 'Genoveva Mbena',
    icon: Wallet,
    color: 'from-emerald-500 to-teal-600',
  },
]

export function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-brand-50/40 to-cream" aria-hidden />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('team.chip')}</span>
          <h2 className="section-title mt-4">{t('team.title')}</h2>
          <p className="section-lead">{t('team.lead')}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-stretch">
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 text-white shadow-2xl">
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                <Crown className="h-3.5 w-3.5" />
                {t('team.founderRole')}
              </div>
              <h3 className="mt-5 text-3xl font-bold font-display">
                {t('team.founderName')}
              </h3>
              <div className="mt-1 text-sm text-brand-100">
                Ende, Flores — Nusa Tenggara Timur
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/90">
                {t('team.founderStory')}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
            {board.map((m) => {
              const Icon = m.icon
              return (
                <article
                  key={m.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div
                    className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${m.color} p-2.5 text-white shadow-md`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {t(m.roleKey)}
                  </div>
                  <div className="mt-1 text-base font-bold text-slate-900">
                    {m.name}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
