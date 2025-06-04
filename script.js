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
});
