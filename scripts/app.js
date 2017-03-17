'use strict';
var projects = [];

function Project(rawData){
  for(var key in rawData){
    this[key] = rawData[key];
  }
}

// function Project(rawData){
//   this.title = rawData.title;
//   this.contributors = rawData.contributors;
//   this.class = rawData.class;
//   this.week = rawData.week;
//   this.projectUrl = rawData.projectUrl;
// }

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  console.log(this);
  return templateRender(this);
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(addedProject){
  $('#projects-here').append(addedProject.toHtml());
});
