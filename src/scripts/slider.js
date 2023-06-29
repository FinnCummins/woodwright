let slideIndex = 1;

window.moveSlide = function(n) {
  showSlide(slideIndex += n);
}

window.currentSlide = function(n) {
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
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active-dot";
}

// Call showSlide to display the first image when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showSlide(slideIndex);
});
