document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var ul = document.querySelector(".ul")

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")

    ul.classList.toggle("activeul")

    col.classList.toggle("activecol")
}

const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const prevButton = slider.querySelector(".prev");
const nextButton = slider.querySelector(".next");

let currentSlide = 0;
const slideWidth = slider.offsetWidth;

function moveToSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  currentSlide = slideIndex;
}

function nextSlide() {
  if (currentSlide === slides.children.length - 1) {
    moveToSlide(0);
  } else {
    moveToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    moveToSlide(slides.children.length - 1);
  } else {
    moveToSlide(currentSlide - 1);
  }
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
