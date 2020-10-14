"use strict";

$(document).ready(function () {
  "use strict"; //Аккордион

  $('.questsion_block').on('click', function () {
    $(this).children('.questsion_block_answer').slideToggle('normal');
  }); //Кнопка наверх

  $(function () {
    var btnUp = $(".up_but");
    var top = $(this).scrollTop();

    if (top > 300) {
      btnUp.fadeIn(500);
    } else {
      btnUp.fadeOut(500);
    }

    $(document).on("scroll", function () {
      var top = $(this).scrollTop();

      if (top > 300) {
        btnUp.fadeIn(500);
      } else {
        btnUp.fadeOut(500);
      }
    });
    btnUp.on("click", function () {
      $("html,body").animate({
        scrollTop: 0
      }, 400);
    });
  }); //wow

  new WOW().init(); // Скрол до блока

  $(".link").on("click", function (e) {
    e.preventDefault();
    var selector = $(this).attr("href"); //получили Атрибут

    var h = $(selector); //получили элемент с данным атрибутом

    $("html,body").animate({
      scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top

    }, 1000);
  });
});