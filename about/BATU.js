// ======================= Navbar Toggle =======================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

// Toggle the navbar and menu icon on click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

// ======================= Scroll Reveal =======================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Define reveal animations for different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ============================= Typed.js =====================
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// ========================= Read More/Read Less ========================
function toggleReadMore() {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const button = document.getElementById('btn');

    const isExpanded = dots.style.display === "none"; // Check if the text is expanded

    // Toggle the display of dots and more text
    dots.style.display = isExpanded ? "inline" : "none";
    moreText.style.display = isExpanded ? "none" : "inline";
    button.innerHTML = isExpanded ? 'Read More' : 'Read Less';
}

// Attach the toggle function to the button
document.getElementById('btn').addEventListener('click', toggleReadMore);