let slideIndex = 0;
let autoSlideInterval;

window.moveSlide = function(n) {
  clearInterval(autoSlideInterval);
  showSlide(slideIndex += n);
}

window.currentSlide = function(n) {
  clearInterval(autoSlideInterval);
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slider-image");
  let dots = document.getElementsByClassName("dot");
  
  if (n >= slides.length) {slideIndex = 0} 
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-blue-500");
    dots[i].classList.add("bg-gray-300");
  }
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].classList.remove("bg-gray-300");
  dots[slideIndex].classList.add("bg-blue-500");
}

// Call showSlide to display the first image when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showSlide(slideIndex);

  autoSlideInterval = setInterval(() => {
    showSlide(slideIndex += 1);
  }, 4000);
});
