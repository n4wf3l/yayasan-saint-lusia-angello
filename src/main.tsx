import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'
import { CurrencyProvider } from './currency/CurrencyProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <CurrencyProvider>
        {/* Honour the OS "reduce motion" setting for every framer-motion animation. */}
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </CurrencyProvider>
    </LanguageProvider>
  </StrictMode>,
)
