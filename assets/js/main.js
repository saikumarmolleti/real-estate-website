const navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close"),
  navItem = document.querySelectorAll(".nav__item");

// Open navigation menu
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

// Close navigation menu
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

// header scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});
