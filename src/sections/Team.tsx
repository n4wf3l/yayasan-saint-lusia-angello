import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type BoardMember = {
  roleKey: TranslationKey
  name: string
}

const board: BoardMember[] = [
  { roleKey: 'team.pembinaRole', name: 'Lusia Owa' },
  { roleKey: 'team.pengawasRole', name: 'Damianus Dera' },
  { roleKey: 'team.ketuaRole', name: 'Maximus Ali Perajaka' },
  { roleKey: 'team.sekretarisRole', name: 'Efentinus Ndruru' },
  { roleKey: 'team.bendaharaRole', name: 'Genoveva Mbena' },
]

export function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-16 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('team.chip')}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium leading-tight text-slate-900">
            {t('team.title')}
          </h2>

          <div className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {t('team.founderRole')}
            </div>
            <div className="mt-1 font-display text-2xl font-medium text-slate-900">
              {t('team.founderName')}
            </div>
            <div className="text-sm text-slate-500">
              Ende, Flores — Nusa Tenggara Timur
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {t('team.founderStory')}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {board.map((m) => (
              <li
                key={m.name}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <div className="font-display text-lg sm:text-xl font-medium text-slate-900">
                  {m.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 text-right">
                  {t(m.roleKey)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
