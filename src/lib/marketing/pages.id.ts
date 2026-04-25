import type { MarketingPage } from './types'

/**
 * Indonesian overrides; getPage() falls back to PAGES_EN for missing slugs.
 */
export const PAGES_ID: Partial<Record<string, MarketingPage>> = {
  'voice-ordering': {
    title: 'Pemesanan suara berbasis AI untuk restoran',
    metaDescription:
      'Jawab telepon dengan asisten suara aman merek. Tiket tersingkron ke POS, dapur, dan saluran delivery.',
    lead: 'AI Restro 360 menjawab panggilan tamu dengan bahasa alami, menangkap modifikator, dan menuliskan tiket bersih ke POS tanpa entri ganda. Tim tetap fokus ke lantai, bukan menempel ke telepon sepanjang malam sibuk.',
    sections: [
      {
        heading: 'Kontrol layanan',
        body: 'Kebijakan alergi, nudge upsell, dan ringkasan panggilan membantu pelatihan berbasis data, bukan tebak-tebakan semata.',
      },
      {
        heading: 'Satu catatan di seluruh saluran',
        body: 'Pesanan suara memakai rekord tamu dan item yang sama dengan pesanan web, in-store, dan marketplace sehingga laporan dan loyalitas tetap selaras.',
      },
    ],
  },
  'uber-eats': {
    title: 'Uber Eats',
    metaDescription:
      'Hubungkan Uber Eats ke dapur dan serah terima. Kurir marketplace tetap terlihat di alur operasi yang sama dengan pesanan first-party.',
    lead: 'Kami menyelaraskan menu, item 86, dan status serah terima sehingga dapur tidak menjalankan operasi ganda. Jika toko memakai kurir Uber Eats, status serah terima jelas. Jika Anda memakai armada sendiri atau hibrida, rute internal dapat dipetakan sehingga tamu menerima satu janji waktu jujur.',
    sections: [
      {
        heading: 'Kurir marketplace',
        body: 'Tas, struk, dan status disalurkan ke pihak yang betul tanpa jembatan manual antar aplikasi.',
      },
      {
        heading: 'Operasi & keuangan',
        body: 'Pajak, biaya layanan, dan ulang masak terikat ke kunci item yang sama dengan saluran lain agar rekonsiliasi rapi.',
      },
    ],
  },
  'help-center': {
    title: 'Pusat bantuan',
    metaDescription: 'Panduan singkat, kontrol antrean, dan jawaban umum.',
    lead: 'Artikel disusun per peran dan modul agar SOP dapur lantai cocok dengan nama di aplikasi.',
    sections: [
      { heading: 'Pembaruan', body: 'Tanggal tinjauan ditampilkan supaya pimpinan wilayah yakin SOP-nya terkini.' },
    ],
  },
  'documentation': {
    title: 'Dokumentasi produk',
    metaDescription: 'Referensi teknis modul, izin, dan integrasi.',
    lead: 'Perilaku sebenarnya, definisi data, dan catatan keamanan dipaparkan dengan bahasa yang jelas untuk teknis dan legal.',
    sections: [
      { heading: 'Pembangun', body: 'Lingkungan sandbox, versi, dan batas cakupan kunci didokumentasikan untuk review IT.' },
    ],
  },
  'pos-systems': {
    title: 'Integrasi sistem POS',
    metaDescription: 'Hubungkan POS agar harga, pajak, dan tiket sejalan di semua saluran.',
    lead: 'Katalog, pajak, dan area layanan dipetakan ke satu graf pesan. Perubahan disebarkan dengan jejak audit agar ratusan cabang terkendali.',
    sections: [
      { heading: 'Operasi', body: 'Cutover bertahap, dry run, dan papan kesehatan dibangun untuk restoran yang tetap buka.' },
    ],
  },
  'table-ordering': {
    title: 'Pemesanan meja & QR',
    metaDescription: 'Tamu memesan dan membayar dari ponsel; dapur dan lantai memakai tiket yang sama.',
    lead: 'QR mengarah ke menu live, modifier, dan pembayaran. Staf memantau kursi, coursing, dan waktu pelayanan dalam satu tampilan.',
    sections: [
      { heading: 'Layanan', body: 'Pembayaran di meja mengurangi antrean terminal di jam sibuk.' },
      { heading: 'Data', body: 'Promo, biaya layanan, dan mix saluran tercatat sejalan dengan penjualan POS.' },
    ],
  },
  'delivery-marketplaces': {
    title: 'Marketplace delivery dalam satu antrean',
    metaDescription: 'Satukan channel marketplace dengan model data internal.',
    lead: 'Menu, item 86, dan promo tercermin agar dapur hanya melayani satu sumber kebenaran untuk tiket.',
    sections: [
      { heading: 'Laporan', body: 'Pajak dan payout dipetakan ke item agar keuangan tidak menggabungkan CSV penuh misteri.' },
    ],
  },
  'kiosk-ordering': {
    title: 'Kiosk self-order',
    metaDescription: 'Antrean singkat, upsell terkendali, tiket ke dapur & POS.',
    lead: 'Alur peramban mengurangi kesalahan entri, menjaga upsell, dan mem-posting ke dapur tanpa hambatan.',
    sections: [
      { heading: 'Kontrol', body: 'Hold item dan daftar 86 mendekati waktu nyata sehingga tamu hanya memesan yang tersedia.' },
    ],
  },
  'doordash': {
    title: 'DoorDash',
    metaDescription: 'Hubungkan DoorDash ke master item dan antrean dapur.',
    lead: 'Menu, harga, dan jendela promo disinkron sehingga dapur menerima tiket normal, bukan daftar kedua terpisah.',
    sections: [
      { heading: 'Serah terima', body: 'Status tampil konsisten untuk staf sehingga tamu tidak menerima tiga versi waktu tiba.' },
    ],
  },
}
