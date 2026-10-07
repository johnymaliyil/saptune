// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Nav border on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Contact form: opens the visitor's email client with the request pre-filled.
// Swap this for a form backend (Formspree, Netlify Forms, etc.) when ready.
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const subject = `Quote request: ${d.get('area')} — ${d.get('company') || d.get('name')}`;
  const body =
    `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')}\n` +
    `SAP area: ${d.get('area')}\n\nRequirement:\n${d.get('message')}`;
  window.location.href =
    `mailto:info@saptune.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form-note').textContent = 'Opening your email app… Thanks — we\'ll be in touch soon!';
});

document.getElementById('year').textContent = new Date().getFullYear();
