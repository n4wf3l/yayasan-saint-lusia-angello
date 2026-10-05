import { useState } from 'react'
import {
  ArrowRight,
  Banknote,
  Check,
  Copy,
  CreditCard,
  HandHeart,
  Shirt,
  Sofa,
  Sparkles,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

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
      await navigator.clipboard.writeText('1234567890')
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
                  {copied ? 'Copied' : 'Copy'}
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
