import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type Moment = {
  src: string
  captionKey: TranslationKey
}

const moments: Moment[] = [
  { src: '/images/birthday-chesco.jpg', captionKey: 'moments.cap1' },
  { src: '/images/visit-donors.jpg', captionKey: 'moments.cap2' },
  { src: '/images/study-time.jpg', captionKey: 'moments.cap3' },
]

export function Moments() {
  const { t } = useLanguage()

  return (
    <section id="moments" className="py-16 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('moments.chip')}
          </div>
          <h2 className="mt-3 font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-slate-900">
            {t('moments.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('moments.lead')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          {moments.map((m) => (
            <figure key={m.src}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={m.src}
                  alt={t(m.captionKey)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 font-display italic text-base text-slate-700 leading-snug">
                {t(m.captionKey)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
