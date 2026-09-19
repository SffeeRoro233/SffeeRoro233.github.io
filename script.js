document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const revealItems = document.querySelectorAll('.reveal');
  const switchButtons = document.querySelectorAll('[data-page]');
  const pageOne = document.getElementById('toolsPage1');
  const pageTwo = document.getElementById('toolsPage2');
  const pageLabel = document.getElementById('pageLabel');

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

  switchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page;
      switchButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      pageOne.classList.toggle('active', page === '1');
      pageTwo.classList.toggle('active', page === '2');
      pageLabel.textContent = `PAGE ${page} / 2`;
    });
  });
});
