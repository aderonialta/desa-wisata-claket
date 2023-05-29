// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// progress bar
const filled = document.querySelector(".filled");

function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}
update();

// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// menghilangkan navbar saat klik navbar dalam hamburger menu
document.querySelector(".navbar-nav").onclick = () => {
  navbarNav.classList.remove("active");
};
