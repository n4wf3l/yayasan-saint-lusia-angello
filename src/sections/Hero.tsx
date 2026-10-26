import { motion } from 'framer-motion'
import { ArrowRight, Heart, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { IndonesiaMap } from '../components/IndonesiaMap'
import { YOUTUBE_URL, asset } from '../config'

const HERO_PHOTO = asset('images/birthday-chesco.jpg')

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] items-center justify-center text-brand-400 sm:flex lg:w-[55%]"
      >
        {/* Wrapper matches the map's own 1200×460 viewBox so the photo can be placed in map coordinates. */}
        <div className="relative aspect-[1200/460] max-h-[520px] w-full">
          <IndonesiaMap
            className="h-full w-full opacity-90"
            pinColor="#dc2626"
            strokeColor="currentColor"
            fillOpacity={0.18}
            strokeWidth={1.6}
          />

          {/* Photo print pinned just south of Jakarta, in the empty sea below Java. */}
          <motion.figure
            initial={{ opacity: 0, y: 12, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.6, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[24%] top-[90%] hidden w-44 bg-white p-2 pb-3 shadow-xl shadow-slate-900/20 ring-1 ring-slate-900/5 lg:block xl:w-52"
          >
            <img
              src={HERO_PHOTO}
              alt={t('hero.photoAlt')}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="mt-2 text-center font-display text-sm italic text-slate-700">
              Meruya Selatan
            </figcaption>
          </motion.figure>
        </div>
      </motion.div>

      <div className="container-page relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
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
              className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-slate-700 hover:text-red-600"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                <Play className="h-3 w-3 fill-current" />
              </span>
              {t('hero.ctaYoutube')}
            </a>
          </div>

          {/* Below lg the map sits behind the text, so the photo goes in the flow instead. */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-10 overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/5 lg:hidden"
          >
            <img
              src={HERO_PHOTO}
              alt={t('hero.photoAlt')}
              className="aspect-[4/3] w-full object-cover object-[50%_40%]"
              loading="eager"
            />
          </motion.figure>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200 pt-7">
            <Stat value={t('hero.stat1Value')} label={t('hero.stat1Label')} />
            <Stat value={t('hero.stat2Value')} label={t('hero.stat2Label')} />
            <Stat value={t('hero.stat3Value')} label={t('hero.stat3Label')} />
          </dl>
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
      <dd className="mt-1 text-xs leading-snug text-slate-500">
        {label}
      </dd>
    </div>
  )
}
