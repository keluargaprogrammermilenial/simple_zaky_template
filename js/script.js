// toggle active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

let hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// My Js animations

let animations = document.querySelector(".try");

animations.addEventListener("mouseover", function () {
  animations.classList.add("animate__animated", "animate__heartBeat");
});

animations.addEventListener("mouseleave", function () {
  animations.classList.remove("animate__animated", "animate__heartBeat");
});

let send = document.querySelector(".send");

send.addEventListener("click", function () {
  alert("Succes");
});
