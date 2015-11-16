// .js to hide menus and have them appear on hover

$(document).ready(function() {
  $('.nav li').hover(function() {
    $(this).find('.subnav').removeClass('hidden');
    }, function() {
      $(this).find('.subnav').addClass('hidden');
  });
});

// .js for image thumbs and display

var myImage= new Array();
myImage[0]="imagefile.jpg";
myImage[1]="imagefile.jpg";
myImage[2]="imagefile.jpg";
myImage[3]="imagefile.jpg";
myImage[4]="imagefile.jpg";
myImage[5]="imagefile.jpg";
myImage[6]="imagefile.jpg";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }
