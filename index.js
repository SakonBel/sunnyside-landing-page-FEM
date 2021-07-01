const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav-list");
const navItem = document.querySelector("nav ul");
const hamburger = document.querySelector(".hamburger");

let scrollEndTop = 0;
let status = {
  active: false,
};
let vanish;

hamburger.addEventListener("click", () => toggleMenu(status.active));

window.addEventListener("scroll", scrollEffect);

function toggleMenu(active, zone) {
  // body.classList.toggle("clickable");
  navMenu.classList.toggle("nav-active");
  hamburger.classList.toggle("ham-active");
  navItem.classList.toggle("nav-item-active");
  status.active = !active;
  clearTimeout(vanish);
}

function slideNav() {
  clearTimeout(vanish);
  vanish = setTimeout(() => {
    nav.style.top = "-100px";
  }, 2000);
}

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
