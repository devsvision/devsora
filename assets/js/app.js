function devsoraLanding() {
  const translations = {
    en: {
      nav: {
        home: 'Home',
        tools: 'AI Tools',
        pricing: 'Pricing',
        login: 'Login',
        cta: 'Start Creating',
      },
      hero: {
        eyebrow: 'AI Creative Visual Platform',
        title: 'Generate premium AI visuals for brands that move fast.',
        description: 'DEVSORA combines Merge Photos, Product Photoshoot, and AI Model Photo in a fast, sharp, commercial-ready visual studio.',
        primary: 'Generate your first image',
        secondary: 'View AI tools',
      },
      metrics: ['images generated', 'faster creative ops', 'export ready'],
      studio: {
        title: 'Neural Studio',
        subtitle: 'Product Photoshoot / Editorial Lighting',
        upload: 'Upload product, portrait, or concept image',
        uploadHelp: 'Drop image here, then choose a generation style. PNG, JPG, WEBP supported.',
        prompt: 'Prompt: cinematic product photoshoot, clean studio light, blue neon rim light',
        generating: 'Generating...',
        generate: 'Generate',
      },
      sections: {
        toolsEyebrow: 'AI Tools',
        toolsTitle: 'One studio. Every visual workflow.',
        galleryEyebrow: 'Showcase Gallery',
        galleryTitle: 'Campaign-grade output with studio speed.',
        pricingEyebrow: 'Pricing',
        pricingTitle: 'Start free. Scale when your visuals do.',
        faqEyebrow: 'FAQ',
        faqTitle: 'Questions before launch?',
      },
      presets: ['Merge Photos', 'Product Photoshoot', 'AI Model Photo'],
      tools: [
        { icon: 'M', title: 'Merge Photos', text: 'Combine multiple images into one polished AI composition for campaigns, catalogs, and creative mockups.' },
        { icon: 'P', title: 'Product Photoshoot', text: 'Turn product photos into professional studio, lifestyle, and campaign-ready scenarios.' },
        { icon: 'A', title: 'AI Model Photo', text: 'Create professional AI model visuals for fashion, beauty, personal brand, and social campaigns.' },
      ],
      gallery: [
        { title: 'Merged campaign concept', caption: 'Merge Photos', size: 'wide', gradient: 'art-product' },
        { title: 'Product studio set', caption: 'Product Photoshoot', size: 'tall', gradient: 'art-wedding' },
        { title: 'Editorial model set', caption: 'AI Model Photo', size: '', gradient: 'art-headshot' },
      ],
      compare: {
        before: 'Before',
        after: 'After',
        title: 'Automatic studio transformation',
        text: 'Create polished visual options with consistent lighting, composition, and brand-ready finishing.',
      },
      plans: [
        { name: 'Free', price: 'Rp0', period: '/mo', text: 'For testing the studio and creating first AI visuals.', cta: 'Start Free', featured: false, features: ['1 project', 'Basic exports', 'Watermarked exports'] },
        { name: 'Pro', price: 'Rp75.000', period: '/mo', text: 'For creators, sellers, and teams producing visual campaigns weekly.', cta: 'Go Pro', featured: true, features: ['10 projects', '1080p HD exports', 'Exports without watermark', 'Priority queue'] },
        { name: 'Lifetime', price: 'Rp1.200.000', period: 'once', text: 'For early adopters who want long-term creative production access.', cta: 'Get Lifetime', featured: false, features: ['Unlimited projects', 'HD/2K/4K exports', 'VIP feature bonus'] },
      ],
      faqs: [
        { q: 'Does DEVSORA require software installation?', a: 'No. DEVSORA runs as a lightweight web app and works directly from a modern browser.' },
        { q: 'Can the visual results be used commercially?', a: 'Pro and Lifetime plans are designed for commercial workflows, including product visuals, ad creatives, and brand campaigns.' },
        { q: 'Can I upload my own photos?', a: 'Yes. The studio supports upload-based workflows, and production integration can connect to the DEVSORA backend API.' },
        { q: 'Is this frontend easy to deploy to a VPS?', a: 'Yes. This static frontend can be uploaded to an Apache or Nginx document root without a build step.' },
      ],
      footer: {
        description: 'Premium AI creative visual platform for product teams, sellers, agencies, and creators.',
        platform: 'Platform',
        account: 'Account',
        legal: 'Legal',
        tools: 'AI Tools',
        showcase: 'Showcase',
        pricing: 'Pricing',
        login: 'Login',
        register: 'Register',
        dashboard: 'Dashboard',
        privacy: 'Privacy',
        terms: 'Terms',
        rights: '© 2026 DEVSORA. All rights reserved.',
        managed: 'Managed by DEVS STUDIO',
        company: 'PT. Dewata Eksha Visual Sinergy',
      },
      mobile: {
        home: 'Home',
        tools: 'AI Tools',
        showcase: 'Showcase',
        login: 'Login',
      },
    },
    id: {
      nav: {
        home: 'Beranda',
        tools: 'Alat AI',
        pricing: 'Harga',
        login: 'Masuk',
        cta: 'Mulai Membuat',
      },
      hero: {
        eyebrow: 'Platform Visual Kreatif AI',
        title: 'Buat visual AI premium untuk brand yang bergerak cepat.',
        description: 'DEVSORA menyatukan Gabung Foto, Photoshoot Produk, dan Foto Model AI dalam studio visual yang cepat, tajam, dan siap komersial.',
        primary: 'Buat gambar pertama',
        secondary: 'Lihat alat AI',
      },
      metrics: ['gambar dibuat', 'operasional kreatif lebih cepat', 'siap ekspor'],
      studio: {
        title: 'Neural Studio',
        subtitle: 'Photoshoot Produk / Pencahayaan Editorial',
        upload: 'Unggah foto produk, portrait, atau konsep',
        uploadHelp: 'Letakkan gambar di sini, lalu pilih gaya generasi. Mendukung PNG, JPG, WEBP.',
        prompt: 'Prompt: photoshoot produk sinematik, studio bersih, rim light neon biru',
        generating: 'Membuat...',
        generate: 'Buat',
      },
      sections: {
        toolsEyebrow: 'Alat AI',
        toolsTitle: 'Satu studio untuk semua alur visual.',
        galleryEyebrow: 'Galeri Showcase',
        galleryTitle: 'Output kelas kampanye dengan kecepatan studio.',
        pricingEyebrow: 'Harga',
        pricingTitle: 'Mulai gratis. Tingkatkan saat kebutuhan visual bertumbuh.',
        faqEyebrow: 'FAQ',
        faqTitle: 'Pertanyaan sebelum mulai?',
      },
      presets: ['Gabung Foto', 'Photoshoot Produk', 'Foto Model AI'],
      tools: [
        { icon: 'G', title: 'Gabung Foto', text: 'Gabungkan beberapa gambar menjadi satu komposisi AI yang rapi untuk kampanye, katalog, dan mockup kreatif.' },
        { icon: 'P', title: 'Photoshoot Produk', text: 'Ubah foto produk menjadi skenario studio, lifestyle, dan kampanye profesional.' },
        { icon: 'M', title: 'Foto Model AI', text: 'Buat visual model AI profesional untuk fashion, beauty, personal brand, dan kampanye sosial.' },
      ],
      gallery: [
        { title: 'Konsep kampanye gabungan', caption: 'Gabung Foto', size: 'wide', gradient: 'art-product' },
        { title: 'Set studio produk', caption: 'Photoshoot Produk', size: 'tall', gradient: 'art-wedding' },
        { title: 'Set model editorial', caption: 'Foto Model AI', size: '', gradient: 'art-headshot' },
      ],
      compare: {
        before: 'Sebelum',
        after: 'Sesudah',
        title: 'Transformasi studio otomatis',
        text: 'Buat pilihan visual yang rapi dengan pencahayaan konsisten, komposisi matang, dan finishing siap brand.',
      },
      plans: [
        { name: 'Gratis', price: 'Rp0', period: '/bln', text: 'Untuk mencoba studio dan membuat visual AI pertama.', cta: 'Mulai Gratis', featured: false, features: ['1 project', 'Ekspor dasar', 'Ekspor dengan watermark'] },
        { name: 'Pro', price: 'Rp75.000', period: '/bln', text: 'Untuk kreator, seller, dan tim yang memproduksi kampanye visual mingguan.', cta: 'Pilih Pro', featured: true, features: ['10 project', 'Ekspor 1080p HD', 'Ekspor tanpa watermark', 'Antrean prioritas'] },
        { name: 'Lifetime', price: 'Rp1.200.000', period: 'sekali bayar', text: 'Untuk early adopter yang ingin akses produksi kreatif jangka panjang.', cta: 'Ambil Lifetime', featured: false, features: ['Unlimited project', 'Ekspor HD/2K/4K', 'Bonis Fitur VIP'] },
      ],
      faqs: [
        { q: 'Apakah DEVSORA perlu instal software?', a: 'Tidak. DEVSORA berjalan sebagai web app ringan dan bisa dipakai langsung dari browser modern.' },
        { q: 'Apakah hasil visual bisa dipakai untuk komersial?', a: 'Paket Pro dan Lifetime dirancang untuk alur kerja komersial, termasuk visual produk, iklan kreatif, dan kampanye brand.' },
        { q: 'Apakah bisa unggah foto sendiri?', a: 'Bisa. Studio mendukung alur berbasis upload, dan integrasi produksi dapat diarahkan ke backend API DEVSORA.' },
        { q: 'Apakah frontend ini mudah deploy ke VPS?', a: 'Ya. Frontend statis ini cukup diunggah ke document root Apache atau Nginx tanpa build step.' },
      ],
      footer: {
        description: 'Platform visual kreatif AI premium untuk tim produk, seller, agensi, dan kreator.',
        platform: 'Platform',
        account: 'Akun',
        legal: 'Legal',
        tools: 'Alat AI',
        showcase: 'Showcase',
        pricing: 'Harga',
        login: 'Masuk',
        register: 'Daftar',
        dashboard: 'Dashboard',
        privacy: 'Privasi',
        terms: 'Ketentuan',
        rights: '© 2026 DEVSORA. Seluruh hak cipta dilindungi.',
        managed: 'Managed by DEVS STUDIO',
        company: 'PT. Dewata Eksha Visual Sinergy',
      },
      mobile: {
        home: 'Beranda',
        tools: 'Alat AI',
        showcase: 'Showcase',
        login: 'Masuk',
      },
    },
  };

  return {
    language: localStorage.getItem('devsora-language') || 'id',
    langOpen: false,
    mobileOpen: false,
    scrolled: false,
    dragging: false,
    generating: false,
    fileName: '',
    prompt: '',
    openFaq: 0,
    currency: 'IDR',
    get copy() {
      return translations[this.language];
    },
    get languageLabel() {
      return this.language === 'id' ? 'ID' : 'EN';
    },
    get languageFlag() {
      return this.language === 'id' ? '🇮🇩' : '🇺🇸';
    },
    get presets() { return this.copy.presets; },
    get tools() { return this.copy.tools; },
    get gallery() { return this.copy.gallery; },
    get plans() { return this.copy.plans; },
    get faqs() { return this.copy.faqs; },
    init() {
      this.applyLanguage();
      this.scrolled = window.scrollY > 12;
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 12;
      }, { passive: true });
      window.addEventListener('devsora:swipe-left', () => {
        this.mobileOpen = false;
      });
      window.addEventListener('devsora:swipe-right', (event) => {
        if (event.detail.startX < 28) this.mobileOpen = true;
      });
    },
    setLanguage(language) {
      this.language = language;
      this.langOpen = false;
      localStorage.setItem('devsora-language', language);
      this.openFaq = 0;
      this.applyLanguage();
    },
    applyLanguage() {
      document.documentElement.lang = this.language;
      document.title = this.language === 'id'
        ? 'DEVSORA - Platform Visual Kreatif AI Premium'
        : 'DEVSORA - Premium AI Creative Visual Platform';
    },
    handleFile(event) {
      const file = event.target.files && event.target.files[0];
      if (file) this.fileName = file.name;
    },
    handleDrop(event) {
      this.dragging = false;
      const file = event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) this.fileName = file.name;
    },
    generate() {
      this.generating = true;
      window.setTimeout(() => {
        this.generating = false;
      }, 900);
    },
  };
}

window.devsoraLanding = devsoraLanding;

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tilt-card');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!canHover) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
