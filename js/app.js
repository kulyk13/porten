burgerBtnOpen.onclick = () => burgerMenu.classList.add('open');
burgerBtnClose.onclick = () => burgerMenu.classList.remove('open');
window.addEventListener('load', ev => {
    burgerMenu.classList.add('transition')
});


//Slider

const collectionSlider = new Swiper('.collection-slider', {
    loop: true,
    lazy: true,
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
    // window >=320px
        320: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
        },
        576: {
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
  
    // If we need pagination
    
  
  });

  const productsSlider = new Swiper(".products-slider", {
    lazy: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        },
        576: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 50,
        },
    },
  });