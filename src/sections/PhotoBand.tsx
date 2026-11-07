import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { asset } from '../config'

/** Full-bleed photo break before the Donate section, doubling as a call to action. */
export function PhotoBand() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  // Photo drifts slower than the page (gentle parallax) and eases out of a light zoom as the band crosses the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12])

  return (
    <section ref={ref} aria-label={t('band.title')} className="relative isolate overflow-hidden">
      <motion.img
        src={asset('images/visit-donors.webp')}
        alt=""
        loading="lazy"
        style={{ y, scale }}
        className="absolute inset-x-0 -top-[15%] -z-10 h-[130%] w-full object-cover object-[50%_60%] will-change-transform"
      />
      {/* Bottom shade on mobile (text spans the width), left shade from md (text sits on the left). */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/60 md:to-slate-900/5" />
      <div className="container-page flex min-h-[420px] flex-col justify-end py-14 sm:min-h-[480px] sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl font-display text-[1.75rem] sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
          {t('band.title')}
        </motion.h2>
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
