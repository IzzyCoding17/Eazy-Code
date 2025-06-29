const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Find the login form using its ID
    const loginForm = document.getElementById('loginForm');

    // Check if the login form exists on the page
    if (loginForm) {
        // Add an event listener for when the form is submitted
        loginForm.addEventListener('submit', (event) => {
            // Prevent the form from submitting the default way (which would reload the page)
            event.preventDefault();

            // --- Here are your one-time login details ---
            const correctEmail = 'user@eazycode.com';
            const correctPassword = 'password123';

            // Get the values entered by the user from the input fields
            const userEmail = document.getElementById('loginEmail').value;
            const userPassword = document.getElementById('loginPassword').value;

            // Check if the entered email and password match the correct ones
            if (userEmail === correctEmail && userPassword === correctPassword) {
                // If they match, show a success message
                alert('Login successful! Redirecting to homepage...');
                // Redirect the user to the homepage
                window.location.href = 'homepage.html';
            } else {
                // If they don't match, show an error message
                alert('Incorrect email or password. Please try again.');
            }
        });
    }
});