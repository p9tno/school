// start  Slider
$(document).ready(function() {
    const swiper = new Swiper('#slider', {
        slidesPerView: 1,

        navigation: {
            nextEl: '.slider__arrow_next',
            prevEl: '.slider__arrow_prev',
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        // effect: "fade",
        // effect: "cube",
        // effect: "coverflow",
        // effect: "flip",
        speed: 300,

    })
});
// end  Slider

// start ads
$(document).ready(function() {
    const ads = new Swiper('#ads', {
        // slidesPerView: 6,
        // spaceBetween: 32,
        slidesPerView: 4,
        // centeredSlides: true,
        // slidesPerGroupSkip: 1,
        // grabCursor: true,
        // keyboard: {
        //   enabled: true
        // },
        //    // grabCursor: true,

        navigation: {
            nextEl: '.ads__arrow_next',
            prevEl: '.ads__arrow_prev',
        },

        // scrollbar: {
        //  el: ".swiper-scrollbar",
        // },

        autoplay: {
            delay: 300000,
        },

        speed: 300,

    })
});
// end ads
