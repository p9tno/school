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
    let ads = null;
    let mediaQuerySize = 992;

    function initSlidet () {
        if (!ads) {
            console.log("ADS Slider on");
            ads = new Swiper('#ads', {

                // Optional parameters
                slidesPerView: 4,

                speed: 300,

                navigation: {
                    nextEl: '.ads__arrow_next',
                    prevEl: '.ads__arrow_prev',
                },



            });
        }
    }

    function destroySlider () {
        if (ads) {
            console.log("ADS Slider of");
            ads.destroy();
            ads = null;
        }
    }

    $(window).on('load resize', function () {
        // Берём текущую ширину экрана
        let windowWidth = $(this).innerWidth();
        // console.log(windowWidth);

        // Если ширина экрана больше или равна mediaQuerySize
        if (windowWidth >= mediaQuerySize) {
            // Инициализировать слайдер если он ещё не был инициализирован
            initSlidet()
        } else {
            // Уничтожить слайдер если он был инициализирован
            destroySlider()
        }
    });

});
// end ads
