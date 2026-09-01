const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

const revealGroups = [...document.querySelectorAll('[data-reveal-group]')];

if (revealGroups.length && 'IntersectionObserver' in window) {
  revealGroups.forEach((group) => group.classList.add('reveal-ready'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

  revealGroups.forEach((group) => {
    group.querySelectorAll('[data-reveal-item]').forEach((item) => revealObserver.observe(item));
  });
}
