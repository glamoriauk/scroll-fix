document.addEventListener('DOMContentLoaded', function () {
  const section = document.querySelector('#section-363fa713');
  if (!section) return;

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
      // swipe horizontal = carrousel OK
    } else {
      // swipe vertical = débloqué
      e.stopPropagation();
    }
  }, { passive: true });
});
