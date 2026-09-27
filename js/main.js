// ARYA BUTİK — main.js
(function () {
    'use strict';

    // --- Header scroll ---
    const header = document.getElementById('siteHeader');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile nav ---
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', () => {
        const open = mainNav.classList.toggle('open');
        navToggle.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', open);
    });
    mainNav.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            navToggle.classList.remove('open');
        })
    );

    // --- Scrollspy ---
    const sections = ['hero', 'koleksiyon', 'hakkimizda', 'iletisim']
        .map(id => document.getElementById(id));
    const navLinks = document.querySelectorAll('.nav-link');
    const spy = () => {
        const pos = window.scrollY + window.innerHeight * 0.35;
        let current = 'hero';
        sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec.id; });
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();

    // --- Contact form ---
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(form);
        if (!data.get('ad') || !data.get('eposta') || !data.get('mesaj')) {
            status.style.color = '#dc2626';
            status.textContent = 'Lütfen tüm alanları doldurun.';
            return;
        }
        status.style.color = '#059669';
        status.textContent = 'Mesajınız alındı! En kısa sürede dönüş yapacağız.';
        form.reset();
    });
})();