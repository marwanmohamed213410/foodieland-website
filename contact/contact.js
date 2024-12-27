function validateForm() {
    let isValid = true;
    let errorMessage = '';

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.querySelector('#name + .error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.querySelector('#email + .error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
        document.querySelector('#subject + .error').textContent = 'Subject is required.';
        isValid = false;
    }

    // Validate Messages
    const messages = document.getElementById('messages').value;
    if (messages.trim() === '') {
        document.querySelector('#messages + .error').textContent = 'Messages are required.';
        isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
        document.getElementById('success').textContent = '    Form submitted successfully!    Thanks alot';
    } 
    else {
         // Display detailed error message and reload the page 
         setTimeout(() => { location.reload(); }, 70000); // Delay of 3 seconds before reloading } }
        
    return isValid;
}}
