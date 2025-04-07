document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value.trim();

            if (email && password) {
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Login successful! (This is a demo alert)');
                    loginForm.reset();
                    window.location.href = 'coming-soon.html';
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});