import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { useHomeHref, useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ScrambleText } from './ScrambleText'
import type { TranslationKey } from '../i18n/translations'

const navSections: { hash: string; key: TranslationKey }[] = [
  { hash: '#about', key: 'nav.about' },
  { hash: '#impact', key: 'nav.impact' },
  { hash: '#children', key: 'nav.children' },
  { hash: '#daily', key: 'nav.daily' },
  { hash: '#team', key: 'nav.team' },
  { hash: '#contact', key: 'nav.contact' },
]

const HIDE_THRESHOLD = 80

const EASE = [0.22, 1, 0.36, 1] as const

// The panel drives its children: items stagger in top-down and leave bottom-up before the panel fades out.
const menuPanel = {
  closed: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn', when: 'afterChildren' } },
  open: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.04 } },
} as const

const menuList = {
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.04 } },
} as const

const menuItem = {
  closed: { opacity: 0, y: -10, transition: { duration: 0.18, ease: 'easeIn' } },
  open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
} as const

export function Header() {
  const { t } = useLanguage()
  const homeHref = useHomeHref()
  const navItems = navSections.map((s) => ({ href: homeHref(s.hash), key: s.key }))
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
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    if (open) document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
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
        <div className="container-page relative flex h-16 items-center justify-between gap-3">
          {/* With the phone menu open the logo glides to the centre (layout animation, no transform clash). */}
          <motion.a
            layout="position"
            transition={{ duration: 0.35, ease: EASE }}
            href={homeHref()}
            className={`flex items-center gap-2.5 min-w-0 ${open ? 'absolute inset-x-0 mx-auto w-fit lg:static lg:mx-0' : ''}`}
            aria-label="Yayasan Saint Lusia Angello"
          >
            <Logo className="h-9 w-9 shrink-0" />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="text-sm font-bold text-slate-900 truncate">
                Yayasan Saint Lusia Angello
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
                Jakarta Barat
              </span>
            </div>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <ScrambleText text={t(item.key)} />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher compact />
            <a href="#donate" className="btn-primary">
              <Heart className="h-4 w-4" />
              <ScrambleText text={t('nav.donateCta')} />
            </a>
          </div>

          {/* ml-auto keeps the close button on the right once the logo leaves the flow. */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            {/* The open menu has its own big Donate button at the bottom: no need for this one too. */}
            <AnimatePresence initial={false}>
              {!open && (
                <motion.a
                  key="top-donate"
                  href="#donate"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 h-11 text-sm font-semibold text-white shadow-sm active:bg-brand-700"
                >
                  <Heart className="h-4 w-4" />
                  <ScrambleText text={t('nav.donateCta')} />
                </motion.a>
              )}
            </AnimatePresence>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white w-11 h-11 text-slate-700 active:bg-slate-100"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Phone menu: full screen under the bar, big centred links, language and donate at the bottom. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={menuPanel}
            initial="closed"
            animate="open"
            exit="closed"
            // The header carries a transform, so `fixed` would resolve against it: size against the viewport instead.
            className="lg:hidden absolute inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-white"
          >
            <motion.nav
              variants={menuList}
              className="flex flex-1 flex-col items-center justify-center gap-1 px-6 py-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={menuItem}
                  className="w-full max-w-xs rounded-2xl px-4 py-3 text-center font-display text-[1.75rem] font-medium leading-tight text-slate-900 active:bg-brand-50 active:text-brand-700"
                >
                  <ScrambleText text={t(item.key)} />
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              variants={menuItem}
              className="flex flex-col items-center gap-4 border-t border-slate-200 px-6 pt-6"
              style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            >
              <LanguageSwitcher large />
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-base font-semibold text-white shadow-lg shadow-brand-900/20 active:bg-brand-700"
              >
                <Heart className="h-5 w-5" />
                <ScrambleText text={t('nav.donateCta')} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
