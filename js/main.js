 jQuery(function($) {
      $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
                  $('.navbar-wrapper').stickUp();
                });
              });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});




//Initialize material-scrolltop (minimal)

  $('body').materialScrollTop();




            