$(function () {

   var $el, leftPos;

   $(".menu__list").append("<li id='magic-line'></li>");

   var $magicLine = $("#magic-line");

   $(".menu__item").find("a").hover(function () {
       $el = $(this);
       leftPos = $el.position().left + ($el.width() / 2) + 17 + 'px';

       $magicLine.stop().animate({
           left: leftPos,
       });
   }, function () {
       $magicLine.stop().animate({
           left: $magicLine.data("origLeft"),
       });
   });

   $magicLine
       .css("left", $(".menu__link--active").width() + 117 + 'px')
       .data("origLeft", $magicLine.position().left);


   $(".menu__link--active").mouseenter();
});