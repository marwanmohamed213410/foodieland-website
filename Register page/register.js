const form = document.querySelector('#signup-form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPass = document.querySelector('.confirmPass');
const spanUsername = document.querySelector('#signup-span-username');
const spanEmail = document.querySelector('#signup-span-email');
const spanPass = document.querySelector('#signup-span-pass');
const spanConpass = document.querySelector('#signup-span-conpass');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userValue = username.value;
    const emailValue = email.value;
    const passValue = password.value;
    const copassValue = confirmPass.value;

    // Validate fields and show messages
    if (userValue === '') {
        spanUsername.textContent = "Please Enter Your Name";
    } else {
        spanUsername.textContent = "";
    }

    if (emailValue === '') {
        spanEmail.textContent = "Please Enter Your Email";
    } else {
        spanEmail.textContent = "";
    }

    if (passValue === '') {
        spanPass.textContent = "Please Enter Your Password";
    } else {
        spanPass.textContent = "";
        if (copassValue === '') {
            spanConpass.textContent = "Please Confirm Password";
        } else {
            if (passValue === copassValue) {
                // Get existing users from localStorage or create a new array
                let users = JSON.parse(localStorage.getItem('users')) || [];

                // Create new user object
                const user = { username: userValue, email: emailValue, password: passValue };

                // Store new user in the array
                users.push(user);

                // Save updated users array back to localStorage
                localStorage.setItem('users', JSON.stringify(users));

                spanConpass.textContent = "Two Values Equal";
                window.location.href = '../login/login.html';
                form.reset();
            } else {
                spanConpass.textContent = "Confirm Password not Equal to password";
            }
        }
    }
});

username.addEventListener('input', function () {
    if (username.value !== '') {
        spanUsername.textContent = "";
    } else {
        spanUsername.textContent = "You Should Enter Your Name";
        spanUsername.style.color = 'blue';
    }
});

email.addEventListener('input', function () {
    if (email.value !== '') {
        spanEmail.textContent = "";
    } else {
        spanEmail.textContent = "You Should Enter Your Email";
        spanEmail.style.color = 'blue';
    }
});

password.addEventListener('input', function () {
    if (password.value !== '') {
        spanPass.textContent = "";
    } else {
        spanPass.textContent = "You Should Enter Your Password ";
        spanPass.style.color = 'blue';
    }
});

confirmPass.addEventListener('input', function () {
    if (confirmPass.value !== '') {
        spanConpass.textContent = "";
    } else {
        spanConpass.textContent = "You Should Enter The Password Again";
        spanConpass.style.color = 'blue';
    }
});
