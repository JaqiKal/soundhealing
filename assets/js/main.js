const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-menu");
const links = document.querySelectorAll(".navbar__menu a");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

// Close menu first, then scroll
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Stop default-scroll
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    // Closse menu
    toggle.classList.remove("active");
    menu.classList.remove("active");

    // Wait until menu animation is done before scrolling
    // This is a workaround to ensure the menu closes before scrolling
    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }, 300); // match transition-times in CSS
  });
});