import { Clock, Instagram, Mail, MapPin, MessageCircle, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { TikTokIcon } from '../components/TikTokIcon'
import { CONTACT, INSTAGRAM_URL, TIKTOK_URL, YOUTUBE_URL } from '../config'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
            {t('contact.chip')}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-medium leading-tight text-slate-900">
            {t('contact.title')}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            {t('contact.lead')}
          </p>

          <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              {t('contact.phoneRole')}
            </div>
            <div className="mt-1 font-display text-xl font-medium text-slate-900">
              {CONTACT.contactName}
            </div>
            <a
              href={CONTACT.phoneHref}
              className="mt-1 block text-sm text-slate-700 hover:text-brand-700"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.phoneWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t('contact.whatsappCta')}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-6">
          <Row
            icon={<MapPin className="h-5 w-5" />}
            title={t('contact.addressTitle')}
            body={t('contact.addressValue')}
          />
          <Row
            icon={<Mail className="h-5 w-5" />}
            title={t('contact.emailTitle')}
            body={CONTACT.email}
            link={`mailto:${CONTACT.email}`}
          />
          <Row
            icon={<Clock className="h-5 w-5" />}
            title={t('contact.hoursTitle')}
            body={t('contact.hoursValue')}
          />
          <div className="pt-6 border-t border-slate-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Social
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Social
                href={YOUTUBE_URL}
                icon={<Youtube className="h-4 w-4" />}
                label="YouTube · @ysla-25"
              />
              <Social
                href={INSTAGRAM_URL}
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram · @yayasansaintlusiaangello"
              />
              <Social
                href={TIKTOK_URL}
                icon={<TikTokIcon className="h-4 w-4" />}
                label="TikTok · @ysla.50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({
  icon,
  title,
  body,
  link,
}: {
  icon: React.ReactNode
  title: string
  body: string
  link?: string
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 text-brand-600 pt-0.5">{icon}</div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </div>
        {link ? (
          <a href={link} className="mt-1 block text-base text-slate-900 hover:text-brand-700">
            {body}
          </a>
        ) : (
          <div className="mt-1 text-base text-slate-900 leading-relaxed">{body}</div>
        )}
      </div>
    </div>
  )
}

function Social({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-brand-500 hover:text-brand-700"
    >
      {icon}
      {label}
    </a>
  )
}
