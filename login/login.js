let form = document.querySelector('#login-form');
let email = document.querySelector('#login-email');
let password = document.querySelector('#login-password');
let spanEmail = document.querySelector('#login-span-email');
let spanPass = document.querySelector('#login-span-password');
let emailLabel = document.querySelector('label[for="login-email"]');
let passwordLabel = document.querySelector('label[for="login-password"]');

form.addEventListener('submit' , function(event){
    event.preventDefault();
    if (email.value === ''){
        spanEmail.textContent="Please Enter Your Email";
    } else if (email.value !== '') {
        spanEmail.textContent="";
    }
    if (password.value === ''){
        spanPass.textContent="Please Enter Your Password";
    }
    else if (password.value !== '') {
        spanPass.textContent="";
    }
    let getData = localStorage.getItem(email.value);
    let objectJson = JSON.parse(getData);

    if (email.value === objectJson.email && password.value === objectJson.password ){
        window.location.href = 'home.html';
    }else {
        spanPass.textContent="Email or Password Are Wrong";
    }
});



email.addEventListener('input', function () {
    if (email.value !== '') {
        emailLabel.style.top = '7px'; 
        spanEmail.textContent = '';  
    } else {
        emailLabel.style.top = '50%';
        spanEmail.textContent = 'You should enter your email'; 
    }
});
password.addEventListener('input', function () {
    if (password.value !== '') {
        passwordLabel.style.top = '7px';
        spanPass.textContent = '';  
    } else {
        passwordLabel.style.top = '50%';
        spanPass.textContent = 'You should enter your password'; 
    }
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (emailInput.value === '') {
        spanEmail.textContent = 'Please enter your email';
    }
    if (passwordInput.value === '') {
        spanPass.textContent = 'Please enter your password';
    }
});
