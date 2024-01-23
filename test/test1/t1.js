$(document).ready(function(){
  $("#cross1").click(function(){
    $("#i1").hide(1000);
    $("#price").addClass("sub_class");
  })
  $("#cross2").click(function(){
    $("#i2").hide(1000);
    $("#price").addClass("sub_class");
  })
  $("#cross3").click(function(){
    $("#i3").hide(1000);
    $("#price").addClass("sub_class");
  })
  $("#learn_link").click(function(){
    $("html").animate({scrollTop: $("#learn_sec").offset().top - 79},700)
  })
  $("#embed_link").click(function(){
    $("html").animate({scrollTop: $("#embed_sec").offset().top - 79},700)
  })
  $("#price_link").click(function(){
    $("html").animate({scrollTop: $("#price_sec").offset().top - 79},700)
  })
});