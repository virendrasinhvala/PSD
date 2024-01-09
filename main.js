    $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
})

$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});

$("#toggle").click(function () {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
});


