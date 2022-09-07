document.addEventListener('initSliderPls', function (e) {
    // if(window.location.href.indexOf("realizations") > -1) {

        // const sliderContainer = document.querySelector('.slider-container');
        // const main = document.querySelector('main').children.length != 1
        // console.log()
       
        // sliderContainer.addEventListener('load', e => {
            const slides = document.querySelectorAll(".slide");
            const indicator = document.querySelectorAll(".indicator");
            let prev = document.querySelector(".prev");
            let next = document.querySelector(".next");
            let index = 0;
        // })
        // console.log(slides)
      

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            index = i
        }
    }
  
    if (prev != null) {
        prev.addEventListener("click", (event) => {
            prev = prevSlide(); 
        });
    }   
    if (next != null) {   
        next.addEventListener("click", (event) => {
            next = nextSlide();
        });
    }


    indicator.forEach(x => {
        x.onclick = display;
    });

    function display() {
    let num;
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].classList.remove("active");
        slides[i].classList.remove("active");
    }
    this.classList.add("active");
    for (let i =0; i < indicator.length; i++) {
        if (indicator[i].classList.contains("active")) {
            num = i;
            }
        }
        slides[num].classList.add("active");
        index = num;
    }

    function prevSlide() {
        // const slides = document.querySelectorAll(".slide");
        // const indicator = document.querySelectorAll(".indicator");
        // let prev = document.querySelector(".prev");
        // let next = document.querySelector(".next");

        slides[index].classList.remove("active");
        indicator[index].classList.remove("active");
        index--;
        console.log(index);
        if (index < 0) {
            index = slides.length - 1;
        }
        slides[index].classList.add("active");
        indicator[index].classList.add("active");
    }

    function nextSlide() {
        // const slides = document.querySelectorAll(".slide");
        // const indicator = document.querySelectorAll(".indicator");

        slides[index].classList.remove("active");
        indicator[index].classList.remove("active");
        index++;
        console.log(index);
        if (index == slides.length) {
            index = 0;
        }
        console.log(index);
        slides[index].classList.add("active");
        indicator[index].classList.add("active");
    }
//  }
});    