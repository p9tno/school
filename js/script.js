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
            console.log('Показ меню');
            $('.header__wrap').toggleClass('header__wrap_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    // start ASIDE
    function openMobileAside() {
        $('.asideToggleOpen-js').click(function(event) {
            // console.log('Показ aside');
            $('.category__aside').addClass('category__aside_open');
            $( 'body' ).addClass( 'nav-open' );
        });
    };

    function closeMobileAside() {
        $('.asideToggleClose-js').click(function(event) {
            // console.log('Скрыть aside');
            $('.category__aside').removeClass('category__aside_open');
            $( 'body' ).removeClass( 'nav-open' );
        });
    };
    openMobileAside();
    closeMobileAside();
    // end ASIDE

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

    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
                body = $('[data-collapse-body="'+id+'"]'),
                wrap = body.closest('[data-collapse-wrapper]');

            if (!id) {
                // $('[data-collapse-wrapper]').removeClass('open');
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            } else if (id === 'all') {
                body.slideDown();
                toggle.addClass('open');
            } else {
                body.slideToggle();
                $(this).toggleClass('open');
            }


        });
    }
    collapsed();


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

    function doTabsInformation() {
        $('.informationTabs__item').on('click', function() {
            $('.informationTabs__item').removeClass('active');
            $(this).addClass('active');

            $('.informationTabContent__item').removeClass('active');
            $($(this).data('tab')).addClass('active');
        });
    };
    doTabsInformation()

    function doTabsMap() {
        $('.mapTabs__item').on('click', function() {
            $('.mapTabs__item').removeClass('active');
            $(this).addClass('active');

            $('.mapTabContent__item').removeClass('active');
            $($(this).data('tab')).addClass('active');
        });
    };
    doTabsMap()

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
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			// $('#toTop').fadeIn(900)
			$('#toTop').addClass('active')
		}else{
			// $('#toTop').fadeOut(700)
			$('#toTop').removeClass('active')
		}
	});
});

// end scrollTop
