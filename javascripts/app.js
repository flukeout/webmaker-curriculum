var navOffset, navTop, navEl;

$(document).ready(function(){


  navEl = $(".agenda-navigation");
  navOffset = navEl.offset();
  navTop = navOffset.top;

  if (window.location.hash){
    var location = window.location.hash;
    navigate(location.replace("#",""));
  }

  navEl.on("click","a",function(){
    var section = $(this).attr("href").replace("#","");
    navigate(section);
    return false;
  });

  $(window).on("scroll",function(){

    if($(".wrapper").width() > 600){
      scroll();
    }

  })

});

function navigate(section){

  navEl.find("a").removeClass("selected");
  navEl.find("a[href=#"+section+"]").addClass("selected");

  $(".agenda > li").hide();
  $("[section=overview]").hide();

  if ($("[section=" + section + "]").length < 1){
    section = "overview";
  }

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
    $(".agenda-navigation").css("top",delta + "px");
  } else {
    $(".agenda-navigation").css("top",0);
  }
}