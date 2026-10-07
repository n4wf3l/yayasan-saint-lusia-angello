import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'

export function StickyDonate() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`lg:hidden fixed inset-x-3 bottom-3 z-40 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href="#donate"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-900/20 ring-1 ring-brand-700 transition hover:bg-brand-700"
      >
        <Heart className="h-4 w-4" />
        {t('sticky.cta')}
      </a>
    </div>
  )
}
