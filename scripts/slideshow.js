'use script';
//USING OWLCAROUSEL2 FOR GENERATION OF THIS SLIDE
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    loop: true,
  });
});
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//       0:{
//         items:1
//       },
//       600:{
//         items:3
//       },
//       1000:{
//         items:5
//       }
//     }
//   });
// });

//
// $(function(){
//   //config of slide distance, and animation speed
//   var slideWidth = 1215;
//   var slideAnimationSpeed = 2000;
//   var pause = 3000;
//   var currentSlide = 1;
//
//   //grab DOM elements
//   var $slideshowArticle = $('#slideshow-article'); //<article class="slideshow-article divs>"
//   var $slideshowContainer = $slideshowArticle.find('.slideshow');
//   var $mySlides = $slideshowContainer.find('.my-slides');

  // animate slideshow on 5s interval
  // setInterval(function(){
  //   $slideshowContainer.animate({'margin-left': '-=' + slideWidth}, 1000, function(){
  //     currentSlide ++;
  //     if(currentSlide === $mySlides.length){
  //       currentSlide = 1;
  //       $slideshowContainer.css('margin-left', 0);
  //     }
  //   });
  // }, pause);
  //
  // intend this to be for the clicks on the arrows.
  // $mySlides.click(function(){
  //   $slideshowContainer.animate({'margin-left': '-=' + slideWidth}, 1000, function(){
  //     if(currentSlide){
  //       asd;
  //     }
  //   });
  // });
// });
