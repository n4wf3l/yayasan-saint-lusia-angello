import { useMemo, useState } from 'react'
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
  MapPin,
  MessageCircle,
  ScrollText,
  Shield,
  Shirt,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { BANK } from '../config'

type Frequency = 'once' | 'monthly'

type Tier = {
  amountKey: TranslationKey
  descKey: TranslationKey
  rawAmount: string
}

const tiers: Tier[] = [
  { amountKey: 'donate.tier1Amount', descKey: 'donate.tier1Desc', rawAmount: 'Rp 150.000' },
  { amountKey: 'donate.tier2Amount', descKey: 'donate.tier2Desc', rawAmount: 'Rp 500.000' },
  { amountKey: 'donate.tier3Amount', descKey: 'donate.tier3Desc', rawAmount: 'Rp 1.100.000' },
  { amountKey: 'donate.tierCustom', descKey: 'donate.tierCustomDesc', rawAmount: '' },
]

export function Donate() {
  const { t } = useLanguage()
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const [selected, setSelected] = useState(2)
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

  const whatsappHref = useMemo(() => {
    const tier = tiers[selected]
    const amount = tier.rawAmount || '____'
    const template =
      frequency === 'monthly' ? t('donate.waMonthlyMsg') : t('donate.waOnceMsg')
    const message = template.replace('{amount}', amount)
    return `https://wa.me/6281231121166?text=${encodeURIComponent(message)}`
  }, [frequency, selected, t])

  return (
    <section id="donate" className="py-20 sm:py-28 border-t border-slate-200 bg-brand-50/30">
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

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-4 py-2 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              {t('donate.currentMonthLabel')}
            </span>
            <span className="text-slate-800">
              {t('donate.currentMonthValue')}
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <GivingPicker
              frequency={frequency}
              setFrequency={setFrequency}
              selected={selected}
              setSelected={setSelected}
              whatsappHref={whatsappHref}
            />
          </div>

          <div className="lg:col-span-2 space-y-5">
            <AccountCard copied={copied} onCopy={copyAccount} />
            <TrustStrip />
          </div>
        </div>

        <GoodsCard />
        <MonthlyBudget />
        <UrgentNeeds />
      </div>
    </section>
  )
}

function GivingPicker({
  frequency,
  setFrequency,
  selected,
  setSelected,
  whatsappHref,
}: {
  frequency: Frequency
  setFrequency: (f: Frequency) => void
  selected: number
  setSelected: (n: number) => void
  whatsappHref: string
}) {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {t('donate.tierTitle')}
      </div>

      <div
        className="mt-4 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1"
        role="group"
      >
        {(['monthly', 'once'] as Frequency[]).map((f) => {
          const active = frequency === f
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                active
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-pressed={active}
            >
              {f === 'monthly'
                ? t('donate.frequencyMonthly')
                : t('donate.frequencyOnce')}
            </button>
          )
        })}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {tiers.map((tier, i) => {
          const active = selected === i
          return (
            <button
              key={tier.amountKey}
              type="button"
              onClick={() => setSelected(i)}
              className={`text-left rounded-xl border p-4 transition ${
                active
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
              aria-pressed={active}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-lg font-medium text-slate-900">
                  {t(tier.amountKey)}
                </span>
                {active && (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                {t(tier.descKey)}
              </div>
            </button>
          )
        })}
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        <MessageCircle className="h-4 w-4" />
        {t('donate.sendViaWa')}
        <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-slate-500 leading-relaxed">
        {t('donate.commitLine')}
      </p>
    </div>
  )
}

function AccountCard({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">
        {t('donate.financialBank')}
      </div>
      <div className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-wide">
        {t('donate.financialAccount')}
      </div>
      <div className="mt-1 text-sm text-slate-300">
        {t('donate.financialName')}
      </div>
      <button
        onClick={onCopy}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-brand-500 hover:text-white"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? t('donate.financialCopied') : t('donate.financialCopy')}
      </button>
    </div>
  )
}

function TrustStrip() {
  const { t } = useLanguage()
  return (
    <ul className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
      <TrustItem icon={<Shield className="h-4 w-4" />} text={t('donate.trustAccount')} />
      <TrustItem icon={<ScrollText className="h-4 w-4" />} text={t('donate.trustLegal')} />
      <TrustItem icon={<MapPin className="h-4 w-4" />} text={t('donate.trustVisit')} />
    </ul>
  )
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-brand-700">{icon}</span>
      <span className="leading-relaxed">{text}</span>
    </li>
  )
}

function GoodsCard() {
  const { t } = useLanguage()
  return (
    <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center justify-center rounded-full bg-brand-100 p-2.5 text-brand-700">
            <Shirt className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-xl font-medium text-slate-900">
            {t('donate.goodsTitle')}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {t('donate.goodsDesc')}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            <HandHeart className="h-4 w-4" />
            {t('donate.goodsCta')}
          </a>
        </div>
        <ul className="lg:col-span-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
          <li>— {t('donate.goodsList1')}</li>
          <li>— {t('donate.goodsList2')}</li>
          <li>— {t('donate.goodsList3')}</li>
          <li>— {t('donate.goodsList4')}</li>
        </ul>
      </div>
    </div>
  )
}

function MonthlyBudget() {
  const { t } = useLanguage()
  return (
    <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
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
            <li key={n.titleKey} className="border-l-2 border-red-500 pl-5">
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
