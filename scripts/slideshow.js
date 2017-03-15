'use script';

$(function(){
  //config of slide distance, and animation speed
  var slideWidth = 720;
  var slideAnimationSpeed = 1000;
  var pause = 5000;
  var currentSlide = 1;

  //grab DOM elements
  var $slideshowArticle = $('.slideshow-article'); //<article class="slideshow-article divs>"
  var $slideshowContainer = $slideshowArticle.find('.slideshow');
  var $mySlides = $slideshowContainer.find('.my-slides');

  //animate slideshow on 5s interval
  setInterval(function(){
    $slideshowContainer.animate({'margin-left': '-=' + slideWidth}, 1000, function(){
      currentSlide ++;
      if(currentSlide === $slides.length){
        currentSlide = 1;
        $slideshowContainer.css('margin-left', 0);
      }
    });
  }, pause);
  // intend this to be for the clicks on the arrows.
  // $mySlides.click(function(){
  //   $slideshowContainer.animate({'margin-left': '-=' + slideWidth}, 1000, function(){
  //     if(currentSlide){
  //       asd;
  //     }
  //   });
  // });
});
