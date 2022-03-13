$(document).ready(function(){
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

});