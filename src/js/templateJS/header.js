
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

var upImageClick = document.getElementById('Up');

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
