import { useLanguage } from '../i18n/LanguageProvider'
import type { TranslationKey } from '../i18n/translations'

type Photo = { src: string; captionKey: TranslationKey; span?: string }

const photos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    captionKey: 'gallery.cap1',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80',
    captionKey: 'gallery.cap2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    captionKey: 'gallery.cap3',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    captionKey: 'gallery.cap4',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    captionKey: 'gallery.cap5',
  },
  {
    src: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=600&q=80',
    captionKey: 'gallery.cap6',
  },
]

export function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="chip">{t('gallery.chip')}</span>
          <h2 className="section-title mt-4">{t('gallery.title')}</h2>
          <p className="section-lead">{t('gallery.lead')}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {photos.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-md ${p.span ?? ''}`}
            >
              <img
                src={p.src}
                alt={t(p.captionKey)}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-6 p-4 text-sm font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {t(p.captionKey)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
