"use strict"

//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});


const swiperHome = new Swiper('.swiper-container-home', {
    // Optional parameters
    loop: true,
    effect: 'fade',



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});

const swiperHouses = new Swiper('.swiper-container-houses', {
    // Optional parameters
    autoHeight: true,
    loop: true,
    effect: 'coverflow',
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-houses',
        prevEl: '.swiper-button-prev-houses',
    }

});





$('a[href*="#"]').click(function (event) {
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 200 + "px"
			}, 1000);
		}
	}
});


