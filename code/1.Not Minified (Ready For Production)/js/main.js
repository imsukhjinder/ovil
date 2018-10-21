(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();


  /* 
  
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

  /*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

// Tempature Changing

$('.gold').on('click',function() {
   $('.celsius').html('1945 &#8451');
   $('.faranheiht').html('1062 &#8457');

  });

  $('.silver').on('click',function() {
    $('.celsius').html('1760 &#8451');
   $('.faranheiht').html('960 &#8457');

   })

   $('.copper').on('click',function() {
    $('.celsius').html('1981 &#8451');
   $('.faranheiht').html('1082 &#8457');

   })

   $('.zinc').on('click',function() {
    $('.celsius').html('786 &#8451');
    $('.faranheiht').html('418 &#8457');
 
   })

   $('.Aluminium').on('click',function() {
    $('.celsius').html('1220 &#8451');
    $('.faranheiht').html('660 &#8457');
 
   })

//    Owl Carusal
$('.owl-carousel').owlCarousel();
}(jQuery));

