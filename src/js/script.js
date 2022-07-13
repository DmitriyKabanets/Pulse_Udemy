$(document).ready(function(){
    $('.slicker__items').slick({
        speed: 300,
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.svg"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true    

                }
            }
        ]
    });
  });