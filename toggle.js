const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

// Function to handle the display of mobile controls based on window size
function handleResize() {
  if (window.innerWidth > 768) {
    mobileControls.style.display = "flex"; // Show controls on larger screens
  } else {
    mobileControls.style.display = "none"; // Hide controls on smaller screens
  }
}

// Initial check for window size
handleResize();
window.addEventListener("resize", handleResize); // Update on resize

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    const isHidden = mobileControls.style.display === "none" || mobileControls.style.display === "";
    mobileControls.style.display = isHidden ? "flex" : "none"; // Toggle display

    // Focus on the search input if controls are shown
    if (isHidden) {
      const searchInput = mobileControls.querySelector('input[type="search"]');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    }
  }
});
