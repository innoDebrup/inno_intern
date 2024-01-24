$(document).ready(function(){
  $("#submit").click(function(){
    if($("#field_1").val() === "" || $("#field_2").val() === ""){
      alert("Please fill all the fields");
    }
  })
})