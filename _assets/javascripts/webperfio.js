//= require jquery.1.11.0.min.js
//= require bootstrap.min.js
//= require lazy-bootstrap-carousel-v3.js
// = require jquery.magnific-popup.min.js
//= require typed.js


$(document).ready(function() {
  $('#quanta-bar').animate({
   marginTop: "0",
}, 500);

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
        url: "https://formspree.io/hello@quanta-computing.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data) {
          $('#contact-form').fadeOut();
          $('#thanks').fadeIn();

        },
      });
  });

});
