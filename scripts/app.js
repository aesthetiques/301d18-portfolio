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
      $('<a>').attr('id', '#table-of-contents-link').text(this.title)));
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

$('#table-of-contents-link').on('click', function(){
  // $('article').fadeOut(500);
  // $('about').fadeIn(1000);
  $('main').empty();
  $(`article[data-project="${$(this).val()}"]`).fadeIn(1000);
});

$('#home-nav').click(function(){
  $('#filters').fadeIn(1000);
  $('article').fadeIn(1000);
  $('about').fadeOut(500);
});

projectsView.handlePopulation = function() {
  $('table-of-contents-link').on('click', function() {
    if ($(this).val()) {
      console.log(this);
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      // $('article.template').hide();
    }
    // $('#category-filter').val('');
  });
};

projectsView.handlePopulation();
// function Project(rawData){
//   this.title = rawData.title;
//   this.contributors = rawData.contributors;
//   this.class = rawData.class;
//   this.week = rawData.week;
//   this.projectUrl = rawData.projectUrl;
// }
