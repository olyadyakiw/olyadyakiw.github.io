$(function () {

   $('.header__menu-btn').click(function () {
      $('.menu__list').slideToggle('active');
   });

});

const menuIcon = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
   navbar.classList.toggle('change');
});

//-------------------------

var time = 2,
   cc = 1;
$(window).scroll(function () {
   $('.statistics__inner').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 700) {
         if (cc < 2) {
            $('.statistics__counter').addClass('statistics__viz');
            $('div').each(function () {
               var i = 1,
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

// -------------------------

var acc = document.getElementsByClassName("footer__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

new WOW().init();