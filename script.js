document.addEventListener('DOMContentLoaded', () => {
  const typedEl = document.getElementById('typed-text');
  const outputEl = document.getElementById('typed-output');

  if (typedEl && outputEl) {
    const command = 'axion --version';
    const lines = [
      'AXION v2.0.1  (build 2026.09)',
      'Le logiciel qui propulse vos projets vers l\'ultime performance.',
      '> execution en cours...'
    ];

    let i = 0;
    const type = () => {
      if (i <= command.length) {
        typedEl.textContent = command.slice(0, i);
        i++;
        setTimeout(type, 70);
      } else {
        outputEl.innerHTML = '';
        lines.forEach((text, index) => {
          const p = document.createElement('p');
          p.className = 'line dim out-line';
          p.textContent = text;
          outputEl.appendChild(p);
          setTimeout(() => {
            p.style.opacity = '1';
          }, 250 * (index + 1));
        });
      }
    };
    setTimeout(type, 600);
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = '>> [OK] message transmis. code de suivi : AX-2026';
      form.reset();
      setTimeout(() => {
        status.textContent = '';
      }, 5000);
    });
  }
});