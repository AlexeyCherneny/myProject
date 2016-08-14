
function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

var upImageClick = document.getElementById('arrow');

upImageClick.ondragstart = function() {
    return false;
};

function getShift(e, obj) {
    var coords = getCoords(obj);
    return {
        x: e.pageX - coords.left,
        y: e.pageY - coords.top
    };
}
upImageClick.onmousedown = function(e) {
    var shift = getShift(e, upImageClick);
    upImageClick.style.position = 'absolute';
    moveAt(e);

    document.body.appendChild(upImageClick);

    upImageClick.style.zIndex = 1000;

    function setPosition(pos) {
        upImageClick.style.left = pos.left + 'px';
        upImageClick.style.top = pos.top + 'px';
    }

    function moveAt(e) {
        setPosition({
            left: e.pageX - shift.x,
            top: e.pageY - shift.y
        });
    }


    document.onmousemove = function(e) {
        moveAt(e);
    };

    upImageClick.onmouseup = function() {
        var pos = upImageClick.getBoundingClientRect();
        upImageClick.style.position = 'fixed';
        document.onmousemove = null;
        upImageClick.onmouseup = null;
        setPosition(pos);
    }
};


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
