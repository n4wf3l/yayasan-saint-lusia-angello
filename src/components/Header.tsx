import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { TranslationKey } from '../i18n/translations'

const navItems: { href: string; key: TranslationKey }[] = [
  { href: '#about', key: 'nav.about' },
  { href: '#programs', key: 'nav.programs' },
  { href: '#impact', key: 'nav.impact' },
  { href: '#donate', key: 'nav.donate' },
  { href: '#gallery', key: 'nav.gallery' },
  { href: '#contact', key: 'nav.contact' },
]

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold text-slate-900">
              Yayasan Saint Lusia Angello
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
              Jakarta • Indonesia
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

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-page py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 justify-center"
              >
                <Heart className="h-4 w-4" />
                {t('nav.donateCta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
