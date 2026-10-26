import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'
import { CurrencyProvider } from './currency/CurrencyProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </LanguageProvider>
  </StrictMode>,
)
