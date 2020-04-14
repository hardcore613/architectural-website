
const star1 = document.querySelector('.star-1'),
star2 = document.querySelector('.star-2'),
star3 = document.querySelector('.star-3'),
star4 = document.querySelector('.star-4'),
star5 = document.querySelector('.star-5'),
star6 = document.querySelector('.star-6');

const star1Menu = document.querySelector('.star-1-menu'),
star2Menu = document.querySelector('.star-2-menu');

const menuLinkList = document.querySelectorAll('.main-menu-links li a');
//Convert node list to array
const menuLinkListArr = Array.from(menuLinkList);
// HIRE US btn in menu
const hireUsBtn = document.querySelector('.info .btn');

/* FUNCTIONS */

/* Delay link traversal */
function delay (URL) {
    setTimeout( function() { window.location = URL }, 600 );
}


/* Menu Open */
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.add('show');
    /* Star animation */
    star1Menu.classList.add('animation-star-menu');
    star2Menu.classList.add('animation-star-menu');
    // When menu is open, prevent from scrolling
    document.body.classList.add('fixedPosition');

});

/* Menu links clicked */

/* projects */
menuLinkListArr[0].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 

        /* Star animation */
        star1Menu.classList.remove('animation-star-menu');
        star2Menu.classList.remove('animation-star-menu');
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');

    }, 600);
})

/* projects */
menuLinkListArr[1].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 

        /* Star animation */
        star1Menu.classList.remove('animation-star-menu');
        star2Menu.classList.remove('animation-star-menu');
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');

    }, 600);
})

/* about us */
menuLinkListArr[2].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 

        /* Star animation */
        star1Menu.classList.remove('animation-star-menu');
        star2Menu.classList.remove('animation-star-menu');
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');

    }, 600);
})

/* hire us btn */
hireUsBtn.addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 

        /* Star animation */
        star1Menu.classList.remove('animation-star-menu');
        star2Menu.classList.remove('animation-star-menu');
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');

    }, 600);
})

/* Menu Close */
document.querySelector('.hamburger-close').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.remove('show');
    /* Star animation */
    star1Menu.classList.remove('animation-star-menu');
    star2Menu.classList.remove('animation-star-menu');
    // When menu is closed, allow scrolling
    document.body.classList.remove('fixedPosition');
});

/* Star animation for main page*/
window.addEventListener("scroll", function() {
    star1.style.transform = "rotate("+window.pageYOffset+"deg)";
    star2.style.transform = "rotate("+window.pageYOffset+"deg)";
    star3.style.transform = "rotate("+window.pageYOffset+"deg)";
    star4.style.transform = "rotate("+window.pageYOffset+"deg)";
    star5.style.transform = "rotate("+window.pageYOffset+"deg)";
    star6.style.transform = "rotate("+window.pageYOffset+"deg)";
});



