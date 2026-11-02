const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');

const galleryImages = [
  'Event Photo/OIP.webp',
  'Event Photo/OIP (1).webp',
  'Event Photo/OIP (2).webp',
  'Event Photo/OIP (3).webp',
  'Event Photo/OIP (4).webp',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.02 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.02 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.02 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.02.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.03 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.03 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.03.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.04 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.04 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.04.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.06.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.07 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.07 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.07 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.07.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.08 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.08.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.09.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.10 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.10.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.13 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.13.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.14.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.16 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.16.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.22 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.22 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.22 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.22.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.23.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.24 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.24.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.25 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.25 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.25 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.25.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.26 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.26.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.27.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.28 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.28.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.29 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.29 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.29.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.30 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.30.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.31 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.31.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.40.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.41 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.41 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.41 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.41 (4).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.41.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.42 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.42 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.42.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.43 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.43 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.43 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.43 (4).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.43.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.44 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.44 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.44 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.44 (4).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.44.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.45 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.45 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.45 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.45.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.46 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.46 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.46 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.46 (4).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.46.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.47 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.47 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.47 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.47.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.48 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.48 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.48 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.48.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.49 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.49 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.49.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.50 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.50 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.50 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.50.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.51 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.51 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.51 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.51.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.52 (1).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.52 (2).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.52 (3).jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.52.jpeg',
  'Event Photo/WhatsApp Image 2026-11-02 at 20.22.53.jpeg'
];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const galleryRoot = document.getElementById('gallery-root');
if (galleryRoot) {
  galleryImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Senator David Jimkuta public engagement photo ${index + 1}`;
    img.loading = 'lazy';
    galleryRoot.appendChild(img);
  });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

