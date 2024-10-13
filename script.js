// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (for mobile)
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission
const form = document.getElementById('contact-form');
const formMessages = document.getElementById('form-messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessages.textContent = 'Please fill in all fields.';
        formMessages.style.color = 'red';
        return;
    }

    // Here you can add code to send the form data to your server or an email service.

    // For demonstration, we'll just display a success message.
    formMessages.textContent = 'Thank you! Your message has been sent.';
    formMessages.style.color = 'green';

    // Reset the form
    form.reset();
});

// Theme Toggle Functionality
const themeSwitch = document.getElementById('theme-switch');

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
} else {
    document.body.classList.remove('dark-theme');
    themeSwitch.checked = false;
}

// Listen for toggle switch changes
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});
