
var width = 1351;

var carousel = document.getElementById("carousel");
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0;

$(".prev").on("click", function() {
  position = Math.min(position + width, 0)
  list.style.marginLeft = position + 'px';
});

$(".next").on("click", function() {
  position = Math.max(position - width, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'px';
});
