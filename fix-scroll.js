(function(){
  const waitForCarousel = setInterval(() => {
    const section = document.querySelector('.sio-carousel');
    if (!section) return;

    clearInterval(waitForCarousel);

    let startX = 0;
    let startY = 0;

    section.addEventListener('touchstart', function (e) {
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
    }, { passive: true });

    section.addEventListener('touchmove', function (e) {
      const t = e.touches[0];
      const deltaX = Math.abs(t.clientX - startX);
      const deltaY = Math.abs(t.clientY - startY);

      if (deltaY < deltaX) {
        // swipe horizontal = autorisé
      } else {
        // swipe vertical = on laisse défiler la page
        e.stopPropagation();
      }
    }, { passive: true });
  }, 100);
})();
