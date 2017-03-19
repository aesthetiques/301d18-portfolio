'use strict';
var projects = [];

var projectsView = {};

function Project(rawData){
  for(var key in rawData){
    this[key] = rawData[key];
  }
}
// create the object, render it with handlebars
// ===================================
Project.prototype.toHtml = function(){
  var source = $('#project-template').text();
  var templateRender = Handlebars.compile(source);
  // console.log(this);
  $('#table-of-contents-list').append(
  $('<li>').append(
    $('<a>').attr('id', 'table-of-contents-link').text(this.title)));
  return templateRender(this);
};
// push to projects array
// ===================================
rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});
// append to <main>
// ===================================
projects.forEach(function(addedProject){
  $('#projects-here').append(addedProject.toHtml());
});

projectsView.handlePopulation = function() {
  $('table-of-contents a').on('click', function() {
    if ($(this).val()) {
      console.log(this);
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

$('#table-of-contents-link','*').on('click', function(){
  $('article').hide();
  $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
});

$('#home-nav').click(function(){
  $('article').hide();
  $('main-nav-body').fadeIn(500);
});

$(document).ready(function(){
  projectsView.handlePopulation();
});
// function Project(rawData){
//   this.title = rawData.title;
//   this.contributors = rawData.contributors;
//   this.class = rawData.class;
//   this.week = rawData.week;
//   this.projectUrl = rawData.projectUrl;
// }
