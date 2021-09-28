
var $status = $('.demand__fraction');
var $slickElement = $('.demand__slider');

$slickElement.on('init afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' of ' + slick.slideCount);
});

$('.demand__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="demand__arrow-prev slick-prev"><img src="../img/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="demand__arrow-next slick-next"><img src="../img/arrow-right.svg"></button>',
    dots: true,
    dotsClass: 'demand__dots',
});

$('.find-out__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="find-out__arrow-prev slick-prev"><img src="../img/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="find-out__arrow-next slick-next"><img src="../img/arrow-right.svg"></button>'
});

//burger menu

const menuBtn = document.querySelector('.header__btn');
if(menuBtn) {
    const menu = document.querySelector('.header__content');
    menuBtn.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('.covers__inner:not(.slick-initialized)').slick({
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    } else {
      $(".covers__inner.slick-initialized").slick("unslick");
    }
  });

  new WOW().init();
