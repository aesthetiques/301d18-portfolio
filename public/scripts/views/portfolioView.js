'use strict';

(function(module){

  const portfolioView = {};

  portfolioView.init = () => {
    $('#index-body').hide();
    if($('#content').hasClass('main-intro-big')){
      $('#content').removeClass('main-intro-big').addClass('main-intro');
    }
    $('aside').fadeIn(800);
    $('#project-body').fadeIn(800);
  };
  $('document').ready(function(){
    $('#table-of-contents-list a').on('click', function(){
      $('.the-projects').hide();
      $(`article[data-project="${$(this).text()}"]`).show();
      console.log(`article[data-project="${$(this).text()}"]`);
    });
  });

  module.portfolioView = portfolioView;
})(window);
