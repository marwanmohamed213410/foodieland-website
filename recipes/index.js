let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

//share button
// Toggle share options visibility
const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
});

// Copy link functionality
const copyBtn = document.querySelector('.copy-btn');
const linkText = document.querySelector('.link').textContent;

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(linkText).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Select all to-do items
    const todoItems = document.querySelectorAll('.todo, .todo-1');

    // Load the saved state from localStorage
    todoItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const isCompleted = localStorage.getItem(id) === 'true';
        if (isCompleted) {
            item.classList.add('completed');
            const circle = item.querySelector('#circle');
            const span = item.querySelector('span');
            span.style.textDecoration = 'line-through';
            span.style.color = 'rgba(0, 0, 0, 0.3)';
            circle.style.backgroundColor = '#9E9E9E';
            circle.innerHTML = '<i class="ri-check-line" style="color: white;"></i>';
        }
    });

    // Loop through each to-do item and add an event listener for clicks
    todoItems.forEach(item => {
        const circle = item.querySelector('#circle');
        const span = item.querySelector('span');

        // Add event listener for each to-do item
        item.addEventListener('click', function() {
            // Toggle the 'completed' class on click
            item.classList.toggle('completed');
            
            // Update circle and text styles based on completed state
            if (item.classList.contains('completed')) {
                span.style.textDecoration = 'line-through';
                span.style.color = 'rgba(0, 0, 0, 0.3)';
                
                // Change circle color and add checkmark
                circle.style.backgroundColor = '#9E9E9E';
                circle.innerHTML = '<i class="ri-check-line" style="color: white;"></i>';

                // Save the completed state to localStorage
                const id = item.getAttribute('data-id');
                localStorage.setItem(id, 'true');
            } else {
                span.style.textDecoration = 'none';
                span.style.color = '#000';
                
                // Reset circle to original state
                circle.style.backgroundColor = 'rgba(219, 226, 229, 1)';
                circle.innerHTML = '';

                // Remove the completed state from localStorage
                const id = item.getAttribute('data-id');
                localStorage.setItem(id, 'false');
            }
        });
    });
});


