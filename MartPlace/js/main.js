$(function () {
    $('.header__burger').click(function(event) {
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

   $('.weekly__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
      appendArrows: '.arrows-wrap'
   });

   $('.feed__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.arrows-wrap2',
    responsive: [
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
   });

   

   $(".rate-star").rateYo({
      rating: 4.5,
      starWidth: "13px",
      spacing: "5px",
      readOnly: true
   });

  const menuBtn = $('.newest__filter-btn'),
      menu    = $('.newest__filter-list');

menuBtn.on('click', function() {
    if ( $(this).hasClass('is-active') ) {
        $(this).removeClass('is-active');
        menu.slideUp();
    } else {
        $(this).addClass('is-active');
        menu.slideDown();
    }
});

$(document).click(function (e) {
    if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.slideUp();
        menuBtn.removeClass('is-active');
    };
});


   var mixer = mixitup('.newest__inner');
});

var inp = document.querySelector('.form__text');
window.addEventListener('resize', changePlaceholder);
changePlaceholder.call(window);

function changePlaceholder() {
  inp.setAttribute('placeholder', this.innerWidth >= 550 ? 'Search product here...' : 'Search');
}

var inp = document.querySelector('.hero-section__form-text');
window.addEventListener('resize', changePlaceholder);
changePlaceholder.call(window);

function changePlaceholder() {
  inp.setAttribute('placeholder', this.innerWidth >= 530 ? 'Search your product...' : 'Search...');
}

var time = 2,
   cc = 1;
$(window).scroll(function () {
   $('.advantages__inner').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 700) {
         if (cc < 2) {
            $('.advantages__numbers').addClass('statistics__viz');
            $('div').each(function () {
               var i = $(this).data('target') - 250,
                  num = $(this).data('target'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     } else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});

new WOW().init();