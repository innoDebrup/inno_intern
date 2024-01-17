$(document).ready(function(){
  $(".hello_world").hide();
  $(".clickbar").click(function () {
    
    // $(".hello_world").slideUp(1000);
    $(".hello_world").slideDown(1000);
    console.log("slidedown");

  });
});