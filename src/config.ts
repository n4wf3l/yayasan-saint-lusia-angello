export const YOUTUBE_URL =
  'https://youtube.com/@ysla-25?si=jY9v6SDH7yrhKp3e'
export const YOUTUBE_HANDLE = '@ysla-25'

export const INSTAGRAM_URL = 'https://www.instagram.com/yayasansaintlusiaangello/'
export const INSTAGRAM_HANDLE = '@yayasansaintlusiaangello'

export const TIKTOK_URL = 'https://www.tiktok.com/@ysla.50'
export const TIKTOK_HANDLE = '@ysla.50'

export const BANK = {
  name: 'Bank BRI',
  accountNumber: '0378-01-002605-30-4',
  accountNumberRaw: '0378010026053004',
  holder: 'Yayasan Saint Lusia Angello',
}

/** Hosted PayPal checkout: card or PayPal account, for donors outside Indonesia. */
export const PAYPAL_URL = 'https://www.paypal.com/ncp/payment/B54EN5XNRU2YS'

export const CONTACT = {
  phone: '+62 812 3112 1166',
  phoneHref: 'tel:+6281231121166',
  phoneWhatsappHref: 'https://wa.me/6281231121166',
  contactName: 'Liez Angello',
  email: 'yayasansaintlusiaangello@gmail.com',
  emailAlt: 'yayasansaintlusiaangello2020@gmail.com',
}

export const LEGAL = {
  foundedServing: 'September 2021',
  foundedLegal: '11 Maret 2023',
  notaris: 'Ruping Lolo alias Vince, S.H., M.Kn.',
  registration: '5023031131260010',
  tandaDaftar: '2/F.2/31.73.08.1003.19.BJ/4/TM.17.01/e/2023',
  izinKegiatan: '1/F.3/31.73.08.1003.19.SPU-3/4/TM.17.02/e/2023',
  kemenkumham: 'AHU-0000377.AH.01.05.TAHUN 2023',
  npwp: '96.350.421.2-011.000',
  chair: 'Maximus Ali Perajaka',
}

/** Where the site is served from; update if it moves (for example to Hostinger). */
export const HOSTING = {
  name: 'GitHub Pages',
  company: 'GitHub, Inc.',
  address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
  country: { id: 'Amerika Serikat', en: 'United States' },
}

export const DEVELOPER = {
  name: 'Nawfel Ajari',
  country: { id: 'Belgia', en: 'Belgium' },
}

/** Resolves a file in /public against the deploy base (GitHub Pages serves under a subpath). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/**
 * Monthly fundraising progress shown in the Donate section.
 * Update `month` and `raisedIdr` at the start of each month; while `raisedIdr`
 * is null the progress bar stays hidden and only the monthly need is shown.
 */
export const MONTHLY_PROGRESS: { month: string; raisedIdr: number | null; goalIdr: number } = {
  month: '2026-10',
  raisedIdr: null,
  goalIdr: 22_000_000,
}
