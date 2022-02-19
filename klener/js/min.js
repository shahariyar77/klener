//preloader activation
var win =  $(window);
win.on('load', function () {
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function(){
      //   / magnificPopup video view /
    new ModalVideo('.video-btn');

    // manu scrool
    $(window).on('scroll', function (){   
        var sticky = $('.header-manu'),
        scroll = $(window).scrollTop();
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

      });


/*offcanvas js*/
$(".header-bar").on("click", function(){
    $(".offcanvas-manu, .offcanvas-overylay").addClass("active");  
  });
  
  
  $(".manu-close, .offcanvas-overylay").on("click", function(){
    $(".offcanvas-manu, .offcanvas-overylay").removeClass("active");  
  });


  // WOW active
  new WOW().init();


// brand slider
    $(".brand-carousel").owlCarousel({
        items:5,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:false
    
            }
        }

    });
    // testmonial slider
    $(".testmonial-slider").owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true
    
            }
        }

    });
    // project slider
    $(".project-slider").owlCarousel({
        items:3,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
    
            }
        }

    });
     // counter plugin
     var timer = $('.timer');
     if(timer.length) {
         timer.appear(function () {
           timer.countTo();
       })
     }
    

    // Show or hide the sticky footer button
	win.on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200)
		} else{
			$('#scroll').fadeOut(200)
		}
	});

	
  });