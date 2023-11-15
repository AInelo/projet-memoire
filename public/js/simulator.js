const prevButton = document.getElementById('prev-arrow');
const nextButton = document.getElementById('next-arrow');
const testimonialCarousel = document.querySelector('.testimonial-carousel');

prevButton.addEventListener('click', function () {
    testimonialCarousel.scrollLeft -= 200; // Ajustez la valeur de défilement selon votre besoin
});

nextButton.addEventListener('click', function () {
    testimonialCarousel.scrollLeft += 200; // Ajustez la valeur de défilement selon votre besoin
});
