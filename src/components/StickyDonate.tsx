import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'

export function StickyDonate() {
  const { t } = useLanguage()
  const [pastHero, setPastHero] = useState(false)
  const [onDonate, setOnDonate] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    const donate = document.getElementById('donate')
    if (!hero) return
    const heroObs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' },
    )
    heroObs.observe(hero)
    let donateObs: IntersectionObserver | null = null
    if (donate) {
      donateObs = new IntersectionObserver(
        ([e]) => setOnDonate(e.isIntersecting),
        { threshold: 0.1 },
      )
      donateObs.observe(donate)
    }
    return () => {
      heroObs.disconnect()
      donateObs?.disconnect()
    }
  }, [])

  const visible = pastHero && !onDonate

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href="#donate"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/25 ring-1 ring-brand-700 active:bg-brand-700"
      >
        <Heart className="h-4 w-4" />
        {t('sticky.cta')}
      </a>
    </div>
  )
}
