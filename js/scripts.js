console.log('Hi! Welcome to My Portfolio Site');

(function($) {
  $('.hamburger').click(function() {
    var x = $('#navbar');
    if ($('#navbar').hasClass('responsive')) {
      $('#navbar').removeClass('responsive');
    } else {
      $('#navbar').addClass('responsive');
    }
  });
})($);
