// script.js
// JavaScript for slider (example - you'll need to implement the actual slider functionality)
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentImage = 0;

// Example: Simple slider using setInterval (replace with a proper slider library for production)
setInterval(() => {
    currentImage = (currentImage + 1) % images.length; // Loop back to the first image
    slider.style.transform = `translateX(-${currentImage * 100}%)`; // Move the slider
}, 3000); // Change image every 3 seconds