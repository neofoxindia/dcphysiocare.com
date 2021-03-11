$(document).ready(function () {
  "use strict";


  // Anchor Smooth Scroll
  $('body').on('click', '.page-scroll', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 80)
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Quote
  $('.quote').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });

  // Quote
  $('.quote2').slick({
    arrows: false,
    autoplay: false,
    dots: true
  });

  // Quote
  $('.quote3').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Video Lightbox
  $('.swipebox-video').swipebox();

  // Scrollspy
  $('body').scrollspy({
    target: ".navbar",
    offset: 105
  })

  // Stellar
  $.stellar({
    horizontalOffset: 50,
    verticalOffset: 50,
    responsive: true
  });
  // Product Feature
  $('.hl-point1 .trigger').on('click', function () {
    $('.hl-point1 .h1-point-info').toggleClass('active');
    $('.hl-point2 .h1-point-info').removeClass('active');
    $('.hl-point3 .h1-point-info').removeClass('active');
  });

  $('.hl-point2 .trigger').on('click', function () {
    $('.hl-point2 .h1-point-info').toggleClass('active');
    $('.hl-point1 .h1-point-info').removeClass('active');
    $('.hl-point3 .h1-point-info').removeClass('active');
  });

  $('.hl-point3 .trigger').on('click', function () {
    $('.hl-point3 .h1-point-info').toggleClass('active');
    $('.hl-point2 .h1-point-info').removeClass('active');
    $('.hl-point1 .h1-point-info').removeClass('active');
  });

});


$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

$(function () {
  $('.btn-circle').on('click', function () {
    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
    $(this).addClass('btn-info').removeClass('btn-default').blur();
  });
});

$(document).ready(function () {

  $(".ai-list1").on(function (e) {
    $(".ai-slide-img-inner").addClass("ai-slide1-active");
    $(".ai-slide-img-inner").removeClass("ai-slide2-active");
    $(".ai-slide-img-inner").removeClass("ai-slide3-active");
  });

  $(".ai-list2").on(function (e) {
    $(".ai-slide-img-inner").addClass("ai-slide2-active");
    $(".ai-slide-img-inner").removeClass("ai-slide1-active");
    $(".ai-slide-img-inner").removeClass("ai-slide3-active");
  });

  $(".ai-list3").on(function (e) {
    $(".ai-slide-img-inner").addClass("ai-slide3-active");
    $(".ai-slide-img-inner").removeClass("ai-slide1-active");
    $(".ai-slide-img-inner").removeClass("ai-slide2-active");
  });

});

