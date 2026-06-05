const accordion = document.querySelector('[data-accordion]');

if (accordion) {
  accordion.addEventListener('click', (event) => {
    const button = event.target.closest('.accordion__button');

    if (!button) return;

    const panel = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!expanded));
    button.querySelector('b').textContent = expanded ? '+' : '−';
    panel.hidden = expanded;
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
