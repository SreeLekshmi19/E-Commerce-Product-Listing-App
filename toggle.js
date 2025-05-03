const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

// Initially show controls on desktop
function handleResize() {
  if (window.innerWidth > 768) {
    mobileControls.classList.add("visible");
  } 
  
}

// Initial check
handleResize();

// Recheck on window resize
window.addEventListener("resize", handleResize);

// Toggle on mobile only
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    mobileControls.classList.toggle("hidden");
    mobileControls.classList.toggle("visible");

    const searchInput = mobileControls.querySelector('input[type="search"]');
    if (searchInput && mobileControls.classList.contains("visible")) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }
});
