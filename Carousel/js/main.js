/*I want the user to see one image
Click one of two buttons to select the next or previous image
Go back or forth through the images*/

/*Store all the images into one array
find a way to cycle thru out the photos*/
var imgPaths = ['img/dilly.png', 'img/mock.jpg', 'img/omae.jpg', 'img/nani.jpg', 'img/quick.jpg', 'img/right.png', 'img/spaghet.jpg', 'img/uk.png']
var pic = 0
var clickCount = 0;


$("#next").on("click", function(){
//  clickCount += 1
  //if(clickCount === 3){
    //clickCount = 0;
  //  var random = Math.round(Math.random() *imgPaths.length - 1)
    $("#img").attr('src', imgPaths[pic]);
    //pic = random;
  //}else {
    pic += 1
  if(pic > imgPaths.length-1){
    pic = 0;
  }
  $("#img").attr('src', imgPaths[pic]);
}
})
$("#back").on('click', function(){
  pic -=1
  if(pic <0){
    pic = imgPaths.length-1
  }


  $('#img').attr('src', imgPaths[pic])
})
