import { Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { Language } from '../i18n/translations'

const options: { code: Language; label: string }[] = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
]

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 backdrop-blur ${
        compact ? 'text-xs' : 'text-sm'
      }`}
      role="group"
      aria-label="Language"
    >
      <Globe className="ml-2 h-4 w-4 text-slate-500" aria-hidden />
      {options.map((opt) => {
        const active = opt.code === language
        return (
          <button
            key={opt.code}
            onClick={() => setLanguage(opt.code)}
            className={`rounded-full px-3 py-1 font-semibold transition ${
              active
                ? 'bg-brand-500 text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
