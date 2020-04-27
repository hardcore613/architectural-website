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
    // When menu is open, prevent from scrolling
    document.body.classList.add('fixedPosition');

});

/* ---------- Menu links clicked ------------- */

/* home */
menuLinkListArr[0].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');
    }, 600);
})

/* projects */
menuLinkListArr[1].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');
    }, 600);
})

/* about us */
menuLinkListArr[2].addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');
    }, 600);
})

/* hire us btn */
hireUsBtn.addEventListener('click', e => {
    document.querySelector('.main-menu').classList.remove('show');
    /* wait for menu to close before going down to section*/
    setTimeout(function(){ 
        // When menu is closed, allow scrolling
        document.body.classList.remove('fixedPosition');
    }, 600);
})

/* Menu Close */
document.querySelector('.hamburger-close').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.remove('show');
    // When menu is closed, allow scrolling
    document.body.classList.remove('fixedPosition');
});

/* LANDSCAPE MODE DETECTION */

let width = screen.width;

// check devices orientation and width when page starts
if((window.orientation === 90 || window.orientation === -90) && width <= 500 ){
    //remove the container, contact us and the footer
    this.document.querySelector('.container').classList.add('landscape-mobile');
    this.document.querySelector('.contact-us').classList.add('landscape-mobile');
    this.document.querySelector('footer').classList.add('landscape-mobile');
    //add the landscape mobile sign
    this.document.querySelector('.landscape-mobile-sign').classList.remove('landscape-mobile');
}else{
    //add the container, contact us and the footer
    this.document.querySelector('.container').classList.remove('landscape-mobile');
    this.document.querySelector('.contact-us').classList.remove('landscape-mobile');
    this.document.querySelector('footer').classList.remove('landscape-mobile');
    //remove the landscape mobile sign
    this.document.querySelector('.landscape-mobile-sign').classList.add('landscape-mobile');
}

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    
    // Announce the new orientation number
    if((this.window.orientation === 90 || this.window.orientation === -90) && width <= 500){
        //remove the container, contact us and the footer
        this.document.querySelector('.container').classList.add('landscape-mobile');
        this.document.querySelector('.contact-us').classList.add('landscape-mobile');
        this.document.querySelector('footer').classList.add('landscape-mobile');
        //add the landscape mobile sign
        this.document.querySelector('.landscape-mobile-sign').classList.remove('landscape-mobile');
        this.document.querySelector('.landscape-mobile-sign').classList.remove('landscape-mobile');

    }else{
        //add the container, contact us and the footer
        this.document.querySelector('.container').classList.remove('landscape-mobile');
        this.document.querySelector('.contact-us').classList.remove('landscape-mobile');
        this.document.querySelector('footer').classList.remove('landscape-mobile');
        //remove the landscape mobile sign
        this.document.querySelector('.landscape-mobile-sign').classList.add('landscape-mobile');


    }
});
