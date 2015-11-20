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
myImage[0]="joe-torre-by-s-costello.jpg";
myImage[1]="regina-spektor-by-s-costello.jpg";
myImage[2]="david-tennant-as-doctor-who-by-s-costello.jpg";
myImage[3]="alex-kingston-as-river-song-by-s-costello.jpg";
myImage[4]="jared-wright-by-s-costello.jpg";
myImage[5]="peter-gwen-garfield-stone-by-s-costello.jpg";
myImage[6]="the-view-by-s-costello.jpg";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }
