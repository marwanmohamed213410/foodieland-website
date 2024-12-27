const form = document.querySelector('#change-pass-form');
const email = document.querySelector('#login-email');
const newPassword = document.querySelector('#login-password');
const confirmPassword = document.querySelector('#login-password'); // Note: Confirm password is also identified by #login-password
const spanEmail = document.querySelector('#change-span-email');
const spanNewPass = document.querySelector('#change-span-new-pass');
const spanConfirmPass = document.querySelector('#change-span-confirm-pass');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = email.value;
    const newPassValue = newPassword.value;
    const confirmPassValue = confirmPassword.value;

    // Get users array from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email exists in the users array
    const user = users.find(user => user.email === emailValue);

    if (!user) {
        spanEmail.textContent = "Email not found";
        spanNewPass.textContent = ""; // Clear previous errors
        spanConfirmPass.textContent = ""; // Clear previous errors
        return;
    }

    // Check if the new password and confirm password match
    if (newPassValue !== confirmPassValue) {
        spanConfirmPass.textContent = "Passwords do not match";
        spanNewPass.textContent = ""; // Clear password error message
        return;
    }

    // If the new password is valid, update the user's password
    user.password = newPassValue;

    // Update the users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear previous error messages
    spanEmail.textContent = "";
    spanNewPass.textContent = "";
    spanConfirmPass.textContent = "";

    // Optionally, you can redirect the user to a login page after changing the password
    window.location.href = '../login/login.html'; // Adjust this URL as needed
});

// Input listeners for validation
email.addEventListener('input', function () {
    if (email.value !== '') {
        spanEmail.textContent = "";
    } else {
        spanEmail.textContent = "You Should Enter Your Email";
        spanEmail.style.color = 'blue';
    }
});

newPassword.addEventListener('input', function () {
    if (newPassword.value !== '') {
        spanNewPass.textContent = "";
    } else {
        spanNewPass.textContent = "You Should Enter Your New Password";
        spanNewPass.style.color = 'blue';
    }
});

confirmPassword.addEventListener('input', function () {
    if (confirmPassword.value !== '') {
        spanConfirmPass.textContent = "";
    } else {
        spanConfirmPass.textContent = "You Should Confirm Your Password";
        spanConfirmPass.style.color = 'blue';
    }
});
