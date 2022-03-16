/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Please find & review the following requirements according to your feedback
// Starting Code

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

const sections = document.querySelectorAll('section');






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// I get the following code from this reference: 
// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
// https://www.digitalocean.com/community/tutorials/js-getboundingclientrect
// https://www.youtube.com/watch?v=MKpZadkuT-0

//Replacing (var) keyword with (const) & (let) keywords //

let isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://www.w3schools.com/howto/howto_js_add_class.asp
// https://www.w3schools.com/howto/howto_js_remove_class.asp
// https://www.w3schools.com/js/js_let.asp

let removeClass = function(i) {
    const yourActiveClass = document.getElementsByClassName('your-active-class')
    yourActiveClass[i].classList.remove('your-active-class');
}


/*



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// To create the list items <li> for the <ul>
// https://www.w3schools.com/js/js_htmldom_nodes.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function buildNav () {
    const navbarList = document.getElementById('navbar__list');
    sections.forEach(function (section) {
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const navItem = section.querySelector('h2').textContent;

    // implement preventDefault
    newA.addEventListener("click", (event) => {
        event.preventDefault();
        section.scrollIntoView({
            behavior: "smooth", 
            block: "center", 
            inline: "nearest"});
    });


    newA.classList.add('menu__link');
    newA.textContent = navItem;
    newLi.appendChild(newA);
    navbarList.appendChild(newLi);
    })
}


// Add class 'active' to section when near top of viewport
// Find my below solution:

// https://www.w3schools.com/howto/howto_js_active_element.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://www.youtube.com/watch?v=3cS0IsV-yhA

function addActiveClass() {
    const navLinks = document.querySelectorAll('#navbar__list a');
    navLinks.forEach (function (navLink, i) {
     const sectionId = sections [i].getAttribute('id');
     navLink.setAttribute('href', `#${sectionId}`);

navLink.addEventListener("click", addClass, true); 


function addClass () {
    const activeClass = document.getElementsByClassName('active');
     if (activeClass.length > 0) {
         activeClass[0].classList.remove('active');
     }

     navLink.classList.add('active');
     sections[i].scrollIntoView();
     sections[i].classList.add('your-active-class');
}
    })
}


// Scroll to anchor ID using scrollTO event
// Find my below solution:

//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
//https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/jsref/event_preventdefault.asp

function scrollTo () {
    sections.forEach(function (section, i) {
      
        function addClassIfInViewport() {
            if (isInViewport (section)) {
                removeClass(0);
                section.classList.add('your-active-class');
            }
        }
    })
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Find my below solution:
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// https://www.w3schools.com/jsref/met_win_cleartimeout.asp
setTimeout (buildNav, 0);
clearTimeout (buildNav, 0);



// Scroll to section on link click
// Find my below solution:
scrollTo();

// Set sections as active
// Find my below solution:

setTimeout(addActiveClass, 50);
clearTimeout(addActiveClass, 50);
