const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

// Initially show controls on desktop
function handleResize() {
  if (window.innerWidth > 768) {
    mobileControls.classList.remove("hidden");
    mobileControls.classList.add("visible");
  } else {
    mobileControls.classList.add("hidden");
    mobileControls.classList.remove("visible");
  }
}

// Initial check
handleResize();

// Recheck on window resize
window.addEventListener("resize", handleResize);

// Toggle on mobile only (no auto-focus)
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    mobileControls.classList.toggle("hidden");
    mobileControls.classList.toggle("visible");
  }
});
