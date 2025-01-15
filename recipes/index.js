
//share button
const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
});

const copyBtn = document.querySelector('.copy-btn');
const linkText = document.querySelector('.link').textContent;

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(linkText).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// to do
document.addEventListener("DOMContentLoaded", function() {

    const todoItems = document.querySelectorAll('.todo, .todo-1');


    todoItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const isCompleted = localStorage.getItem(id) === 'true';
        if (isCompleted) {
            item.classList.add('completed');
            const circle = item.querySelector('#circle');
            const span = item.querySelector('span');
            span.style.textDecoration = 'line-through';
            span.style.color = 'rgba(0, 0, 0, 0.3)';
            circle.innerHTML = '<i class="ri-check-line" style="color: black;"></i>';
        }
    });

    
    todoItems.forEach(item => {
        const circle = item.querySelector('#circle');
        const span = item.querySelector('span');

        // Add event listener for each to-do item
        item.addEventListener('click', function() {
            item.classList.toggle('completed');
            

            if (item.classList.contains('completed')) {
                span.style.textDecoration = 'line-through';
                span.style.color = 'rgba(0, 0, 0, 0.3)';
                
                circle.innerHTML = '<i class="ri-check-line" style="color: black;"></i>';

                const id = item.getAttribute('data-id');
                localStorage.setItem(id, 'true');
            } else {
                span.style.textDecoration = 'none';
                span.style.color = 'var(--main-text-color)';
                
                circle.innerHTML = '';


                const id = item.getAttribute('data-id');
                localStorage.setItem(id, 'false');
            }
        });
    });
});


