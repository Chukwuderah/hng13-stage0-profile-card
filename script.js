/**
 * Profile Card Time Updater
 *
 * This script updates the current time in milliseconds
 * using Date.now() and refreshes it every second.
 *
 * Requirements:
 * - Display current time in milliseconds
 * - Update automatically every second
 * - Use Date.now() method
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the time display element
  const timeElement = document.getElementById("userTime");

  /**
   * Updates the time display with current timestamp
   * Uses Date.now() to get milliseconds since Unix epoch
   */
  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
    announceTimeUpdate();
  }

  // Initial time update when page loads
  updateTime();

  // Set up interval to update time every second (1000ms)
  setInterval(updateTime, 1000);

  // Log initialization for debugging
  console.log("Profile Card initialized - Time updates active");
});

/**
 * Accessibility Enhancement:
 * Announce time updates to screen readers periodically
 */

function announceTimeUpdate() {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.textContent = `Time updated: ${Date.now()}`;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
