const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Keep placeholder social and project links from navigating to the top.
document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("This is a placeholder. Add your real GitHub, LinkedIn, or project URL before publishing.");
    }
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
