
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

var upImageClick = document.getElementById('Up');
var currentLeft;
var currentTop;

upImageClick.ondragstart = function() {
  return false;
};

upImageClick.onmousedown = function(e) {
  var coords = getCoords(upImageClick);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;


  upImageClick.style.position = 'absolute';
  moveAt(e);

  document.body.appendChild(upImageClick);

  upImageClick.style.zIndex = 1000;

  function moveAt(e) {
    upImageClick.style.left = e.pageX - shiftX + 'px';
    upImageClick.style.top = e.pageY - shiftY + 'px';
    currentLeft = upImageClick.style.left;
    currentTop = upImageClick.style.top;
  };


  document.onmousemove = function(e) {
    moveAt(e);
  };

  upImageClick.onmouseup = function() {
    upImageClick.style.position = 'fixed';
    document.onmousemove = null;
    upImageClick.onmouseup = null;
  };
}
/*
upImageClick.onclick = function() {
  setTimeout(function() {
    upImageClick.style.left = currentLeft;
    upImageClick.style.top = currentTop;
  }, 0)
}
*/
