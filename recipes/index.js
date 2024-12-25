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
