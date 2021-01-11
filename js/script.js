$(document).ready(function() {
    $(window).scroll(function () { 
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 550) {
        $('.header-container').addClass('header-scrolled');
      }
  
      if ($(window).scrollTop() < 551) {
        $('.header-container').removeClass('header-scrolled');
      }
    });
  });
  AOS.init();