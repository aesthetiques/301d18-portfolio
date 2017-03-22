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
Project.fetchAll = function(){
  console.log('calling');
  //if localStorage is a thing, use it, else ajax call
  // if(localStorage.rawData){
  //   rawData.forEach(function(projectObject){
  //     projects.push(new Project(projectObject));
  //   });
  //   projects.forEach(function(addedProject){
  //     $('#projects-here').append(addedProject.toHtml());
  //   });
  //   Project.addAllHandlers();
  // }else{
  $.getJSON('/data/rawData.json')
  //if success:
  .then(function(data){
    console.log(data);
    data.forEach(function(projectObject){
      projects.push(new Project(projectObject));
    });
    Project.addAllHandlers();
    localStorage.rawData = JSON.stringify(data);
  })
  .done(function(){
    projects.forEach(function(addedProject){
      $('#projects-here').append(addedProject.toHtml());
    });
    $('#projects-here').hide();
    Project.addAllHandlers();
  });
};

$(document).ready(function(){
  Project.fetchAll();
  $('aside').hide();
  $('#projects-here').hide();
  $('#main-nav-body').fadeIn(800);
  if($('main').hasClass('main-intro')){
    $('main').removeClass('main-intro').addClass('main-intro-big');
  }
});

var myArticleStuffPls;
Project.addAllHandlers = function(){
// Change on-screen on click of link
// ===========================================
  console.log('working');
  $('#table-of-contents-list a').on('click', function(){
    console.log('click registered');
    $('#projects-here article').hide();
    myArticleStuffPls = $(`article[data-project="${$(this).text()}"]`);
    console.log(myArticleStuffPls);
    $(`article[data-project="${$(this).text()}"]`).fadeIn(1000);
  });

  $('#home-nav').click(function(){
    $('aside').hide();
    $('article').hide();
    $('#main-nav-body').fadeIn(500);
    if($('main').hasClass('main-intro')){
      $('main').removeClass('main-intro').addClass('main-intro-big');
    }
  });

  $('#portfolio-nav').click(function(){
    $('#main-nav-body').hide();
    if($('main').hasClass('main-intro-big')){
      $('main').removeClass('main-intro-big').addClass('main-intro');
    }
    $('aside').fadeIn(800);
    $('article').not('#main-nav-body').fadeIn(800);
  });

// expand menu in Mobile
// ==============================================
  $('.nav-burger').on('click', function(){
    $('.slide-left').toggleClass('show');
  });
};
