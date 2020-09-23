$(function () {
    const menu = document.querySelector('.menu-trigger');
    const nav = document.querySelector('nav');
    $('.menu-trigger').on('click', function () {
            $('.menu-trigger').toggleClass('active');
            $('header nav').show();
        })
        //end
})