document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a.nav-link');
  for (const link of links) {
      link.addEventListener('click', smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
  window.scroll({
      top: offsetTop,
      behavior: 'smooth'
  });
}
