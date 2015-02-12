//= require jquery.1.11.0.min.js
//= require bootstrap.min.js
//= require lazy-bootstrap-carousel-v3.js
// = require jquery.magnific-popup.min.js


$(document).ready(function() {
  //Start carousel
  $('.carousel').carousel({
    interval: 5000
  });
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
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      type: 'POST',
      data: $(this).serialize(),
      datatype: 'jsonp',
      beforeSend: function() {
        $("#ok").hide();
      },
      error: function(error) {
        $("#ok").show();
      }
    });
  });
});
