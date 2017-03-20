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
    $('<a>').attr('id', 'table-of-contents-link').addClass('the-projects').text(this.title)));
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
// Change on-screen on click of link
// ===========================================
$('#table-of-contents-link','*').on('click', function(){
  $('article').hide();
  $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
});
$('#home-nav').click(function(){
  $('aside').hide();
  $('article').hide();
  $('#main-nav-body').fadeIn(500);
  if($('#projects-here').hasClass('main-intro')){
    $('#projects-here').removeClass('main-intro').addClass('main-intro-big');
  }
  $('#projects-here').addClass('main-intro-big');
});

$('#portfolio-nav').on('click', function(){
  $('article').hide();
});

projectsView.handlePopulation();

// function Project(rawData){
//   this.title = rawData.title;
//   this.contributors = rawData.contributors;
//   this.class = rawData.class;
//   this.week = rawData.week;
//   this.projectUrl = rawData.projectUrl;
// }
