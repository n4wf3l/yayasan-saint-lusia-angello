export type Language = 'id' | 'en'

export type TranslationKey =
  | 'nav.about'
  | 'nav.mission'
  | 'nav.programs'
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
  | 'impact.testimonial1'
  | 'impact.testimonial1Author'
  | 'impact.testimonial1Role'
  | 'impact.testimonial2'
  | 'impact.testimonial2Author'
  | 'impact.testimonial2Role'
  | 'impact.testimonial3'
  | 'impact.testimonial3Author'
  | 'impact.testimonial3Role'
  | 'donate.chip'
  | 'donate.title'
  | 'donate.lead'
  | 'donate.financialTitle'
  | 'donate.financialDesc'
  | 'donate.financialBank'
  | 'donate.financialAccount'
  | 'donate.financialName'
  | 'donate.financialCta'
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
    'nav.about': 'Tentang Kami',
    'nav.mission': 'Misi',
    'nav.programs': 'Program',
    'nav.impact': 'Dampak',
    'nav.donate': 'Donasi',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    'nav.donateCta': 'Donasi Sekarang',

    'hero.badge': 'Panti Asuhan di Jakarta, Indonesia',
    'hero.title1': 'Memberi harapan,',
    'hero.title2': 'merawat masa depan',
    'hero.title3': 'anak-anak kami.',
    'hero.subtitle':
      'Yayasan Saint Lusia Angello adalah rumah bagi anak-anak yatim di Jakarta. Kami memberikan kasih sayang, pendidikan, dan tempat yang aman untuk tumbuh menjadi pribadi yang kuat dan percaya diri.',
    'hero.ctaPrimary': 'Donasi Sekarang',
    'hero.ctaSecondary': 'Pelajari Lebih Lanjut',
    'hero.stat1Value': '120+',
    'hero.stat1Label': 'Anak terlayani',
    'hero.stat2Value': '15',
    'hero.stat2Label': 'Tahun pelayanan',
    'hero.stat3Value': '40+',
    'hero.stat3Label': 'Relawan aktif',

    'about.chip': 'Tentang Kami',
    'about.title': 'Rumah penuh kasih untuk anak-anak Jakarta',
    'about.p1':
      'Yayasan Saint Lusia Angello berdiri sejak 2010 di Jakarta dengan satu tujuan sederhana: memberikan rumah yang hangat dan aman bagi anak-anak yatim piatu, terlantar, dan kurang mampu.',
    'about.p2':
      'Kami percaya setiap anak layak mendapatkan kesempatan untuk belajar, bermain, dan bermimpi. Melalui dukungan Anda, kami memastikan mereka tumbuh dengan makanan sehat, pendidikan yang baik, dan pendampingan rohani.',
    'about.feature1Title': 'Tempat Aman',
    'about.feature1Desc': 'Lingkungan yang nyaman dan terlindungi 24 jam untuk setiap anak.',
    'about.feature2Title': 'Pendidikan',
    'about.feature2Desc': 'Akses sekolah formal dan bimbingan belajar harian.',
    'about.feature3Title': 'Gizi & Kesehatan',
    'about.feature3Desc': 'Makanan bergizi tiga kali sehari dan pemeriksaan kesehatan rutin.',
    'about.feature4Title': 'Kasih & Pendampingan',
    'about.feature4Desc': 'Konseling rohani dan dukungan emosional sepanjang pertumbuhan.',

    'mission.chip': 'Visi & Misi',
    'mission.title': 'Mengapa kami hadir',
    'mission.visionTitle': 'Visi Kami',
    'mission.visionText':
      'Menjadi rumah yang membentuk generasi muda Indonesia yang berkarakter, berpendidikan, dan penuh harapan.',
    'mission.missionTitle': 'Misi Kami',
    'mission.missionText':
      'Memberikan tempat tinggal, pendidikan, dan pendampingan menyeluruh kepada anak-anak yatim dan kurang mampu agar mereka dapat mencapai potensi penuh mereka.',
    'mission.valuesTitle': 'Nilai Kami',
    'mission.value1': 'Kasih tanpa syarat',
    'mission.value2': 'Integritas & transparansi',
    'mission.value3': 'Pendidikan berkualitas',
    'mission.value4': 'Komunitas yang peduli',

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

    'impact.chip': 'Dampak Kami',
    'impact.title': 'Cerita yang membuat kami terus berjalan',
    'impact.lead':
      'Berkat kebaikan Anda, ratusan anak telah menemukan rumah, mimpi, dan masa depan baru.',
    'impact.testimonial1':
      'Yayasan ini bukan sekadar tempat tinggal, tapi rumah yang membuat saya percaya pada mimpi lagi. Hari ini saya kuliah berkat dukungan mereka.',
    'impact.testimonial1Author': 'Rina',
    'impact.testimonial1Role': 'Alumni, Mahasiswi Keperawatan',
    'impact.testimonial2':
      'Kami bersyukur bisa ikut berbagi. Transparansi dan kehangatan tim di sini luar biasa.',
    'impact.testimonial2Author': 'Keluarga Tanoto',
    'impact.testimonial2Role': 'Donatur sejak 2018',
    'impact.testimonial3':
      'Melihat anak-anak tersenyum dan belajar bersama adalah pengalaman paling berarti dalam hidup saya.',
    'impact.testimonial3Author': 'Michael',
    'impact.testimonial3Role': 'Relawan pengajar',

    'donate.chip': 'Donasi',
    'donate.title': 'Cara Anda bisa membantu',
    'donate.lead':
      'Setiap bentuk dukungan — besar atau kecil — membuat perbedaan nyata dalam kehidupan anak-anak kami.',
    'donate.financialTitle': 'Donasi Keuangan',
    'donate.financialDesc':
      'Transfer langsung ke rekening resmi yayasan. Setiap rupiah digunakan untuk makanan, pendidikan, dan kebutuhan harian anak-anak.',
    'donate.financialBank': 'Bank BCA',
    'donate.financialAccount': '123-456-7890',
    'donate.financialName': 'a.n. Yayasan Saint Lusia Angello',
    'donate.financialCta': 'Transfer Sekarang',
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
    'contact.title': 'Mari terhubung dengan kami',
    'contact.lead':
      'Ada pertanyaan, ingin berdonasi, atau sekadar mampir? Jangan ragu untuk menghubungi kami.',
    'contact.addressTitle': 'Alamat',
    'contact.addressValue':
      'Jl. Melati Raya No. 12, Kemayoran, Jakarta Pusat 10620, Indonesia',
    'contact.phoneTitle': 'Telepon',
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
      'Rumah penuh kasih bagi anak-anak Jakarta. Terima kasih telah menjadi bagian dari perjalanan kami.',
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
    'nav.impact': 'Impact',
    'nav.donate': 'Donate',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.donateCta': 'Donate Now',

    'hero.badge': 'Orphanage based in Jakarta, Indonesia',
    'hero.title1': 'Giving hope,',
    'hero.title2': 'nurturing the future',
    'hero.title3': 'of our children.',
    'hero.subtitle':
      'Yayasan Saint Lusia Angello is a home for orphaned children in Jakarta. We provide love, education, and a safe space for them to grow into strong, confident individuals.',
    'hero.ctaPrimary': 'Donate Now',
    'hero.ctaSecondary': 'Learn More',
    'hero.stat1Value': '120+',
    'hero.stat1Label': 'Children served',
    'hero.stat2Value': '15',
    'hero.stat2Label': 'Years of service',
    'hero.stat3Value': '40+',
    'hero.stat3Label': 'Active volunteers',

    'about.chip': 'About Us',
    'about.title': 'A loving home for the children of Jakarta',
    'about.p1':
      'Yayasan Saint Lusia Angello was founded in 2010 in Jakarta with a simple purpose: to provide a warm, safe home for orphaned, abandoned, and underprivileged children.',
    'about.p2':
      'We believe every child deserves a chance to learn, play, and dream. Through your support, we make sure they grow up with healthy meals, quality education, and spiritual guidance.',
    'about.feature1Title': 'Safe Haven',
    'about.feature1Desc': 'A comfortable, protected environment, 24/7 for every child.',
    'about.feature2Title': 'Education',
    'about.feature2Desc': 'Access to formal schooling and daily tutoring sessions.',
    'about.feature3Title': 'Nutrition & Health',
    'about.feature3Desc': 'Three balanced meals a day and regular medical checkups.',
    'about.feature4Title': 'Love & Guidance',
    'about.feature4Desc': 'Spiritual counseling and emotional support through their growth.',

    'mission.chip': 'Vision & Mission',
    'mission.title': 'Why we exist',
    'mission.visionTitle': 'Our Vision',
    'mission.visionText':
      'To be a home that shapes a generation of Indonesian youth with character, education, and hope.',
    'mission.missionTitle': 'Our Mission',
    'mission.missionText':
      'To provide shelter, education, and holistic guidance to orphaned and underprivileged children so they can reach their full potential.',
    'mission.valuesTitle': 'Our Values',
    'mission.value1': 'Unconditional love',
    'mission.value2': 'Integrity & transparency',
    'mission.value3': 'Quality education',
    'mission.value4': 'A caring community',

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

    'impact.chip': 'Our Impact',
    'impact.title': 'Stories that keep us going',
    'impact.lead':
      'Thanks to your kindness, hundreds of children have found a home, dreams, and a new future.',
    'impact.testimonial1':
      'This foundation is more than a shelter — it is a home that made me believe in dreams again. Today I am in college because of them.',
    'impact.testimonial1Author': 'Rina',
    'impact.testimonial1Role': 'Alumna, Nursing Student',
    'impact.testimonial2':
      'We are grateful to share. The transparency and warmth of the team here is remarkable.',
    'impact.testimonial2Author': 'The Tanoto Family',
    'impact.testimonial2Role': 'Donors since 2018',
    'impact.testimonial3':
      'Seeing the children smile and learn together is the most meaningful experience of my life.',
    'impact.testimonial3Author': 'Michael',
    'impact.testimonial3Role': 'Volunteer teacher',

    'donate.chip': 'Donate',
    'donate.title': 'Ways you can help',
    'donate.lead':
      'Every form of support — big or small — makes a real difference in the lives of our children.',
    'donate.financialTitle': 'Financial Donation',
    'donate.financialDesc':
      'Transfer directly to our official account. Every rupiah goes to food, education, and the daily needs of the children.',
    'donate.financialBank': 'Bank BCA',
    'donate.financialAccount': '123-456-7890',
    'donate.financialName': 'under Yayasan Saint Lusia Angello',
    'donate.financialCta': 'Transfer Now',
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
    'contact.title': 'Let\'s get in touch',
    'contact.lead':
      'Have a question, want to donate, or just stop by? Please feel free to reach out.',
    'contact.addressTitle': 'Address',
    'contact.addressValue':
      'Jl. Melati Raya No. 12, Kemayoran, Central Jakarta 10620, Indonesia',
    'contact.phoneTitle': 'Phone',
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
      'A loving home for the children of Jakarta. Thank you for being part of our journey.',
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
