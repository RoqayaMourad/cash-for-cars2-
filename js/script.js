$(document).ready(function() {
    $(window).scroll(function () { 
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 48) {
        $('.header-container').addClass('header-scrolled');
      }
  
      if ($(window).scrollTop() < 49) {
        $('.header-container').removeClass('header-scrolled');
      }
    });
  });
  AOS.init();