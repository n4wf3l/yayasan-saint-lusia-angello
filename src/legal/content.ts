import { CONTACT, HOSTING, LEGAL, DEVELOPER } from '../config'
import RATES from '../data/rates.json'
import type { Language } from '../i18n/translations'

/** One block of legal text: a paragraph, a bullet list, or a list of labelled facts. */
export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'facts'; rows: [label: string, value: string][] }

export type LegalSection = { id: string; title: string; blocks: LegalBlock[] }
export type LegalPart = { id: string; title: string; updated?: string; sections: LegalSection[] }

const p = (text: string): LegalBlock => ({ kind: 'p', text })
const ul = (...items: string[]): LegalBlock => ({ kind: 'ul', items })
const facts = (...rows: [string, string][]): LegalBlock => ({ kind: 'facts', rows })

const UPDATED = { id: '7 November 2026', en: '7 November 2026' }

// The page title and the address live in translations; everything else is here.
export function legalContent(lang: Language, address: string): LegalPart[] {
  const contact = `${CONTACT.email} · ${CONTACT.phone} (WhatsApp)`
  const ratesDate = RATES.updated

  if (lang === 'id') {
    return [
      {
        id: 'privasi',
        title: 'Kebijakan Privasi',
        updated: `Terakhir diperbarui: ${UPDATED.id}`,
        sections: [
          {
            id: 'pengendali',
            title: 'Siapa yang bertanggung jawab',
            blocks: [
              p(`Pengendali data pribadi untuk situs ini adalah Yayasan Saint Lusia Angello, ${address}. Kontak: ${contact}.`),
              p('Kebijakan ini disusun dengan mengacu pada Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).'),
            ],
          },
          {
            id: 'singkat',
            title: 'Singkatnya',
            blocks: [
              ul(
                'Situs ini tidak memakai cookie, tidak memakai alat analitik atau iklan, dan tidak memiliki formulir.',
                'Kami tidak menjual, menyewakan, atau memberikan data siapa pun kepada pihak lain untuk kepentingan mereka.',
                'Kami hanya menerima data donatur ketika Anda sendiri berdonasi atau menghubungi kami.',
              ),
            ],
          },
          {
            id: 'perangkat',
            title: 'Yang disimpan di perangkat Anda',
            blocks: [
              p('Situs menyimpan dua pilihan di penyimpanan lokal (localStorage) browser Anda, hanya agar pilihan itu diingat pada kunjungan berikutnya:'),
              ul(
                'yayasan-lang: bahasa yang Anda pilih (Indonesia atau Inggris).',
                'yayasan-currency: mata uang untuk menampilkan perkiraan nilai donasi.',
              ),
              p('Data ini tidak dikirim ke server mana pun dan dapat dihapus kapan saja melalui pengaturan browser Anda.'),
            ],
          },
          {
            id: 'pihak-ketiga',
            title: 'Layanan pihak ketiga',
            blocks: [
              p(`Situs ini di-host di ${HOSTING.name} (${HOSTING.company}, ${HOSTING.country.id}). Seperti semua server web, penyedia hosting dapat mencatat alamat IP dan data teknis kunjungan untuk keamanan dan operasional, sesuai kebijakan privasinya sendiri.`),
              p('Font dan kurs mata uang sudah disertakan di dalam situs, sehingga browser Anda tidak menghubungi Google Fonts atau layanan kurs mana pun.'),
              p('Tautan ke WhatsApp, PayPal, Instagram, TikTok, dan YouTube baru aktif ketika Anda mengekliknya. Setelah itu, kebijakan privasi layanan tersebut yang berlaku.'),
            ],
          },
          {
            id: 'donatur',
            title: 'Data donatur',
            blocks: [
              p('Ketika Anda berdonasi atau menghubungi kami, kami dapat menerima:'),
              ul(
                'nama dan informasi rekening pengirim dari bank (transfer Bank BRI atau QRIS);',
                'nama dan alamat email dari PayPal;',
                'nomor telepon dan isi pesan jika Anda menulis lewat WhatsApp.',
              ),
              p('Kami menggunakan data ini hanya untuk mencatat donasi, mengonfirmasi penerimaannya, berterima kasih, dan mengirim kabar bulanan jika Anda bergabung sebagai Sahabat YSLA. Nama donatur hanya ditampilkan di situs dengan persetujuan yang bersangkutan.'),
              p('Data disimpan selama diperlukan untuk pencatatan keuangan yayasan sesuai peraturan perundang-undangan, lalu dihapus.'),
            ],
          },
          {
            id: 'anak',
            title: 'Data anak-anak',
            blocks: [
              p('Foto dan nama anak-anak di situs ini ditampilkan dengan persetujuan orang tua atau wali mereka, sesuai Pasal 25 UU PDP.'),
              p('Jika Anda orang tua, wali, atau anak yang bersangkutan dan ingin sebuah foto atau informasi dihapus, hubungi kami. Kami akan menghapusnya secepatnya.'),
            ],
          },
          {
            id: 'hak',
            title: 'Hak Anda',
            blocks: [
              ul(
                'mengetahui data pribadi apa yang kami miliki tentang Anda dan untuk apa;',
                'memperbaiki data yang keliru;',
                'meminta penghapusan data;',
                'menarik persetujuan kapan saja;',
                'menolak pemrosesan tertentu.',
              ),
              p(`Kirim permintaan Anda ke ${CONTACT.email}. Kami akan menjawab dalam batas waktu yang ditetapkan peraturan perundang-undangan. Jika Anda merasa hak Anda dilanggar, Anda dapat mengajukan pengaduan kepada lembaga pengawas pelindungan data pribadi.`),
              p('Pengunjung dari Uni Eropa memiliki hak yang setara berdasarkan GDPR dan dapat menghubungi kami dengan cara yang sama.'),
            ],
          },
          {
            id: 'perubahan',
            title: 'Perubahan kebijakan',
            blocks: [p('Jika kebijakan ini berubah, versi baru beserta tanggalnya ditampilkan di halaman ini sebelum mulai berlaku.')],
          },
        ],
      },
      {
        id: 'hukum',
        title: 'Informasi Hukum',
        sections: [
          {
            id: 'penerbit',
            title: 'Penerbit situs',
            blocks: [
              facts(
                ['Nama', 'Yayasan Saint Lusia Angello (YSLA)'],
                ['Bentuk hukum', 'Yayasan berdasarkan hukum Indonesia (UU No. 16 Tahun 2001 jo. UU No. 28 Tahun 2004)'],
                ['Berkegiatan sejak', LEGAL.foundedServing],
                ['Berbadan hukum sejak', LEGAL.foundedLegal],
                ['Notaris', LEGAL.notaris],
                ['Pengesahan Kemenkumham', LEGAL.kemenkumham],
                ['Nomor registrasi', LEGAL.registration],
                ['Tanda Daftar', LEGAL.tandaDaftar],
                ['Izin Kegiatan', LEGAL.izinKegiatan],
                ['NPWP', LEGAL.npwp],
                ['Alamat', address],
                ['Kontak', contact],
                ['Ketua Pengurus', LEGAL.chair],
              ),
            ],
          },
          {
            id: 'teknis',
            title: 'Hosting dan pembuatan situs',
            blocks: [
              facts(
                ['Hosting', `${HOSTING.name}, ${HOSTING.company}, ${HOSTING.address}`],
                ['Desain dan pengembangan', `${DEVELOPER.name} (${DEVELOPER.country.id}), secara sukarela dan tanpa biaya`],
              ),
            ],
          },
          {
            id: 'ketentuan',
            title: 'Ketentuan penggunaan',
            blocks: [
              p('Teks dan foto © Yayasan Saint Lusia Angello. Foto anak-anak tidak boleh disalin, dibagikan ulang, atau digunakan untuk keperluan lain tanpa izin tertulis dari yayasan.'),
              p(`Donasi dibayarkan dalam Rupiah melalui QRIS atau rekening resmi Bank BRI atas nama yayasan, atau melalui PayPal. Nilai dalam mata uang lain hanya perkiraan, berdasarkan kurs tanggal ${ratesDate}.`),
              p('QRIS, Bank BRI, PayPal, dan WhatsApp adalah layanan pihak ketiga dengan syarat dan ketentuannya sendiri. Kami tidak bertanggung jawab atas isi situs lain yang ditautkan dari sini.'),
            ],
          },
        ],
      },
    ]
  }

  return [
    {
      id: 'privasi',
      title: 'Privacy Policy',
      updated: `Last updated: ${UPDATED.en}`,
      sections: [
        {
          id: 'pengendali',
          title: 'Who is responsible',
          blocks: [
            p(`The data controller for this site is Yayasan Saint Lusia Angello, ${address}. Contact: ${contact}.`),
            p("This policy follows Indonesia's Personal Data Protection Law (Law No. 27 of 2022, UU PDP)."),
          ],
        },
        {
          id: 'singkat',
          title: 'In short',
          blocks: [
            ul(
              'This site uses no cookies, no analytics or advertising tools, and has no forms.',
              "We never sell, rent, or hand anyone's data to others for their own use.",
              'We only receive donor data when you yourself donate or contact us.',
            ),
          ],
        },
        {
          id: 'perangkat',
          title: 'What is stored on your device',
          blocks: [
            p("The site keeps two choices in your browser's local storage (localStorage), only so they are remembered next time:"),
            ul(
              'yayasan-lang: the language you chose (Indonesian or English).',
              'yayasan-currency: the currency used to show approximate donation amounts.',
            ),
            p('This data is never sent to any server, and you can delete it at any time in your browser settings.'),
          ],
        },
        {
          id: 'pihak-ketiga',
          title: 'Third-party services',
          blocks: [
            p(`The site is hosted on ${HOSTING.name} (${HOSTING.company}, ${HOSTING.country.en}). Like any web server, the host may log IP addresses and technical visit data for security and operations, under its own privacy policy.`),
            p('Fonts and exchange rates are built into the site, so your browser does not contact Google Fonts or any exchange-rate service.'),
            p('Links to WhatsApp, PayPal, Instagram, TikTok, and YouTube only do something once you click them. From then on, that service’s privacy policy applies.'),
          ],
        },
        {
          id: 'donatur',
          title: 'Donor data',
          blocks: [
            p('When you donate or contact us, we may receive:'),
            ul(
              "the sender's name and account details from the bank (Bank BRI transfer or QRIS);",
              'your name and email address from PayPal;',
              'your phone number and message if you write to us on WhatsApp.',
            ),
            p('We use this data only to record your donation, confirm we received it, thank you, and send monthly news if you join as a Sahabat YSLA. Donor names only appear on the site with that person’s consent.'),
            p("Data is kept for as long as the foundation's financial records require under Indonesian law, then deleted."),
          ],
        },
        {
          id: 'anak',
          title: "Children's data",
          blocks: [
            p("The children's photos and names on this site are shown with the consent of their parents or guardians, as required by Article 25 of the UU PDP."),
            p('If you are a parent, a guardian, or the child concerned and want a photo or detail removed, contact us. We will remove it as soon as possible.'),
          ],
        },
        {
          id: 'hak',
          title: 'Your rights',
          blocks: [
            ul(
              'to know what personal data we hold about you and why;',
              'to have wrong data corrected;',
              'to have your data deleted;',
              'to withdraw your consent at any time;',
              'to object to certain processing.',
            ),
            p(`Send your request to ${CONTACT.email}. We will reply within the time limits set by law. If you believe your rights have been breached, you can complain to the personal data protection authority.`),
            p('Visitors from the European Union have equivalent rights under the GDPR and can contact us the same way.'),
          ],
        },
        {
          id: 'perubahan',
          title: 'Changes to this policy',
          blocks: [p('If this policy changes, the new version and its date are published on this page before they take effect.')],
        },
      ],
    },
    {
      id: 'hukum',
      title: 'Legal Information',
      sections: [
        {
          id: 'penerbit',
          title: 'Publisher',
          blocks: [
            facts(
              ['Name', 'Yayasan Saint Lusia Angello (YSLA)'],
              ['Legal form', 'Foundation (yayasan) under Indonesian law (Law No. 16 of 2001 as amended by Law No. 28 of 2004)'],
              ['Active since', 'September 2021'],
              ['Legal entity since', '11 March 2023'],
              ['Notary', LEGAL.notaris],
              ['Ministry of Law approval', LEGAL.kemenkumham],
              ['Registration number', LEGAL.registration],
              ['Tanda Daftar (registration)', LEGAL.tandaDaftar],
              ['Izin Kegiatan (activity permit)', LEGAL.izinKegiatan],
              ['Tax number (NPWP)', LEGAL.npwp],
              ['Address', address],
              ['Contact', contact],
              ['Chair of the board', LEGAL.chair],
            ),
          ],
        },
        {
          id: 'teknis',
          title: 'Hosting and site creation',
          blocks: [
            facts(
              ['Hosting', `${HOSTING.name}, ${HOSTING.company}, ${HOSTING.address}`],
              ['Design and development', `${DEVELOPER.name} (${DEVELOPER.country.en}), as a volunteer, free of charge`],
            ),
          ],
        },
        {
          id: 'ketentuan',
          title: 'Terms of use',
          blocks: [
            p("Text and photos © Yayasan Saint Lusia Angello. The children's photos may not be copied, reshared, or reused for any other purpose without the foundation's written permission."),
            p(`Donations are paid in Indonesian rupiah by QRIS or to the foundation's official Bank BRI account, or through PayPal. Amounts in other currencies are estimates, based on exchange rates from ${ratesDate}.`),
            p('QRIS, Bank BRI, PayPal, and WhatsApp are third-party services with their own terms. We are not responsible for the content of other sites linked from here.'),
          ],
        },
      ],
    },
  ]
}
