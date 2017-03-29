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
      rawData.forEach((projectObject) => {
        projects.push(new Project(projectObject));
      });
      projects.forEach((addedProject) => {
        $('#projects-here').append(addedProject.toHtml());
      });
      Project.addAllHandlers();
    } else {
      $.getJSON('./data/rawData.json')
      //if success:
      .then((data) => {
        data.forEach((projectObject) => {
          projects.push(new Project(projectObject));
        });
        projects.forEach((addedProject) => {
          $('#projects-here').append(addedProject.toHtml());
        });
        Project.addAllHandlers();
        localStorage.rawData = JSON.stringify(data);
      });
    }
  };

  //Change main body of presentation, whether portfolio or main body
  // ===========================================
  (function(){
    $(document).ready(() => {
      Project.fetchAll();
      $('aside').hide();
      $('article').hide();
      $('#main-nav-body').fadeIn(800);
      if($('#projects-here').hasClass('main-intro')){
        $('#projects-here').removeClass('main-intro').addClass('main-intro-big');
      }
    });
  })();
  //encapsulate all on click handlers
  // ===========================================
  Project.addAllHandlers = () => {
    //populate specific article based on click of table of contents
    $('#table-of-contents-list a').on('click', function(){
      $('article').hide();
      $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
    });
    //adjust for home "page"
    $('#home-nav').click(() => {
      $('aside').hide();
      $('article').hide();
      $('#main-nav-body').fadeIn(500);
      if($('#projects-here').hasClass('main-intro')){
        $('#projects-here').removeClass('main-intro').addClass('main-intro-big');
      }
    });
    //Adjust for portfolio "page"
    $('#portfolio-nav').click(() => {
      $('#main-nav-body').hide();
      if($('#projects-here').hasClass('main-intro-big')){
        $('#projects-here').removeClass('main-intro-big').addClass('main-intro');
      }
      $('aside').fadeIn(800);
      $('.the-projects').fadeIn(800);
    });
  // expand menu in Mobile
  // ==============================================
    $('.nav-burger').on('click', () => {
      $('.slide-left').toggleClass('show');
    });
  };

  module.Project = Project;
})(window);
