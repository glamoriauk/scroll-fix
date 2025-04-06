(function(){
  const waitForCarousel = setInterval(() => {
    const carousels = document.querySelectorAll('.sio-carousel');
    if (!carousels.length) return;

    clearInterval(waitForCarousel);

    carousels.forEach((carousel) => {
      let startX = 0;
      let startY = 0;

      carousel.addEventListener('touchstart', function (e) {
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
      }, { passive: true });

      carousel.addEventListener('touchmove', function (e) {
        const t = e.touches[0];
        const deltaX = Math.abs(t.clientX - startX);
        const deltaY = Math.abs(t.clientY - startY);

        if (deltaY < deltaX) {
          // swipe horizontal autorisé
        } else {
          // swipe vertical, laisser défiler
          e.stopPropagation();
        }
      }, { passive: true });
    });
  }, 100);
})();
