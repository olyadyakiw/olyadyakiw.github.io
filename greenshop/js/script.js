//BURGER MENU

const menuBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
        body.classList.toggle("lock");
        searchInput.classList.remove("active");
        searchClose.classList.remove("active");
    });
}

//HEADER SEARCH

const search = document.querySelector(".header__search-icon");
const searchInput = document.querySelector(".header__search-input");
const searchClose = document.querySelector(".header__search-close");

if (search) {
    search.addEventListener("click", function (e) {
        searchInput.classList.add("active");
        searchClose.classList.add("active");
    });
}
if (searchClose) {
    searchClose.addEventListener("click", function (e) {
        searchInput.classList.remove("active");
        searchClose.classList.remove("active");
    });
}

// HOME SLIDER

$('.home-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    dotsClass: 'home-slider__dots'
});

//RANGE SLIDER

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });

  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );

//MIXIT

function homeOnly() {
    var mixer = mixitup('.products__carts');
    mixer.filter('.category-a');
}

if ($("body.home").length) {
    homeOnly();
}


//PRODUCT SLIDERS

$('.product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.product__vertical-slider'
});
$('.product__vertical-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product__slider',
    infinite:true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            vertical: false
          }
        }
    ]
  });

  //STARS PRODUCT

  $(".product__star").rateYo({
    rating: 4,
    starWidth: "15px",
    spacing: "4px",
    ratedFill: "#FFAC0C",
    normalFill: "#C4C4C4",
    readOnly: true,
});

// PRODUCT NUMBER INPUT

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".quantity input");
jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find(".quantity-up"),
        btnDown = spinner.find(".quantity-down"),
        min = input.attr("min"),
        max = input.attr("max");

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});


  // PRODUCT TABS 

  (function () {
    $(function () {
        var toggle;
        return (toggle = new Toggle(".product__tabs"));
    });

    this.Toggle = (function () {
        Toggle.prototype.el = null;

        Toggle.prototype.tabs = null;

        Toggle.prototype.panels = null;

        function Toggle(toggleClass) {
            this.el = $(toggleClass);
            this.tabs = this.el.find(".product__tab");
            this.panels = this.el.find(".product__panel");
            this.bind();
        }

        Toggle.prototype.show = function (index) {
            var activePanel, activeTab;
            this.tabs.removeClass("active");
            activeTab = this.tabs.get(index);
            $(activeTab).addClass("active");
            this.panels.hide();
            activePanel = this.panels.get(index);
            return $(activePanel).show();
        };

        Toggle.prototype.bind = function () {
            var _this = this;
            return this.tabs.unbind("click").bind("click", function (e) {
                $(".slider").slick("reinit");
                return _this.show($(e.currentTarget).index());
            });
        };

        return Toggle;
    })();
}.call(this));

//RELATED SLIDER

$('.related__slider').slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    infinite: false,
    dotsClass: 'related__dots',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1
          }
        }
    ]
});