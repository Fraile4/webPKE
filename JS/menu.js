var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector(".header");

  if (prevScrollpos > currentScrollPos) {
    // Scroll gora, menua erakutsi
    header.style.top = "0";
  } else {
    // Scroll bera, menua ezkutatu
    header.style.top = "-60px";
  }

  prevScrollpos = currentScrollPos;
};