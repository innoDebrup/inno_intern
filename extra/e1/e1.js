
$(document).ready(function(){
  $(".left_bar").hide();
  $(".cover").hide();
  $("#cross").click(function(){
    $(".left_bar").hide();
    $(".cover").hide();
    $("body").css("overflow","scroll");
  });
  $("#menu").click(function(){
    $(".left_bar").show();
    $(".cover").show();
    $("body").css("overflow", "hidden");
  });
});