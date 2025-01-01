const slides = document.querySelector('.slides');
const images = Array.from(document.querySelectorAll('.slides img'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 1;
let isTransitioning = false;

const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

firstClone.classList.add('first-clone');
lastClone.classList.add('last-clone');

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstChild);

function updateSlides() {
    const images = Array.from(document.querySelectorAll('.slides img'));
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides.addEventListener('transitionend', () => {
        if (images[index].classList.contains('first-clone')) {
            slides.style.transition = 'none';
            index = 1;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        if (images[index].classList.contains('last-clone')) {
            slides.style.transition = 'none';
            index = images.length - 2;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        isTransitioning = false;
    }, { once: true });
}

slides.style.transform = `translateX(-${100}%)`;

function showSlide(newIndex) {
    if (isTransitioning) return;
    isTransitioning = true;
    index = newIndex;
    updateSlides();
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 4000);
