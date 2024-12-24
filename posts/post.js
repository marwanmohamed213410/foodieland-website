// submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});

// scroll top

const scrollToTopButton = document.querySelector(".scrolltop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,         
    behavior: "smooth" 
  });
});