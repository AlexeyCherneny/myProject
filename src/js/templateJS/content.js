
var galleryCliker = 0;

$(".arrowLeft").on("click", function(){
  if (galleryCliker <= 0) {
    break;
   } else {
    galleryCliker--;
    changeGallery(galleryCliker);
      }
})

$(".arrowRight").on("click", function(){
  if (galleryCliker >= 1) {
    break;
   } else {
    galleryCliker++;
    changeGallery(galleryCliker);
      }
})

var galleryCliker = function(galleryCliker) {
  switch(galleryCliker) {
    case 0:
    break;
      var list = $("#gallery > li");
      for (var i = 0; i < list.length; i++) {
        list[i].addClass("hidden");
      }
      list[0].removeClass("hidden");
    case 1:
    var list = $("#gallery > li");
    for (var i = 0; i < list.length; i++) {
      list[i].addClass("hidden");
    }
    list[1].removeClass("hidden");
    break;
  }
}
