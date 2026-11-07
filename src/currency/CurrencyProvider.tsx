import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageProvider'
import RATES from '../data/rates.json'

// Donations are always paid in IDR (BRI / QRIS). Other currencies are only an
// approximate conversion shown next to the IDR amount.

export const CURRENCIES = [
  'IDR',
  'USD',
  'EUR',
  'GBP',
  'AUD',
  'SGD',
  'CHF',
  'CAD',
  'JPY',
  'MYR',
  'NZD',
  'HKD',
  'CNY',
  'KRW',
] as const
export type Currency = (typeof CURRENCIES)[number]

// IDR per 1 unit, fetched once per build by scripts/fetch-rates.mjs: visitors' browsers never call a rates API.
const IDR_PER_UNIT: Record<Currency, number> = RATES.idrPerUnit
// Older versions cached live rates in the browser; removed on first visit.
const LEGACY_RATES_KEY = 'yayasan-rates'
const CURRENCY_KEY = 'yayasan-currency'

// Timezones that don't follow their region's default below.
const TZ_CURRENCY: Record<string, Currency> = {
  'Europe/London': 'GBP',
  'Europe/Belfast': 'GBP',
  'Europe/Guernsey': 'GBP',
  'Europe/Jersey': 'GBP',
  'Europe/Isle_of_Man': 'GBP',
  'Europe/Zurich': 'CHF',
  'Europe/Busingen': 'CHF',
  'America/Toronto': 'CAD',
  'America/Vancouver': 'CAD',
  'America/Edmonton': 'CAD',
  'America/Winnipeg': 'CAD',
  'America/Halifax': 'CAD',
  'America/St_Johns': 'CAD',
  'America/Regina': 'CAD',
  'Asia/Singapore': 'SGD',
  'Asia/Tokyo': 'JPY',
  'Asia/Kuala_Lumpur': 'MYR',
  'Asia/Kuching': 'MYR',
  'Asia/Hong_Kong': 'HKD',
  'Asia/Shanghai': 'CNY',
  'Asia/Seoul': 'KRW',
  'Pacific/Auckland': 'NZD',
}

const INDONESIA_TZ = new Set(['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'])

// European timezones whose countries don't use the euro.
const NON_EURO_EUROPE = new Set([
  'Europe/Oslo',
  'Europe/Stockholm',
  'Europe/Copenhagen',
  'Europe/Warsaw',
  'Europe/Prague',
  'Europe/Budapest',
  'Europe/Bucharest',
  'Europe/Sofia',
  'Europe/Belgrade',
  'Europe/Moscow',
  'Europe/Istanbul',
  'Europe/Kiev',
  'Europe/Kyiv',
  'Europe/Minsk',
  'Europe/Chisinau',
  'Europe/Tirane',
  'Europe/Sarajevo',
  'Europe/Skopje',
])

function currencyFromTimezone(tz: string): Currency | null {
  if (TZ_CURRENCY[tz]) return TZ_CURRENCY[tz]
  if (INDONESIA_TZ.has(tz)) return 'IDR'
  if (tz.startsWith('Europe/')) return NON_EURO_EUROPE.has(tz) ? 'USD' : 'EUR'
  if (tz.startsWith('Australia/')) return 'AUD'
  if (tz.startsWith('America/') || tz.startsWith('US/')) return 'USD'
  return null
}

function detectInitialCurrency(): Currency {
  if (typeof window === 'undefined') return 'IDR'
  try {
    const stored = window.localStorage.getItem(CURRENCY_KEY)
    if (stored && (CURRENCIES as readonly string[]).includes(stored)) return stored as Currency
  } catch {
    /* storage unavailable */
  }
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
  return currencyFromTimezone(tz) ?? 'USD'
}

type CurrencyContextValue = {
  currency: Currency
  setCurrency: (c: Currency) => void
  /** Formatted approximate amount in the visitor's currency, or null when it is IDR. */
  convert: (idr: number) => string | null
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage()
  // Start in IDR so the prerendered HTML and the first browser render agree, then switch to the visitor's currency.
  const [currency, setCurrencyState] = useState<Currency>('IDR')
  useEffect(() => {
    setCurrencyState(detectInitialCurrency())
    try {
      window.localStorage.removeItem(LEGACY_RATES_KEY)
    } catch {
      /* storage unavailable */
    }
  }, [])
  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c)
    try {
      window.localStorage.setItem(CURRENCY_KEY, c)
    } catch {
      /* storage unavailable */
    }
  }, [])

  const convert = useCallback(
    (idr: number) => {
      if (currency === 'IDR') return null
      const value = idr / IDR_PER_UNIT[currency]
      // Match the page language so "€24.50" sits next to "IDR 500,000" consistently.
      return new Intl.NumberFormat(language === 'id' ? 'id-ID' : 'en-US', {
        style: 'currency',
        currency,
        ...(value >= 100 && { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      }).format(value)
    },
    [currency, language],
  )

  const value = useMemo(() => ({ currency, setCurrency, convert }), [currency, setCurrency, convert])

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}
