/*
  script.js
  This script handles the dark/light mode toggle functionality.
*/

// Get references to the DOM elements for the theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

/**
 * Sets the theme (dark or light) on the page.
 * @param {boolean} isDark - True to set the dark theme, false for the light theme.
 */
function setTheme(isDark) {
    if (isDark) {
        // Apply dark mode
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden'); // Show sun icon
        themeToggleDarkIcon.classList.add('hidden');    // Hide moon icon
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        // Apply light mode
        document.documentElement.classList.remove('dark');
        themeToggleLightIcon.classList.add('hidden');     // Hide sun icon
        themeToggleDarkIcon.classList.remove('hidden');   // Show moon icon
        localStorage.setItem('theme', 'light'); // Save preference
    }
}

// --- Initialization ---
// On page load, check for a saved theme in localStorage or the user's OS preference.
if (localStorage.getItem('theme') === 'dark' || 
   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(true);
} else {
    setTheme(false);
}

// --- Event Listener ---
// Add a click event to the toggle button to switch themes.
themeToggleBtn.addEventListener('click', function() {
    // Toggle the theme based on the current state
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setTheme(!isCurrentlyDark);
});
