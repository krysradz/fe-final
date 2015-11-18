// .js to hide menus and have them appear on hover (likely from class)

$(document).ready(function() {
  $('.nav li').hover(function() {
    $(this).find('.subnav').removeClass('hidden');
    }, function() {
      $(this).find('.subnav').addClass('hidden');
  });

  var  mn = $(".main-nav");
      mns = "stuck";
      hdr = $("svg").height(); // if adding any other svg's later, must give class to header svg and change to class name here

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

});

// .js from http://codepen.io/Guilh/pen/JLKbn to make the sticky nav


// .js for image thumbs and display (from class?)

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
