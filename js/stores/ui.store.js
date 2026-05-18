export function appShell() {
  return {
    featuredTools: [
      { slug: 'merge', kicker: 'Compose', name: 'Merge Photos', href: '/pages/features/gabung-foto.html', description: 'Gabungkan beberapa gambar menjadi satu visual kampanye.' },
      { slug: 'photoshoot', kicker: 'Commerce', name: 'Product Photoshoot', href: '/dashboard/generate-ai.html', description: 'Buat skenario photoshoot profesional dari foto produk.' },
      { slug: 'model', kicker: 'Portrait', name: 'AI Model Photo', href: '/pages/features/foto-model.html', description: 'Buat model AI profesional untuk visual brand.' },
    ],
  };
}

export function authPage(mode) {
  return {
    mode,
    form: {},
    submit() {
      console.info(`Submit ${this.mode}`, this.form);
    },
  };
}

export function dashboardShell() {
  return {
    stats: [
      { label: 'Credits', value: '1,240' },
      { label: 'Projects', value: '18' },
      { label: 'Exports', value: '392' },
    ],
  };
}

export function projectsPage() {
  return {
    projects: [
      { id: 1, name: 'Skincare Studio', type: 'Product Photoshoot' },
      { id: 2, name: 'Founder Model Set', type: 'AI Model Photo' },
      { id: 3, name: 'Campaign Merge', type: 'Merge Photos' },
    ],
  };
}

export function featurePage(title) {
  return { title };
}
