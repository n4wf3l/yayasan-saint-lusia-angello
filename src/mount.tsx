import { StrictMode } from 'react'
import type { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageProvider'
import { CurrencyProvider } from './currency/CurrencyProvider'
import './index.css'

/** Shared bootstrap for every HTML entry (home and /donasi/). */
export function mount(page: ReactNode) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider>
        <CurrencyProvider>
          {/* Honour the OS "reduce motion" setting for every framer-motion animation. */}
          <MotionConfig reducedMotion="user">{page}</MotionConfig>
        </CurrencyProvider>
      </LanguageProvider>
    </StrictMode>,
  )
}
