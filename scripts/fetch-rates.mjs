// Fetches exchange rates once per build and writes them to src/data/rates.json,
// so visitors' browsers never call a third-party rates API (no IP address shared).
// If the API is unreachable the committed file is kept and the build goes on.
import { readFile, writeFile } from 'node:fs/promises'

const URL = 'https://open.er-api.com/v6/latest/IDR'
const OUT = 'src/data/rates.json'
// Keep in sync with CURRENCIES in src/currency/CurrencyProvider.tsx.
const CODES = ['USD', 'EUR', 'GBP', 'AUD', 'SGD', 'CHF', 'CAD', 'JPY', 'MYR', 'NZD', 'HKD', 'CNY', 'KRW']

try {
  const res = await fetch(URL, { signal: AbortSignal.timeout(10_000) })
  const data = await res.json()
  if (data?.result !== 'success') throw new Error(`unexpected response: ${data?.result}`)

  // The API gives units per 1 IDR; store IDR per 1 unit, rounded, which reads better and diffs cleanly.
  const idrPerUnit = { IDR: 1 }
  for (const code of CODES) {
    const perIdr = data.rates[code]
    if (!perIdr) throw new Error(`missing rate for ${code}`)
    const value = 1 / perIdr
    idrPerUnit[code] = value >= 100 ? Math.round(value) : Math.round(value * 100) / 100
  }

  const updated = new Date(data.time_last_update_unix * 1000).toISOString().slice(0, 10)
  await writeFile(OUT, `${JSON.stringify({ updated, idrPerUnit }, null, 2)}\n`)
  console.log(`rates: updated ${OUT} (${updated})`)
} catch (err) {
  const current = JSON.parse(await readFile(OUT, 'utf8'))
  console.warn(`rates: fetch failed (${err.message}); keeping rates from ${current.updated}`)
}
