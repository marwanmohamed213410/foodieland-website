document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});

// الحصول على الزر باستخدام الـ class
const scrollToTopButton = document.querySelector(".scrolltop");

// إضافة حدث الضغط على الزر
scrollToTopButton.addEventListener("click", () => {
  // الانتقال إلى أعلى الصفحة
  window.scrollTo({
    top: 0,          // الانتقال إلى أعلى الصفحة
    behavior: "smooth" // الانتقال بسلاسة
  });
});