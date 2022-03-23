const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav-links');
const searchButton = document.querySelector('.magnify-icon');
const searchBar = document.querySelector('.search-bar');
const buttons = document.querySelectorAll("[data-carousel-button]")

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
});

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('search-open');
    console.log('it worked');
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeslide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeslide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeslide.dataset.active
    })
})