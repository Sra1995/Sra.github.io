  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goTopBtn").style.display = "block";
    } else {
      document.getElementById("goTopBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Get the button element
var goTopBtn = document.getElementById("goTopBtn");

// Set the minimum distance from the bottom of the page
var minDistanceFromBottom = 100; // You can adjust this value for the button to appear above the footer

// Add a scroll event listener to check the button position
window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Get the height of the viewport
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Get the height of the document
    var documentHeight = Math.max(
        document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
    );

    // Calculate the remaining space from the bottom
    var remainingSpace = documentHeight - (scrollPosition + viewportHeight);

    // Set the button position
    if (remainingSpace < minDistanceFromBottom) {
        goTopBtn.style.bottom = minDistanceFromBottom + "px";
    } else {
        goTopBtn.style.bottom = "20px"; // Adjust this value based on your design
    }
});

// Function to scroll to the top when the button is clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
