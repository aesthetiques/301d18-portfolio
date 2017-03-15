'use script';

$(function(){
  //config of slide distance, and animation speed
  var slideWidth = 1215;
  var slideAnimationSpeed = 2000;
  var pause = 2000;
  var currentSlide = 1;

  //grab DOM elements
  var $slideshowArticle = $('#slideshow-article'); //<article class="slideshow-article divs>"
  var $slideshowContainer = $slideshowArticle.find('.slideshow');
  var $mySlides = $slideshowContainer.find('.my-slides');

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
});
