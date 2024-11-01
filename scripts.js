// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Name Validation
    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        valid = false;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        valid = false;
    }

    // Message Validation
    if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        valid = false;
    }

    // Form Submission
    if (valid) {
        alert("Thank you! Your message has been sent.");
        // Clear form fields
        name.value = '';
        email.value = '';
        message.value = '';
    }
});

// Logo Hover Effect (Optional)
document.querySelector('.logo').addEventListener('mouseover', function() {
    this.style.opacity = '0.8';
});
document.querySelector('.logo').addEventListener('mouseout', function() {
    this.style.opacity = '1';
});

// Theme Toggle Functionality
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
});
