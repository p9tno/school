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
                // loop: true,

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
// start slider single news
$(document).ready(function() {
    let sliderNews = null;
    let mediaQuerySize = 992;

    function initSlidet () {
        if (!sliderNews) {
            console.log("ADS Slider on");
            sliderNews = new Swiper('#sliderNews', {

                // Optional parameters
                slidesPerView: 3,

                speed: 300,
                // loop: true,

                navigation: {
                    nextEl: '.ads__arrow_next',
                    prevEl: '.ads__arrow_prev',
                },



            });
        }
    }

    function destroySlider () {
        if (sliderNews) {
            console.log("ADS Slider of");
            sliderNews.destroy();
            sliderNews = null;
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
// end slider single news

// start tabs
$(document).ready(function() {
    let tabs = null;
    let mediaQuerySize = 992;

    function initSlidet () {
        if (!tabs) {
            console.log("tabs Slider on");

            tabs = new Swiper('#tabs', {

                slidesPerView: 6,
                slidesPerGroup: 2,
                freeMode: true,
                // loop: true,

                // autoplay: {
                //     delay: 300000,
                // },

                speed: 300,

                navigation: {
                    nextEl: '.photoGallery__arrow_next',
                    prevEl: '.photoGallery__arrow_prev',
                },

            });
        }
    }

    function destroySlider () {
        if (tabs) {
            console.log("tabs Slider of");
            tabs.destroy();
            tabs = null;
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
// end tabs

// start teachers
$(document).ready(function() {
    let teachers = null;
    let mediaQuerySize = 992;

    function initSlidet () {
        if (!teachers) {
            console.log("teachers Slider on");

            teachers = new Swiper('#teachers', {

                slidesPerView: 10,
                slidesPerGroup: 1,
                freeMode: true,
                // loop: true,

                // autoplay: {
                //     delay: 300000,
                // },

                speed: 300,

                navigation: {
                    nextEl: '.teachers__arrow_next',
                    prevEl: '.teachers__arrow_prev',
                },

            });
        }
    }

    function destroySlider () {
        if (teachers) {
            console.log("teachers Slider of");
            teachers.destroy();
            teachers = null;
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
// end teachers

// if ($(".photoGallery__arrow_prev").hasClass('swiper-button-disabled')) {
// // есть класс
//     console.log('есть класс');
// } else {
//     console.log('нет класса');
// }
//
// console.log($(".photoGallery__arrow_prev"));
