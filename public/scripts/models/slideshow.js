'use strict';
//USING OWLCAROUSEL2 FOR GENERATION OF THIS SLIDE
(function(){
  (function carousel(){
    $(document).ready(function() {
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
  })();
})();
