$(function () {
    $('.menu-trigger').on('click', function () {
            if ($('.menu-trigger').hasClass('active')) {
                $('.menu-trigger').removeClass('active');
                $('header nav').show();
            }
            else {
                $('.menu-trigger').addClass('active');
                $('header nav').hide();
            }
        })
        //end
})