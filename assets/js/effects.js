function createParticleLayer() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (document.querySelector('.fx-particles')) return;

  const layer = document.createElement('div');
  layer.className = 'fx-particles';
  layer.setAttribute('aria-hidden', 'true');

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const count = isMobile ? 14 : 26;

  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'fx-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${90 + Math.random() * 20}%`;
    particle.style.setProperty('--duration', `${9 + Math.random() * 10}s`);
    particle.style.setProperty('--delay', `${Math.random() * 8}s`);
    particle.style.setProperty('--drift', `${Math.random() * 70 - 35}px`);
    layer.appendChild(particle);
  }

  document.body.prepend(layer);
}

function createAmbientGradient() {
  if (document.querySelector('.fx-ambient-gradient')) return;

  const ambient = document.createElement('div');
  ambient.className = 'fx-ambient-gradient';
  ambient.setAttribute('aria-hidden', 'true');
  document.body.prepend(ambient);

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;

  window.addEventListener('pointermove', (event) => {
    const x = Math.round((event.clientX / window.innerWidth) * 100);
    const y = Math.round((event.clientY / window.innerHeight) * 100);
    ambient.style.setProperty('--fx-x', `${x}%`);
    ambient.style.setProperty('--fx-y', `${y}%`);
  }, { passive: true });
}

function installScrollReveal() {
  const selectors = [
    'section',
    '.ds-card',
    '.gallery-card',
    '.pricing-card',
    '.project-card',
    '.auth-panel',
  ];

  const nodes = [...document.querySelectorAll(selectors.join(','))]
    .filter((node) => !node.closest('.mobile-bottom-nav') && !node.classList.contains('fx-no-reveal'));

  nodes.forEach((node) => node.classList.add('fx-reveal'));

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  });

  nodes.forEach((node) => observer.observe(node));
}

function installSkeletonAutoHide() {
  document.querySelectorAll('[data-skeleton]').forEach((node) => {
    node.classList.add('fx-skeleton');
    window.setTimeout(() => {
      node.classList.remove('fx-skeleton');
      node.removeAttribute('data-skeleton');
    }, 900);
  });
}

function optimizeImages() {
  document.querySelectorAll('img').forEach((image) => {
    if (!image.hasAttribute('decoding')) image.setAttribute('decoding', 'async');
    if (!image.hasAttribute('loading')) image.setAttribute('loading', 'lazy');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  optimizeImages();
  createAmbientGradient();
  createParticleLayer();
  installScrollReveal();
  installSkeletonAutoHide();
});
