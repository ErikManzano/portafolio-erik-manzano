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

  // Handle scroll to section when coming from case study or other pages
  const urlParams = new URLSearchParams(window.location.search);
  const sectionFromParam = urlParams.get('section');
  const sectionFromHash = window.location.hash.substring(1);
  const sectionToScroll = sectionFromParam || sectionFromHash;
  
  if (sectionToScroll) {
    // Wait for the page and elements to potentially render correctly
    window.addEventListener('load', () => {
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          const offset = 80; // Offset for fixed navbar if needed
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 400);
    });
  }
});
