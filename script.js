document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const revealItems = document.querySelectorAll('.reveal');
  const pageOne = document.getElementById('toolsPage1');
  const pageTwo = document.getElementById('toolsPage2');
  const pageLabel = document.getElementById('pageLabel');
  const menuTerminal = document.getElementById('menuTerminal');

  const updateNavbar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));

  let currentPage = 1;

  const goToPage = (page) => {
    currentPage = page;
    pageOne.classList.toggle('active', page === 1);
    pageTwo.classList.toggle('active', page === 2);
    pageLabel.textContent = `PAGE ${page} / 2`;
  };

  if (menuTerminal) {
    menuTerminal.focus();
    menuTerminal.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      if (key === 'n') {
        e.preventDefault();
        if (currentPage === 1) goToPage(2);
      } else if (key === 'p') {
        e.preventDefault();
        if (currentPage === 2) goToPage(1);
      } else if (key === 'enter') {
        e.preventDefault();
        menuTerminal.style.boxShadow = '0 0 40px rgba(245, 20, 175, 0.4)';
        setTimeout(() => {
          menuTerminal.style.boxShadow = '';
        }, 600);
      }
    });
  }
});