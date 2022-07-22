window.addEventListener('DOMContentLoaded', (event) => {
    const menuIconHamburger = document.querySelector(".hamburger--icon");
    const menuCloseIcon = document.querySelector(".close--icon")
    const navigationMobile = document.querySelector(".menu-hidden");
    const main = document.querySelector("#app");
    const footer = document.querySelector(".footer");
    const offerLink = document.querySelector('.offer--menu');
    const realizationsLink = document.querySelector('.realizations--menu');
    const referenceLink = document.querySelector('.reference--menu');
    const contactLink = document.querySelector('.contact--menu');
    const logoLink = document.querySelector('.logo--link');
    const hideElements = function() {
        menuIconHamburger.classList.remove("inactive--icon");
        menuCloseIcon.classList.remove("active--icon")
        navigationMobile.classList.remove("menu-active");
        main.classList.remove("menu-hidden");
        footer.classList.remove("menu-hidden")
    }
    const showElements = function() {
        menuIconHamburger.classList.add("inactive--icon");
        menuCloseIcon.classList.add("active--icon")
        navigationMobile.classList.add("menu-active");
        main.classList.add("menu-hidden");
        footer.classList.add("menu-hidden")
    }

    
    menuIconHamburger.addEventListener("click", (event) => {
        showElements()
    })

    menuCloseIcon.addEventListener("click", (event) => {
        hideElements()
    })

    offerLink.addEventListener("click", (event) => {
        hideElements()
    })

    realizationsLink.addEventListener("click", (event) => {
        hideElements()
    })

    referenceLink.addEventListener("click", (event) => {
        hideElements()
    })

    contactLink.addEventListener("click", (event) => {
        hideElements()
    })

    logoLink.addEventListener("click", (event) => {
        hideElements()
    })
});     



