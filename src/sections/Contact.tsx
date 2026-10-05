import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'

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
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title={t('contact.phoneTitle')}
              body="+62 21 1234 5678"
              link="tel:+622112345678"
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title={t('contact.emailTitle')}
              body="hello@saintlusiaangello.org"
              link="mailto:hello@saintlusiaangello.org"
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
}: {
  icon: React.ReactNode
  title: string
  body: string
  link?: string
}) {
  const content = (
    <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-lg">
      <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
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
  return link ? <a href={link}>{content}</a> : content
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
