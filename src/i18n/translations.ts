export type Language = 'id' | 'en'

export type TranslationKey =
  | 'nav.about'
  | 'nav.mission'
  | 'nav.programs'
  | 'nav.team'
  | 'nav.daily'
  | 'nav.impact'
  | 'nav.donate'
  | 'nav.gallery'
  | 'nav.contact'
  | 'nav.donateCta'
  | 'hero.badge'
  | 'hero.title1'
  | 'hero.title2'
  | 'hero.title3'
  | 'hero.subtitle'
  | 'hero.ctaPrimary'
  | 'hero.ctaSecondary'
  | 'hero.stat1Value'
  | 'hero.stat1Label'
  | 'hero.stat2Value'
  | 'hero.stat2Label'
  | 'hero.stat3Value'
  | 'hero.stat3Label'
  | 'about.chip'
  | 'about.title'
  | 'about.p1'
  | 'about.p2'
  | 'about.feature1Title'
  | 'about.feature1Desc'
  | 'about.feature2Title'
  | 'about.feature2Desc'
  | 'about.feature3Title'
  | 'about.feature3Desc'
  | 'about.feature4Title'
  | 'about.feature4Desc'
  | 'mission.chip'
  | 'mission.title'
  | 'mission.visionTitle'
  | 'mission.visionText'
  | 'mission.missionTitle'
  | 'mission.missionText'
  | 'mission.valuesTitle'
  | 'mission.value1'
  | 'mission.value2'
  | 'mission.value3'
  | 'mission.value4'
  | 'programs.chip'
  | 'programs.title'
  | 'programs.lead'
  | 'programs.p1Title'
  | 'programs.p1Desc'
  | 'programs.p2Title'
  | 'programs.p2Desc'
  | 'programs.p3Title'
  | 'programs.p3Desc'
  | 'programs.p4Title'
  | 'programs.p4Desc'
  | 'programs.p5Title'
  | 'programs.p5Desc'
  | 'programs.p6Title'
  | 'programs.p6Desc'
  | 'impact.chip'
  | 'impact.title'
  | 'impact.lead'
  | 'impact.donorsTitle'
  | 'impact.donorsLead'
  | 'impact.donor1'
  | 'impact.donor2'
  | 'impact.donor3'
  | 'donate.chip'
  | 'donate.title'
  | 'donate.lead'
  | 'donate.financialTitle'
  | 'donate.financialDesc'
  | 'donate.financialBank'
  | 'donate.financialAccount'
  | 'donate.financialName'
  | 'donate.financialCta'
  | 'donate.financialCopied'
  | 'donate.financialCopy'
  | 'donate.budgetTitle'
  | 'donate.budgetLead'
  | 'donate.budgetFood'
  | 'donate.budgetFoodDesc'
  | 'donate.budgetSchool'
  | 'donate.budgetSchoolDesc'
  | 'donate.budgetTotal'
  | 'donate.budgetTotalDesc'
  | 'donate.urgentChip'
  | 'donate.urgentTitle'
  | 'donate.urgentLead'
  | 'donate.urgent1Title'
  | 'donate.urgent1Desc'
  | 'donate.urgent2Title'
  | 'donate.urgent2Desc'
  | 'donate.urgent3Title'
  | 'donate.urgent3Desc'
  | 'donate.urgent4Title'
  | 'donate.urgent4Desc'
  | 'donate.goodsTitle'
  | 'donate.goodsDesc'
  | 'donate.goodsList1'
  | 'donate.goodsList2'
  | 'donate.goodsList3'
  | 'donate.goodsList4'
  | 'donate.goodsCta'
  | 'donate.volunteerTitle'
  | 'donate.volunteerDesc'
  | 'donate.volunteerList1'
  | 'donate.volunteerList2'
  | 'donate.volunteerList3'
  | 'donate.volunteerCta'
  | 'donate.amount1'
  | 'donate.amount2'
  | 'donate.amount3'
  | 'donate.amount4'
  | 'donate.amount1Desc'
  | 'donate.amount2Desc'
  | 'donate.amount3Desc'
  | 'donate.amount4Desc'
  | 'donate.amountsTitle'
  | 'team.chip'
  | 'team.title'
  | 'team.lead'
  | 'team.founderRole'
  | 'team.founderName'
  | 'team.founderStory'
  | 'team.pembinaRole'
  | 'team.pengawasRole'
  | 'team.ketuaRole'
  | 'team.sekretarisRole'
  | 'team.bendaharaRole'
  | 'daily.chip'
  | 'daily.title'
  | 'daily.lead'
  | 'daily.weekdaysTitle'
  | 'daily.weekendTitle'
  | 'daily.weekday1'
  | 'daily.weekday2'
  | 'daily.weekday3'
  | 'daily.weekday4'
  | 'daily.weekday5'
  | 'daily.weekday6'
  | 'daily.weekend1'
  | 'daily.weekend2'
  | 'daily.weekend3'
  | 'footer.legalReg'
  | 'footer.legalRegLabel'
  | 'youtube.chip'
  | 'youtube.title'
  | 'youtube.lead'
  | 'youtube.cta'
  | 'youtube.secondary'
  | 'youtube.feature1'
  | 'youtube.feature2'
  | 'youtube.feature3'
  | 'hero.ctaYoutube'
  | 'gallery.chip'
  | 'gallery.title'
  | 'gallery.lead'
  | 'gallery.cap1'
  | 'gallery.cap2'
  | 'gallery.cap3'
  | 'gallery.cap4'
  | 'gallery.cap5'
  | 'gallery.cap6'
  | 'contact.chip'
  | 'contact.title'
  | 'contact.lead'
  | 'contact.addressTitle'
  | 'contact.addressValue'
  | 'contact.phoneTitle'
  | 'contact.phoneRole'
  | 'contact.whatsappCta'
  | 'contact.emailTitle'
  | 'contact.hoursTitle'
  | 'contact.hoursValue'
  | 'contact.formName'
  | 'contact.formEmail'
  | 'contact.formSubject'
  | 'contact.formMessage'
  | 'contact.formSubmit'
  | 'contact.formNote'
  | 'footer.tagline'
  | 'footer.quickLinks'
  | 'footer.support'
  | 'footer.supportDonate'
  | 'footer.supportGoods'
  | 'footer.supportVolunteer'
  | 'footer.supportPartner'
  | 'footer.legal'
  | 'footer.legalPrivacy'
  | 'footer.legalTerms'
  | 'footer.legalTransparency'
  | 'footer.rights'
  | 'footer.builtWith'

export const translations: Record<Language, Record<TranslationKey, string>> = {
  id: {
    'nav.about': 'Tentang',
    'nav.mission': 'Misi',
    'nav.programs': 'Program',
    'nav.team': 'Pengurus',
    'nav.daily': 'Keseharian',
    'nav.impact': 'Cerita',
    'nav.donate': 'Donasi',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    'nav.donateCta': 'Donasi',

    'hero.badge': 'Yayasan sosial, Jakarta Barat — berbadan hukum sejak 2023',
    'hero.title1': '20 anak,',
    'hero.title2': 'satu rumah',
    'hero.title3': 'di Meruya Selatan.',
    'hero.subtitle':
      'Didirikan oleh Ibu Lusia Owa. Kami menanggung sekolah, makan, tempat tinggal, dan pendampingan harian — dari bayi hingga remaja. Rp 22 juta per bulan untuk membuat semuanya berjalan.',
    'hero.ctaPrimary': 'Donasi Sekarang',
    'hero.ctaSecondary': 'Pelajari Lebih Lanjut',
    'hero.ctaYoutube': 'Tonton di YouTube',
    'hero.stat1Value': '20',
    'hero.stat1Label': 'Anak di rumah kami',
    'hero.stat2Value': '2021',
    'hero.stat2Label': 'Mulai melayani',
    'hero.stat3Value': '6',
    'hero.stat3Label': 'Pendamping',

    'about.chip': 'Tentang Kami',
    'about.title': 'Lahir dari belas kasih, tumbuh karena cinta',
    'about.p1':
      'Yayasan Saint Lusia Angello (YSLA) didirikan oleh Ibu Lusia Owa, seorang perempuan sederhana dari Flores, Ende – Nusa Tenggara Timur. Setelah sembilan tahun hidup selibat sebagai suster dan melayani anak-anak berkebutuhan khusus, pada tahun 2017 beliau memilih kembali ke tengah masyarakat untuk melayani lebih luas lagi.',
    'about.p2':
      'Pelayanan kami dimulai sejak September 2021, lalu secara resmi berbadan hukum pada 11 Maret 2023. Hari ini, 20 anak hidup bersama kami di Jakarta Barat — dari bayi hingga remaja — bersama 6 pendamping yang mendampingi mereka setiap hari dengan penuh kasih.',
    'about.feature1Title': 'Tempat Aman',
    'about.feature1Desc': 'Lingkungan yang nyaman dan terlindungi 24 jam untuk setiap anak.',
    'about.feature2Title': 'Pendidikan',
    'about.feature2Desc': 'Akses sekolah formal dan bimbingan belajar harian.',
    'about.feature3Title': 'Gizi & Kesehatan',
    'about.feature3Desc': 'Makanan bergizi tiga kali sehari dan pemeriksaan kesehatan rutin.',
    'about.feature4Title': 'Kasih & Pendampingan',
    'about.feature4Desc': 'Konseling rohani dan dukungan emosional sepanjang pertumbuhan.',

    'mission.chip': 'Visi, Misi & Tujuan',
    'mission.title': 'Mengapa kami hadir',
    'mission.visionTitle': 'Visi Yayasan',
    'mission.visionText':
      'Memanusiakan manusia, dengan menghayati kehadiran Tuhan yang nyata dalam diri mereka yang dilayani.',
    'mission.missionTitle': 'Misi Yayasan',
    'mission.missionText':
      'Melayani dengan penuh cinta tanpa membedakan suku, agama, ras, dan budaya; memberikan sandang, pangan, papan, dan pendidikan yang layak; serta melindungi dan menaungi anak-anak dengan penghidupan yang layak.',
    'mission.valuesTitle': 'Tujuan Yayasan',
    'mission.value1': 'Mencari dan merawat anak-anak',
    'mission.value2': 'Mendidik untuk masa depan mereka',
    'mission.value3': 'Membentuk manusia yang bermartabat',
    'mission.value4': 'Berguna bagi diri, agama & bangsa',

    'programs.chip': 'Program Kami',
    'programs.title': 'Apa yang kami lakukan setiap hari',
    'programs.lead':
      'Setiap program dirancang untuk mendukung tumbuh kembang anak secara menyeluruh — dari fisik, mental, hingga rohani.',
    'programs.p1Title': 'Tempat Tinggal',
    'programs.p1Desc':
      'Kamar yang bersih, tempat tidur yang nyaman, dan lingkungan yang terasa seperti rumah.',
    'programs.p2Title': 'Pendidikan Formal',
    'programs.p2Desc':
      'Semua anak kami bersekolah di sekolah mitra dan menerima bimbingan belajar setiap sore.',
    'programs.p3Title': 'Nutrisi Harian',
    'programs.p3Desc':
      'Dapur kami menyiapkan tiga kali makan seimbang dengan sayur, protein, dan buah segar.',
    'programs.p4Title': 'Kesehatan Rutin',
    'programs.p4Desc':
      'Pemeriksaan medis berkala bersama dokter sukarelawan dan vaksinasi lengkap.',
    'programs.p5Title': 'Pelatihan Keterampilan',
    'programs.p5Desc':
      'Kelas musik, kerajinan, memasak, dan komputer untuk mempersiapkan masa depan.',
    'programs.p6Title': 'Pendampingan Rohani',
    'programs.p6Desc':
      'Doa bersama, bimbingan karakter, dan nilai-nilai hidup yang membangun jati diri.',

    'impact.chip': 'Satu cerita panjang',
    'impact.title': 'Ricky, dari rumah ini ke seragam TNI',
    'impact.lead':
      'Rikardus Ndona Ndore (Ricky), lahir di Koporombo (15 Juli 2005), masuk Yayasan sebagai anak panti. Setelah lulus SMA, ia menyampaikan keinginan menjadi tentara. Ibu Lusia mendukung penuh dan membantunya mempersiapkan setiap syarat yang diwajibkan. Sambil menunggu panggilan, Ricky membantu mengurus adik-adiknya di panti. Hari ini ia anggota TNI Angkatan Darat, bertugas di Papua.',
    'impact.donorsTitle': 'Donatur tetap kami',
    'impact.donorsLead':
      'Terima kasih atas kehadiran berkelanjutan Anda bagi anak-anak kami.',
    'impact.donor1': 'Bapak Niko Wangsidi',
    'impact.donor2': 'Ibu Wilona Nathania',
    'impact.donor3': 'Bapak Vincent Saverio',

    'donate.chip': 'Dukungan',
    'donate.title': 'Transfer, kirim barang, atau datang langsung',
    'donate.lead':
      'Tiga jalur, semuanya terbuka. Rekening resmi di bawah ini atas nama Yayasan — bukan rekening pribadi. Konfirmasi transfer via WhatsApp agar kami bisa catat dan berterima kasih.',
    'donate.financialTitle': 'Donasi Keuangan',
    'donate.financialDesc':
      'Transfer langsung ke rekening resmi yayasan. Setiap rupiah digunakan untuk makanan, pendidikan, dan kebutuhan harian anak-anak.',
    'donate.financialBank': 'Bank BRI',
    'donate.financialAccount': '0378-01-002605-30-4',
    'donate.financialName': 'a.n. Yayasan Saint Lusia Angello',
    'donate.financialCta': 'Konfirmasi Transfer',
    'donate.financialCopied': 'Nomor rekening tersalin',
    'donate.financialCopy': 'Salin nomor',
    'donate.budgetTitle': 'Kebutuhan bulanan kami',
    'donate.budgetLead':
      'Transparansi adalah janji kami. Berikut rincian kebutuhan rutin bulanan untuk 20 anak di rumah kami.',
    'donate.budgetFood': 'Rp 10.000.000',
    'donate.budgetFoodDesc': 'Makan dan minum untuk seluruh anak selama satu bulan',
    'donate.budgetSchool': 'Rp 12.000.000',
    'donate.budgetSchoolDesc': 'Biaya sekolah, seragam, dan perlengkapan belajar',
    'donate.budgetTotal': 'Rp 22.000.000',
    'donate.budgetTotalDesc': 'Total kebutuhan dasar per bulan',
    'donate.urgentChip': 'Kebutuhan Mendesak',
    'donate.urgentTitle': 'Yang paling kami butuhkan saat ini',
    'donate.urgentLead':
      'Berikut empat kebutuhan paling mendesak Yayasan hari ini. Jika Anda ingin membantu secara khusus, hubungi kami.',
    'donate.urgent1Title': 'Rumah tetap',
    'donate.urgent1Desc':
      'Tempat tinggal yang layak dan permanen untuk anak-anak kami.',
    'donate.urgent2Title': 'Kendaraan',
    'donate.urgent2Desc':
      'Untuk antar-jemput sekolah, kebutuhan medis, dan kegiatan harian.',
    'donate.urgent3Title': 'Biaya pendidikan',
    'donate.urgent3Desc':
      'SPP, seragam, buku, dan kebutuhan sekolah seluruh anak.',
    'donate.urgent4Title': 'Operasional panti',
    'donate.urgent4Desc':
      'Listrik, air, perawatan rumah, dan kebutuhan harian lainnya.',
    'donate.goodsTitle': 'Pakaian & Perabotan',
    'donate.goodsDesc':
      'Kami menerima donasi berupa barang-barang berikut dalam kondisi baik dan layak pakai:',
    'donate.goodsList1': 'Pakaian anak (semua ukuran)',
    'donate.goodsList2': 'Peralatan sekolah & buku',
    'donate.goodsList3': 'Perabotan: tempat tidur, meja belajar, lemari',
    'donate.goodsList4': 'Peralatan dapur & elektronik',
    'donate.goodsCta': 'Hubungi untuk Pengiriman',
    'donate.volunteerTitle': 'Jadi Relawan',
    'donate.volunteerDesc':
      'Luangkan waktu Anda untuk hadir langsung bersama anak-anak kami.',
    'donate.volunteerList1': 'Mengajar pelajaran sekolah',
    'donate.volunteerList2': 'Membimbing kelas musik atau seni',
    'donate.volunteerList3': 'Membantu kegiatan harian & acara',
    'donate.volunteerCta': 'Daftar sebagai Relawan',
    'donate.amountsTitle': 'Pilih jumlah donasi',
    'donate.amount1': 'Rp 150.000',
    'donate.amount2': 'Rp 500.000',
    'donate.amount3': 'Rp 1.500.000',
    'donate.amount4': 'Jumlah lain',
    'donate.amount1Desc': 'Makanan bergizi untuk 1 anak selama 1 minggu',
    'donate.amount2Desc': 'Perlengkapan sekolah untuk 1 anak',
    'donate.amount3Desc': 'Biaya pendidikan 1 anak selama 1 bulan',
    'donate.amount4Desc': 'Sesuai hati Anda',

    'team.chip': 'Pengurus Yayasan',
    'team.title': 'Tangan dan hati di balik rumah kami',
    'team.lead':
      'Yayasan Saint Lusia Angello dijalankan oleh pengurus resmi yang terdaftar secara hukum, dipandu oleh pendiri kami Ibu Lusia Owa.',
    'team.founderRole': 'Pendiri & Pembina',
    'team.founderName': 'Lusia Owa',
    'team.founderStory':
      'Berasal dari Ende, Flores – Nusa Tenggara Timur. Sembilan tahun hidup selibat sebagai suster yang melayani anak berkebutuhan khusus. Pada 2017 memilih kembali ke tengah masyarakat untuk melayani lebih luas, dan sejak 2021 mendirikan rumah ini bagi anak-anak yang membutuhkan.',
    'team.pembinaRole': 'Pembina',
    'team.pengawasRole': 'Pengawas',
    'team.ketuaRole': 'Ketua',
    'team.sekretarisRole': 'Sekretaris',
    'team.bendaharaRole': 'Bendahara',

    'daily.chip': 'Hidup Kami Setiap Hari',
    'daily.title': 'Satu hari di Yayasan',
    'daily.lead':
      'Rutinitas yang kami jalani bersama anak-anak, dari pagi hingga malam. Transparan, agar Anda tahu apa yang Anda dukung.',
    'daily.weekdaysTitle': 'Senin – Jumat',
    'daily.weekendTitle': 'Sabtu – Minggu',
    'daily.weekday1': '04.00 – 04.30 • Bangun pagi bersama',
    'daily.weekday2': 'Persiapan dan berangkat ke sekolah',
    'daily.weekday3': '12.00 – 13.00 • Pulang sekolah',
    'daily.weekday4': 'Bangun sore, belajar bersama & snack',
    'daily.weekday5': '18.00 • Doa Rosario bersama',
    'daily.weekday6': 'Makan malam dan istirahat',
    'daily.weekend1': '07.30 – 12.00 • Pelajaran tambahan',
    'daily.weekend2':
      'Bersama tamu/kunjungan — atau olahraga & bermain jika tidak ada tamu',
    'daily.weekend3': 'Setelah makan malam: menonton atau rekreasi bersama',

    'footer.legalReg': 'Berbadan hukum sejak 11 Maret 2023',
    'footer.legalRegLabel': 'Status Resmi',

    'youtube.chip': 'Kanal YouTube',
    'youtube.title': 'Ikuti perjalanan kami di YouTube',
    'youtube.lead':
      'Setiap minggu kami membagikan kegiatan anak-anak, kunjungan donatur, dan momen keluarga di rumah kami. Berlangganan untuk ikut melihat setiap senyum dan setiap doa.',
    'youtube.cta': 'Berlangganan di YouTube',
    'youtube.secondary': '@ysla-25',
    'youtube.feature1': 'Kegiatan harian anak-anak',
    'youtube.feature2': 'Kunjungan relawan & donatur',
    'youtube.feature3': 'Momen perayaan & doa',

    'gallery.chip': 'Galeri',
    'gallery.title': 'Momen bersama di rumah kami',
    'gallery.lead': 'Sekilas kehidupan sehari-hari di Yayasan Saint Lusia Angello.',
    'gallery.cap1': 'Belajar bersama di sore hari',
    'gallery.cap2': 'Makan malam keluarga',
    'gallery.cap3': 'Kelas kerajinan tangan',
    'gallery.cap4': 'Bermain di halaman',
    'gallery.cap5': 'Perayaan ulang tahun bersama',
    'gallery.cap6': 'Ibadah pagi bersama',

    'contact.chip': 'Kontak',
    'contact.title': 'Datang, telepon, atau tulis kami',
    'contact.lead':
      'WhatsApp Ibu Liez adalah cara tercepat. Kami juga menerima kunjungan — beri tahu kami sebelumnya agar anak-anak dapat menyambut Anda.',
    'contact.addressTitle': 'Alamat',
    'contact.addressValue':
      'Komplek Perumahan Walikota, Jl. H. Sa’aba, Blok C3 No. 12, RT 04 / RW 03, Meruya Selatan, Kembangan, Jakarta Barat, Jakarta 11650, Indonesia',
    'contact.phoneTitle': 'Telepon',
    'contact.phoneRole': 'Penanggung Jawab Yayasan',
    'contact.whatsappCta': 'Chat lewat WhatsApp',
    'contact.emailTitle': 'Email',
    'contact.hoursTitle': 'Jam Kunjungan',
    'contact.hoursValue': 'Senin – Sabtu, 09:00 – 17:00 WIB',
    'contact.formName': 'Nama lengkap',
    'contact.formEmail': 'Alamat email',
    'contact.formSubject': 'Subjek',
    'contact.formMessage': 'Pesan Anda',
    'contact.formSubmit': 'Kirim Pesan',
    'contact.formNote': 'Kami biasanya membalas dalam 1–2 hari kerja.',

    'footer.tagline':
      '20 anak, 6 pendamping, 1 rumah di Meruya Selatan. Didirikan oleh Ibu Lusia Owa — berbadan hukum sejak 2023.',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.support': 'Dukung Kami',
    'footer.supportDonate': 'Donasi Keuangan',
    'footer.supportGoods': 'Donasi Barang',
    'footer.supportVolunteer': 'Jadi Relawan',
    'footer.supportPartner': 'Jadi Mitra',
    'footer.legal': 'Legal',
    'footer.legalPrivacy': 'Kebijakan Privasi',
    'footer.legalTerms': 'Syarat & Ketentuan',
    'footer.legalTransparency': 'Laporan Transparansi',
    'footer.rights': 'Hak cipta dilindungi.',
    'footer.builtWith': 'Dibuat dengan kasih untuk anak-anak kami.',
  },
  en: {
    'nav.about': 'About',
    'nav.mission': 'Mission',
    'nav.programs': 'Programs',
    'nav.team': 'Board',
    'nav.daily': 'A day with us',
    'nav.impact': 'Stories',
    'nav.donate': 'Donate',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.donateCta': 'Donate',

    'hero.badge': 'Registered Indonesian foundation — West Jakarta, since 2023',
    'hero.title1': '20 children,',
    'hero.title2': 'one home',
    'hero.title3': 'in Meruya Selatan.',
    'hero.subtitle':
      'Founded by Mother Lusia Owa. We cover school, meals, housing, and daily guidance — from newborns to teenagers. Running cost: IDR 22 million every month.',
    'hero.ctaPrimary': 'Donate Now',
    'hero.ctaSecondary': 'Learn More',
    'hero.ctaYoutube': 'Watch on YouTube',
    'hero.stat1Value': '20',
    'hero.stat1Label': 'Children in our home',
    'hero.stat2Value': '2021',
    'hero.stat2Label': 'Serving since',
    'hero.stat3Value': '6',
    'hero.stat3Label': 'Caregivers',

    'about.chip': 'About Us',
    'about.title': 'Born from compassion, growing through love',
    'about.p1':
      'Yayasan Saint Lusia Angello (YSLA) was founded by Mother Lusia Owa, a humble woman from Flores, Ende – East Nusa Tenggara. After nine years as a nun serving children with special needs, in 2017 she chose to return to lay life so she could serve more broadly.',
    'about.p2':
      'Our service began in September 2021 and the foundation was officially registered on 11 March 2023. Today, 20 children — from babies to teenagers — live with us in West Jakarta, together with 6 caregivers who walk beside them every single day.',
    'about.feature1Title': 'Safe Haven',
    'about.feature1Desc': 'A comfortable, protected environment, 24/7 for every child.',
    'about.feature2Title': 'Education',
    'about.feature2Desc': 'Access to formal schooling and daily tutoring sessions.',
    'about.feature3Title': 'Nutrition & Health',
    'about.feature3Desc': 'Three balanced meals a day and regular medical checkups.',
    'about.feature4Title': 'Love & Guidance',
    'about.feature4Desc': 'Spiritual counseling and emotional support through their growth.',

    'mission.chip': 'Vision, Mission & Purpose',
    'mission.title': 'Why we exist',
    'mission.visionTitle': 'Our Vision',
    'mission.visionText':
      'To humanize humanity, by living out the real presence of God in those we serve.',
    'mission.missionTitle': 'Our Mission',
    'mission.missionText':
      'To serve with love without distinction of ethnicity, religion, race, or culture; to provide proper clothing, food, shelter, and education; and to protect our children with a dignified life.',
    'mission.valuesTitle': 'Our Purpose',
    'mission.value1': 'Seek out and care for children',
    'mission.value2': 'Educate them for their future',
    'mission.value3': 'Shape dignified human beings',
    'mission.value4': 'Useful to self, faith & nation',

    'programs.chip': 'Our Programs',
    'programs.title': 'What we do every day',
    'programs.lead':
      'Every program is designed to support the full growth of each child — physical, mental, and spiritual.',
    'programs.p1Title': 'Shelter & Housing',
    'programs.p1Desc':
      'Clean rooms, comfortable beds, and an environment that truly feels like home.',
    'programs.p2Title': 'Formal Education',
    'programs.p2Desc':
      'All our children attend partner schools and receive tutoring every afternoon.',
    'programs.p3Title': 'Daily Nutrition',
    'programs.p3Desc':
      'Our kitchen prepares three balanced meals with vegetables, protein, and fresh fruit.',
    'programs.p4Title': 'Healthcare',
    'programs.p4Desc':
      'Regular medical checkups with volunteer doctors and full vaccinations.',
    'programs.p5Title': 'Skill Training',
    'programs.p5Desc':
      'Music, crafts, cooking, and computer classes to prepare them for the future.',
    'programs.p6Title': 'Spiritual Guidance',
    'programs.p6Desc':
      'Shared prayers, character coaching, and life values that build identity.',

    'impact.chip': 'One real story',
    'impact.title': 'Ricky, from this home to the Indonesian Army',
    'impact.lead':
      'Rikardus Ndona Ndore (Ricky), born in Koporombo on 15 July 2005, grew up here. After graduating from senior high school he told Mother Lusia he wanted to serve as a soldier. She backed him fully and helped him prepare for every entry requirement. While he waited for the call, he helped look after the younger children in the home. Today he serves in the Indonesian Army, stationed in Papua.',
    'impact.donorsTitle': 'Our regular donors',
    'impact.donorsLead':
      'Thank you for standing with the children, month after month.',
    'impact.donor1': 'Mr. Niko Wangsidi',
    'impact.donor2': 'Mrs. Wilona Nathania',
    'impact.donor3': 'Mr. Vincent Saverio',

    'donate.chip': 'Support',
    'donate.title': 'Transfer, send goods, or visit us',
    'donate.lead':
      'Three channels, all open. The account below is the official Foundation account — not a personal one. Please confirm your transfer on WhatsApp so we can log it and say thank you.',
    'donate.financialTitle': 'Financial Donation',
    'donate.financialDesc':
      'Transfer directly to our official account. Every rupiah goes to food, education, and the daily needs of the children.',
    'donate.financialBank': 'Bank BRI',
    'donate.financialAccount': '0378-01-002605-30-4',
    'donate.financialName': 'under Yayasan Saint Lusia Angello',
    'donate.financialCta': 'Confirm Your Transfer',
    'donate.financialCopied': 'Account number copied',
    'donate.financialCopy': 'Copy number',
    'donate.budgetTitle': 'Our monthly needs',
    'donate.budgetLead':
      'Transparency is our promise. Here is the real monthly cost of running our home for 20 children.',
    'donate.budgetFood': 'IDR 10,000,000',
    'donate.budgetFoodDesc': 'Food and drink for all our children, one month',
    'donate.budgetSchool': 'IDR 12,000,000',
    'donate.budgetSchoolDesc': 'School fees, uniforms, and learning supplies',
    'donate.budgetTotal': 'IDR 22,000,000',
    'donate.budgetTotalDesc': 'Total essential needs per month',
    'donate.urgentChip': 'Most Urgent Needs',
    'donate.urgentTitle': 'What we need most right now',
    'donate.urgentLead':
      'These are the four most urgent needs of the Foundation today. If you would like to help with one in particular, please reach out.',
    'donate.urgent1Title': 'A permanent home',
    'donate.urgent1Desc':
      'A dignified, permanent place for our children to call home.',
    'donate.urgent2Title': 'A vehicle',
    'donate.urgent2Desc':
      'For school transport, medical visits, and daily activities.',
    'donate.urgent3Title': 'Education costs',
    'donate.urgent3Desc':
      'Tuition, uniforms, books, and school supplies for every child.',
    'donate.urgent4Title': 'Operational costs',
    'donate.urgent4Desc':
      'Electricity, water, home maintenance, and daily essentials.',
    'donate.goodsTitle': 'Clothing & Furniture',
    'donate.goodsDesc':
      'We accept the following items in good, usable condition:',
    'donate.goodsList1': "Children's clothing (all sizes)",
    'donate.goodsList2': 'School supplies & books',
    'donate.goodsList3': 'Furniture: beds, desks, cabinets',
    'donate.goodsList4': 'Kitchenware & electronics',
    'donate.goodsCta': 'Contact for Pickup',
    'donate.volunteerTitle': 'Volunteer',
    'donate.volunteerDesc':
      'Give your time to be present with our children.',
    'donate.volunteerList1': 'Teach school subjects',
    'donate.volunteerList2': 'Lead music or art classes',
    'donate.volunteerList3': 'Help with daily activities & events',
    'donate.volunteerCta': 'Sign up as Volunteer',
    'donate.amountsTitle': 'Choose a donation amount',
    'donate.amount1': 'IDR 150,000',
    'donate.amount2': 'IDR 500,000',
    'donate.amount3': 'IDR 1,500,000',
    'donate.amount4': 'Custom amount',
    'donate.amount1Desc': 'Nutritious meals for 1 child for 1 week',
    'donate.amount2Desc': 'School supplies for 1 child',
    'donate.amount3Desc': "1 month of a child's education",
    'donate.amount4Desc': 'As your heart leads',

    'team.chip': 'Our Governance',
    'team.title': 'The hands and hearts behind our home',
    'team.lead':
      'Yayasan Saint Lusia Angello is run by a legally registered board, guided by our founder Mother Lusia Owa.',
    'team.founderRole': 'Founder & Supervisor',
    'team.founderName': 'Lusia Owa',
    'team.founderStory':
      'Born in Ende, Flores – East Nusa Tenggara. Nine years of celibate life as a nun serving children with special needs. In 2017 she returned to lay life to serve more broadly, and in 2021 opened this home for children in need.',
    'team.pembinaRole': 'Supervisor (Pembina)',
    'team.pengawasRole': 'Overseer (Pengawas)',
    'team.ketuaRole': 'Chair (Ketua)',
    'team.sekretarisRole': 'Secretary (Sekretaris)',
    'team.bendaharaRole': 'Treasurer (Bendahara)',

    'daily.chip': 'Daily Life',
    'daily.title': 'A day at the Foundation',
    'daily.lead':
      'The rhythm we live with the children, from early morning to late evening. Transparent, so you know exactly what you support.',
    'daily.weekdaysTitle': 'Monday – Friday',
    'daily.weekendTitle': 'Saturday – Sunday',
    'daily.weekday1': '04:00 – 04:30 • Wake up together',
    'daily.weekday2': 'Get ready and head to school',
    'daily.weekday3': '12:00 – 13:00 • Return from school',
    'daily.weekday4': 'Afternoon rest, study time & snacks',
    'daily.weekday5': '18:00 • Rosary prayer together',
    'daily.weekday6': 'Dinner and night rest',
    'daily.weekend1': '07:30 – 12:00 • Extra lessons',
    'daily.weekend2':
      'Time with visitors — or sports & play when there are none',
    'daily.weekend3': 'After dinner: movies or recreation together',

    'footer.legalReg': 'Legally registered since 11 March 2023',
    'footer.legalRegLabel': 'Official Status',

    'youtube.chip': 'YouTube Channel',
    'youtube.title': 'Follow our journey on YouTube',
    'youtube.lead':
      'Every week we share the children\'s activities, donor visits, and family moments at our home. Subscribe to be part of every smile and every prayer.',
    'youtube.cta': 'Subscribe on YouTube',
    'youtube.secondary': '@ysla-25',
    'youtube.feature1': 'Daily life with the children',
    'youtube.feature2': 'Volunteer & donor visits',
    'youtube.feature3': 'Celebrations & prayer moments',

    'gallery.chip': 'Gallery',
    'gallery.title': 'Moments together at our home',
    'gallery.lead': 'A glimpse into daily life at Yayasan Saint Lusia Angello.',
    'gallery.cap1': 'Afternoon study time',
    'gallery.cap2': 'Family dinner',
    'gallery.cap3': 'Arts & crafts class',
    'gallery.cap4': 'Playtime in the yard',
    'gallery.cap5': 'Birthday celebrations',
    'gallery.cap6': 'Morning prayers together',

    'contact.chip': 'Contact',
    'contact.title': 'Call, write, or visit us',
    'contact.lead':
      'WhatsApp to Mother Liez is the quickest way. Visitors are welcome too — give us a heads-up so the children can greet you.',
    'contact.addressTitle': 'Address',
    'contact.addressValue':
      'Komplek Perumahan Walikota, Jl. H. Sa’aba, Blok C3 No. 12, RT 04 / RW 03, Meruya Selatan, Kembangan, West Jakarta 11650, Indonesia',
    'contact.phoneTitle': 'Phone',
    'contact.phoneRole': 'Foundation Director',
    'contact.whatsappCta': 'Chat on WhatsApp',
    'contact.emailTitle': 'Email',
    'contact.hoursTitle': 'Visiting Hours',
    'contact.hoursValue': 'Monday – Saturday, 09:00 – 17:00 WIB',
    'contact.formName': 'Full name',
    'contact.formEmail': 'Email address',
    'contact.formSubject': 'Subject',
    'contact.formMessage': 'Your message',
    'contact.formSubmit': 'Send message',
    'contact.formNote': 'We usually reply within 1–2 business days.',

    'footer.tagline':
      '20 children, 6 caregivers, 1 home in Meruya Selatan. Founded by Mother Lusia Owa — legally registered since 2023.',
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support Us',
    'footer.supportDonate': 'Financial Donation',
    'footer.supportGoods': 'Donate Goods',
    'footer.supportVolunteer': 'Volunteer',
    'footer.supportPartner': 'Become a Partner',
    'footer.legal': 'Legal',
    'footer.legalPrivacy': 'Privacy Policy',
    'footer.legalTerms': 'Terms & Conditions',
    'footer.legalTransparency': 'Transparency Report',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Made with love for our children.',
  },
}
