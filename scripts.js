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

// Select modal elements
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");

// Function to open modal with custom content
function openModal(serviceName, serviceDescription, features) {
    modalTitle.innerText = serviceName;
    modalDescription.innerText = serviceDescription;

    // Clear existing features and add new ones
    modalFeatures.innerHTML = "";
    features.forEach(feature => {
        const li = document.createElement("li");
        li.innerText = feature;
        modalFeatures.appendChild(li);
    });
    
    modal.classList.add("show"); // Adds show class for smooth animation
}

// Function to close modal
document.querySelector(".close-btn").addEventListener("click", () => {
    modal.classList.remove("show");
});

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
    }
};

// Add event listeners to service buttons
document.querySelectorAll(".service-btn").forEach(button => {
    button.addEventListener("click", () => {
        openModal(
            "LinkedIn Profile Audit",
            "This service includes a thorough audit of your LinkedIn profile, providing actionable insights to improve visibility and engagement.",
            [
                "Comprehensive profile analysis",
                "Personalized improvement suggestions",
                "Profile strength assessment"
            ]
        );
    });
});


// Get the modal, button, and close element
document.addEventListener('DOMContentLoaded', function () {
    const modale = document.getElementById('privacyModal');
    const btn = document.getElementById('privacyPolicyButton');
    const span = document.querySelector('.close');
    const closeButton = document.querySelector('.button-close-privacy');

    // Open the modal
    btn.onclick = function () {
        modale.style.display = 'block';
    };

    // Close modal with "x"
    span.onclick = function () {
        modale.style.display = 'none';
    };

    // Close modal with close button
    closeButton.onclick = function () {
        modale.style.display = 'none';
    };

    // Close modal by clicking outside of content area
    window.onclick = function (event) {
        if (event.target === modale) {
            modale.style.display = 'none';
        }
    };
});


// Get the modal, button, and close element
document.addEventListener('DOMContentLoaded', function () {
    const modale2 = document.getElementById('TermsModal');
    const btn2 = document.getElementById('TermsButton');
    const span2 = document.querySelector('.close');
    const closeButton2 = document.querySelector('.button-close-Terms');

    // Open the modal
    btn2.onclick = function () {
        modale2.style.display = 'block';
    };

    // Close modal with "x"
    span2.onclick = function () {
        modale2.style.display = 'none';
    };

    // Close modal with close button
    closeButton2.onclick = function () {
        modale2.style.display = 'none';
    };

    // Close modal by clicking outside of content area
    window.onclick = function (event) {
        if (event.target === modale2) {
            modale2.style.display = 'none';
        }
    };
});
