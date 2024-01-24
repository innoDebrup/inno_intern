$(document).ready(function(){
  //default-----------------------------------------
  $(".smc,.smj").hide();

  //cross-------------------------------------------
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

  //reset-------------------------------------------
  $("#reset").click(function(){
    $("#i1").show(1000);
    $("#i2").show(1000);
    $("#i3").show(1000);
    $("#price").removeClass("sub_class");
    
  })

  //nav_linking--------------------------------------
  $("#learn_link").click(function(){
    $("html").animate({scrollTop: $("#learn_sec").offset().top - 79},700)
  })
  $("#embed_link").click(function(){
    $("html").animate({scrollTop: $("#embed_sec").offset().top - 79},700)
  })
  $("#price_link").click(function(){
    $("html").animate({scrollTop: $("#price_sec").offset().top - 79},700)
  })

  //See more_less------------------------------------
  $("#more_c").click(function(){
    $(".slc").slideUp(200);
    $(".smc").slideDown(200);
  })
  $("#less_c").click(function(){
    $(".slc").slideDown(200);
    $(".smc").slideUp(200);
  })
  $("#more_j").click(function(){
    $(".slj").slideUp(200);
    $(".smj").slideDown(200);
  })
  $("#less_j").click(function(){
    $(".slj").slideDown(200);
    $(".smj").slideUp(200);
  })
});