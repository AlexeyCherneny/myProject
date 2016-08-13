var contactUsTextareaMessage = document.getElementById("textareaMessage");

function addWheel(elem, handler) {
  if (elem.addEventListener) {
    if ("onwheel" in document){
      elem.addEventListener("wheel", handler);
    } else if ("onmousewheel" in document){
      elem.addEventListener("mousewheel", handler);
    } else {
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else {
    elem.attachEvent("onmousewheel", heandler);
  }
}

addWheel(contactUsTextareaMessage, function(e) {
  if (e.target.tagName != 'TEXTAREA') return;
  var area = e.target;

  var delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta < 0 && area.scrollTop == 0) {
    e.preventDefault();
  }

  if (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
    e.preventDefault();
  }
});