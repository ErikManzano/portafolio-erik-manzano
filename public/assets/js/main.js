// Wait for AOS to be loaded and DOM to be ready
function initAOS() {
  if (typeof AOS !== 'undefined' && AOS.init) {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 700,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
  } else {
    // Try again if AOS not loaded yet
    setTimeout(initAOS, 100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initAOS();

  // Update year in footer
  const footer = document.querySelector('footer');
  if (footer) {
    const year = new Date().getFullYear();
    const copyright = footer.querySelector('p');
    if (copyright) {
      copyright.textContent = `© Copyright ${year}. Todos los derechos reservados`;
    }
  }
});
