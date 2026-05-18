function devsoraMergePhotos() {
  return {
    sidebarOpen: false,
    dragging: false,
    processing: false,
    resultReady: false,
    progress: 0,
    errorMessage: '',
    instruction: '',
    selectedRatio: '1:1',
    processingLabel: 'Preparing source images...',
    images: [],
    results: [],
    toast: {
      show: false,
      type: 'success',
      title: '',
      message: '',
    },
    navItems: [
      { label: 'Dashboard', href: '/dashboard/index.html', icon: 'D', active: false },
      { label: 'Merge Photos', href: '/dashboard/merge-photos.html', icon: 'M', active: true },
      { label: 'Generate AI', href: '/dashboard/generate-ai.html', icon: 'G', active: false },
      { label: 'My Projects', href: '/dashboard/projects/index.html', icon: 'P', active: false },
      { label: 'Settings', href: '/dashboard/settings/index.html', icon: 'S', active: false },
    ],
    ratios: [
      { label: '1:1', value: '1:1' },
      { label: '16:9', value: '16:9' },
      { label: '9:16', value: '9:16' },
    ],
    init() {
      window.addEventListener('devsora:swipe-right', (event) => {
        if (event.detail.startX < 32) this.sidebarOpen = true;
      });
      window.addEventListener('devsora:swipe-left', () => {
        this.sidebarOpen = false;
      });
    },
    handleFiles(event) {
      this.addFiles([...event.target.files]);
      event.target.value = '';
    },
    handleDrop(event) {
      this.dragging = false;
      this.addFiles([...event.dataTransfer.files]);
    },
    addFiles(files) {
      this.errorMessage = '';
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));

      if (imageFiles.length !== files.length) {
        this.showError('Only image files are supported.');
        return;
      }

      const slots = 5 - this.images.length;
      if (slots <= 0) {
        this.showError('You can upload a maximum of 5 images.');
        return;
      }

      imageFiles.slice(0, slots).forEach((file) => {
        this.images.push({
          id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
          name: file.name,
          url: URL.createObjectURL(file),
        });
      });

      if (imageFiles.length > slots) {
        this.showToast('Limit reached', 'Only the first images were added. Maximum upload is 5 images.');
      }

      this.resultReady = false;
      this.results = [];
    },
    removeImage(id) {
      const image = this.images.find((item) => item.id === id);
      if (image) URL.revokeObjectURL(image.url);
      this.images = this.images.filter((item) => item.id !== id);
      this.resultReady = false;
      this.results = [];
    },
    generate() {
      this.errorMessage = '';

      if (this.images.length < 2) {
        this.showError('Please upload at least 2 images before creating variations.');
        return;
      }

      if (this.images.length > 5) {
        this.showError('Please keep the upload count under 5 images.');
        return;
      }

      if (!this.instruction.trim()) {
        this.showError('Please write instructions for how the images should be merged.');
        return;
      }

      this.processing = true;
      this.resultReady = false;
      this.progress = 5;
      this.processingLabel = 'Preparing source images...';

      const labels = [
        'Analyzing photo subjects...',
        'Aligning composition and scale...',
        'Merging visual details...',
        'Rendering four variations...',
        'Finalizing previews...',
      ];

      let step = 0;
      const timer = window.setInterval(() => {
        this.progress = Math.min(this.progress + 18, 100);
        this.processingLabel = labels[Math.min(step, labels.length - 1)];
        step += 1;

        if (this.progress >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => {
            this.processing = false;
            this.resultReady = true;
            this.results = [1, 2, 3, 4].map((item) => ({
              id: item,
              art: `merge-variation-${item}`,
            }));
            this.showToast('4 variations ready', 'Your merged photo previews are ready.');
          }, 350);
        }
      }, 420);
    },
    previewResult(result) {
      this.showToast('Preview opened', `Variation ${result.id} is ready for full-screen preview integration.`);
    },
    downloadResult(result) {
      this.showToast('Download queued', `Variation ${result.id} is ready for HD download integration.`);
    },
    showError(message) {
      this.errorMessage = message;
      this.showToast('Action needed', message, 'error');
    },
    showToast(title, message, type = 'success') {
      this.toast = { show: true, title, message, type };
      window.setTimeout(() => {
        this.toast.show = false;
      }, 3200);
    },
  };
}

window.devsoraMergePhotos = devsoraMergePhotos;
