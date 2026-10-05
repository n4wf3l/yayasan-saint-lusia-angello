import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      <div className="absolute inset-0 opacity-20 dot-pattern" aria-hidden />
      <div className="container-page relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <div className="leading-tight">
                <div className="text-base font-bold text-white">
                  Saint Lusia Angello
                </div>
                <div className="text-[11px] uppercase tracking-wider text-brand-300">
                  Yayasan • Jakarta
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {t('footer.tagline')}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-slate-700 p-2 transition hover:border-brand-400 hover:text-brand-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-slate-700 p-2 transition hover:border-brand-400 hover:text-brand-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full border border-slate-700 p-2 transition hover:border-brand-400 hover:text-brand-300"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#about" className="hover:text-brand-300">{t('nav.about')}</a></li>
              <li><a href="#mission" className="hover:text-brand-300">{t('nav.mission')}</a></li>
              <li><a href="#programs" className="hover:text-brand-300">{t('nav.programs')}</a></li>
              <li><a href="#impact" className="hover:text-brand-300">{t('nav.impact')}</a></li>
              <li><a href="#gallery" className="hover:text-brand-300">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="hover:text-brand-300">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('footer.support')}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#donate" className="hover:text-brand-300">{t('footer.supportDonate')}</a></li>
              <li><a href="#donate" className="hover:text-brand-300">{t('footer.supportGoods')}</a></li>
              <li><a href="#donate" className="hover:text-brand-300">{t('footer.supportVolunteer')}</a></li>
              <li><a href="#contact" className="hover:text-brand-300">{t('footer.supportPartner')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('nav.contact')}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-300" />
                <span>{t('contact.addressValue')}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-300" />
                <a href="tel:+622112345678" className="hover:text-brand-300">
                  +62 21 1234 5678
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-brand-300" />
                <a href="mailto:hello@saintlusiaangello.org" className="hover:text-brand-300">
                  hello@saintlusiaangello.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <div>
            © {year} Yayasan Saint Lusia Angello. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand-300">{t('footer.legalPrivacy')}</a>
            <a href="#" className="hover:text-brand-300">{t('footer.legalTerms')}</a>
            <a href="#" className="hover:text-brand-300">{t('footer.legalTransparency')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
