'use strict';

(function(module){
  page('/', homeView.init);
  page('/about', aboutView.init);
  page('/portfolio', portfolioView.init);
  // page('/user/:user/edit', edit)
  // page('/user/:user/album', album)
  // page('/user/:user/album/sort', sort)
  // page('*', notfound)
  page();
})(window);
