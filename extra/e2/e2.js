$(document).ready(function () {
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() < 30) {
      $(".nav").css({
        "background":"none", "position" : "absolute"
      });
    } else {
      $(".nav").css({
        "background-color": "var(--black_background)", "position" : "fixed"
      });
    }
  });
});

// $(window).scroll( function() {
//   if($(window).scrollTop() === 0){
//       $(".nav-header").css({
//           "backgroundColor": "transparent"
//       })
//   }
//   else{
//       $(".nav-header").css({
//           "backgroundColor": "black"
//       })
//   }
// })
