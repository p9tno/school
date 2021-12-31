$(document).ready(function() {
    $('input[name=themeCheckbox]').change(function() {

        if ($(this).is(':checked')) {
            // console.log("Checkbox is checked..");
            localStorage.setItem("theme", "night");
            // console.log(localStorage.getItem("theme"));
            $('input[name=themeCheckbox]').prop('checked', true);
        } else {
            // console.log("Checkbox is not checked..");
            localStorage.setItem("theme", "day");
            $('input[name=themeCheckbox]').prop('checked', false);
        }
        $( 'body' ).toggleClass('dark_theme');
    });

    if (localStorage.getItem("theme") == "night") {
        $('input[name=themeCheckbox]').prop('checked', true);
        // body.className += " dark-theme";
        $( 'body' ).toggleClass('dark_theme');
    }
});
