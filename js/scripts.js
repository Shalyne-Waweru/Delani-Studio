$(document).ready(function(){
  //What We Do Toggle Effect
  $(".design").click(function() {
    $(".design-icon").toggle();
    $(".design-info").toggle();
  });

  $(".development").click(function() {
    $(".dev-icon").toggle();
    $(".dev-info").toggle();
  });

  $(".product").click(function() {
    $(".product-icon").toggle();
    $(".product-info").toggle();
  });

  //Portfolio Hover Effects
  $(".project-1").hover(function(){
    $(".btn-1").toggle();
  });

  $(".project-2").hover(function(){
    $(".btn-2").toggle();
  });

  $(".project-3").hover(function(){
    $(".btn-3").toggle();
  });

  $(".project-4").hover(function(){
    $(".btn-4").toggle();
  });
});
