
var galleryCliker = 0;


$(".arrowLeft").on("click", function(){
  if (galleryCliker <= 0) {
    console.log("Number too small");
    return;
   } else {
    galleryCliker--;
    changeGallery(galleryCliker);
      }
})

$(".arrowRight").on("click", function(){
  if (galleryCliker >= 1) {
    console.log("Number too big");
    return;
   } else {
    galleryCliker++;
    changeGallery(galleryCliker);
      }
})

var changeGallery = function(galleryCliker) {
  switch(galleryCliker) {
    case 0:
      var list = $("#gallery > li");
        for (var i = 0; i < list.length; i++) {
          list[i].classList.add("hidden");
        }
      list[0].classList.remove("hidden");
    break;
    case 1:
    var list = $("#gallery > li");
    for (var i = 0; i < list.length; i++) {
      list[i].classList.add("hidden");
    }
    list[1].classList.remove("hidden");
    break;
  }
}