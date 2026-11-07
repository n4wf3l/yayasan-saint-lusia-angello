import { ArrowLeft } from 'lucide-react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LanguageSuggest } from './components/LanguageSuggest'
import { useHomeHref, useLanguage } from './i18n/LanguageProvider'
import { legalContent } from './legal/content'
import type { LegalBlock } from './legal/content'

/** /legal/: privacy policy and legal information, one page per language. */
export function LegalPage() {
  const { t, language } = useLanguage()
  const homeHref = useHomeHref()
  const parts = legalContent(language, t('contact.addressValue'))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container-page max-w-3xl py-10 sm:py-16">
          <a
            href={homeHref()}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('donatePage.back')}
          </a>

          <h1 className="mt-6 font-display text-[2rem] sm:text-5xl font-medium leading-tight text-slate-900">
            {t('legal.title')}
          </h1>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label={t('legal.title')}>
            {parts.map((part) => (
              <a
                key={part.id}
                href={`#${part.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:border-slate-900"
              >
                {part.title}
              </a>
            ))}
          </nav>

          {parts.map((part) => (
            <section key={part.id} id={part.id} className="mt-14 scroll-mt-24 border-t border-slate-200 pt-10">
              <h2 className="font-display text-[1.6rem] sm:text-3xl font-medium text-slate-900">{part.title}</h2>
              {part.updated && <p className="mt-2 text-sm text-slate-500">{part.updated}</p>}
              {part.sections.map((section) => (
                <div key={section.id} className="mt-8">
                  <h3 className="text-base font-semibold text-slate-900">{section.title}</h3>
                  <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-slate-700">
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <LanguageSuggest />
    </div>
  )
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === 'p') return <p>{block.text}</p>
  if (block.kind === 'ul') {
    return (
      <ul className="list-disc space-y-1.5 pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {block.rows.map(([label, value]) => (
        <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-semibold text-slate-900">{label}</dt>
          <dd className="break-words text-sm text-slate-700 sm:col-span-2">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
