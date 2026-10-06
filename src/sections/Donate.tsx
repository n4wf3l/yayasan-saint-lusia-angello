import { useState } from 'react'
import {
  AlertCircle,
  ArrowRight,
  Banknote,
  Bus,
  Check,
  Copy,
  CreditCard,
  GraduationCap,
  HandHeart,
  Home,
  Lightbulb,
  Shirt,
  Sofa,
  Sparkles,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { BANK } from '../config'

type AmountOption = {
  valueKey: TranslationKey
  descKey: TranslationKey
}

const amounts: AmountOption[] = [
  { valueKey: 'donate.amount1', descKey: 'donate.amount1Desc' },
  { valueKey: 'donate.amount2', descKey: 'donate.amount2Desc' },
  { valueKey: 'donate.amount3', descKey: 'donate.amount3Desc' },
  { valueKey: 'donate.amount4', descKey: 'donate.amount4Desc' },
]

export function Donate() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(1)
  const [copied, setCopied] = useState(false)

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BANK.accountNumberRaw)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* no-op */
    }
  }

  return (
    <section id="donate" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-brand-50/60 to-cream" aria-hidden />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('donate.chip')}</span>
          <h2 className="section-title mt-4">{t('donate.title')}</h2>
          <p className="section-lead">{t('donate.lead')}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-brand-500/5 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-brand-500 p-3 text-white shadow-lg shadow-brand-500/30">
                <Banknote className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {t('donate.financialTitle')}
                </h3>
                <p className="text-sm text-slate-500">
                  {t('donate.financialDesc')}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('donate.amountsTitle')}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {amounts.map((a, i) => (
                  <button
                    key={a.valueKey}
                    onClick={() => setSelected(i)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selected === i
                        ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-500/30'
                        : 'border-slate-200 bg-white hover:border-brand-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-slate-900">
                        {t(a.valueKey)}
                      </span>
                      {selected === i && (
                        <span className="rounded-full bg-brand-500 p-1 text-white">
                          <Check className="h-3 w-3" />
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {t(a.descKey)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-300 font-semibold">
                <CreditCard className="h-4 w-4" />
                {t('donate.financialBank')}
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-display">
                    {t('donate.financialAccount')}
                  </div>
                  <div className="text-sm text-slate-300">
                    {t('donate.financialName')}
                  </div>
                </div>
                <button
                  onClick={copyAccount}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? t('donate.financialCopied') : t('donate.financialCopy')}
                </button>
              </div>
            </div>

            <a href="#contact" className="btn-primary mt-6 w-full justify-center">
              {t('donate.financialCta')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <DonateCard
              icon={<Shirt className="h-6 w-6" />}
              secondaryIcon={<Sofa className="h-5 w-5" />}
              title={t('donate.goodsTitle')}
              desc={t('donate.goodsDesc')}
              items={[
                t('donate.goodsList1'),
                t('donate.goodsList2'),
                t('donate.goodsList3'),
                t('donate.goodsList4'),
              ]}
              ctaHref="#contact"
              ctaLabel={t('donate.goodsCta')}
              accent="brand"
            />
            <DonateCard
              icon={<HandHeart className="h-6 w-6" />}
              title={t('donate.volunteerTitle')}
              desc={t('donate.volunteerDesc')}
              items={[
                t('donate.volunteerList1'),
                t('donate.volunteerList2'),
                t('donate.volunteerList3'),
              ]}
              ctaHref="#contact"
              ctaLabel={t('donate.volunteerCta')}
              accent="ocean"
            />
          </div>
        </div>

        <MonthlyBudget />
        <UrgentNeeds />
      </div>
    </section>
  )
}

function DonateCard({
  icon,
  secondaryIcon,
  title,
  desc,
  items,
  ctaHref,
  ctaLabel,
  accent,
}: {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  desc: string
  items: string[]
  ctaHref: string
  ctaLabel: string
  accent: 'brand' | 'ocean'
}) {
  const iconClass =
    accent === 'brand'
      ? 'bg-gradient-to-br from-brand-400 to-brand-600'
      : 'bg-gradient-to-br from-ocean-400 to-ocean-600'

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-2">
        <div className={`inline-flex items-center justify-center rounded-xl ${iconClass} p-3 text-white shadow-lg`}>
          {icon}
        </div>
        {secondaryIcon && (
          <div className="inline-flex items-center justify-center rounded-xl bg-slate-100 p-3 text-slate-600">
            {secondaryIcon}
          </div>
        )}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-900 font-display">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <a href={ctaHref} className="btn-secondary mt-5 w-full justify-center">
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}

function MonthlyBudget() {
  const { t } = useLanguage()
  return (
    <div className="mt-16 rounded-3xl bg-slate-900 p-7 sm:p-10 text-white shadow-2xl">
      <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
            <Lightbulb className="h-3.5 w-3.5" />
            Transparansi • Transparency
          </div>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold font-display">
            {t('donate.budgetTitle')}
          </h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            {t('donate.budgetLead')}
          </p>
        </div>

        <div className="lg:col-span-3 grid gap-3 sm:grid-cols-3">
          <BudgetItem
            icon={<Utensils className="h-5 w-5" />}
            value={t('donate.budgetFood')}
            desc={t('donate.budgetFoodDesc')}
          />
          <BudgetItem
            icon={<GraduationCap className="h-5 w-5" />}
            value={t('donate.budgetSchool')}
            desc={t('donate.budgetSchoolDesc')}
          />
          <BudgetItem
            icon={<Sparkles className="h-5 w-5" />}
            value={t('donate.budgetTotal')}
            desc={t('donate.budgetTotalDesc')}
            highlight
          />
        </div>
      </div>
    </div>
  )
}

function BudgetItem({
  icon,
  value,
  desc,
  highlight,
}: {
  icon: React.ReactNode
  value: string
  desc: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        highlight
          ? 'bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30'
          : 'bg-white/5 border border-white/10'
      }`}
    >
      <div
        className={`inline-flex items-center justify-center rounded-lg p-2 ${
          highlight ? 'bg-white/20 text-white' : 'bg-brand-500/20 text-brand-300'
        }`}
      >
        {icon}
      </div>
      <div className="mt-3 text-xl font-bold font-display text-white">{value}</div>
      <div className="mt-1 text-xs text-white/80 leading-relaxed">{desc}</div>
    </div>
  )
}

type UrgentNeed = {
  icon: LucideIcon
  titleKey: TranslationKey
  descKey: TranslationKey
}

const urgentNeeds: UrgentNeed[] = [
  { icon: Home, titleKey: 'donate.urgent1Title', descKey: 'donate.urgent1Desc' },
  { icon: Bus, titleKey: 'donate.urgent2Title', descKey: 'donate.urgent2Desc' },
  { icon: GraduationCap, titleKey: 'donate.urgent3Title', descKey: 'donate.urgent3Desc' },
  { icon: Lightbulb, titleKey: 'donate.urgent4Title', descKey: 'donate.urgent4Desc' },
]

function UrgentNeeds() {
  const { t } = useLanguage()
  return (
    <div id="urgent-needs" className="mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
            <AlertCircle className="h-3.5 w-3.5" />
            {t('donate.urgentChip')}
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            {t('donate.urgentTitle')}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {t('donate.urgentLead')}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {urgentNeeds.map((n, i) => {
          const Icon = n.icon
          return (
            <article
              key={n.titleKey}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">
                0{i + 1}
              </div>
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 p-3 text-white shadow-lg shadow-red-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-5 text-lg font-bold text-slate-900 font-display">
                {t(n.titleKey)}
              </h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {t(n.descKey)}
              </p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
