
//FUNCION ONLY FOR HOME PAGE
//START
function homepageOnly() {

    // MIXER FOR FOOD SECTION
    //START
    var mixer = mixitup(".food__wrapper", {
        load: {
            filter: ".mix-start",
        },
    });
    //END


    // CHECK TOUCH SCREEN FOR DISHES SECTION
    //START
    isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        },
    };

    const dishes = document.querySelector(".dishes");

    function mobile() {
        if (isMobile.any()) {
            dishes.classList.add("touch");
        } else {
            dishes.classList.remove("touch");
        }
    }

    mobile();

    window.addEventListener("resize", mobile);
    //END
}

if ($("body.home").length) {
    homepageOnly();
}
//END

// ARROWS HIDE/SHOW FOR DISHES SECTION
//START

let position = 0;
if (position == 0) {
    $(".dishes__arrow-left").addClass("none");
}

let step = 400;

$(".dishes__arrow-right").click(function () {
    event.preventDefault();
    $(".dishes__list").animate(
        {
            scrollLeft: "+=" + step,
        },
        "slow"
    );
    position = $(".dishes__list").scrollLeft() + step;

    if (position == 0) {
        $(".dishes__arrow-left").addClass("none");
    } else {
        $(".dishes__arrow-left").removeClass("none");
    }

    if (position > step * 3) {
        $(".dishes__arrow-right").addClass("none");
    }
});

$(".dishes__arrow-left").click(function () {
    setTimeout(1000);
    event.preventDefault();
    $(".dishes__list").animate(
        {
            scrollLeft: "-=" + step,
        },
        "slow"
    );
    position = $(".dishes__list").scrollLeft();

    if (position <= step) {
        $(".dishes__arrow-left").addClass("none");
    } else if (position < step * 4) {
        $(".dishes__arrow-right").removeClass("none");
    }
});

//END

//STARS
//START

$(".food__stars").rateYo({
    rating: 4,
    starWidth: "13px",
    spacing: "4px",
    ratedFill: "#00AC4E",
    normalFill: "#EBEBEB",
    readOnly: true,
});

$(".product__stars").rateYo({
    rating: 4,
    starWidth: "13px",
    spacing: "4px",
    ratedFill: "#00AC4E",
    normalFill: "#EBEBEB",
});

$(".review__star").rateYo({
    rating: 5,
    starWidth: "13px",
    spacing: "4px",
    ratedFill: "#00AC4E",
    normalFill: "#EBEBEB",
});

$(".review__stars").rateYo({
    rating: 5,
    starWidth: "13px",
    spacing: "4px",
    ratedFill: "#00AC4E",
    normalFill: "#EBEBEB",
    readOnly: true,
});

//END

//MENU
//START

const menuBtn = document.querySelector(".header__btn");
const backBtn = document.querySelector(".header__btn-back");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
        backBtn.classList.add("active");
        menu.classList.add("active");
        body.classList.add("lock");
    });
}
if (backBtn) {
    backBtn.addEventListener("click", function (e) {
        backBtn.classList.remove("active");
        menu.classList.remove("active");
        menuSublist.classList.remove("active");
        body.classList.remove("lock");
    });
}

const dropdown = document.querySelector(".menu__item-dropdown");
const menuSublist = document.querySelector(".menu__sublist");
const mediaQuery = window.matchMedia("(max-width: 992px)");
const mediaQueryXL = window.matchMedia("(min-width: 992px)");

function resizeMenu(e, l) {
    if (e.matches) {
        dropdown.addEventListener("click", function (e) {
            menuSublist.classList.toggle("active");
            dropdown.classList.toggle("active");
        });
    }
}

mediaQuery.addEventListener("change", resizeMenu);
mediaQueryXL.addEventListener("change", resizeMenu);

resizeMenu(mediaQuery, mediaQueryXL);

//END

//POPUP
//START

$(".popup-youtube").magnificPopup({
    items: {
        src: "http://www.youtube.com/watch?v=0O2aH4XLbto",
        type: "iframe",
    },
});

$(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    mainClass: "form__login-wrapper",
});
//END

//INPUT NUMBER FOR PRODUCT-PAGE
//START

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

function productOnly() {

    function priceCount() {
        let content = document.getElementsByClassName("product__price-number")[0].textContent;
        let summ = $(".numbers").val();
        $(".product__payment-number").html(summ * content + " ₽");
    }
    
    $(".quantity-button").on("click", priceCount);
    
    priceCount();

}


if ($("body.product").length) {
    productOnly();
}

//END

//SLIDER FOR PRODUCT TABS
//START
$(".product__panel-slider").slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: "50px",
});

//END

//PRODUCT-PAGE TABS
//START

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
//END