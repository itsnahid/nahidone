$(function(){
    $('.sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows:true,
        prevArrow: '<i class=" fa-solid fa-solid fa-circle-arrow-left prev "></i>',
        nextArrow:'<i class="fa-solid fa-circle-arrow-right next"></i>'
      }); 

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

// slider part start
$('.banner_slik').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:true,
  
  prevArrow:'<i class="far fa-arrow-alt-circle-left banner_prev"></i>',
  nextArrow:'<i class="far fa-arrow-alt-circle-right banner_next"></i>',

});
// slider part end

// mixitup 
var containerEl = document.querySelector('.mixitup_filter');

var mixer = mixitup(containerEl);
// mixitup 

// venobox 
new VenoBox({
  selector: '.my-video-links',
});
// venobox 

// recent post slide 


$('.post_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  arrows:false,
});
			
// recent post slide 

});

