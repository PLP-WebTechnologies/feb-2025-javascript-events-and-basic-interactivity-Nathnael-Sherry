// Interactive Button
document.getElementById('changeTextButton').addEventListener('click', function() {
    const textDisplay = document.getElementById('textDisplay');
    textDisplay.textContent = 'You clicked the button! 🎉';
});

// Image Gallery Hover Effect
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.opacity = '0.7';
    });
    img.addEventListener('mouseout', () => {
        img.style.opacity = '1';
    });
});

// Tab Interaction
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('formFeedback');

    // Simple validation
    if (username === '' || email === '' || password === '') {
        feedback.textContent = 'All fields are required!';
        feedback.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        feedback.textContent = 'Invalid email format!';
        feedback.style.color = 'red';
        return;
    }

    if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters long!';
        feedback.style.color = 'red';
        return;
    }

    feedback.textContent = 'Form submitted successfully! 🎉';
    feedback.style.color = 'green';
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
