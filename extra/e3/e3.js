$(document).ready(function () {
  $(window).scroll(function () {
    var offset = $(window).scrollTop();
    console.log(offset);
    var parallax1 = 100 - (offset*0.1);
    var parallax2 = 500 - (offset*0.2); 
    var parallax3 = 20 + (offset*0.32); 
    $(".i1,.i4").css("top",parallax1 + "px");
    $(".i2,.i5").css("top",parallax2 + "px");
    $(".i3,.i6").css("bottom",parallax3 + "px");

  });
});