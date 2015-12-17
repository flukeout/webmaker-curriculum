var navOffset, navTop, navEl, windowHeight, navHeight;

$(document).ready(function(){

  navEl = $(".agenda-navigation");
  navOffset = navEl.offset();
  navTop = navOffset.top;

  navigate(window.location.hash);

  navEl.on("click","a",function(){
    var step = $(this).attr("href");
    navigate(step);
    return false;
  });

  $(window).on("scroll",function(){
    if($(".wrapper").width() > 600){
      scroll();
    }
  });

});

function navigate(hash){
  // First we'll hide the steps and overview
  // Then we'll show the correct ones

  $(".agenda > li").hide();
  $("section.overview").hide();

  hash = hash.toLowerCase();
  var numberOfSteps = $(".agenda > li").length;

  //By default, we'll show the overview
  var overview = true;

  if(hash.indexOf("step") > 0) {
    var step = hash.replace("#step-","");
    if(step <= numberOfSteps){
      overview = false;
    }
  }

  if(overview) {
    hash = "#overview";
    $("section.overview").show();
    $(".wrapper").attr("mode","overview");
  } else {
    $(".agenda > li:nth-child("+step+")").show();
    $(".wrapper").attr("mode","step");
  }

  navEl.find(".selected").removeClass("selected");
  navEl.find("a[href="+hash+"]").parent().addClass("selected");

  window.location.hash = hash;
}

function scroll(){
  var scrolled = $(window).scrollTop();
  var delta = scrolled - navTop;
  navHeight = $(".agenda-navigation").height();
  windowHeight = $(window).height();

  if(navHeight < windowHeight){
    if(delta > 0){
      $(".agenda-navigation").css("top",delta + "px");
    } else {
      $(".agenda-navigation").css("top",0);
    }
  }
}
