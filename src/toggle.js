const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResize() {
  if (window.innerWidth > 768) {
    mobileControls.classList.remove("hidden");
    mobileControls.classList.add("visible");
  }
}

handleResize();

window.addEventListener("resize", handleResize);

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    const isHidden = mobileControls.classList.contains("hidden");

    if (isHidden) {
      mobileControls.classList.remove("hidden");
      mobileControls.classList.add("visible");

      const searchInput = mobileControls.querySelector('input[type="search"]');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    } else {
      mobileControls.classList.remove("visible");
      mobileControls.classList.add("hidden");
    }
  }
});
