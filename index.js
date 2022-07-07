// hamburger nav
document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("menu-active");
  var el = document.getElementById("nav-bar");
  el.classList.toggle("nav-bar-active");
});

document.querySelector("nav li a").addEventListener("click", function () {
  this.classList.toggle("menu-active");
  var el = document.getElementById("nav-bar");
  el.classList.toggle("nav-bar-active");
  var menu = document.getElementById("menu");
  menu.classList.toggle("menu-active");
});

// sidecar links closing properly
document
  .querySelector(".sidecar-link-about")
  .addEventListener("click", function () {
    var el = document.getElementById("nav-bar");
    el.classList.toggle("nav-bar-active");
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
  });

document
  .querySelector(".sidecar-link-experience")
  .addEventListener("click", function () {
    var el = document.getElementById("nav-bar");
    el.classList.toggle("nav-bar-active");
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
  });

document
  .querySelector("sidecar-link-skills")
  .addEventListener("click", function () {
    var el = document.getElementById("nav-bar");
    el.classList.toggle("nav-bar-active");
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
  });

document
  .querySelector("sidecar-link-contact")
  .addEventListener("click", function () {
    var el = document.getElementById("nav-bar");
    el.classList.toggle("nav-bar-active");
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
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

$(document).ready(function () {
  // Add smooth scrolling to all links with the class scroll
  $("a.scroll").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
