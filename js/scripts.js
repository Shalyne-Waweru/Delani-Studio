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

  $(".project-5").hover(function(){
    $(".btn-5").toggle();
  });

  $(".project-6").hover(function(){
    $(".btn-6").toggle();
  });

  $(".project-7").hover(function(){
    $(".btn-7").toggle();
  });

  $(".project-8").hover(function(){
    $(".btn-8").toggle();
  });

  //Contact Form Submit Outputs
  $(".btn").click(function(){
    let inputName = document.querySelector(".name").value;
    let inputEmail = document.querySelector(".email").value;
    let message = document.querySelector("textarea").value;
    
    if(inputName === ""){
      alert("Enter you name!");
    }
    else if (inputEmail === ""){
      alert("Enter you email!");
    }
    else if (message === ""){
      alert("Enter your message!");
    }
    else{
      alert("Hey " + inputName + " we have received your message. Thank you for reaching out to us.")
    }

  });
});
