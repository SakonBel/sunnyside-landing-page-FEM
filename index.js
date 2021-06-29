const body = document.querySelector("body");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navItem = document.querySelector("nav ul");

hamburger.addEventListener("click", toggleMenu);
body.addEventListener("scroll", vanish);

function toggleMenu() {
  navMenu.classList.toggle("nav-active");
  hamburger.classList.toggle("ham-active");
  navItem.classList.toggle("nav-item-active");
}

function vanish() {
  nav.classList.toggle("appear");
}
