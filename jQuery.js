$(document).ready(() => {

$(".sidebar-2-link").click(() => {

$path = $("#about-page").offset().top;


$("html, body").animate({scrollTop: $path }, 1000);
});

$(".sidebar-1-link").click(() => {

$path = $("#main").offset().top;

$("html, body").animate({scrollTop: $path }, 1000);
});

$(".sidebar-3-link").click(() => {

$path = $("#skills-page").offset().top;

$("html, body").animate({scrollTop: $path }, 1000);
});

$(".sidebar-4-link").click(() => {

$path = $("#projects-page").offset().top;

$("html, body").animate({scrollTop: $path}, 1000);
});

$(".sidebar-5-link").click(() => {

$path = $("#contact-page").offset().top;

$("html, body").animate({scrollTop: $path}, 1000);
});



  $(window).scroll(function(){

   var target = $('.skills-page-design-p').offset().top;
   var targetHeight = $('.skills-page-design-p').outerHeight();
   var currentPosition = $(this).scrollTop();
   var windowHeight = $(window).height();

   if(currentPosition >= (target + targetHeight - windowHeight)){

    setTimeout(() => {

      $('.html').animate({width: $('.html').attr('data-percent')}, {
        duration: 1500,
        easing: 'swing'
      });
  
      $('.css').animate({width: $('.css').attr('data-percent')}, {
        duration: 1800,
        easing: 'swing'
      });
  
      $('.react').animate({width: $('.react').attr('data-percent')}, {
        duration: 2100,
        easing: 'swing'
      });
  
      $('.jquery').animate({width: $('.jquery').attr('data-percent')}, {
        duration: 2400,
        easing: 'swing'
      });
  
      $('.angular').animate({width: $('.angular').attr('data-percent')}, {
        duration: 2700,
        easing: 'swing'
      });
  
      $('.php').animate({width: $('.php').attr('data-percent')}, {
        duration: 3000,
        easing: 'swing'
      });
    
    }, 1000)

  }
  
  });
 
/* I am working Here! */

  $('.projects').hover(function(){
    $(this).css({'z-index': "2", 'backgroundColor': "black"});
      $(this).animate({ margin: -35, width: "300", height: "200" });
  }, function(){
    $(this).css({'z-index': "-1"});
    $(this).animate({ margin: 0, width: "230", height: "130" });
  })

/* I am working Here! */

$("projects-page-content-1 projects").click(function(){

window.location = $(this).find('.projects-a').attr("href");


return false;

});


window.sr = ScrollReveal();
    sr.reveal('.name', {
      duration: 2000,
      origin: 'top',
      delay: 500,
      distance: '300px'
    })

    window.sr = ScrollReveal();
    sr.reveal('.name-p-2', {
      duration: 2000,
      origin: 'left',
      delay: 1000,
      distance: '300px'
    })

    window.sr = ScrollReveal();
    sr.reveal('.about-page-content-1-p', {
      duration: 2000,
      origin: 'left',
      delay: 500,
      distance: '300px'
    })

    window.sr = ScrollReveal();
    sr.reveal('.about-page-content-2', {
      duration: 2000,
      origin: 'bottom',
      delay: 1000,
      distance: '300px'
    })



});