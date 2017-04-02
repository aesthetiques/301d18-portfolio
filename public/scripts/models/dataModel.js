'use strict';

(function(module){
  let projects = [];
  //Construct all instances of projects
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
        $('#project-body').append(addedProject.toHtml());
      });
    } else {
      $.getJSON('./data/rawData.json')
      //if success:
      .then((data) => {
        data.map(projectObject => {
          projects.push(new Project(projectObject));
        });
        projects.map(addedProject => {
          $('#project-body').append(addedProject.toHtml());
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
    });
  })();
  // expand menu in Mobile
  // ==============================================
  $('.nav-burger').on('click', () => {
    $('.slide-left').toggleClass('show');
  });
  module.Project = Project;
})(window);
