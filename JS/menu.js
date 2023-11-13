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

/*
var prevScrollpos = window.pageYOffset;
var threshold = 50; // Ajusta este valor según tus preferencias

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector(".header");

  if (prevScrollpos > currentScrollPos && prevScrollpos - currentScrollPos > threshold) {
    // Muestra el encabezado al hacer scroll hacia arriba superando el umbral
    header.style.top = "0";
  } else if (currentScrollPos - prevScrollpos > threshold) {
    // Oculta el encabezado al hacer scroll hacia abajo superando el umbral
    header.style.top = "-60px";
  }

  prevScrollpos = currentScrollPos;
};
*/ 