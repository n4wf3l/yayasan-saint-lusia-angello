import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'
import { asset } from '../config'

type Moment = {
  src: string
  captionKey: TranslationKey
}

const moments: Moment[] = [
  { src: asset('images/birthday-chesco.jpg'), captionKey: 'moments.cap1' },
  { src: asset('images/visit-donors.jpg'), captionKey: 'moments.cap2' },
  { src: asset('images/study-time.jpg'), captionKey: 'moments.cap3' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export function Moments() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<Moment | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

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

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {moments.map((m, i) => (
            // The figure is the in-view trigger: a clip-path at 100% would hide the photo itself from the observer.
            <motion.figure
              key={m.src}
              initial={reduce ? false : 'hidden'}
              whileInView="shown"
              viewport={{ once: true, amount: 0.3 }}
              className="w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto"
            >
              {/* Curtain reveal: the frame wipes open from the bottom while the photo settles from a slight zoom. */}
              <motion.button
                type="button"
                onClick={() => setOpen(m)}
                aria-label={`${t('moments.open')}: ${t(m.captionKey)}`}
                variants={{
                  hidden: { clipPath: 'inset(100% 0% 0% 0% round 1rem)' },
                  shown: { clipPath: 'inset(0% 0% 0% 0% round 1rem)' },
                }}
                transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
                className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                {/* Hover zoom lives on a wrapper: framer-motion owns the img's inline transform. */}
                <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
                  <motion.img
                    layoutId={`moment-${m.src}`}
                    src={m.src}
                    alt={t(m.captionKey)}
                    loading="lazy"
                    variants={{ hidden: { scale: 1.18 }, shown: { scale: 1 } }}
                    transition={{ duration: 1.4, delay: i * 0.12, ease: EASE }}
                    style={{ opacity: open === m ? 0 : 1 }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-800 opacity-0 shadow-sm backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </motion.button>
              <motion.figcaption
                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
                className="mt-4 font-display italic text-base text-slate-700 leading-snug"
              >
                {t(m.captionKey)}
              </motion.figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={t(open.captionKey)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex cursor-zoom-out flex-col items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label={t('moments.close')}
              autoFocus
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Same layoutId as the thumbnail, so the photo grows out of its card. */}
            <motion.img
              layoutId={`moment-${open.src}`}
              src={open.src}
              alt={t(open.captionKey)}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-5 max-w-xl text-center font-display text-lg italic text-slate-200"
            >
              {t(open.captionKey)}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
