function installMobileSwipe() {
  let startX = 0;
  let startY = 0;
  let startTarget = null;

  document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTarget = event.target;
  }, { passive: true });

  document.addEventListener('touchend', (event) => {
    if (!startTarget || event.changedTouches.length === 0) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (Math.abs(deltaX) < 72 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

    const eventName = deltaX > 0 ? 'devsora:swipe-right' : 'devsora:swipe-left';
    window.dispatchEvent(new CustomEvent(eventName, {
      detail: {
        startX,
        startY,
        target: startTarget,
      },
    }));
  }, { passive: true });
}

function installMobileViewportClass() {
  const setClass = () => {
    document.documentElement.classList.toggle('is-touch', matchMedia('(pointer: coarse)').matches);
  };

  setClass();
  window.addEventListener('resize', setClass, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  installMobileSwipe();
  installMobileViewportClass();
});
