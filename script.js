const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const fbModal = document.getElementById('fb-modal');

function toggleButtonState() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    loginButton.disabled = !(username && password);
}

usernameInput.addEventListener('input', toggleButtonState);
passwordInput.addEventListener('input', toggleButtonState);

function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = '👁️';
    }
}

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Login functionality not implemented.');
});

function showFacebookLoginModal() {
    fbModal.classList.remove('hidden');
}

function closeFacebookLoginModal() {
    fbModal.classList.add('hidden');
}
