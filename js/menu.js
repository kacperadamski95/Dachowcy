window.addEventListener('DOMContentLoaded', (event) => {
    const iconHamburger = document.querySelector(".hamburger--icon");
    const iconCloseMenu = document.querySelector(".icon--close")
    const navigationMobile = document.querySelector(".menu-hidden");
    const main = document.querySelector("#app");
    const footer = document.querySelector(".footer");
    const linkOffer = document.querySelector('.offer--menu');
    const linkRealizations = document.querySelector('.realizations--menu');
    const linkReference = document.querySelector('.reference--menu');
    const linkContact = document.querySelector('.contact--menu');
    const linkLogo = document.querySelector('.logo--link');
    const navigation = document.querySelector('.navigation');
    const hideElements = function() {
        iconHamburger.classList.remove("icon--inactive");
        iconCloseMenu.classList.remove("icon--active")
        navigationMobile.classList.remove("menu-active");
        main.classList.remove("menu-hidden");
        footer.classList.remove("menu-hidden")
    }
    const showElements = function() {
        iconHamburger.classList.add("icon--inactive");
        iconCloseMenu.classList.add("icon--active")
        navigationMobile.classList.add("menu-active");
        main.classList.add("menu-hidden");
        footer.classList.add("menu-hidden")
    }

    
    iconHamburger.addEventListener("click", (event) => {
        showElements()
    })

    iconCloseMenu.addEventListener("click", (event) => {
        hideElements()
    })

    linkOffer.addEventListener("click", (event) => {
        hideElements()
    })

    linkRealizations.addEventListener("click", (event) => {
        hideElements()
    })

    linkReference.addEventListener("click", (event) => {
        hideElements()
    })

    linkContact.addEventListener("click", (event) => {
        hideElements()
    })

    linkLogo.addEventListener("click", (event) => {
        hideElements()
    })
    

    // window.onscroll = function() {
    //     const top = window.scrollY;
    //     if (top>=5) {
    //         navigation.classList.add("header--backround");
    //     } else {
    //         navigation.classList.remove("header--backround");
    //     }
    // }
});     



