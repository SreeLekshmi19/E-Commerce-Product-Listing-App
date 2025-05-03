const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResize() {
  if (window.innerWidth > 768) {
    // Show on desktop
    mobileControls.classList.remove("hidden");
    mobileControls.classList.add("flex"); // Or block, based on layout
  } else {
    // Hide on mobile (only shown by toggle)
    mobileControls.classList.remove("flex");
    mobileControls.classList.add("hidden");
  }
}

// Initial check
handleResize();

// On window resize
window.addEventListener("resize", handleResize);

// Toggle on mobile
menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    const isHidden = mobileControls.classList.contains("hidden");

    if (isHidden) {
      mobileControls.classList.remove("hidden");
      mobileControls.classList.add("flex");

      const searchInput = mobileControls.querySelector('input[type="search"]');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    } else {
      mobileControls.classList.remove("flex");
      mobileControls.classList.add("hidden");
    }
  }
});
