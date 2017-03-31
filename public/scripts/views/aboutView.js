'use strict';

(function(module){
  const aboutView = {};

  aboutView.init = () =>{
    $('aside').hide();
    $('#project-body').hide();
    $('#index-body').hide();
    $('#about-body').fadeIn(500);
    if($('#content').hasClass('main-intro')){
      $('#content').removeClass('main-intro').addClass('main-intro-big');
    }
  };

  module.aboutView = aboutView;
})(window);
