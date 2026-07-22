// Add scroll effect to header
const header = document.querySelector('header');

function updateHeader() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', updateHeader);
updateHeader();

// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

function closeMobileMenu() {
    if (menuToggle && navLinksContainer) {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Smooth scrolling for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.length < 2) return;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            closeMobileMenu();

            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Update active nav link on scroll (scroll spy)
const spySections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    spySections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        link.classList.toggle('active', href === `#${current}`);
    });
});

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
    document.body.classList.add('reveal-on');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}
