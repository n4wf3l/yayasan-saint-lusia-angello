import { BookOpen, Home, Shield, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type Feature = {
  icon: LucideIcon
  titleKey: TranslationKey
  descKey: TranslationKey
}

const features: Feature[] = [
  { icon: Shield, titleKey: 'about.feature1Title', descKey: 'about.feature1Desc' },
  { icon: BookOpen, titleKey: 'about.feature2Title', descKey: 'about.feature2Desc' },
  { icon: Utensils, titleKey: 'about.feature3Title', descKey: 'about.feature3Desc' },
  { icon: Home, titleKey: 'about.feature4Title', descKey: 'about.feature4Desc' },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Children reading together"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative mt-4 flex justify-end">
            <div className="w-2/3 aspect-video rounded-2xl overflow-hidden shadow-xl -mt-16 border-4 border-cream">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80"
                alt="Volunteer helping child"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="chip">{t('about.chip')}</span>
          <h2 className="section-title mt-4">{t('about.title')}</h2>
          <p className="section-lead">{t('about.p1')}</p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('about.p2')}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.titleKey}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-brand-100 p-2.5 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {t(f.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {t(f.descKey)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
