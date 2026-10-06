import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
  Youtube,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { TikTokIcon } from '../components/TikTokIcon'
import { CONTACT, INSTAGRAM_URL, TIKTOK_URL, YOUTUBE_URL } from '../config'

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-ocean-50/50 to-cream" aria-hidden />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('contact.chip')}</span>
          <h2 className="section-title mt-4">{t('contact.title')}</h2>
          <p className="section-lead">{t('contact.lead')}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title={t('contact.addressTitle')}
              body={t('contact.addressValue')}
            />
            <a
              href={CONTACT.phoneWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border-2 border-brand-500 bg-gradient-to-br from-brand-500 to-brand-600 p-5 text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/15 p-2.5">
                  <UserRound className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-100">
                    {t('contact.phoneRole')}
                  </div>
                  <div className="mt-1 text-lg font-bold">{CONTACT.contactName}</div>
                  <a
                    href={CONTACT.phoneHref}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {CONTACT.phone}
                  </a>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {t('contact.whatsappCta')}
                  </div>
                </div>
              </div>
            </a>
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title={t('contact.emailTitle')}
              body={CONTACT.email}
              link={`mailto:${CONTACT.email}`}
            />
            <InfoCard
              icon={<Youtube className="h-5 w-5" />}
              title="YouTube"
              body="@ysla-25"
              link={YOUTUBE_URL}
              external
              accent="red"
            />
            <InfoCard
              icon={<Instagram className="h-5 w-5" />}
              title="Instagram"
              body="@yayasansaintlusiaangello"
              link={INSTAGRAM_URL}
              external
              accent="pink"
            />
            <InfoCard
              icon={<TikTokIcon className="h-5 w-5" />}
              title="TikTok"
              body="@ysla.50"
              link={TIKTOK_URL}
              external
              accent="dark"
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title={t('contact.hoursTitle')}
              body={t('contact.hoursValue')}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xl shadow-brand-500/5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t('contact.formName')} name="name" required />
              <Field label={t('contact.formEmail')} name="email" type="email" required />
            </div>
            <div className="mt-5">
              <Field label={t('contact.formSubject')} name="subject" required />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('contact.formMessage')}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/30"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                <Send className="h-4 w-4" />
                {t('contact.formSubmit')}
              </button>
              <span className="text-xs text-slate-500">
                {sent ? '✓ Message sent' : t('contact.formNote')}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  body,
  link,
  external,
  accent = 'brand',
}: {
  icon: React.ReactNode
  title: string
  body: string
  link?: string
  external?: boolean
  accent?: 'brand' | 'red' | 'pink' | 'dark'
}) {
  const iconStyle = {
    brand: 'bg-brand-100 text-brand-600 group-hover:bg-brand-500',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-600',
    pink: 'bg-pink-100 text-pink-600 group-hover:bg-gradient-to-tr group-hover:from-fuchsia-500 group-hover:to-amber-400',
    dark: 'bg-slate-100 text-slate-900 group-hover:bg-slate-900',
  }[accent]
  const hoverBorder = {
    brand: 'hover:border-brand-300',
    red: 'hover:border-red-300',
    pink: 'hover:border-pink-300',
    dark: 'hover:border-slate-400',
  }[accent]
  const content = (
    <div className={`group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-lg ${hoverBorder}`}>
      <div className={`rounded-xl p-2.5 transition group-hover:text-white ${iconStyle}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </div>
        <div className="mt-1 text-sm text-slate-800 leading-relaxed">{body}</div>
      </div>
    </div>
  )
  if (!link) return content
  return external ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <a href={link}>{content}</a>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/30"
      />
    </div>
  )
}
