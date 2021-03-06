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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
    });

    // flipping cards script
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
                $('.catalog__item-list').eq(i).toggleClass('catalog__item-list_active');
            })
        });
    };

    toggleSlide('.catalog__item-link');
    toggleSlide('.catalog__item-back');

  });