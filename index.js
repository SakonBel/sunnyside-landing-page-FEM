// Grab navbar element
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav-list");
const navItem = document.querySelector("nav ul");
const hamburger = document.querySelector(".hamburger");

// Initiate variable
let scrollEndTop = 0;
let status = {
  active: false,
};
let vanish;
let navbar;

// Add event
hamburger.addEventListener("click", () => toggleMenu(status.active));
window.addEventListener("scroll", scrollEffect);
window.addEventListener("resize", hideNavbarEffect);

// Declare function to be used in event

// fucntion for toggle navbar
function toggleMenu(active, zone) {
  navMenu.classList.toggle("nav-active");
  hamburger.classList.toggle("ham-active");
  navItem.classList.toggle("nav-item-active");
  status.active = !active;
  clearTimeout(vanish);
}

// function for making navbar disappear when not clicked
function slideNav() {
  clearTimeout(vanish);
  vanish = setTimeout(() => {
    nav.style.top = "-100px";
  }, 2000);
}

// function for making navbar disappear when scroll
function scrollEffect() {
  let scrollTop = window.pageYOffset;

  if (scrollTop >= 0 && scrollTop < 100) {
    nav.style.top = `-${scrollTop}px`;
    clearTimeout(vanish);
  } else if (scrollTop > scrollEndTop) {
    if (status.active) {
      nav.style.top = "0";
    } else {
      nav.style.top = `-100px`;
    }
  } else {
    if (status.active) {
      clearTimeout(vanish);
      nav.style.top = "0";
    } else {
      nav.style.top = "0";
      slideNav();
    }
  }
  scrollEndTop = scrollTop;
}

// function for hiding navbar transition on changing viewport
function hideNavbarEffect() {
  nav.style.transition = "0s";
  navMenu.style.transition = "0s";
  showNavbarEffect();
}

// function that terminate timeout transition effect
function showNavbarEffect() {
  clearTimeout(navbar);
  navbar = setTimeout(() => {
    nav.style.transition = "0.5s";
    navMenu.style.transition = "0.3s";
  }, 200);
}
