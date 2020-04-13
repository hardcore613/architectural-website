
const star1 = document.querySelector('.star-1'),
star2 = document.querySelector('.star-2');

const star1Menu = document.querySelector('.star-1-menu'),
star2Menu = document.querySelector('.star-2-menu');

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.add('show');
    /* Star animation */
    star1Menu.classList.add('animation-star-menu');
    star2Menu.classList.add('animation-star-menu');
    // When menu is open, prevent from scrolling
    document.body.classList.add('fixedPosition');

});

document.querySelector('.hamburger-close').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.remove('show');
    /* Star animation */
    star1Menu.classList.remove('animation-star-menu');
    star2Menu.classList.remove('animation-star-menu');
    // When menu is open, prevent from scrolling
    document.body.classList.remove('fixedPosition');
});

/* Star animation for main page*/
window.addEventListener("scroll", function() {
    star1.style.transform = "rotate("+window.pageYOffset+"deg)";
    star2.style.transform = "rotate("+window.pageYOffset+"deg)";
});


