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



  function updateTimer() {
    future = Date.parse("jan 9, 2021 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div class="sale-counter">' +
        '<div class="timer-border">'+m +'<span>min</span></div><div>'+s + '<span>sec</span></div></div>';
}
var interval = setInterval('updateTimer()', 1000);


$(document).ready(function (){
  $("#scrollToFormBtn").click(function (){
      console.log("Clicked");
      $('html, body').animate({
          scrollTop: $("#intro").offset().top - 50
      }, 400);
  });
});