function devsoraDashboard() {
  return {
    sidebarOpen: false,
    credits: 1240,
    dragging: false,
    generating: false,
    fileName: '',
    prompt: '',
    selectedStyle: 'Product Photoshoot',
    slider: 52,
    navItems: [
      { label: 'Dashboard', href: '/devsora/dashboard/index.html', icon: 'D', active: true },
      { label: 'Generate AI', href: '/devsora/dashboard/generate-ai.html', icon: 'G', active: false },
      { label: 'My Projects', href: '/devsora/dashboard/projects/index.html', icon: 'P', active: false },
      { label: 'Billing', href: '/devsora/dashboard/billing/index.html', icon: 'B', active: false },
      { label: 'Settings', href: '/devsora/dashboard/settings/index.html', icon: 'S', active: false },
      { label: 'Logout', href: '/devsora/auth/login.html', icon: 'L', active: false },
    ],
    heroMetrics: [
      { label: 'exports', value: '392' },
      { label: 'projects', value: '18' },
      { label: 'queue', value: '12s' },
    ],
    stats: [
      { label: 'Generated images', value: '2,840', delta: '+18%', positive: true },
      { label: 'Active projects', value: '18', delta: '+4', positive: true },
      { label: 'Credits used', value: '760', delta: '38%', positive: false },
      { label: 'Downloads', value: '392', delta: '+27%', positive: true },
    ],
    styles: [
      'Merge Photos',
      'Product Photoshoot',
      'AI Model Photo',
    ],
    projects: [
      { name: 'Skincare Launch', type: 'Product Photoshoot', art: 'art-product' },
      { name: 'Founder Portraits', type: 'AI Model Photo', art: 'art-headshot' },
      { name: 'Campaign Blend', type: 'Merge Photos', art: 'art-wedding' },
    ],
    history: [
      { name: 'Chrome bottle campaign', meta: 'Product Photoshoot - 2 min ago', status: 'Done', dot: 'dot-blue' },
      { name: 'Studio model set', meta: 'AI Model Photo - 18 min ago', status: 'Done', dot: 'dot-purple' },
      { name: 'Campaign merge pack', meta: 'Merge Photos - 1h ago', status: 'Exported', dot: 'dot-green' },
    ],
    init() {
      window.addEventListener('devsora:swipe-right', (event) => {
        if (event.detail.startX < 32) this.sidebarOpen = true;
      });
      window.addEventListener('devsora:swipe-left', () => {
        this.sidebarOpen = false;
      });
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
        this.slider = 58;
      }, 900);
    },
  };
}

window.devsoraDashboard = devsoraDashboard;
