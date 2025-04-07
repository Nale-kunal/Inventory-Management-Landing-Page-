document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = forgotPasswordForm.querySelector('input[type="email"]').value.trim();

            if (email) {
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Password reset link sent! Check your email.');
                    forgotPasswordForm.reset();
                    window.location.href = 'login.html';
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please enter your email.');
            }
        });
    }
});