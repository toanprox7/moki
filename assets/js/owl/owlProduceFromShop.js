$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      stagePadding: 50,
      loop:true,
      margin:10,
      nav:true,
     
      responsive:{
          0:{
              items:1
          },
          500:{
              items:2
          },
          1000:{
              items:4
          }

      },
      dots:false
    });
  });