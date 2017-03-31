'use strict';

(function(module){
  let projects = [];

  //Construct all projects
  // ===========================================
  function Project(rawData){
    for(let key in rawData){
      this[key] = rawData[key];
    }
  }
  // create the object, render it with handlebars
  // ===========================================
  Project.prototype.toHtml = function(){
    let source = $('#project-template').text();
    let templateRender = Handlebars.compile(source);
    // create table of contents
    $('#table-of-contents-list').append(
    $('<li>').append(
      $('<a>').attr('id', 'table-of-contents-link').text(this.title)));
    return templateRender(this);
  };

  // AJAX/JSON
  // ============================================
  Project.fetchAll = () => {
    if(localStorage.rawData){
      let rawData = JSON.parse(localStorage.rawData);
      rawData.map(projectObject => {
        projects.push(new Project(projectObject));
      });
      projects.map(addedProject => {
        $('#project-index').append(addedProject.toHtml());
      });
      // $('aside').hide();
      // $('article').hide();
      // Project.addAllHandlers();
    } else {
      $.getJSON('./data/rawData.json')
      //if success:
      .then((data) => {
        data.map(projectObject => {
          projects.push(new Project(projectObject));
        });
        projects.map(addedProject => {
          $('#project-index').append(addedProject.toHtml());
        });
        // Project.addAllHandlers();
        localStorage.rawData = JSON.stringify(data);
      });
    }
  };

  //Change main body of presentation, whether portfolio or main body
  // ===========================================
  (function(){
    $(document).ready(() => {
      Project.fetchAll();

      $('').hide();
      $('#index-body').fadeIn(1500);
      if($('#content').hasClass('main-intro')){
        $('#content').removeClass('main-intro').addClass('main-intro-big');
      }
    });
  })();

  // // go get the data
  // $.get('/github/user/repos?type=owner')
  // .then(
  //   // render the data
  //     data => data.map(repo => $('#results').append(`<p>${repo.name}</p>`)),
  //     err => console.error(err)
  // );

  // //encapsulate all on click handlers
  // // ===========================================
  // Project.addAllHandlers = () => {
  //   //populate specific article based on click of table of contents
  //   $('#table-of-contents-list a').on('click', function(){
  //     $('article').hide();
  //     $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
  //   });
  //   //adjust for home "page"
  //   $('#home-nav').click(() => {
  //     $('aside').hide();
  //     $('article').hide();
  //     $('#index-body').fadeIn(500);
  //     if($('#content').hasClass('main-intro')){
  //       $('#content').removeClass('main-intro').addClass('main-intro-big');
  //     }
  //   });
  //   //Adjust for portfolio "page"
  //   $('#portfolio-nav').click(() => {
  //     $('#index-body').hide();
  //     if($('#content').hasClass('main-intro-big')){
  //       $('#content').removeClass('main-intro-big').addClass('main-intro');
  //     }
  //     $('aside').fadeIn(800);
  //     $('.the-projects').fadeIn(800);
  //   });
  // // expand menu in Mobile
  // // ==============================================
  //   $('.nav-burger').on('click', () => {
  //     $('.slide-left').toggleClass('show');
  //   });
  // };

  module.Project = Project;
})(window);
