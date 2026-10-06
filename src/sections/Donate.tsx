import { useState } from 'react'
import {
  AlertCircle,
  ArrowRight,
  Bus,
  Check,
  Copy,
  GraduationCap,
  HandHeart,
  Home,
  Lightbulb,
  Shirt,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { BANK, CONTACT } from '../config'

export function Donate() {
  const { t } = useLanguage()
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
    <section id="donate" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('donate.chip')}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-medium leading-tight text-slate-900">
            {t('donate.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('donate.lead')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-slate-900 p-7 sm:p-9 text-white">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">
              {t('donate.financialTitle')} • {t('donate.financialBank')}
            </div>
            <div className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-wide">
              {t('donate.financialAccount')}
            </div>
            <div className="mt-1 text-sm text-slate-300">
              {t('donate.financialName')}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={copyAccount}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-brand-500 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? t('donate.financialCopied') : t('donate.financialCopy')}
              </button>
              <a
                href={CONTACT.phoneWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                {t('donate.financialCta')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <GoodsCard />
        </div>

        <MonthlyBudget />
        <UrgentNeeds />
      </div>
    </section>
  )
}

function GoodsCard() {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7">
      <div className="inline-flex items-center justify-center rounded-full bg-brand-100 p-2.5 text-brand-700">
        <Shirt className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-xl font-medium text-slate-900">
        {t('donate.goodsTitle')}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {t('donate.goodsDesc')}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-800">
        <li>— {t('donate.goodsList1')}</li>
        <li>— {t('donate.goodsList2')}</li>
        <li>— {t('donate.goodsList3')}</li>
        <li>— {t('donate.goodsList4')}</li>
      </ul>
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
      >
        <HandHeart className="h-4 w-4" />
        {t('donate.goodsCta')}
      </a>
    </div>
  )
}

function MonthlyBudget() {
  const { t } = useLanguage()
  return (
    <div className="mt-16 rounded-2xl border border-slate-200 p-7 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('donate.budgetTitle')}
          </div>
          <p className="mt-3 text-base text-slate-700 leading-relaxed">
            {t('donate.budgetLead')}
          </p>
        </div>

        <div className="lg:col-span-3 grid gap-3 sm:grid-cols-3">
          <BudgetItem
            icon={<Utensils className="h-4 w-4" />}
            value={t('donate.budgetFood')}
            desc={t('donate.budgetFoodDesc')}
          />
          <BudgetItem
            icon={<GraduationCap className="h-4 w-4" />}
            value={t('donate.budgetSchool')}
            desc={t('donate.budgetSchoolDesc')}
          />
          <BudgetItem
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
  icon?: React.ReactNode
  value: string
  desc: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-5 ${
        highlight ? 'bg-brand-600 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {icon && (
        <div
          className={`inline-flex items-center justify-center ${
            highlight ? 'text-white/80' : 'text-brand-600'
          }`}
        >
          {icon}
        </div>
      )}
      <div className="mt-2 font-display text-xl font-medium">{value}</div>
      <div
        className={`mt-1 text-xs leading-relaxed ${
          highlight ? 'text-white/80' : 'text-slate-500'
        }`}
      >
        {desc}
      </div>
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
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700">
        <AlertCircle className="h-4 w-4" />
        {t('donate.urgentChip')}
      </div>
      <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-slate-900">
        {t('donate.urgentTitle')}
      </h3>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 leading-relaxed">
        {t('donate.urgentLead')}
      </p>

      <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {urgentNeeds.map((n, i) => {
          const Icon = n.icon
          return (
            <li
              key={n.titleKey}
              className="border-l-2 border-red-500 pl-5"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-red-700">
                <Icon className="h-4 w-4" />
                0{i + 1}
              </div>
              <h4 className="mt-3 font-display text-lg font-medium text-slate-900">
                {t(n.titleKey)}
              </h4>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {t(n.descKey)}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
