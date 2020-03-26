$(document).ready(function () {
    $('.submit').on('click', function () {
        if ($('#todo-header').val() != '' && $('#todo-desc').val() != '') {
            $('.empty').css({
                'display': 'none'
            });
            $('.todos-list').append('<div class="todo"><h3 class="todo-title">' + $('#todo-header').val() + '<img src="./clear-button.png" alt="Закрыть" class="close"><img src="./arrow.png" alt="Стрелка" class="arrow"></h3><p class="desc">' + $('#todo-desc').val() + '</p></div>')
            $('#todo-header').val('');
            $('#todo-desc').val('');
            return false;
        }

    });
});

$(document).on('click', '.close', function (event) {
    $(this).parent().parent().fadeOut(200);
});

$(document).on('click', '.arrow', function (event) {
    const description = $(this).parent().parent().children('.desc');
    if (description.css('display') !== 'none') {
        description.slideUp();
        $(this).css({
            'transform': 'rotate(90deg) translateY(-150%)'
        })
    }
    if (description.css('display') === 'none') {
        description.slideDown();
        $(this).css({
            'transform': 'rotate(0deg) translateY(-150%)'
        })
    }

});