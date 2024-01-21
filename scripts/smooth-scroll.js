// smooth-scroll.js

$(document).ready(function() {
  // Add smooth scrolling to all links in the navigation bar
  $(".container a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Use jQuery's animate() method to add smooth page scroll
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        // Firefox specific adjustment
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } else {
        // Default smooth scrolling for other browsers
        $('html, body, document.documentElement').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    }
  });
});
