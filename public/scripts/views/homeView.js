'use strict';
(function(module){
  const homeView = {};

  homeView.init = () =>{
    $('aside').hide();
    $('#project-index').hide();
    $('#index-body').fadeIn(500);
    if($('#content').hasClass('main-intro')){
      $('#content').removeClass('main-intro').addClass('main-intro-big');
    }
  };

  module.homeView = homeView;
})(window);
