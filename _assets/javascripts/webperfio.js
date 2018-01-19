//= require jquery.1.11.0.min.js
//= require bootstrap.min.js
//= require lazy-bootstrap-carousel-v3.js
// = require jquery.magnific-popup.min.js
//= require typed.js


$(document).ready(function() {
  //
  $(function() {
    $(".punchtyped").typed({
      strings: [
        " l'expérience de vos utilisateurs",
        " vos coûts d'acquisition",
        " votre taux de conversion",
        " vos actions promotionnelles",
        " vos revenus sur mobile"

      ],
      typeSpeed: 0,
      loop: true,
      backDelay: 2000,
      showCursor: false
    });
  });

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
        url: "https://formspree.io/julien.barritaud@quanta-computing.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
        beforeSend: function() {
          $("#ok").hide();
        },
        success: function(data) {
          console.log(data);
        },
        error: function(error) {
          console.log(error);
          $("#ok").show();
        }
      });
  });
  $("#contact-form-disable").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
      url: $(this).attr("action"),
      type: 'POST',
      data: $(this).serialize(),
      beforeSend: function() {
        $("#ok").hide();
      },
      error: function(error) {
        $("#ok").show();
      }
    });
    $("#contact-form [type='submit']").blur();
  });
});
