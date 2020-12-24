var slideIndex = 0;
var Slides = document.getElementsByClassName("Slides");
var Next = document.getElementById("Next");
var Previous = document.getElementById("Previous");
 
Next.onclick = () => {
    plusSlides();
}

Previous.onclick = () => {
    minusSlides();
}

for (let i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";
}

const displaySlide = (n) => {
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].style.display = "none";
    }
    Slides[n].style.display = "block";
}

displaySlide(0);

const plusSlides = () => {
    slideIndex++;
    if (slideIndex >= Slides.length) {
        slideIndex = 0;
    }
    displaySlide(slideIndex);
}

const minusSlides = () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = Slides.length - 1;
    }
    displaySlide(slideIndex);
}