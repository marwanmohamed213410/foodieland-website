const form = document.querySelector('#login-form');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const spanEmail = document.querySelector('#login-span-email');
const spanPass = document.querySelector('#login-span-password');
let emailLabel = document.querySelector('label[for="login-email"]');
let passwordLabel = document.querySelector('label[for="login-password"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = email.value;
    const passValue = password.value;

    // Get users array from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email exists in the users array
    const user = users.find(user => user.email === emailValue);

    if (!user) {
        spanEmail.textContent = "Email not found";
        spanPass.textContent = ""; // Clear password error message
        return;
    }

    // Check if the password matches
    if (user.password !== passValue) {
        spanPass.textContent = "Incorrect password";
        spanEmail.textContent = ""; // Clear email error message
        return;
    }

    // If both email and password are correct
    spanEmail.textContent = ""; // Clear any previous error message
    spanPass.textContent = "";

    console.log("done");
    // Optionally, redirect to the user's dashboard or home page after successful login
    window.location.href = '../index.html'; // Adjust the URL as needed
});

// Input listeners
email.addEventListener('input', function () {
    if (email.value !== '') {
        emailLabel.style.top = '7px'; 
        spanEmail.textContent = "";
    } else {
        emailLabel.style.top = '50%';
        spanEmail.textContent = "You Should Enter Your Email";
    }
});

password.addEventListener('input', function () {
    if (password.value !== '') {
        passwordLabel.style.top = '7px';
        spanPass.textContent = "";
    } else {
        passwordLabel.style.top = '50%';
        spanPass.textContent = "You Should Enter Your Password";
        spanPass.style.color = 'blue';
    }
});
