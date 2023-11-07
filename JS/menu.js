document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const mostrarMenuButton = document.getElementById("openBtn");
  
    mostrarMenuButton.addEventListener("click", function() {
      if (parseInt(getComputedStyle(menu).left) === 0) {
        menu.style.left = "-200px"; // Oculta el menú hacia la izquierda
      } else {
        menu.style.left = "0"; // Muestra el menú
      }
    });
  });