import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-cream to-cream"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[70%] opacity-50 dot-pattern"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-20 right-0 -z-10 h-80 w-80 rounded-full bg-ocean-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 animate-slide-up">
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5" />
            {t('hero.badge')}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-slate-900">
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
            <br />
            {t('hero.title3')}
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#donate" className="btn-primary">
              <Heart className="h-4 w-4" />
              {t('hero.ctaPrimary')}
            </a>
            <a href="#about" className="btn-secondary">
              {t('hero.ctaSecondary')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            <Stat value={t('hero.stat1Value')} label={t('hero.stat1Label')} />
            <Stat value={t('hero.stat2Value')} label={t('hero.stat2Label')} />
            <Stat value={t('hero.stat3Value')} label={t('hero.stat3Label')} />
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <HeroArtwork />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-bold text-brand-600 font-display">{value}</dt>
      <dd className="mt-1 text-xs sm:text-sm text-slate-500">{label}</dd>
    </div>
  )
}

function HeroArtwork() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-brand-400 to-brand-600 shadow-2xl shadow-brand-500/30 rotate-3" />
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-white shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&w=900&q=80"
          alt="Smiling children at the orphanage"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="rounded-2xl bg-white/90 backdrop-blur px-4 py-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-brand-100 p-2">
                <Heart className="h-4 w-4 text-brand-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">
                  120+ anak • 120+ kids
                </div>
                <div className="text-slate-500 text-xs">
                  Growing stronger every day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 right-0 rounded-2xl bg-white px-4 py-3 shadow-xl animate-float">
        <div className="text-[11px] uppercase tracking-wider text-brand-600 font-bold">
          Since 2010
        </div>
        <div className="text-sm font-semibold text-slate-900">15 years of love</div>
      </div>
    </div>
  )
}
