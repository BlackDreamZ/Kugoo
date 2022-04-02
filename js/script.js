'use strict';

// Работа меню-бургера и аккордеона

$(document).ready(function () {
    $('.header__middle-burger').click(function (event) {
        $('.header__middle-burger, .header__middle-menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
    $('.block.__init .block__title').click(function (event) {
        $(this).parent().toggleClass('active');
    })
})

// Работа слайдера

$(document).ready(function () {
    $('.item-card__slider').slick();
})