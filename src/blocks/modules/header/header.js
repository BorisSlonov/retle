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
    direction: 'vertical',
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
    spaceBetween: 10,
    effect: 'coverflow',
    simulateTouch: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-houses',
        prevEl: '.swiper-button-prev-houses',
    }

});









$(document).ready(function () {

    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 50 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
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


    //прикрепляем клик по заголовкам acc-head
    $('.houses-accordeon .acc-head').on('click', f_acc);

    function f_acc() {
        //скрываем все кроме того, что должны открыть
        $('#accordeon .acc-body').not($(this).next()).slideUp(500);
        // открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);
    }
});



//forms 

// Отправка данных на сервер
function send(event, php) {
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено


                $.fancybox.open('<div class="message"><h2>Спасибо за заявку!</h2><p>Мы свяжемся с вами в ближайшее время</p></div>');

                function closePopup() {
                    $.fancybox.close()
                    $.fancybox.close()
                }

                setTimeout(closePopup, 3000);



            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else { alert("Ошибка сервера. Номер: " + req.status); }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () { alert("Ошибка отправки запроса"); };
    req.send(new FormData(event.target));
}

