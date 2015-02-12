//= require jquery.1.11.0.min.js
//= require bootstrap.min.js
//= require lazy-bootstrap-carousel-v3.js
// = require jquery.magnific-popup.min.js

$(document).ready(function() {
  //Start carousel
  $('.carousel').carousel({
    interval: 5000
  });
  $(document).ready(function() {
    $('.carousel-inner').magnificPopup({
      delegate: '.magnified',
      type: 'image',
      gallery: {
        enabled: true
      },
      image: {
        titleSrc: 'title'
      }
    });
  });
});
