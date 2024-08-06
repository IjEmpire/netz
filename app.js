let currentSlide = 1;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Set initial offset to show the first slide (accounting for duplicated slide)
slides.style.transform = `translateX(-${currentSlide * 100}%)`;

function showSlide(index) {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;

    currentSlide = index;
}

function moveSlide(direction) {
    let newIndex = currentSlide + direction;

    // Handle the looping effect
    if (newIndex >= totalSlides - 1) {
        showSlide(newIndex);
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-100%)`; // Move to the first slide
            currentSlide = 1;
        }, 500);
    } else if (newIndex <= 0) {
        showSlide(newIndex);
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-${(totalSlides - 2) * 100}%)`; // Move to the last slide
            currentSlide = totalSlides - 2;
        }, 500);
    } else {
        showSlide(newIndex);
    }
}

// Auto-play the slider
setInterval(() => {
    moveSlide(1);
}, 3000); // Change slide every 3 seconds

// Initialize the slider
showSlide(currentSlide);