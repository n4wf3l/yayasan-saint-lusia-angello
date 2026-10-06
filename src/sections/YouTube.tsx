import { ArrowRight, Film, HandHeart, Play, Sparkles, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import { YOUTUBE_URL } from '../config'

export function YouTubeSection() {
  const { t } = useLanguage()

  return (
    <section id="youtube" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-cream to-red-50/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 -z-10 h-80 w-80 rounded-full bg-red-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
              <Youtube className="h-3.5 w-3.5" />
              {t('youtube.chip')}
            </span>
            <h2 className="section-title mt-4">{t('youtube.title')}</h2>
            <p className="section-lead">{t('youtube.lead')}</p>

            <ul className="mt-8 space-y-3">
              <Feature
                icon={<Film className="h-5 w-5" />}
                label={t('youtube.feature1')}
              />
              <Feature
                icon={<HandHeart className="h-5 w-5" />}
                label={t('youtube.feature2')}
              />
              <Feature
                icon={<Sparkles className="h-5 w-5" />}
                label={t('youtube.feature3')}
              />
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700 hover:shadow-red-500/40"
              >
                <Youtube className="h-5 w-5" />
                {t('youtube.cta')}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-red-600"
              >
                {t('youtube.secondary')}
              </a>
            </div>
          </div>

          <div className="relative">
            <ChannelCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-700">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm ring-1 ring-red-100">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </li>
  )
}

function ChannelCard() {
  return (
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-slate-200/40 transition hover:-translate-y-1 hover:shadow-red-500/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
          alt="Yayasan Saint Lusia Angello YouTube channel"
          className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/50 transition group-hover:scale-110">
            <Play className="h-9 w-9 fill-current translate-x-0.5" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 bg-white px-6 py-5">
        <div className="flex items-center gap-4">
          <img
            src="/logo-yayasan.png"
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-100"
          />
          <div>
            <div className="font-bold text-slate-900">
              Yayasan Saint Lusia Angello
            </div>
            <div className="text-xs text-slate-500">@ysla-25 • YouTube</div>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white">
          <Youtube className="h-4 w-4" />
          Subscribe
        </span>
      </div>
    </a>
  )
}
