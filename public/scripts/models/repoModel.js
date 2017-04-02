'use strict';

(function(module){
  const repos = {};
  repos.all = [];

  repos.requestRepos = (callback) => {
    $.get('/github/user/repos?type=owner')
    .then(
      //instead of pushing to an array, just assign the array as this value
      data => repos.all = data,
      err => console.error(err)
    ).then(callback);
  };

  repos.appendRepoByAttribute = function(){
    repos.all.forEach(repo => $('#about-body').append(`<p>${repo.name}<br><a href="${repo.html_url}">repo&rarr;</a><hr></p>`));
  };
  // data => data.map(repo => $('#about-body').append(`<p>${repo.name}</p>`),

  module.repos = repos;
})(window);
