document.addEventListener('DOMContentLoaded', () => {
    console.log('CV-website geladen');

    // Voorbeeld: soepele scroll naar secties
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', evt => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                evt.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
