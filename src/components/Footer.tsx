import { Instagram, Mail, MapPin, Phone, ShieldCheck, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'
import { TikTokIcon } from './TikTokIcon'
import {
  CONTACT,
  INSTAGRAM_URL,
  LEGAL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from '../config'

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
            <div className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
              <div className="text-xs leading-relaxed">
                <div className="font-semibold text-emerald-300">
                  {t('footer.legalRegLabel')}
                </div>
                <div className="text-slate-400">{t('footer.legalReg')}</div>
                <div className="mt-1 text-[10px] text-slate-500 font-mono">
                  Kemenkumham {LEGAL.kemenkumham}
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-2 text-pink-300 transition hover:border-pink-400 hover:bg-gradient-to-tr hover:from-fuchsia-500 hover:to-amber-400 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/5 px-3 py-2 text-slate-200 transition hover:border-white hover:bg-black hover:text-white"
              >
                <TikTokIcon className="h-4 w-4" />
                <span className="text-xs font-semibold">TikTok</span>
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-2 text-red-300 transition hover:border-red-400 hover:bg-red-500 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
                <span className="text-xs font-semibold">YouTube</span>
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
                <div>
                  <div className="font-semibold text-white">
                    {CONTACT.contactName}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-brand-300">
                    {t('contact.phoneRole')}
                  </div>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-0.5 inline-block hover:text-brand-300"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-brand-300" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-300">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="h-4 w-4 shrink-0 mt-0.5 text-pink-400" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  @yayasansaintlusiaangello
                </a>
              </li>
              <li className="flex gap-3">
                <TikTokIcon className="h-4 w-4 shrink-0 mt-0.5 text-slate-200" />
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @ysla.50
                </a>
              </li>
              <li className="flex gap-3">
                <Youtube className="h-4 w-4 shrink-0 mt-0.5 text-red-400" />
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300"
                >
                  youtube.com/@ysla-25
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
