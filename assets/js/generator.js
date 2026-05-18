function devsoraGenerator() {
  return {
    sidebarOpen: false,
    credits: 1240,
    dragging: false,
    processing: false,
    resultReady: false,
    progress: 0,
    fileName: '',
    previewUrl: '',
    modelFileName: '',
    modelPreviewUrl: '',
    mergeImages: [],
    generatedResults: [],
    previewModal: {
      open: false,
      result: null,
    },
    prompt: '',
    selectedCategory: 'Merge Photos',
    photoshootStyle: 'Product',
    modelFlow: 'Create Model',
    modelPreset: 'Flat background editorial',
    aspectRatio: '1:1',
    errorMessage: '',
    processingLabel: 'Preparing neural canvas...',
    timer: null,
    toast: {
      show: false,
      type: 'success',
      title: '',
      message: '',
    },
    navItems: [
      { label: 'Dashboard', href: 'dashboard/index.html', icon: 'D', active: false },
      { label: 'Generate AI', href: 'dashboard/generate-ai.html', icon: 'G', active: true },
      { label: 'My Projects', href: 'dashboard/projects/index.html', icon: 'P', active: false },
      { label: 'Billing', href: 'dashboard/billing/index.html', icon: 'B', active: false },
      { label: 'Settings', href: 'dashboard/settings/index.html', icon: 'S', active: false },
      { label: 'Logout', href: 'auth/login.html', icon: 'L', active: false },
    ],
    categories: [
      { label: 'Merge Photos', value: 'Merge Photos', hint: 'Upload 2-5 images and create merged previews.' },
      { label: 'Product Photoshoot', value: 'Product Photoshoot', hint: 'Upload a product photo and create professional photoshoot scenarios instantly.' },
      { label: 'AI Model Photo', value: 'AI Model Photo', hint: 'Describe the model you want or let AI create a polished model set.' },
    ],
    photoshootStyles: ['Product', 'Product with model'],
    modelFlows: ['Create Model', 'Change Pose'],
    modelPresets: [
      'Flat background editorial',
      'Fashion ecommerce studio',
      'Luxury lifestyle campaign',
      'Corporate headshot model',
      'Beauty skincare close-up',
      'Fitness activewear model',
      'Streetwear lookbook',
      'Virtual influencer portrait',
    ],
    ratios: ['1:1', '4:5', '16:9', '9:16', '3:2', '2:3'],
    init() {
      window.addEventListener('devsora:swipe-right', (event) => {
        if (event.detail.startX < 32) this.sidebarOpen = true;
      });
      window.addEventListener('devsora:swipe-left', () => {
        this.sidebarOpen = false;
      });
    },
    get isMergeMode() {
      return this.selectedCategory === 'Merge Photos';
    },
    get isPhotoshootMode() {
      return this.selectedCategory === 'Product Photoshoot';
    },
    get isModelMode() {
      return this.selectedCategory === 'AI Model Photo';
    },
    get needsModelInput() {
      return this.isPhotoshootMode && this.photoshootStyle === 'Product with model';
    },
    get selectedCategoryHint() {
      return this.categories.find((category) => category.value === this.selectedCategory)?.hint || '';
    },
    handleFile(event) {
      const file = event.target.files && event.target.files[0];
      this.setFile(file);
    },
    handleModelFile(event) {
      const file = event.target.files && event.target.files[0];
      this.setModelFile(file);
    },
    handleMergeFiles(event) {
      this.addMergeFiles([...event.target.files]);
      event.target.value = '';
    },
    handleDrop(event) {
      this.dragging = false;
      const files = [...event.dataTransfer.files];
      if (this.isMergeMode) {
        this.addMergeFiles(files);
        return;
      }
      this.setFile(files[0]);
    },
    addMergeFiles(files) {
      this.errorMessage = '';
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));

      if (imageFiles.length !== files.length) {
        this.showError('Only image files are supported.');
        return;
      }

      const slots = 5 - this.mergeImages.length;
      if (slots <= 0) {
        this.showError('You can upload a maximum of 5 images.');
        return;
      }

      imageFiles.slice(0, slots).forEach((file) => {
        this.mergeImages.push({
          id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
          name: file.name,
          url: URL.createObjectURL(file),
        });
      });

      if (imageFiles.length > slots) {
        this.showToast('warning', 'Limit reached', 'Only the first images were added. Maximum upload is 5 images.');
      }

      this.resultReady = false;
      this.generatedResults = [];
    },
    removeMergeImage(id) {
      const image = this.mergeImages.find((item) => item.id === id);
      if (image) URL.revokeObjectURL(image.url);
      this.mergeImages = this.mergeImages.filter((item) => item.id !== id);
      this.resultReady = false;
      this.generatedResults = [];
    },
    setFile(file) {
      this.errorMessage = '';
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        this.showError('Only image files are supported.');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        this.showError('Image is too large. Please upload a file under 10MB.');
        return;
      }

      if (this.previewUrl) URL.revokeObjectURL(this.previewUrl);
      this.fileName = file.name;
      this.previewUrl = URL.createObjectURL(file);
      this.resultReady = false;
      this.generatedResults = [];
    },
    setModelFile(file) {
      this.errorMessage = '';
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        this.showError('Only image files are supported.');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        this.showError('Model image is too large. Please upload a file under 10MB.');
        return;
      }

      if (this.modelPreviewUrl) URL.revokeObjectURL(this.modelPreviewUrl);
      this.modelFileName = file.name;
      this.modelPreviewUrl = URL.createObjectURL(file);
      this.resultReady = false;
      this.generatedResults = [];
    },
    setCategory(value) {
      this.selectedCategory = value;
      this.resultReady = false;
      this.progress = 0;
      this.errorMessage = '';
      this.generatedResults = [];
      this.previewModal = { open: false, result: null };
    },
    generate() {
      this.errorMessage = '';

      if (this.isMergeMode && this.mergeImages.length < 2) {
        this.showError('Please upload at least 2 images for Merge Photos.');
        return;
      }

      if (this.isMergeMode && this.mergeImages.length > 5) {
        this.showError('Please keep Merge Photos uploads under 5 images.');
        return;
      }

      if (!this.isMergeMode && !this.isModelMode && !this.previewUrl) {
        this.showError('Please upload an image before generating.');
        return;
      }

      if (this.needsModelInput && !this.modelPreviewUrl) {
        this.showError('Please upload a model photo for Product with model style.');
        return;
      }

      if (!this.isPhotoshootMode && !this.isModelMode && !this.prompt.trim()) {
        this.showError(this.isMergeMode ? 'Instructions are required before creating variations.' : 'Prompt is required before generating an image.');
        return;
      }

      this.processing = true;
      this.resultReady = false;
      this.progress = 4;
      this.processingLabel = 'Preparing neural canvas...';
      window.clearInterval(this.timer);

      const labels = this.isMergeMode
        ? ['Analyzing source images...', 'Aligning subjects and scale...', 'Merging visual details...', 'Rendering variations...', 'Finalizing previews...']
        : this.isPhotoshootMode
          ? ['Reading product details...', 'Building studio scenarios...', 'Matching lighting and surface texture...', 'Rendering photoshoot previews...', 'Finalizing ecommerce-ready shots...']
          : this.isModelMode
            ? ['Reading model direction...', 'Building wardrobe and expression matrix...', 'Balancing pose, face, and lighting...', 'Rendering model previews...', 'Finalizing studio-ready portraits...']
            : ['Reading prompt intent...', 'Analyzing image reference...', 'Building latent composition...', 'Applying style and aspect ratio...', 'Rendering HD preview...', 'Finalizing export layers...'];

      let step = 0;
      this.timer = window.setInterval(() => {
        const increment = Math.floor(Math.random() * 13) + 7;
        this.progress = Math.min(this.progress + increment, 100);
        this.processingLabel = labels[Math.min(step, labels.length - 1)];
        step += 1;

        if (this.progress >= 100) {
          window.clearInterval(this.timer);
          window.setTimeout(() => {
            this.processing = false;
            this.resultReady = true;
            this.credits = Math.max(this.credits - 24, 0);
            const prefix = this.getResultPrefix();
            this.generatedResults = [1, 2, 3, 4].map((item) => ({
              id: item,
              art: `${prefix}-variation-${item}`,
            }));
            if (this.isMergeMode) {
              this.showToast('success', 'Variations ready', 'Your merged photo previews are ready.');
              return;
            }
            if (this.isPhotoshootMode) {
              this.showToast('success', 'Photoshoot ready', 'Your product photoshoot previews are ready.');
              return;
            }
            if (this.isModelMode) {
              this.showToast('success', 'AI model ready', 'Your model previews are ready.');
              return;
            }
            this.showToast('success', 'Generation complete', 'Your image previews are ready.');
          }, 420);
        }
      }, 460);
    },
    getResultPrefix() {
      if (this.isMergeMode) return 'merge';
      if (this.isPhotoshootMode) return 'photoshoot';
      if (this.isModelMode) return 'model';
      return 'merge';
    },
    previewResult(result) {
      this.previewModal = { open: true, result };
    },
    closePreview() {
      this.previewModal = { open: false, result: null };
    },
    shareResult(result) {
      this.showToast('success', 'Share link copied', `Preview ${result.id} link is ready.`);
    },
    downloadResult(result) {
      this.showToast('success', 'Download queued', `Variation ${result.id} is ready for HD download integration.`);
    },
    showError(message) {
      this.errorMessage = message;
      this.showToast('error', 'Action needed', message);
    },
    showToast(type, title, message) {
      this.toast = { show: true, type, title, message };
      window.setTimeout(() => {
        this.toast.show = false;
      }, 3200);
    },
  };
}

window.devsoraGenerator = devsoraGenerator;
