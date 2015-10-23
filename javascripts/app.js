var navOffset, navTop;

$(document).ready(function(){
  $(".activity-nav").on("click","a",function(){
    $(".activity-nav a").removeClass("selected");
    $(this).addClass("selected");
    var section = $(this).attr("href").replace("#","");
    navigate(section);
    return false;
  });

  $(window).on("scroll",function(){
    scroll();
  })

  navOffset = $(".activity-nav").offset();
  navTop = navOffset.top;


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

function scroll(){
  var scrolled = $(window).scrollTop();
  var delta = scrolled - navTop;
  if(delta > 0){
    $(".activity-nav").addClass("fixed");
    $(".activity-nav").css("top",delta + "px");
  } else {
    $(".activity-nav").removeClass("fixed");
    $(".activity-nav").css("top",0);
  }
}