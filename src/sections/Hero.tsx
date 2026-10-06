import { ArrowRight, Heart, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { YOUTUBE_URL } from '../config'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('hero.badge')}
          </div>

          <h1 className="mt-5 font-display text-[2.5rem] sm:text-6xl lg:text-[4.5rem] font-medium leading-[1.02] text-slate-900">
            {t('hero.title1')}{' '}
            <em className="italic text-brand-600">{t('hero.title2')}</em>{' '}
            {t('hero.title3')}
          </h1>

          <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700">
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
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-red-600"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                <Play className="h-3 w-3 fill-current" />
              </span>
              {t('hero.ctaYoutube')}
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <Stat value={t('hero.stat1Value')} label={t('hero.stat1Label')} />
            <Stat value={t('hero.stat2Value')} label={t('hero.stat2Label')} />
            <Stat value={t('hero.stat3Value')} label={t('hero.stat3Label')} />
          </dl>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <img
            src="/logo-yayasan.png"
            alt="Yayasan Saint Lusia Angello"
            className="h-56 w-56 sm:h-72 sm:w-72 object-contain drop-shadow-xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-medium text-slate-900">{value}</dt>
      <dd className="mt-1 text-xs text-slate-500">{label}</dd>
    </div>
  )
}
