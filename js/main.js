// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Smooth Scroll
document.querySelectorAll('.nav a, .footer-section a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name && email && message) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Thank you for your message! We’ll respond soon.');
                contactForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Notification Banner Logic
const notificationBanner = document.querySelector('.notification-banner');
const notificationClose = document.querySelector('.notification-close');
const header = document.querySelector('.header');

if (notificationBanner && notificationClose && header) {
    notificationClose.addEventListener('click', () => {
        notificationBanner.classList.add('hidden');
        header.style.marginTop = '0'; // Shift header to top when closed
    });

    // Hide after 10 seconds if not closed
    setTimeout(() => {
        notificationBanner.classList.add('hidden');
        header.style.marginTop = '0'; // Shift header to top after timeout
    }, 10000);
}