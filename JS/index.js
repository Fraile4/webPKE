document.querySelector('nav > button').addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  var izenburua = document.querySelector('.Izenburua')
  if (navbar.style.backgroundColor === 'transparent') {
    navbar.style.backgroundColor = 'black';
    izenburua.style.display = 'none';
  } else if(navbar.style.backgroundColor === 'black'){
    navbar.style.backgroundColor = 'transparent';
    izenburua.style.display = 'block';
  }
});
 
