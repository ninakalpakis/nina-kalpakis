// hamburger nav
document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("menu-active");
  var el = document.getElementById("nav-bar");
  el.classList.toggle("nav-bar-active");
});

// hidden nav upon scroll
var prev = 0;
var $window = $(window);
var nav = $(".desktop-nav");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop > prev);
  prev = scrollTop;
});

// confetti
document.getElementById("joy").addEventListener("mouseover", function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6,
    },
  });
});

// accordion
document.querySelector(".language").addEventListener("click", function () {
  this.classList.toggle("tab-active");
});

document.querySelector(".tools").addEventListener("click", function () {
  this.classList.toggle("tab-active");
});

document.querySelector(".libraries").addEventListener("click", function () {
  this.classList.toggle("tab-active");
});
