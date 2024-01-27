$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 52){
      $(".header").slideUp(400);
    }
    else{
      $(".header").slideDown(400);
    }
  })

  
});