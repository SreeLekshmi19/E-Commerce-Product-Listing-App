const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResponsiveControls() {
    if (window.innerWidth <= 768) {
        mobileControls.classList.toggle("hidden");
        mobileControls.classList.toggle("visible");
    
        // Optional: Focus the search input
        const searchInput = mobileControls.querySelector('input[type="search"]');
        if (searchInput && mobileControls.classList.contains("visible")) {
          setTimeout(() => searchInput.focus(), 100);
        }
      }
}

// Initial check
handleResponsiveControls();

// Re-check on window resize
window.addEventListener("resize", handleResponsiveControls);

// Toggle menu on click (only for <=768px)
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    mobileControls.classList.toggle("hidden");
    mobileControls.classList.toggle("visible");

    // Optional: Focus the search input
    const searchInput = mobileControls.querySelector('input[type="search"]');
    if (searchInput && mobileControls.classList.contains("visible")) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }
});
