document.addEventListener('DOMContentLoaded', () => {
    console.log('Website geladen!');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', evt => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                evt.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simpel bericht na het "verzenden" van het formulier
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', () => {
            alert('Bedankt! Ik neem zo snel mogelijk contact met je op.');
            form.reset();
        });
    }
});
