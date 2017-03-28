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
// AJAX/JSON UGHHHH
// ==============================================
Project.fetchAll = () => {
  console.log('calling');
  if(localStorage.rawData){
    let rawData = JSON.parse(localStorage.rawData);
    rawData.forEach((projectObject) => {
      projects.push(new Project(projectObject));
    });
    projects.forEach((addedProject) => {
      $('#projects-here').append(addedProject.toHtml());
    });
    Project.addAllHandlers();
  }else{
    $.getJSON('/data/rawData.json')
    //if success:
    .then((data) => {
      console.log(data);
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
// projects.forEach(function(addedProject){
//   $('#projects-here').append(addedProject.toHtml());
// });
// push to projects array
// ===================================
// rawData.forEach(function(projectObject) {
//   projects.push(new Project(projectObject));
// });
// append to <main>
// ===================================
//
// projectsView.handlePopulation = function() {
//   $('.table-of-contents a').on('click', function() {
//     if ($(this).val()) {
//       console.log(this);
//       $('article').hide();
//       $(`article[data-project="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//   });
// };

$(document).ready(() => {
  Project.fetchAll();
  $('aside').hide();
  $('article').hide();
  $('#main-nav-body').fadeIn(800);
  if($('#projects-here').hasClass('main-intro')){
    $('#projects-here').removeClass('main-intro').addClass('main-intro-big');
  }
});

Project.addAllHandlers = () => {
// Change on-screen on click of link
// ===========================================
  console.log('working');
  $('#table-of-contents-list a').on('click', function(){
    $('article').hide();
    $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
  });

  $('#home-nav').click(() => {
    $('aside').hide();
    $('article').hide();
    $('#main-nav-body').fadeIn(500);
    if($('#projects-here').hasClass('main-intro')){
      $('#projects-here').removeClass('main-intro').addClass('main-intro-big');
    }
  });

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
