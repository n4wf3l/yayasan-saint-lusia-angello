import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Bus,
  Check,
  Copy,
  CreditCard,
  Download,
  Globe,
  GraduationCap,
  HandHeart,
  Home,
  Lightbulb,
  MapPin,
  MessageCircle,
  ScrollText,
  Share2,
  Shield,
  Shirt,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { BANK, DONATE_PAGE_URL, MONTHLY_PROGRESS, PAYPAL_URL, asset } from '../config'
import { CURRENCIES, useCurrency } from '../currency/CurrencyProvider'
import type { Currency } from '../currency/CurrencyProvider'

type Frequency = 'once' | 'monthly'
type Origin = 'local' | 'abroad'

type Tier = {
  amountKey: TranslationKey
  descKey: TranslationKey
  rawAmount: string
  idr?: number
}

const tiers: Tier[] = [
  { amountKey: 'donate.tier1Amount', descKey: 'donate.tier1Desc', rawAmount: 'Rp 150.000', idr: 150_000 },
  { amountKey: 'donate.tier2Amount', descKey: 'donate.tier2Desc', rawAmount: 'Rp 500.000', idr: 500_000 },
  { amountKey: 'donate.tier3Amount', descKey: 'donate.tier3Desc', rawAmount: 'Rp 1.100.000', idr: 1_100_000 },
  { amountKey: 'donate.tierCustom', descKey: 'donate.tierCustomDesc', rawAmount: '' },
]

const MONTHLY_NEED_IDR = MONTHLY_PROGRESS.goalIdr
const CUSTOM_TIER = tiers.findIndex((tier) => !tier.idr)
// Small presets so a modest gift feels as welcome as the larger tiers.
const CUSTOM_PRESETS = [20_000, 50_000, 100_000]

const formatRupiah = (idr: number) => `Rp ${idr.toLocaleString('id-ID')}`

export function Donate() {
  const { t } = useLanguage()
  const { currency, convert } = useCurrency()
  const monthlyNeedConverted = convert(MONTHLY_NEED_IDR)
  const hasProgress = MONTHLY_PROGRESS.raisedIdr !== null
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const [selected, setSelected] = useState(2)
  const [copied, setCopied] = useState(false)
  const [customIdr, setCustomIdr] = useState(0)
  // No method is shown until the donor says where they give from: QRIS and BRI only work inside Indonesia.
  const [origin, setOrigin] = useState<Origin | null>(null)

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
    const amount =
      selected === CUSTOM_TIER ? (customIdr > 0 ? formatRupiah(customIdr) : '____') : tier.rawAmount
    const template =
      frequency === 'monthly' ? t('donate.waMonthlyMsg') : t('donate.waOnceMsg')
    const message = template.replace('{amount}', amount)
    return `https://wa.me/6281231121166?text=${encodeURIComponent(message)}`
  }, [frequency, selected, customIdr, t])

  return (
    <section id="donate" className="py-16 sm:py-24 lg:py-28 border-t border-slate-200 bg-brand-50/30">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('donate.chip')}
          </div>
          <h2 className="mt-3 font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-slate-900">
            {t('donate.title')}
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('donate.lead')}
          </p>

          {hasProgress ? (
            <MonthlyProgress />
          ) : (
            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold text-brand-700">{t('donate.currentMonthLabel')}:</span>{' '}
              {t('donate.currentMonthValue')}
              {monthlyNeedConverted && (
                <span className="text-slate-500"> (≈ {monthlyNeedConverted})</span>
              )}
            </p>
          )}
        </div>

        {/* DOM order is the phone order: amount, then payment, then confirm.
            From lg the confirm card sits under the amount picker and payment fills the right column. */}
        <div className="mt-8 grid gap-5 sm:mt-12 lg:grid-cols-5 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-10 lg:gap-y-5">
          <div className="lg:col-span-3 lg:row-start-1">
            <GivingPicker
              frequency={frequency}
              setFrequency={setFrequency}
              selected={selected}
              setSelected={setSelected}
              customIdr={customIdr}
              setCustomIdr={setCustomIdr}
            />
          </div>

          <div className="space-y-5 lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1">
            <OriginPicker
              origin={origin}
              setOrigin={setOrigin}
              suggested={currency === 'IDR' ? 'local' : 'abroad'}
            />
            <AnimatePresence mode="wait" initial={false}>
              {origin && (
                <motion.div
                  key={origin}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  {origin === 'local' ? (
                    <>
                      <QrisCard />
                      <AccountCard copied={copied} onCopy={copyAccount} />
                    </>
                  ) : (
                    <PaypalCard />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden lg:block">
              <TrustStrip />
            </div>
          </div>

          <ConfirmCard whatsappHref={whatsappHref} />
          {/* On phones the trust notes come after the last step so they don't split the flow. */}
          <div className="lg:hidden">
            <TrustStrip />
          </div>
        </div>

        <ShareDonateLink />

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
  customIdr,
  setCustomIdr,
}: {
  frequency: Frequency
  setFrequency: (f: Frequency) => void
  selected: number
  setSelected: (n: number) => void
  customIdr: number
  setCustomIdr: (n: number) => void
}) {
  const { t } = useLanguage()
  const { currency, setCurrency, convert } = useCurrency()
  const customInput = useRef<HTMLInputElement>(null)
  const customConverted = customIdr > 0 ? convert(customIdr) : null
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <StepTitle n={1}>{t('donate.tierTitle')}</StepTitle>
        <label className="inline-flex items-center gap-2 text-xs text-slate-600">
          {t('donate.showIn')}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="min-h-9 rounded-full border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-900"
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
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
              className={`min-h-11 rounded-full px-5 text-xs font-semibold transition ${
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

      <div className="mt-5 grid grid-cols-2 gap-3">
        {tiers.map((tier, i) => {
          const active = selected === i
          const converted = tier.idr ? convert(tier.idr) : null
          return (
            <button
              key={tier.amountKey}
              type="button"
              onClick={() => {
                setSelected(i)
                if (i === CUSTOM_TIER) requestAnimationFrame(() => customInput.current?.focus())
              }}
              className={`text-left rounded-xl border p-3 sm:p-4 transition ${
                active
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
              aria-pressed={active}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-base sm:text-lg font-medium text-slate-900">
                  {t(tier.amountKey)}
                </span>
                {active && (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              {converted && (
                <div className="text-xs font-medium text-brand-700">≈ {converted}</div>
              )}
              <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                {t(tier.descKey)}
              </div>
            </button>
          )
        })}
      </div>

      {selected === CUSTOM_TIER && (
        <div className="mt-4 rounded-xl border border-brand-300 bg-brand-50/50 p-4">
          <label htmlFor="custom-amount" className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('donate.customLabel')}
          </label>
          <div className="mt-2 flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-600/20">
            <span className="text-base font-semibold text-slate-500">Rp</span>
            <input
              ref={customInput}
              id="custom-amount"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="0"
              value={customIdr > 0 ? customIdr.toLocaleString('id-ID') : ''}
              onChange={(e) => {
                // Keep digits only and cap at 1 billion so a stray paste cannot produce an absurd figure.
                const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
                setCustomIdr(Math.min(Number(digits) || 0, 1_000_000_000))
              }}
              className="w-full bg-transparent px-2 py-2 font-display text-lg text-slate-900 outline-none placeholder:text-slate-300"
            />
            {customConverted && (
              <span className="shrink-0 text-xs font-medium text-brand-700">≈ {customConverted}</span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {CUSTOM_PRESETS.map((idr) => (
              <button
                key={idr}
                type="button"
                onClick={() => setCustomIdr(idr)}
                aria-pressed={customIdr === idr}
                className={`min-h-9 rounded-full border px-3 text-xs font-semibold transition ${
                  customIdr === idr
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500'
                }`}
              >
                {formatRupiah(idr)}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-600">{t('donate.customHint')}</p>
        </div>
      )}

      {frequency === 'monthly' && <SahabatPerks />}

      {currency !== 'IDR' && (
        <p className="mt-4 text-xs text-slate-500 leading-relaxed">{t('donate.fxNote')}</p>
      )}
    </div>
  )
}

function StepTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
        {n}
      </span>
      <span className="text-sm font-semibold text-slate-900">{children}</span>
    </div>
  )
}

function ConfirmCard({ whatsappHref }: { whatsappHref: string }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 lg:col-span-3 lg:row-start-2">
      <StepTitle n={3}>{t('donate.confirmTitle')}</StepTitle>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('donate.confirmLead')}</p>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        <MessageCircle className="h-4 w-4" />
        {t('donate.sendViaWa')}
        <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-slate-500 leading-relaxed">{t('donate.commitLine')}</p>
    </div>
  )
}

function MonthlyProgress() {
  const { t, language } = useLanguage()
  const { convert } = useCurrency()
  const { month, goalIdr } = MONTHLY_PROGRESS
  const raised = MONTHLY_PROGRESS.raisedIdr ?? 0
  const pct = Math.min(100, Math.round((raised / goalIdr) * 100))
  const locale = language === 'id' ? 'id-ID' : 'en-US'
  const idr = (n: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
  const monthName = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(
    new Date(`${month}-01T00:00:00`),
  )
  const remaining = convert(Math.max(0, goalIdr - raised))

  return (
    <div className="mt-6 max-w-xl rounded-2xl border border-brand-300 bg-white p-5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
          {monthName}
        </span>
        <span className="font-display text-2xl font-medium text-slate-900">{pct}%</span>
      </div>
      <div
        className="mt-3 h-3 w-full overflow-hidden rounded-full bg-brand-100"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-brand-600" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-3 text-sm text-slate-700">
        {t('donate.progressRaised').replace('{raised}', idr(raised)).replace('{goal}', idr(goalIdr))}
        {remaining && pct < 100 && (
          <span className="text-slate-500">
            {' '}
            {t('donate.progressRemaining').replace('{amount}', remaining)}
          </span>
        )}
      </p>
    </div>
  )
}

const sahabatPerks: TranslationKey[] = [
  'donate.sahabatPerk1',
  'donate.sahabatPerk2',
  'donate.sahabatPerk3',
]

function SahabatPerks() {
  const { t } = useLanguage()
  return (
    <div className="mt-5 rounded-xl bg-slate-900 p-4 text-white sm:p-5">
      <div className="font-display text-base font-medium sm:text-lg">{t('donate.sahabatTitle')}</div>
      <p className="mt-1 hidden text-sm text-slate-300 sm:block">{t('donate.sahabatLead')}</p>
      <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-2.5 sm:text-sm">
        {sahabatPerks.map((key) => (
          <li key={key} className="flex gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function QrisCard() {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {t('donate.qrisTitle')}
      </div>
      <div className="mt-3 mx-auto max-w-[260px]">
        <img
          src={asset('images/qris.jpg')}
          alt="QRIS Yayasan Saint Lusia Angello"
          loading="lazy"
          className="block w-full rounded-lg"
        />
      </div>
      <div className="mt-3 text-center text-xs font-semibold tracking-wider text-slate-700">
        {t('donate.qrisNmid')}
      </div>
      <a
        href={asset('images/qris.jpg')}
        download="QRIS-Yayasan-Saint-Lusia-Angello.jpg"
        className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50"
      >
        <Download className="h-4 w-4" />
        {t('donate.qrisDownload')}
      </a>
      <p className="mt-3 text-xs text-slate-600 leading-relaxed">
        {t('donate.qrisInstruction')}
      </p>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed lg:hidden">
        {t('donate.qrisMobileHint')}
      </p>
    </div>
  )
}

/** Native share sheet on phones (WhatsApp, Instagram...), clipboard copy elsewhere. */
function ShareDonateLink() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: t('donate.shareText'), url: DONATE_PAGE_URL })
      } catch {
        /* dismissed */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(DONATE_PAGE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? t('donate.shareCopied') : t('donate.share')}
    </button>
  )
}

function OriginPicker({
  origin,
  setOrigin,
  suggested,
}: {
  origin: Origin | null
  setOrigin: (o: Origin) => void
  suggested: Origin
}) {
  const { t } = useLanguage()
  const options: { id: Origin; icon: LucideIcon; label: TranslationKey; hint: TranslationKey }[] = [
    { id: 'local', icon: MapPin, label: 'donate.originLocal', hint: 'donate.originLocalHint' },
    { id: 'abroad', icon: Globe, label: 'donate.originAbroad', hint: 'donate.originAbroadHint' },
  ]
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <StepTitle n={2}>{t('donate.originTitle')}</StepTitle>
      <div className="mt-3 grid grid-cols-2 gap-3" role="group">
        {options.map(({ id, icon: Icon, label, hint }) => {
          const active = origin === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setOrigin(id)}
              aria-pressed={active}
              className={`relative flex min-h-11 flex-col items-start gap-1 rounded-xl border p-3 text-left transition ${
                active
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'text-brand-700' : 'text-slate-500'}`} />
              <span className="text-sm font-semibold text-slate-900">{t(label)}</span>
              <span className="text-xs leading-snug text-slate-600">{t(hint)}</span>
              {id === suggested && !origin && (
                <span className="absolute right-2 top-2 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                  {t('donate.originSuggested')}
                </span>
              )}
            </button>
          )
        })}
      </div>
      {!origin && (
        <p className="mt-3 text-xs leading-relaxed text-slate-600">{t('donate.originPrompt')}</p>
      )}
    </div>
  )
}

function PaypalCard() {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <CreditCard className="h-4 w-4 text-brand-700" />
        {t('donate.paypalTitle')}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{t('donate.paypalLead')}</p>
      <a
        href={PAYPAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0070ba] px-5 text-sm font-semibold text-white transition hover:bg-[#005ea6]"
      >
        {t('donate.paypalCta')}
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">{t('donate.paypalNote')}</p>
    </div>
  )
}

function AccountCard({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">
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
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-slate-900 transition hover:bg-brand-500 hover:text-white"
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
            className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            <HandHeart className="h-4 w-4" />
            {t('donate.goodsCta')}
          </a>
        </div>
        <ul className="lg:col-span-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
          <li>{t('donate.goodsList1')}</li>
          <li>{t('donate.goodsList2')}</li>
          <li>{t('donate.goodsList3')}</li>
          <li>{t('donate.goodsList4')}</li>
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
            idr={10_000_000}
            desc={t('donate.budgetFoodDesc')}
          />
          <BudgetItem
            icon={<GraduationCap className="h-4 w-4" />}
            value={t('donate.budgetSchool')}
            idr={12_000_000}
            desc={t('donate.budgetSchoolDesc')}
          />
          <BudgetItem
            value={t('donate.budgetTotal')}
            idr={MONTHLY_NEED_IDR}
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
  idr,
  desc,
  highlight,
}: {
  icon?: React.ReactNode
  value: string
  idr: number
  desc: string
  highlight?: boolean
}) {
  const converted = useCurrency().convert(idr)
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
      {converted && (
        <div className={`text-xs font-medium ${highlight ? 'text-white' : 'text-brand-700'}`}>
          ≈ {converted}
        </div>
      )}
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
