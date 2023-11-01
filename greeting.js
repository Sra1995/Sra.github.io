// greeting.js

// Function to get the current time and return a greeting
function getGreeting() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting = '';
  
    if (hours >= 0 && hours < 12) {
      greeting = "Good morning ☕️!";
    } else if (hours >= 12 && hours < 17) {
      greeting = "Good afternoon 🌞!";
    } else {
      greeting = "Good evening 🌛!";
    }
  
    return greeting;
  }
  
  // Set the greeting in the "about-background" element
  const greetingElement = document.getElementById("greeting");
  const greeting = getGreeting();
  greetingElement.textContent = greeting;
  