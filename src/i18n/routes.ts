import type { Language } from './translations'

/** The pages of the site; each exists in Indonesian (no prefix) and English (/en/). */
export type Page = 'home' | 'donate' | 'legal'

const SLUG: Record<Page, string> = { home: '', donate: 'donasi/', legal: 'legal/' }

const BASE = import.meta.env.BASE_URL

/** Production address, used where a link must work outside the site (sharing). */
export const PUBLIC_BASE = 'https://yayasansaintlusiaangello.org/'

const suffix = (page: Page, lang: Language) => `${lang === 'en' ? 'en/' : ''}${SLUG[page]}`

/** Site-relative path of a page in a language, e.g. /en/donasi/. */
export const pagePath = (page: Page, lang: Language) => `${BASE}${suffix(page, lang)}`

/** Absolute public URL of a page in a language. */
export const publicUrl = (page: Page, lang: Language) => `${PUBLIC_BASE}${suffix(page, lang)}`

/** Reads the page and language from a pathname such as /en/donasi/. */
export function parsePath(pathname: string): { page: Page; lang: Language } {
  const rest = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\//, '')
  const parts = rest.split('/').filter(Boolean)
  return {
    lang: parts[0] === 'en' ? 'en' : 'id',
    page: parts.includes('donasi') ? 'donate' : parts.includes('legal') ? 'legal' : 'home',
  }
}
