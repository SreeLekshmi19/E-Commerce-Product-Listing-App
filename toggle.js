const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResize() {
  if (window.innerWidth > 768) {
    // Show controls on desktop
    mobileControls.classList.remove("hidden");
    mobileControls.classList.add("visible");
  } else {
    // Hide controls on mobile initially
    mobileControls.classList.add("hidden");
    mobileControls.classList.remove("visible");
  }
}

// Initial check and on resize
handleResize();
window.addEventListener("resize", handleResize);

// Toggle controls on mobile when menu is clicked
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    const isVisible = mobileControls.classList.toggle("visible");
    mobileControls.classList.toggle("hidden", !isVisible);

    // Auto-focus search input only after toggle shows it
    if (isVisible) {
      const searchInput = mobileControls.querySelector('input[type="search"]');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    }
  }
});
