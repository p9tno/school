$(document).ready(function() {
    let elm = $('.wrapper')
    let min = $('.decreaseFont-js')
    let max = $('.increaseFont-js')
    let normal = $('.defaultFont-js')

    if (localStorage.getItem("size") == "max") {
        elm.addClass('maxFont')

        normal.prop("disabled", false)
        max.prop("disabled", true)
        min.prop("disabled", false)
    } else if (localStorage.getItem("size") == "min") {
        elm.addClass('minFont')

        normal.prop("disabled", false)
        max.prop("disabled", false)
        min.prop("disabled", true)
    } else {
        elm.removeClass('minFont maxFont')

        normal.prop("disabled", true)
        max.prop("disabled", false)
        min.prop("disabled", false)
    }

    //Функция увеличения размера шрифта
    max.click(function() {
        // console.log('+');
        elm.removeClass('minFont')
        elm.addClass('maxFont')

        normal.prop("disabled", false)
        max.prop("disabled", true)
        min.prop("disabled", false)

        localStorage.setItem("size", "max");
    });

    //Функция уменьшения размера шрифта
    min.click(function() {
        // console.log('-');
        elm.removeClass('maxFont')
        elm.addClass('minFont')

        normal.prop("disabled", false)
        max.prop("disabled", false)
        min.prop("disabled", true)

        localStorage.setItem("size", "min");
    });

    //Функция сброса к значению по умолчанию
    normal.click(function() {
        // console.log('reset');
        elm.removeClass('minFont maxFont')

        normal.prop("disabled", true)
        max.prop("disabled", false)
        min.prop("disabled", false)

        localStorage.removeItem("size");
    });

});
