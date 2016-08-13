/*
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

var upImageClick = document.getElementById('Up');

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
*/

var arrow = document.getElementById("arrow");
var pageYLabel = 0;

arrow.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {

    case "up":
        pageYLabel = pageY;
        window.scrollTo(0,0);
        this.className = "down";
      break;

    case "down":
      window.scrollTo(0,pageYLabel);
      this.className = "up";
    break;
  }
}

window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;
  var innerHeight = document.documentElement.clientHeight;

  switch (arrow.className) {

    case "": if (pageY > innerHeight) {
      arrow.className = "up";
    }
    break;

    case "up": if (pageY < innerHeight) {
      arrow.className = "";
    }
    break;

    case 'down':
          if (pageY > innerHeight) {
            arrow.className = 'up';
          }
          break;
  }
}
