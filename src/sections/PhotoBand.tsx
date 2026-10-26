import { Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { asset } from '../config'

/** Full-bleed photo break before the Donate section, doubling as a call to action. */
export function PhotoBand() {
  const { t } = useLanguage()

  return (
    <section aria-label={t('band.title')} className="relative isolate overflow-hidden">
      <img
        src={asset('images/visit-donors.jpg')}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_60%]"
      />
      {/* Bottom shade on mobile (text spans the width), left shade from md (text sits on the left). */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/60 md:to-slate-900/5" />
      <div className="container-page flex min-h-[420px] flex-col justify-end py-14 sm:min-h-[480px] sm:py-20">
        <h2 className="max-w-2xl font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
          {t('band.title')}
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
          {t('band.lead')}
        </p>
        <div className="mt-7">
          <a href="#donate" className="btn-primary">
            <Heart className="h-4 w-4" />
            {t('band.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
