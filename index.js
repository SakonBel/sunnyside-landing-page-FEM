const body = document.querySelector("body");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navItem = document.querySelector("nav ul");

let scrollEndTop = 0;
let status = { active: false };

hamburger.addEventListener("click", () => toggleMenu(status.active));

window.addEventListener("scroll", scrollEffect);

function toggleMenu(active) {
  // body.classList.toggle("ham-active");
  navMenu.classList.toggle("nav-active");
  hamburger.classList.toggle("ham-active");
  navItem.classList.toggle("nav-item-active");
  status.active = !active;
}

function scrollEffect() {
  let scrollTop = window.pageYOffset;
  let vanish;

  if (scrollTop > 0 && scrollTop < 100) {
    nav.style.top = `-${scrollTop}px`;
  } else if (scrollTop > scrollEndTop) {
    if (status.active) {
      nav.style.top = "0";
    } else {
      nav.style.top = `-100px`;
    }
  } else {
    nav.style.top = "0";
    // vanish = setTimeout(() => {
    //   nav.style.top = "-100px";
    // }, 2000);
  }
  scrollEndTop = scrollTop;
}
