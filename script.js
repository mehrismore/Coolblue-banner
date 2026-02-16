// Screen carousel animation
let currentScreen = 0;
const screens = document.querySelectorAll(".screen");
const totalScreens = screens.length;

function showScreen(index) {
  // Remove active class from all screens
  screens.forEach((screen) => screen.classList.remove("active"));

  // Add active class to current screen
  screens[index].classList.add("active");
}

function nextScreen() {
  currentScreen = (currentScreen + 1) % totalScreens;
  showScreen(currentScreen);
}

function prevScreen() {
  currentScreen = (currentScreen - 1 + totalScreens) % totalScreens;
  showScreen(currentScreen);
}

// Initialize - show first screen
showScreen(0);

// Auto-advance screens every 3 seconds
setInterval(nextScreen, 3000);
