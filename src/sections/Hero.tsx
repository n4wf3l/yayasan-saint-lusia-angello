import { motion } from 'framer-motion'
import { ArrowRight, Heart, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { IndonesiaMap } from '../components/IndonesiaMap'
import { YOUTUBE_URL } from '../config'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] items-center justify-center text-brand-400 sm:flex lg:w-[55%]"
      >
        <IndonesiaMap
          className="h-full w-auto max-h-[520px] opacity-90"
          pinColor="#dc2626"
          strokeColor="currentColor"
          fillOpacity={0.18}
          strokeWidth={1.6}
        />
      </motion.div>

      <div className="container-page relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('hero.badge')}
          </div>

          <h1 className="mt-4 font-display text-[2rem] sm:text-5xl lg:text-[4.5rem] font-medium leading-[1.05] text-slate-900">
            {t('hero.title1')}{' '}
            <em className="italic text-brand-600">{t('hero.title2')}</em>{' '}
            {t('hero.title3')}
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700">
            {t('hero.subtitle')}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200 pt-7">
            <Stat value={t('hero.stat1Value')} label={t('hero.stat1Label')} />
            <Stat value={t('hero.stat2Value')} label={t('hero.stat2Label')} />
            <Stat value={t('hero.stat3Value')} label={t('hero.stat3Label')} />
          </dl>
        </div>

        <div className="lg:col-span-5 flex justify-center sm:hidden">
          <img
            src="/logo-yayasan.png"
            alt="Yayasan Saint Lusia Angello"
            className="h-40 w-40 object-contain drop-shadow-xl"
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
      <dt className="font-display text-2xl sm:text-3xl font-medium text-slate-900">
        {value}
      </dt>
      <dd className="mt-1 text-[11px] sm:text-xs leading-snug text-slate-500">
        {label}
      </dd>
    </div>
  )
}
