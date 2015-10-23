var navOffset, navTop;

$(document).ready(function(){

  if (window.location.hash){
    var location = window.location.hash;
    navigate(location.replace("#",""));
  }

  $(".activity-nav").on("click","a",function(){
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

  $(".activity-nav a").removeClass("selected");
  $(".activity-nav a[href=#"+section+"]").addClass("selected");

  $(".agenda > ul > li").hide();
  $("[section=overview]").hide();

  console.log(section);

  if(section == "overview") {
    $("[section=overview]").show();
    $(".wrapper").attr("mode","overview");
  } else {
    $("[section=" + section+ "]").show();
    $(".wrapper").attr("mode","step");
  }

  window.location.hash = section;

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