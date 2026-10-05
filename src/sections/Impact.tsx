import { Quote } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type Testimonial = {
  quoteKey: TranslationKey
  authorKey: TranslationKey
  roleKey: TranslationKey
  image: string
}

const testimonials: Testimonial[] = [
  {
    quoteKey: 'impact.testimonial1',
    authorKey: 'impact.testimonial1Author',
    roleKey: 'impact.testimonial1Role',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
  },
  {
    quoteKey: 'impact.testimonial2',
    authorKey: 'impact.testimonial2Author',
    roleKey: 'impact.testimonial2Role',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
  },
  {
    quoteKey: 'impact.testimonial3',
    authorKey: 'impact.testimonial3Author',
    roleKey: 'impact.testimonial3Role',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  },
]

export function Impact() {
  const { t } = useLanguage()

  return (
    <section id="impact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-slate-900" aria-hidden />
      <div className="absolute inset-0 -z-10 opacity-30 dot-pattern" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/3 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip bg-white/10 text-brand-200">{t('impact.chip')}</span>
          <h2 className="section-title mt-4 text-white">{t('impact.title')}</h2>
          <p className="section-lead text-slate-300">{t('impact.lead')}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.authorKey}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10"
            >
              <Quote className="h-9 w-9 text-brand-400 opacity-70" />
              <blockquote className="mt-5 text-slate-100 leading-relaxed">
                "{t(item.quoteKey)}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                <img
                  src={item.image}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-400/60"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-white">{t(item.authorKey)}</div>
                  <div className="text-xs text-slate-400">{t(item.roleKey)}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
