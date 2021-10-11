$(document).ready(function(){
    $(".first-owl").owlCarousel({
        items:1,
        nav:true,
        navText: ["<img src='./Assets/image/arrow-icon-left.png'>","<img src='./Assets/image/arrow-icon-right.png'>"],
        loop:true,
        dots:false,
    })
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").style.padding = "8px 0px";
    document.querySelector(".header").style.backgroundColor = "#660000";
   
  } else {
    document.querySelector(".header").style.padding = "20px 0px";
    document.querySelector(".header").style.backgroundColor = "#290000";
    
  }
} 
