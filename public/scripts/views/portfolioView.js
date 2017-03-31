'use strict';
(function(module){

  const portfolioView = {};

  portfolioView.init = () => {
    $('#index-body').hide();
    if($('#content').hasClass('main-intro-big')){
      $('#content').removeClass('main-intro-big').addClass('main-intro');
    }
    $('aside').fadeIn(800);
    $('#project-index').fadeIn(800);
  };
  $('document').ready(function(){
    $('#table-of-contents-list a').on('click', function(){
      $('.the-projects').hide();
      $(`article[data-project="${$(this).text()}"]`).show();
      console.log(`article[data-project="${$(this).text()}"]`);
    });
  });
// expand menu in Mobile
// ==============================================
  $('.nav-burger').on('click', () => {
    $('.slide-left').toggleClass('show');
  });
  module.portfolioView = portfolioView;
})(window);
