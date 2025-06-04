document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');

    // Simple message after sending the form
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', () => {
            alert('Thank you! I will get back to you soon.');
            form.reset();
        });
    }

    // Apply stored theme preference on load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark');
    }

    function updateIcon() {
        if (document.body.classList.contains('dark')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        updateIcon();
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            updateIcon();
        });
    }
});
