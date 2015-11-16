// .js to hide menus and have them appear on hover

$(document).ready(function() {
  $('.nav li').hover(function() {
    $(this).find('.subnav').removeClass('hidden');
    }, function() {
      $(this).find('.subnav').addClass('hidden');
  });
});

var myImage= new Array();
myImage[0]="a1-pikachu.jpeg";
myImage[1]="a2-raichu.jpeg";
myImage[2]="b1-magikarp.jpeg";
myImage[3]="b2-gyarados.jpeg";
myImage[4]="c1-bulbasaur.jpeg";
myImage[5]="c2-ivysaur.jpeg";
myImage[6]="c3-venusaur.jpeg";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }
