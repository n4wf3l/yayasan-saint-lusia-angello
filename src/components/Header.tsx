import { useEffect, useRef, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { TranslationKey } from '../i18n/translations'

const navItems: { href: string; key: TranslationKey }[] = [
  { href: '#about', key: 'nav.about' },
  { href: '#impact', key: 'nav.impact' },
  { href: '#children', key: 'nav.children' },
  { href: '#daily', key: 'nav.daily' },
  { href: '#team', key: 'nav.team' },
  { href: '#contact', key: 'nav.contact' },
]

const HIDE_THRESHOLD = 80

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      const delta = y - lastY.current
      if (y > HIDE_THRESHOLD && delta > 4) {
        setHidden(true)
      } else if (delta < -4 || y <= HIDE_THRESHOLD) {
        setHidden(false)
      }
      lastY.current = y
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const hideClass = hidden && !open ? '-translate-y-full' : 'translate-y-0'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ${hideClass}`}
    >
      <div
        className={`transition-colors ${
          scrolled || open
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2.5 min-w-0" aria-label="Yayasan Saint Lusia Angello">
            <Logo className="h-9 w-9 shrink-0" />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="text-sm font-bold text-slate-900 truncate">
                Yayasan Saint Lusia Angello
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-brand-600">
                Jakarta Barat
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher compact />
            <a href="#donate" className="btn-primary">
              <Heart className="h-4 w-4" />
              {t('nav.donateCta')}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 h-11 text-sm font-semibold text-white shadow-sm active:bg-brand-700"
            >
              <Heart className="h-4 w-4" />
              {t('nav.donateCta')}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white w-11 h-11 text-slate-700 active:bg-slate-100"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-page py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 active:bg-slate-100"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
