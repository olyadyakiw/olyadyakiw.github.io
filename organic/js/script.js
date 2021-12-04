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

//REGISTER TABS

(function() {
    $(function() {
      var toggle;
      return toggle = new Toggle('.register__inner');
    });
  
    this.Toggle = (function() {
      Toggle.prototype.el = null;
  
      Toggle.prototype.tabs = null;
  
      Toggle.prototype.panels = null;
  
      function Toggle(toggleClass) {
        this.el = $(toggleClass);
        this.tabs = this.el.find(".register__btn");
        this.panels = this.el.find(".register__tab");
        this.bind();
      }
  
      Toggle.prototype.show = function(index) {
        var activePanel, activeTab;
        this.tabs.removeClass('active');
        activeTab = this.tabs.get(index);
        $(activeTab).addClass('active');
        this.panels.hide();
        activePanel = this.panels.get(index);
        return $(activePanel).show();
      };
  
      Toggle.prototype.bind = function() {
        var _this = this;
        return this.tabs.unbind('click').bind('click', function(e) {
          return _this.show($(e.currentTarget).index());
        });
      };
  
      return Toggle;
  
    })();
  
  }).call(this);



