$(document).ready(function () {

    function toggleDropdown() {
        let drop = '.js-drop';

        $(drop).on('click', function() {
            $(this).toggleClass('open');
        });

        $('.js-drop-list').on('mouseleave', function() {
            $(this).closest(drop).removeClass('open');
        });

        $('body').on('click', function(e){
            if ( $(e.target).closest(drop).length ) {
                return;
            }
            $(drop).removeClass('open');
        });
    }
    toggleDropdown();

    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.header__wrap').toggleClass('header__wrap_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();


    function openPhone() {
        $('.phone__toggle').click(function(event) {
            console.log('Показ tel');
            $('.phone__drop').toggleClass('phone__drop_open');
            $('.phone__toggle').toggleClass('phone__toggle_open');
        });

        $(document).mouseup(function (e){ // событие клика по веб-документу
    		var div = $("#phone"); // тут указываем ID элемента
    		if (!div.is(e.target) // если клик был не по нашему блоку
    		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
    			// div.hide(); // скрываем его
                $('.phone__drop').removeClass('phone__drop_open name');
                $('.phone__toggle').removeClass('phone__toggle_open');
    		}
    	});
    };
    openPhone();

});

// Видео youtube для страницы
function uploadYoutubeVideo() {
    if ( $( ".js-youtube" ) ) {

        $( ".js-youtube" ).each( function () {
            // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
            $( this ).css( 'background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)' );

            // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
            $( this ).append( $( '<img src="img/play.png" alt="Play" class="video__play">' ) );

        } );

        $( '.video__play, .video__prev' ).on( 'click', function () {
            // создаем iframe со включенной опцией autoplay
            let wrapp = $( this ).closest( '.js-youtube' ),
                videoId = wrapp.attr( 'id' ),
                iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

            if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

            // Высота и ширина iframe должны быть такими же, как и у родительского блока
            let iframe = $( '<iframe/>', {
                'frameborder': '0',
                'src': iframe_url,
                'allow': "autoplay"
            } )

            // Заменяем миниатюру HTML5 плеером с YouTube
            $( this ).closest( '.video__wrapper' ).append( iframe );

        } );
    }
};

uploadYoutubeVideo();

// scrollTop
$(document).ready(function(){
    //отменяем стандартную обработку нажатия по ссылке
    $("#menuHeader,#goForm,#menuFooter,#toTop").on("click","a", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>2000){
			$('#toTop').fadeIn(900)
		}else{
			$('#toTop').fadeOut(700)
		}
	});
});

// end scrollTop


// $(document).ready(function() {
//     function onVisible( selector, callback, repeat = false ) {
//
//         let options = {
//             threshold: [ 0.5 ]
//         };
//         let observer = new IntersectionObserver( onEntry, options );
//         let elements = document.querySelectorAll( selector );
//
//         for ( let elm of elements ) {
//             observer.observe( elm );
//         }
//
//         function onEntry( entry ) {
//             entry.forEach( change => {
//                 let elem = change.target;
//                 // console.log(change);
//                 // console.log(elem.innerHTML);
//                 if ( change.isIntersecting ) {
//                     if ( !elem.classList.contains( 'show' ) || repeat ) {
//                         elem.classList.add( 'show' );
//                         callback( elem );
//                     }
//                 }
//             } );
//         }
//     }
//
//     onVisible( '.info__number', function ( e ) {
//         animateNumber( e, e.innerHTML );
//     } );
//
//     function animateNumber( elem, final, duration = 1000 ) {
//         let start = 0;
//         // console.log('init');
//         setInterval( function () {
//             if ( final > start ) {
//                 elem.innerHTML = start++ ;
//             }
//         }, duration / final );
//     }
// });




// start Timer

   // const deadline = '2022-11-26';
   //
   // function getTimeRemaining(endtime) {
   //     const time = Date.parse(endtime) - Date.parse(new Date()),
   //         days = Math.floor( (time/(1000*60*60*24)) ),
   //         seconds = Math.floor( (time/1000) % 60 ),
   //         minutes = Math.floor( (time/1000/60) % 60 ),
   //         hours = Math.floor( (time/(1000*60*60) % 24) );
   //
   //     return {
   //         'total': time,
   //         'days': days,
   //         'hours': hours,
   //         'minutes': minutes,
   //         'seconds': seconds
   //     };
   // }
   //
   // function getZero(num){
   //     if (num >= 0 && num < 10) {
   //         return '0' + num;
   //     } else {
   //         return num;
   //     }
   // }
   //
   // function setClock(selector, endtime) {
   //
   //     const timer = document.querySelector(selector),
   //         days = timer.querySelector("#days"),
   //         hours = timer.querySelector('#hours'),
   //         minutes = timer.querySelector('#minutes'),
   //         seconds = timer.querySelector('#seconds'),
   //         timeInterval = setInterval(updateClock, 1000);
   //
   //     updateClock();
   //
   //     function updateClock() {
   //         const t = getTimeRemaining(endtime);
   //
   //         days.innerHTML = getZero(t.days);
   //         hours.innerHTML = getZero(t.hours);
   //         minutes.innerHTML = getZero(t.minutes);
   //         seconds.innerHTML = getZero(t.seconds);
   //
   //         if (t.total <= 0) {
   //             clearInterval(timeInterval);
   //         }
   //     }
   // }
   //
   // setClock('.timer', deadline);

   // end Timer


// для верстки, на WP удалить!!!
function activeNav() {
    $('.menu-item').on('click', function() {
        $('.menu-item').removeClass('current-menu-item');
        $(this).addClass('current-menu-item');
    })
};
activeNav();






//
// $(document).ready(function(){
//     //отменяем стандартную обработку нажатия по ссылке
//     $("#navbar").on("click","a", function (event) {
//         event.preventDefault();
//         //забираем идентификатор блока с атрибута href
//         let id  = $(this).attr('href'),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//             top = $(id).offset().top;
//             //анимируем переход на расстояние - top за 1500 мс
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });


function doTabs() {
    $('.tabs__item').on('click', function() {
        $('.tabs__item').removeClass('active');
        $(this).addClass('active');

        $('.tabContent__item').removeClass('active');
        $($(this).data('tab')).addClass('active');
    });
};
doTabs()

function doTabsTeachers() {
    $('.tabs__item_teachers').on('click', function() {
        $('.tabs__item_teachers').removeClass('active');
        $(this).addClass('active');

        $('.tabContent__item_teachers').removeClass('active');
        $($(this).data('tab')).addClass('active');
    });
};
doTabsTeachers()



// function doDrop() {
//     $('.drop__toggle').on('click', function() {
//         // $('.drop__list').toggleClass('open');
//         $(this).toggleClass('active');
//         $(this).closest('.drop').find('.drop__list').toggleClass('open');
//     });
// };
// doDrop()


// $('.js-slider').slick({
//     // dots: true,
//     // prevArrow: '<i class="icon-left"></i>',
//     // nextArrow: '<i class="icon-right"></i>',
//     speed: 1000,
//     adaptiveHeight: true,
//     responsive: [
//     {
//       breakpoint: 576,
//       settings: {
//         arrows:false,
//       }
//     },
//   ]
// }
// );


// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
// function stikyMenu() {
//     let HeaderTop = $('header').offset().top + $('.home').innerHeight();
//     let currentTop = $(window).scrollTop();
//
//     setNavbarPosition();
//
//     $(window).scroll(function(){
//         setNavbarPosition();
//     });
//
//     function setNavbarPosition() {
//         currentTop = $(window).scrollTop();
//
//         if( currentTop > HeaderTop ) {
//             $('header').addClass('stiky');
//         } else {
//             $('header').removeClass('stiky');
//         }
//
//         $('.navbar__link').each(function(index, el) {
//             let section = $(this).attr('href');
//
//             if ($('section').is(section)) {
//                 let offset = $(section).offset().top;
//
//                 if (offset <= currentTop && offset + $(section).innerHeight() > currentTop) {
//                     $(this).addClass('active');
//                 } else {
//                     $(this).removeClass('active');
//                 }
//             }
//         });
//     }
// };
//
// function openMobileNav() {
//     $('.navbar__toggle').on('click', function() {
//         var wrapp = $('.nav');
//
//         wrapp.toggleClass('open');
//     });
// };
// openMobileNav();


// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
// function srollToId() {
//     $('[data-scroll-to]').click( function(){
//         var scroll_el = $(this).attr('href');
//         if ($(scroll_el).length != 0) {
//             $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
//         }
//         return false;
//     });
// }






//
// $(window).resize(function(event) {
//     let windowWidth = $(window).width();
//     // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
//     if (app.resized == windowWidth) { return; }
//     app.resized = windowWidth;
//
// 	// checkOnResize();
// });
//
// function checkOnResize() {
//     // fontResize();
// }


// function fontResize() {
//     var windowWidth = $(window).width();
//     if (windowWidth >= 1200) {
//     	var fontSize = windowWidth/19.05;
//     } else if (windowWidth < 1200) {
//     	var fontSize = 60;
//     }
// 	$('body').css('fontSize', fontSize + '%');
// }




// function checkDirectionScroll() {
//     var tempScrollTop, currentScrollTop = 0;
//
//     $(window).scroll(function(){
//         currentScrollTop = $(window).scrollTop();
//
//         if (tempScrollTop < currentScrollTop ) {
//             app.pageScroll = "down";
//         } else if (tempScrollTop > currentScrollTop ) {
//             app.pageScroll = "up";
//         }
//         tempScrollTop = currentScrollTop;
//
//     });
// }
// checkDirectionScroll();


// $(function() {
//     let init = false;

//     $('.fancybox-media').fancybox({
//         openEffect: 'none',
//         closeEffect: 'none',
//         beforeLoad: function() {
//             if (init) return;
//             loadMap(100, 100, 'map');
//             init = true;
//         }
//     });

//     function loadMap(width, height, target) {
//         let script = document.createElement('script');

//         script.type = 'text/javascript';
//         script.src = '//api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A15dddbb01cc25ea3a9661ba4d288f1e0f84f4f2cbf1fe529c66bcaeaddb39169&amp;width=' + width + '%&amp;height=' + height + '%&amp;lang=ru_RU&amp;scroll=true&id=' + target;
//         document.head.appendChild(script);
//     }
// });

// function getCookie( name ) {
//     var start = document.cookie.indexOf( name + '=' );
//     var len = start + name.length + 1;
//     if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) return null;
//     if ( start == -1 ) return null;
//     var end = document.cookie.indexOf( ';', len );
//     if ( end == -1 ) end = document.cookie.length;
//     return unescape( document.cookie.substring( len, end ) );
// }
//
// function setCookie( name, value, expires, path, domain, secure ) {
//     var today = new Date();
//     today.setTime( today.getTime() );
//     if ( expires ) expires = expires * 1000 * 60 * 60 * 24;
//     var expires_date = new Date( today.getTime() + (( expires ) ? expires : 1000 * 60 * 60 * 24 ) );
//     document.cookie = name+'='+escape( value ) +
//     ';expires='+expires_date.toGMTString() +
//     ( ( path ) ? ';path=' + path : '' ) +
//     ( ( domain ) ? ';domain=' + domain : '' ) +
//     ( ( secure ) ? ';secure' : '' );
// }
//
// function resize(v){
//     e=document.body;
//     var c=e.currentStyle || window.getComputedStyle(e, null);
//     if(v)c=Math.max(8,Math.min(20,parseInt(c.fontSize)+v))+'px';
//     else c='11px';
//     e.style.fontSize= c;
//     //console.log(c);
//     setCookie( "fontSize", c);
//     return false;
// }
// if(i=getCookie("fontSize"))window.onload=function(o){return function(){document.body.style.fontSize=o;}}(i);
