$(document).ready(function() {
    // Выберите размер шрифта по умолчанию
    let reset = $('.wrapper').css('fontSize');
    console.log('default reset: ', reset);

    //Изменение размера будет проводиться для указанных элементов
    let elm = $('.wrapper');
    //Создаем localStorage
    let size = localStorage.getItem('size');
    console.log('localStorage size: ', size);

    if (size) {
        elm.css('font-size', size + 'px');
        console.log('localStorage current: ',size);
    } else {
        //установить размер шрифта по умолчанию и удалить пиксели из значения
        size = str_replace(reset, 'px', '');
    }

    //Минимальный размер шрифта
    let min = 14;
    ///Максимальный размер шрифта
    let max = 17;

    changeDisabled(min, max, size, reset);

    //Функция увеличения размера шрифта
    $('.increaseFont-js').click(function() {
        //если размер шрифта меньше или равен максимального значения
        if (size <= max) {
            //увеличить размер
            size++;
            //установить размер шрифта
            elm.css( {'fontSize': size} );
            localStorage.setItem('size', size);

            console.log(size);
            console.log('current: ', elm.css('font-size'));
            console.log('+ default reset: ', reset);

            console.log('min: ', min, 'max: ', max);

            changeDisabled(min, max, size, reset);

        }
        //Прерываем передачу события далее по дереву DOM
        return false;
    });

    //Функция уменьшения размера шрифта
    $('.decreaseFont-js').click(function() {
        //Если размер шрифта больше или равен минимальному значению
        if (size >= min) {
            //Уменьшаем размер
            size--;
            //Устанавливаем размер шрифта
            elm.css( {'fontSize': size} );
            localStorage.setItem('size', size);

            console.log(size);
            console.log('current: ', elm.css('font-size'));
            console.log('- default reset: ', reset);

            console.log('min: ', min, 'max: ', max);

            changeDisabled(min, max, size, reset);

        }
        //Прерываем передачу события далее по дереву DOM
        return false;
    });

    //Функция сброса к значению по умолчанию
    $('.defaultFont-js').click(function() {
        //установить размер шрифта по умолчанию
        elm.css({ 'fontSize': reset } );
        size = reset;
        size = Number(str_replace(reset, 'px', ''));
        localStorage.removeItem('size');

        console.log('click reset: ', reset);
        console.log('current: ', elm.css('font-size'));
        console.log(size);

        console.log('min: ', min, 'max: ', max);

        changeDisabled(min, max, size, reset);

    });

});

//Функция замены строки
function str_replace(haystack, needle, replacement) {
    let temp = haystack.split(needle);
    return temp.join(replacement);
}

//Функция добавления к кнопке атрибута disabled
function changeDisabled(min, max, size, reset) {
    // max disabled
    if (size >= max) {
        $('.increaseFont-js').prop("disabled", true)
    } else (
        $('.increaseFont-js').prop("disabled", false)
    );

    // min disabled
    if (size <= min ) {
        $('.decreaseFont-js').prop("disabled", true)
    } else (
        $('.decreaseFont-js').prop("disabled", false)
    );

    // reset disabled
    if (( Number(str_replace(reset, 'px', '')) == size)) {
        $('.defaultFont-js').prop("disabled", true)
    } else {
        $('.defaultFont-js').prop("disabled", false)
    }
}
