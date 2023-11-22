document.querySelector('nav > button').addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  if (navbar.style.backgroundColor === 'transparent') {
    navbar.style.backgroundColor = 'black';
  } else if(navbar.style.backgroundColor === 'black'){
    navbar.style.backgroundColor = 'transparent';
  }
});
 
