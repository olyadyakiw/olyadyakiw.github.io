'use strict';

var acc = document.getElementsByClassName("menu__header");
var item = document.getElementsByClassName("menu__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  item[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}