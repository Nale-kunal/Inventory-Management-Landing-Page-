document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = signupForm.querySelector('input[type="text"]').value.trim();
            const email = signupForm.querySelector('input[type="email"]').value.trim();
            const password = signupForm.querySelector('input[type="password"]').value.trim();
            const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();

            if (name && email && password && confirmPassword) {
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    if (password === confirmPassword) {
                        alert('Sign up successful! Please check your email to verify.');
                        signupForm.reset();
                        window.location.href = 'login.html';
                    } else {
                        alert('Passwords do not match.');
                    }
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});