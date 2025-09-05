
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Close menu when link clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

