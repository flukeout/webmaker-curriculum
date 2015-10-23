$(document).ready(function(){
  $(".activity-nav").on("click","a",function(){
    $(".activity-nav a").removeClass("selected");
    $(this).addClass("selected");
    var section = $(this).attr("href").replace("#","");
    navigate(section);
    return false;
  });
});

function navigate(section){

  $(".agenda > ul > li").hide();
  $("#overview").hide();

  if(section == "overview") {
    $("#overview").show();
    $(".wrapper").attr("mode","overview");
  } else {
    $(".agenda > ul > li#" + section).show();
    $(".wrapper").attr("mode","step");
  }

}