// This script is optional and ensures the links are functional
document.querySelector('.nav-button[href="login.html"]').addEventListener('click', function(event) {
    window.location.href = 'login.html';
});

document.querySelector('.nav-button[href="signup.html"]').addEventListener('click', function(event) {
    window.location.href = 'signup.html';
});
