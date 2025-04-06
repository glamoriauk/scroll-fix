(function(){
  const waitForSwiper = setInterval(() => {
    const carousels = document.querySelectorAll('.swiper');
    if (!carousels.length) return;

    clearInterval(waitForSwiper);

    carousels.forEach((carousel) => {
      let startX = 0;
      let startY = 0;

      carousel.addEventListener('touchstart', function (e) {
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
      }, { passive: false });

      carousel.addEventListener('touchmove', function (e) {
        const t = e.touches[0];
        const deltaX = Math.abs(t.clientX - startX);
        const deltaY = Math.abs(t.clientY - startY);

        if (deltaY > deltaX) {
          // L'utilisateur scrolle vers le bas → on arrête l'action du carrousel
          e.preventDefault(); // bloque swiper.js
          e.stopPropagation(); // laisse passer le scroll vertical
        }
      }, { passive: false });
    });
  }, 100);
})();
