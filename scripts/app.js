'use strict';
var slideshow = [];

function Slide (slideObject) {

  this.title = slideObject.title;
  this.caption = slideObject.caption;
  this.summary = slideObject.summary;
  this.gitUrl = slideObject.gitUrl;
};

Article.prototype.toHtml = function() {
  // clone the slide template
  var $newSlide = $('slide.template').clone();

  //Slide template is now overwritten with our data
  $newSlide.removeClass('template');

  //apply slide data to our template
  $newSlide.find('h1').text(this.title);
  $newSlide.find('address>a').html('href', this.gitUrl);
  $newSlide.find('.summary-body').html(this.summary);
  $newArticle.append('<hr>');
  return $newSlide;
};

slideshow.forEach(function(currentSlide) {
  $('#slideshow').append(currentSlide.toHtml());
  console.log(a);
});
